
from django.conf.urls.static import static
from django.urls import path,include
from rest_framework.documentation import include_docs_urls

from rest_framework.routers import DefaultRouter


import xadmin
from abreeze import settings

from blog.views import TagsListlView,CategoryListView,ArticleView
from users.views import RegisterView, UserOpertionView
from comment.views import CommentView,ReplyView
from users.JSONWebTokenLogin import obtain_jwt_token

router=DefaultRouter(trailing_slash=False)

router.register('article',ArticleView,base_name='article')
router.register('tag',TagsListlView,base_name='tag')
router.register('category',CategoryListView,base_name='category')
router.register('register',RegisterView,base_name='register')
router.register('user/comment',CommentView,base_name='comment')
router.register('user/reply',ReplyView,base_name='reply')
router.register('user',UserOpertionView,base_name='user')

urlpatterns = [
    # path('admin/', admin.site.urls),
    path(r'mdeditor/', include('mdeditor.urls')),
    path('adminx/', xadmin.site.urls,name=xadmin),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('mdeditor/',include('mdeditor.urls')),
    path('', include(router.urls)),
    path('docs/', include_docs_urls(title="Abreeze")),
    path('login/', obtain_jwt_token),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
