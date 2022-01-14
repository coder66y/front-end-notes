# 内容概要

## 一.网页的基本元素

### 1.1、**文档声明**<!doctype html>

* 不能省略
* 放在页面的最前面

### 1.2、html元素

是HTML文档的根元素:一个文档中只能有一个，其他的元素都是他的后代元素：

* html的lang（language）属性

- 作用：帮助语音合成工具要使用的语言，帮助翻译工具要使用的翻译规则

```html
<!DOCTYPE html>
<html lang="en">  <!-- en表示是英文状态下，zh-CN表示是中文状态下 -->
    <head>
        <meta charset="UTF-8"> <!-- 字符编码规则 -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>

    </body>
</html>
```

### 1.3、head元素

里面的内容都是“元数据”（描述数据的数据）

一般用于描述网页的各种信息，比如字符编码（charset)、网页标题(<title> 内容</title>)，网页图标

- title元素：规定网页的标题

- meta元素：用于设置网页的字符编码，不设置的话可能会出现乱码情况。

  - 字符编码
    - 计算机中的很多东西都是用0101表示的
    - 常见字符编码规则：ASCII   GBK  UTF-8

- style元素：**注意格式的书写。**

  ```html
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <title>shasha's</title>
          <meta charset="utf8">
          <style> ul {color: green } </style>  <!-- 设置ul的字体颜色 -->
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
  ```

- link元素：网站的图标

- ```html
  <!DOCTYPE html>
  <html lang="en">
      <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>莎莎‘s</title>
              <link rel="icon" href="../../../毕业文件/pr.jpg">
              <style>
                  a { color:red}
              </style>
  
              <base href="https://uland.taobao.com" target=_blank>
                  <!-- a和base的结合 -->
      </head>
      <body>
              <p>打开外部网站</p>
              <!-- 1.基本使用 href：超链接 -->
              <a href="https://wwww.taobao.com">淘宝一下</a>
              <a href="/sem/tbsearch?keyword=裙子">淘宝裙子</a>
              <a href="https://uland.taobao.com/sem/tbsearch?keyword=大衣">淘宝大衣</a>
       </body>
  </html>
  ```

  ### 1.4body元素

  

## 二、元素标签（以下都是双标签）

1. h元素：描述标题

1. p元素：描述段落

2. a元素 ：HTML 链接由 <a> 标签定义。链接的地址在 **href 属性**中指定：

   ```html
   <a href="http://www.runoob.com">这是一个链接</a>
   ```

   

3. img元素：载入图片

4. strong元素（flex布局后面学)：加粗文字（css里面可用）

5. code元素：用于显示程序代码

## 三、br/hr（两个都是单标签）

br:break ：换行，div也可以换行，<p> </p>也可换行

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>

    </head>

    <body>
        <h1>Typora的使用</h1>
        <h2>Typora的介绍</h2>

        <p><strong>Typora</strong>一直是我认为桌面端笔记应用应有的终极形态。用我之前 一篇文章 中的话来说就是，<br><!-- 换行 -->
            「它的功能之强大、设计之冷静、体验之美妙、理念之先进，我认为值得所有笔记应用厂商学习。」

            <div>但一件很尴尬的事情是，由于它极简的设计理念，有许多使用者并没能完全地了解到 Typora 的全部强大功能。<hr><!-- 分割线 -->
                我想在这篇文章中由浅入深地介绍 Typora 的功能亮点。无论你从未用过 Typora，还是已经体验了很久，我相信你都能在这篇文章中发现 Typora 新的惊喜。</div>
        </p>
        <h2>Typora的图片</h2>
        <img src="https://cdn.sspai.com/2019/05/24/49c4cdef47bf81018b9871a628523064.png">
    </body>

</html>
```

hr：单标签：显示分割线

<pre> </pre>可以使段落显示空格，<p>会自动省略空格

## 四、URL/SEO优化

### 4.1SEO优化

SEO（search engine optimization）:搜索引擎优化（使被搜索的东西尽量排的靠前）

* h元素有助于SEO优化，促进关键字排名
* 建议在网页中最多只有一个h1元素
* 

## 五、字符编码

* 作用：将文字存储到计算机中，之后解析出来
* 应用：所有的网页目前都需要采用utf-8编码，涵盖了世界上几乎所有的文字
* 在HTML5之前，meta的写法比较复杂，现在只需要如上书写即可。

## 六、快捷键

ctrl+enter      无论光标在哪里，都可以使光标到下一行

alt+shift+向下的键           向下复制

## 七、字符实体

&nbsp：代表空格

&it：小于符号

&gt：大于符号

&quto：双引号

## 八、img元素

* src

  * 本地路径

    * 绝对路径

    * 相对路径

      相对路径: . 当前路径（目录）

      ​         .. 上一层路径（目录）

  * 远程路径

* alt

  alt是图片加载不出来的时候显示的东西

## 九、a元素

a元素 ：HTML 链接由 <a> 标签定义。链接的地址在 **href 属性**中指定：

* href
  * _self
  * _blank
  * _parent
  * _top
  * iframe的name

## 十、span与div元素

span和div有啥区别？span是行内元素，div是区块元素

* div元素

  * 一般作为其他元素的父容器，把其他元素包住，代表一个整体

  * 用于把网页分割为多个独立的部分

    ```html
    div{
       outline:2px solid green 1important；
    }/*可以看到网站的div分区*/
    ```

    



