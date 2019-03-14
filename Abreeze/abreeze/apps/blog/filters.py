from django_filters import rest_framework as filters

from .models import Article


class ArticleFilter(filters.FilterSet):
    """
    文章列表的过滤类
    """
    tag=filters.CharFilter(field_name='tags__name')
    category=filters.CharFilter(field_name='categories__name')

    class Meta:
        model = Article
        fields = ['tag','category']
