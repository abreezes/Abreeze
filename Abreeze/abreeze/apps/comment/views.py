from django.shortcuts import render
from rest_framework import mixins, viewsets, status
from rest_framework.response import Response

from blog.models import Article
from .models import Comment, Reply
from .serializers import AddCommentSerializer, AddReplySerializer
from rest_framework.permissions import IsAuthenticated,IsAdminUser


class CommentView(viewsets.GenericViewSet,mixins.CreateModelMixin,mixins.DestroyModelMixin):
    """
    评论操作
    Create:创建一个评论
    :return 当前文章的全部评论
    Destroy:删除一个评论
    :return code,message
    """
    serializer_class = AddCommentSerializer
    permission_classes = [IsAuthenticated,]
    queryset =Article.objects.all()

    def get_permissions(self):
        if self.action == 'create':
            return [IsAuthenticated(),]
        elif self.action == 'destroy':
            return [IsAuthenticated(),IsAdminUser()]

    def destroy(self, request, *args, **kwargs):
        instance=Comment.objects.filter(id=kwargs.get('pk'))
        try:
            self.perform_destroy(instance)
        except Exception:
            return Response({'code': 400, 'message': "删除失败!"}, status=status.HTTP_200_OK)
        return Response({'code': 200,'message':"删除成功!"},status=status.HTTP_200_OK)

    def perform_destroy(self, instance):
        instance.delete()




class ReplyView(viewsets.GenericViewSet,mixins.CreateModelMixin,mixins.DestroyModelMixin):
    """
    回复评论操作
    Create:创建一个回复评论
    :return 当前文章的全部评论
    Destroy:删除一个回复评论
    :return code,message
    """
    serializer_class = AddReplySerializer
    permission_classes = [IsAuthenticated,]
    queryset =Article.objects.all()
    def get_permissions(self):
        if self.action == 'create':
            return [IsAuthenticated(),]
        elif self.action == 'destroy':
            return [IsAuthenticated(),IsAdminUser()]

    def destroy(self, request, *args, **kwargs):
        instance=Reply.objects.filter(id=kwargs.get('pk'))
        try:
            self.perform_destroy(instance)
        except Exception:
            return Response({'code': 400, 'message': "删除失败!"}, status=status.HTTP_200_OK)
        return Response({'code': 200,'message':"删除成功!"},status=status.HTTP_200_OK)

    def perform_destroy(self, instance):
        instance.delete()






