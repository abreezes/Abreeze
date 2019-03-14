from rest_framework import serializers
from rest_framework.pagination import PageNumberPagination

from comment.models import Comment
from .models import Article,Category,Tag
from comment.serializers import CommentSerializer

class ArticelListSerializer(serializers.ModelSerializer):
    class Meta:
        model=Article
        fields = ('id','title','create_at',)

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields=('id','name',)

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model=Tag
        fields=('id','name',)


class ArticleDetailSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source='author.username')

    categories=serializers.SerializerMethodField()
    tags=TagSerializer(many=True,read_only=True)
    comments=CommentSerializer(many=True)
    comment_count=serializers.SerializerMethodField()

    class Meta:
        model=Article
        fields=('id','author','title','content','update_at','create_at','categories','tags','comment_count','comments',)

    def get_comment_count(self,obj):
        return Comment.objects.filter(article=obj).count()

    def get_categories(self,obj):
        category=Category.objects.get(name=obj.categories)
        return [{'id':category.id,'name':category.name}]

class ArticleCreateSerializer(serializers.ModelSerializer):
    tags=serializers.ListField(write_only=True)
    categories=serializers.ListField(write_only=True)
    class Meta:
        model=Article
        exclude = ('author',)

    def create(self, validated_data):
        user=self.context['request'].user
        tags=validated_data.pop('tags')
        categories=validated_data.pop('categories')
        category,c=Category.objects.get_or_create(name=categories[0])
        instance=Article.objects.create(author=user,categories=category,**validated_data)

        for tag in tags:
            tag_obj,t=Tag.objects.get_or_create(name=tag)
            instance.tags.add(tag_obj)
        return instance
    def update(self, instance, validated_data):
        tags = validated_data.pop('tags')
        categories = validated_data.pop('categories')

        category,c=Category.objects.update_or_create(name=categories[0])
        instance.categories=category
        for key,value in validated_data.items():
            setattr(instance,key,value)

        for tag in tags:
            tag_obj=Tag.objects.filter(name=tag)
            if tag_obj:
                instance.tags.set(tag_obj)
            else:
                tag_obj=Tag.objects.create(name=tag)
                instance.tags.set(tag_obj)
            instance.save()

        return instance



class CategorysSerializer(serializers.ModelSerializer):
    count=serializers.SerializerMethodField()
    class Meta:
        model=Category
        fields=('id','name','count')

    def get_count(self,obj):

        return Article.objects.filter(categories__name=obj.name).count()









