# 一、客户端和服务器

## 1.客户端

![](F:\前端\笔记\ajax\img\客户端.png)

## 2.服务器

![](F:\前端\笔记\ajax\img\服务器.png)

## 3.客户端和服务器的通信过程

![](F:\前端\笔记\ajax\img\客户端和服务器的通信过程.png)



![](F:\前端\笔记\ajax\img\url地址.png)

## 4.服务器提供了那些资源？

图片，音频，视频，数据

### 4.1网页如何请求数据

![](F:\前端\笔记\ajax\img\网页请求数据的方法.png)

### 4.2资源请求方式

![](F:\前端\笔记\ajax\img\资源的请求方法.png)

# 二、ajax

ajax能让我们实现网页和服务器之间的数据交互

![](F:\前端\笔记\ajax\img\jQuery的三个方法.png)

## 1.$.get()

![](F:\前端\笔记\ajax\img\$get().png)

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="../jQuery.min.js"></script>
  <style>
    div{
      width: 30px;
      height: 30px;
      background-color: red;
    }
  </style>
</head>
<body>
  <div></div>
  <script>
    $(function() {
      $('div').on('click', function() {
        $.get('http://www.liulongbin.top:3006/api/getbooks', {id: 484}, function(e) {
          console.log(e);
        });
      })
    })
  </script>
</body>
</html>
```

## 2.$.post()

语法和get一样

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="../jQuery.min.js"></script>
  <style>
    div{
      width: 100px;
      height: 100px;
      background-color: red;
    }
  </style>
</head>
<body>
  <div></div>
  <script>
    $(function() {
      $('div').on('click', function() {
        $.post('http://www.liulongbin.top:3006/api/addbook',
        {bookname: "啦啦啦德玛西亚", author: "草丛三剑客", publisher: "德玛西亚"},
        function(e) {
          console.log(e);
        });
      })
      $('div').on('click', function() {
        $.get('http://www.liulongbin.top:3006/api/getbooks', function(e) {
          console.log(e);
        });
      })
      $('div').on('click', function() {
        $.get('http://www.liulongbin.top:3006/api/getbooks',{id: 531}, function(e) {
          console.log(e);
        });
      })
    })
  </script>
</body>
</html>
```

## 3.$.ajax()

type：分为两类：'GET' 和 ' POST'

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="../jQuery.min.js"></script>
  <style>
    div{
      width: 30px;
      height: 30px;
      background-color: red;
    }
  </style>
</head>
<body>
  <div></div>
  <script>
    $(function() {
      $('div').on('click', function() {
        $.ajax({
          type: 'GET',
          url: 'http://www.liulongbin.top:3006/api/getbooks', 
          data: {id: 484},
          success: function(e) {
          console.log(e);
          }
        })
      })
    })
  </script>
</body>
</html>
```

## 4.接口

![](F:\前端\笔记\ajax\img\接口测试工具.png)

### 4.1接口测试工具

接口测试工具能让我们在不写任何代码的情况下，对接口进行测试和调用 postman

![](F:\前端\笔记\ajax\img\postman.png)

# 三、通信协议

## 1.什么是通信

![](F:\前端\笔记\ajax\img\通信.png)

## 2.什么是通信协议

![](F:\前端\笔记\ajax\img\通信协议.png)

## 3.http协议

![](F:\前端\笔记\ajax\img\http协议.png)

## 4.http交互模型

![](F:\前端\笔记\ajax\img\http交互协议模型.png)

## 5.http请求消息

![](F:\前端\笔记\ajax\img\http请求消息.png)

### 5.1请求消息组成部分

![](F:\前端\笔记\ajax\img\请求消息组成部分.png)

![](F:\前端\笔记\ajax\img\http请求方法.png)

### 5.2请求头部 

![](F:\前端\笔记\ajax\img\请求头部.png)

![](F:\前端\笔记\ajax\img\常见请求头部字段1.png)

![请求头部常见字段](F:\前端\笔记\ajax\img\请求头部常见字段.png)

### 5.3请求体（get没有请求体）

![](F:\前端\笔记\ajax\img\请求体.png)

## 6.响应消息

![](F:\前端\笔记\ajax\img\效应消息.png)

### 6.1响应行

![](F:\前端\笔记\ajax\img\响应状态行.png)

![](F:\前端\笔记\ajax\img\响应状态码分类.png)

### 6.2响应头部

键值对的方式

### 6.3响应体

在客户端response中可查看响应体

![](F:\前端\笔记\ajax\img\响应体.PNG)

![]()

![](F:\前端\笔记\ajax\img\响应状态码2.png)

![响应状态码3](F:\前端\笔记\ajax\img\响应状态码3.png)

![状态响应码4](F:\前端\笔记\ajax\img\状态响应码4.png)

![状态响应码5](F:\前端\笔记\ajax\img\状态响应码5.png)

# 四、版本控制系统

## 1.版本控制软件

![](F:\前端\笔记\ajax\img\版本控制软件’.png)

## 2.使用版本控制软件的好处

![使用版本控制系统的好处](F:\前端\笔记\ajax\img\使用版本控制系统的好处.png)

## 3.版本控制软件的分类

![版本控制系统分类](F:\前端\笔记\ajax\img\版本控制系统分类.png)

## 4.集中化版本控制系统

![集中化版本控制系统](F:\前端\笔记\ajax\img\集中化版本控制系统.png)

### 4.1 SVN的差别比较

![](F:\前端\笔记\ajax\img\SVN差异比较.png)

## 5.分布式版本控制系统

![分布式版本控制系统](F:\前端\笔记\ajax\img\分布式版本控制系统.png)

### 5.1 Git 记录快照而非差异比较

![](F:\前端\笔记\ajax\img\git记录快照.png)

git几乎所有的操作都在本地执行，只需要访问本地文件和资源，一般不需要来自网络上其他计算机的信息

![](F:\前端\笔记\ajax\img\git基本都是本地操作.png)

### 5.2 git的三个工作区

工作区

暂存区

git仓库

![](F:\前端\笔记\ajax\img\git中的三个区域.png)

### 5.3 git的三种工作状态

已修改

已暂存

已提交

## 6、安装并配置git

### 6.1 配置用户信息

### 6.2 git全局配置文件

* 在c盘   用户  .gitconfig 里面 ，可以用记事本打开 查看自己设置过哪些全局对象
*  使用如下语句，可以查看配置信息

![](F:\前端\笔记\ajax\img\git检查配置信息.PNG)

### 6.3 获取帮助信息

![](F:\前端\笔记\ajax\img\git获取帮助信息.png)

## 7.git基本操作

### 7.1 获取git仓库的两种方式

* 将尚未进行版本控制的本地目录转换为git仓库
* 从其他服务器克隆一个已存在的Git仓库
* 以上两种方式都可以在自己电脑上获得一个Git仓库

### 7.2 在现有目录中初始化仓库

到想要初始化的跟目录中打开 git bash 然后输入以下代码

![](F:\前端\笔记\ajax\img\初始化git仓库.PNG)

### 7.3 工作区中文件的四种状态

### 7.4 git status检查文件状态  在其后加上 -s 表示以精简的方式查看文档状态 相当于 --short

![](F:\前端\笔记\ajax\img\git status 检查文件状态.PNG)

### 7.5 git add 来添加需要跟踪的文件，放入暂存区

### 7.6 提交已暂存的文件

git commit -m "提交消息"

### 7.7 更新提交

* git add

* git commit

### 7.8 撤销修改



### 7.9一次性提交许多个文件

git add .

### 7.10取消暂存的文件

git reset HEAD 要移除的文件名称

### 7.11跳过暂存区域，直接提交

git commit -a -m "提交的消息"

### 7.12移除文件

* 从git仓库和工作区中同时移除  git rm -f  文件名
* 从git仓库中移除  但在工作区中保留  git rm --cached 文件名
