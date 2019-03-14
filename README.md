# Abreeze
Django+DRF+React创建的简单博客

项目演示地址:[Abreeze](http://www.abreeze.online)

本地运行
	python manage.py runserver 0.0.0.0:8000

带两套admin后台/一套为简单的前端,一套为xadmin

前端React使用[gershonv](https://github.com/gershonv/react-blog)的项目

前端需要更改配置的
安装环境依赖

	cd react-blog
	
	npm i --registry=https://registry.npm.taobao.org
	
	npm start


前端接后端服务器的地址:

	web\react-blog-dev\src\lib\axios.js

修改Django自带admin后台的地址:

	\web\react-blog-dev\src\components\web\header\userInfo.jsx

更改相应ip即可

重新打包

	npm run build
	
xadmin后台markdown编辑器因为使用了前后端分离无法,在前端页面无法渲染出图片,暂时的解决办法是使用本地markdown编辑并上传图片,最后复制到线上粘贴保存.
react中的admin只能填写图片的连接上传不了
