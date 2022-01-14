# 一、对网页的认识

## 1.1网页和网站的关系

一个网站由许多个网页做成的

## 1.2前端工程师工作

1.在自己的电脑上进行网站的开发

2.将开发出来的内容进行打包（weckpack/gulp）

3.部署和上传-->服务器

4.用户通过浏览器-->URL-->下载资源--->浏览器解析

## 1.3网页的组成

1. HTML（结构）+CSS（样式）+JS（交互）

2. 浏览器内核
   * trident：IE
   * gecko：Firefox
   * webkit->chrome 

# 二、开发第一个网页

## 2.1 vscode的使用

* 菜鸟编程网站上有安装教程
* 安装插件
  * Chinese
  * open in browers
* 设置
  * 自动保存（延迟时间）
  * 字体大小
  * wrap换行
  * 空格渲染--》点
  * tab--》4或者2个空格（初学者建议4）

## 2.2元素的使用

* 对HTML的理解
  * 超文本标记语言
* 元素的基础
  * 元素的写法
    * 双标签 ：<开始标签> 内容 </结束标签>   <head> 内容 </head>
    * 单标签 src(source源)  <img>
* 元素的嵌套
  * 元素之间存在嵌套关系，（可以用树状图表示，父元素，子元素，兄弟元素，祖先元素，后代元素）
* 元素的属性
  * 大家共有的属性：class ID title
  * 书写方式：<开始标签   属性名="属性值">  内容  </结束标签>

## 2.3注释的使用

* 注释的重要性，未来的你可能看不懂现在的你的东西
* 书写方式：<!--   注释的内容 ---> (快捷键Ctrl+/)

## 2.4一些常用的快捷键

* 一些常用快捷键：
  - ！           自动生成一套HTML代码（不需要的删掉）
  - tab键          增加选中行的缩进
  - shift+tab   减少选中行的缩进
  - alt+b          快速浏览所写代码
  - <strong> </strong> <!--   <strong>加粗的内容 </strong>  -->   <strong>加粗的内容 </strong>
  - ctrl +.     让输入法在中英文标点符号之间来回进行切换
  - Ctrl +/    快速在代码中打出注释

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>shasha's</title>
    </head>
    <body bgcolor="red">
     
        <img src="https://kaola-haitao.oss.kaolacdn.com/01ec0776-3efd-4ca0-9542-15a15ec49112T2111151433_1920_506.jpg?x-oss-process=image/resize,w_1920/quality,q_90" alt="">
        <h1>这个是一个标题</h1>
        <p>这是一个段落</p>
        <ol>
            <li>海王 </li>
            <li>妖王</li>
            <li>上海保留</li>
        </ol>
        <ul>
             <li>海王 </li>
             <li>妖王</li>
             <li>上海保留</li>
        </ul>
        <div class="first" >
            <h1>hello world</h1>
            <!-- 加粗段落 -->
            <strong> <p>hhh</p> </strong> 
        </div>
    </body>
</html>
<!--
    元素的属性
    <开始标签 属性名="属性值">  内容 </结束标签>
-->
```



