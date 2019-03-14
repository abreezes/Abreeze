from rest_framework import serializers

from blog.models import Article
from comment.models import Comment,Reply
from django.contrib.auth.models import User
from django.utils.timezone import datetime


class UserSerializer(serializers.ModelSerializer):
    """用户序列化"""
    class Meta:
        model=User
        fields=('id','username',)

class ReplySerializer(serializers.ModelSerializer):
    """评论回复序列化"""
    userId=serializers.ReadOnlyField(source='user.id')
    user=UserSerializer(read_only=True)
    class Meta:
        model=Reply
        fields=('id','userId','user','content','create_at')

class CommentSerializer(serializers.ModelSerializer):
    """评论序列化"""
    userId = serializers.ReadOnlyField(source='user.id')
    user=UserSerializer(read_only=True)
    replies=ReplySerializer(many=True)
    class Meta:
        model=Comment
        fields=('id','userId','user','content','create_at','replies',)


class AddCommentSerializer(serializers.ModelSerializer):
    """添加评论序列化"""
    results=serializers.SerializerMethodField(read_only=True)
    class Meta:
        model=Comment
        fields=('article','content','results')

    def create(self, validated_data):
        user=self.context.get('request').user
        instance,inc=Comment.objects.get_or_create(user=user,**validated_data)
        return instance
    def get_results(self,obj):
        comment=Comment.objects.filter(article_id=obj.article_id)
        comments_serializer=CommentSerializer(comment,many=True,context={'request':self.context['request']})
        return comments_serializer.data

class AddReplySerializer(serializers.ModelSerializer):
    """添加评论回复序列化"""
    results=serializers.SerializerMethodField(read_only=True)
    article=serializers.ReadOnlyField()
    class Meta:
        model=Reply
        fields=('article','content','comment','results')

    def create(self, validated_data):
        user=self.context.get('request').user
        instance,inc=Reply.objects.get_or_create(user=user,**validated_data)
        return instance

    def get_results(self,obj):
        comment=Comment.objects.filter(article_id=obj.comment.article_id)
        comments_serializer=CommentSerializer(comment,many=True,context={'request':self.context['request']})
        return comments_serializer.data






