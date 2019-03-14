from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator


class RegisterSerializer(serializers.ModelSerializer):
    """
    用户序列化
    """
    username=serializers.CharField(label='用户名',help_text='用户名',required=True,allow_blank=False,
                                   validators=[UniqueValidator(queryset=User.objects.all(),message='用户已存在')])
    password=serializers.CharField(style={'input_type':'password'},help_text='密码',label='密码')

    class Meta:
        model=User
        fields=('username','password')

