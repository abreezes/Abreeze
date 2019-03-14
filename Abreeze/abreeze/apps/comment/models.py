from django.contrib.auth.models import User
from django.db import models

from blog.models import Article

class Comment(models.Model):
    article=models.ForeignKey(Article,on_delete=models.CASCADE,related_name='comments',verbose_name='文章')
    user=models.ForeignKey(User,on_delete=models.CASCADE,related_name='comments',verbose_name='用户')
    content=models.TextField(default='',verbose_name='内容')
    create_at=models.DateTimeField(auto_now_add=True,verbose_name='创建时间')

    class Meta:
        verbose_name = '文章评论'
        verbose_name_plural = verbose_name
        ordering = ['-create_at',]
    def __str__(self):
        return self.content



class Reply(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE,related_name='replies',verbose_name='用户')
    comment=models.ForeignKey(Comment,on_delete=models.CASCADE,related_name='replies',verbose_name='评论')
    content=models.TextField(verbose_name='内容')
    create_at=models.DateTimeField(auto_now_add=True,verbose_name='创建时间')
    update_at=models.DateTimeField(auto_now=True,verbose_name='更新时间')
    class Meta:
        verbose_name = '评论回复'
        verbose_name_plural = verbose_name
        ordering = ['-create_at',]
    def __str__(self):
        return self.content

