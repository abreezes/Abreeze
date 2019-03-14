from django.contrib.auth.models import User

from rest_framework import mixins, viewsets, status
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response


from blog.views import AbreezePagination
from comment.serializers import UserSerializer
from .serializers import RegisterSerializer


class RegisterView(viewsets.GenericViewSet,mixins.CreateModelMixin):
    """
    用户注册
    Create:创建一个用户
    """

    serializer_class = RegisterSerializer
    def create(self, request, *args, **kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        try:
            self.perform_create(serializer)
        except Exception as e:
            return Response(serializer.data,status=status.HTTP_400_BAD_REQUEST)
        re_dict = serializer.data
        re_dict['code']=200
        re_dict['message']='注册成功'

        headers=self.get_success_headers(serializer.data)

        return Response(re_dict,status=status.HTTP_200_OK,headers=headers)

    def perform_create(self, serializer):
        return serializer.save()

class UserOpertionView(viewsets.GenericViewSet,mixins.ListModelMixin,mixins.DestroyModelMixin):
    """
    Admin后台用户操作
    List
    :return 返回全部用户
    Destroy 删除一个用户
    """
    permission_classes = [IsAdminUser,IsAuthenticated]
    serializer_class = UserSerializer
    pagination_class = AbreezePagination
    queryset = User.objects.all()





