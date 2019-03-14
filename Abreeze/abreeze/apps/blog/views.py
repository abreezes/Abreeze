from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets,mixins
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from .models import Article,Tag,Category
from .serializers import ArticelListSerializer, ArticleDetailSerializer, TagSerializer, CategorysSerializer, \
    ArticleCreateSerializer
from rest_framework import filters
from .filters import ArticleFilter


class ArticleListView(viewsets.GenericViewSet,mixins.ListModelMixin,mixins.RetrieveModelMixin):
    # 文章列表
    serializer_class = ArticleDetailSerializer
    queryset = Article.objects.all()

class AbreezePagination(PageNumberPagination):
    """分页"""
    page_size = 10
    page_size_query_param = 'pageSize'
    page_query_param = "page"
    max_page_size = 100

class TagsListlView(viewsets.GenericViewSet,mixins.ListModelMixin):
    """标签列表"""
    pagination_class = AbreezePagination
    serializer_class = TagSerializer
    queryset = Tag.objects.all()

class CategoryListView(viewsets.GenericViewSet,mixins.ListModelMixin):
    """类别列表"""
    pagination_class = AbreezePagination
    serializer_class = CategorysSerializer
    queryset = Category.objects.all()


class ArticleView(viewsets.ModelViewSet):
    """
    文章操作
    List:查看全部章
    Create:创建一篇文章
    Update:更新文章
    Retrieve:文章详情
    Destroy:删除文章
    """
    filter_backends = (DjangoFilterBackend, filters.SearchFilter,filters.OrderingFilter)
    # 过滤字段类
    filter_class = ArticleFilter
    pagination_class = AbreezePagination
    # 搜索字段
    search_fields = ('title','content')
    # 排序字段
    ordering_fields = ('create_at',)
    serializer_class = ArticleDetailSerializer
    queryset = Article.objects.all()

    def get_serializer_class(self):
        """获取序列化类"""
        if self.is_action:
            return ArticleCreateSerializer
        else:
            return ArticleDetailSerializer

    def get_permissions(self):
        """获取权限"""
        if self.is_action:
            return [IsAdminUser(),IsAuthenticated()]
        else:
            return []

    @property
    def is_action(self):
        if self.action == 'list' or self.action == 'retrieve':
            return False
        else:
            return True



# class CategoriesArticleView(viewsets.GenericViewSet,mixins.ListModelMixin,mixins.RetrieveModelMixin):
#     """文章类别"""
#     serializer_class = ArticelListSerializer
#     pagination_class = ArticlePagination
#
#     def get_queryset(self):
#         keyword=self.request.query_params.get('name', '')
#         return Article.objects.filter(categories__name=keyword)
#
# class TagsArticleView(viewsets.GenericViewSet,mixins.ListModelMixin,mixins.RetrieveModelMixin):
#     """文章标签"""
#     serializer_class = ArticelListSerializer
#     pagination_class = ArticlePagination
#
#     def get_queryset(self):
#         keyword=self.request.query_params.get('name', '')
#         return Article.objects.filter(tags__name=keyword)

















