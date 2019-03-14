from django.db import models
from django.contrib.auth.models import User
from mdeditor.fields import MDTextField

class Category(models.Model):
    name=models.CharField(max_length=50)

    class Meta:
        verbose_name = '分类'
        verbose_name_plural = verbose_name
        ordering = ['name']

    def __str__(self):
        return self.name

class Tag(models.Model):
    name = models.CharField('文章标签', max_length=20)
    class Meta:
        verbose_name = '标签'
        verbose_name_plural = verbose_name
        ordering = ['id']


    def __str__(self):
        return self.name

class Article(models.Model):
    author = models.ForeignKey(User,on_delete=models.CASCADE,verbose_name='作者')
    title = models.CharField(max_length=150, verbose_name='文章标题')
    content = MDTextField(verbose_name='文章内容')
    create_at = models.DateTimeField(verbose_name='创建时间', auto_now_add=True)
    update_at = models.DateTimeField(verbose_name='修改时间', auto_now=True)
    categories = models.ForeignKey(Category,on_delete=models.CASCADE,verbose_name='文章分类')
    tags = models.ManyToManyField(Tag,verbose_name='标签',related_name='article')

    class Meta:
        verbose_name = '文章'
        verbose_name_plural = verbose_name
        ordering = ['-create_at']

    def __str__(self):
        return self.title
