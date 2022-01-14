# 内容概述

## 一、a元素补充

* 伪链接
* a元素与img元素的结合

## 二、URL-->input

* URL

  * 全称是uniform resource locator(统一资源定位符)

  * 就是资源的地址位置，互联网上的每个资源都有一个唯一的URL

  * 通过1个URL，能找到互联网上的唯一1个资源

  * 基本格式：协议：//主机地址/路径=protocol：//hostname/path

    * 协议：不同的协议，代表着不同的资源查找方式、资源传输方式

    * 主机地址：存放资源的主机的IP1地址（域名）

    * 路径：资源在主机中的具体位置
* URL常见的协议

  * http
    * 超文本传输协议，访问的是远程的网络资源，格式是http：//
    * http协议是网络开发中最常用的协议
    * HTTPS协议相当于是http协议的安全版
  * file
    * 访问本地计算机中的资源，格式是file：//（不用加主机地址）
  * mailto
    * 访问的是电子邮件，格式：mailto:
  * ftp
    * 访问的是共享主机的文件资源，格式是ftp://
* 标签语义化
  * 选择标签是尽量让每一个标签都有正确的语义
  * 方便代码维护
  * 减少开发者之间的沟通成本
  * 能够让语音合成工具正确识别网页元素的用途，以便做出方面的反应
  * 让搜索引擎能够正确识别重要的信息

## 三、认识css

* css应用到元素上的三种方法
  * 内联样式
  * 文档样式表
  * 内嵌样式表（外部样式表）
* 文件后缀名：.css

## 四、css的写法

* 文件后缀名：.css

## 五、css选择器

选择器

* 所有的元素(通配符选择器)

  ```html
  <style>
          *{color:red;}
          /* 一般不要用统配选择器 */ 
  </style>
  ```

* 元素选择器

  ```html
  <style>
          p{color:red;}
  </style>
  ```

* 类选择器

  ```html
  <style>
          .p {color:red;}
     /*.p为class的名字，一个元素可以有多个class*/    
  </style>
  ```

* 分组选择器

  ```html
  <style>
          p,h,div,a{color:red;}
  </style>
  ```

* id选择器

  ```html
  <style>
        #a11{color:red;}
  </style>
  <!--id名称在同一页面中不要重复(代码规范）-->
  ```

  

* 后代选择器

  ```html
  <style>
        #a11.c1 {color:red;}
  </style>
  ```

* 属性选择器

  * 见文档

    [F:\前端\HTML\05_css选择器/01_-属性选择器.html]: 

    

## 六、css常见的文本和字体属性

* ### text-transform

capitalize：将每个单词首字母大写

uppercase：将每个单词的所有单词变大写

lowercase：将每个单词的所有字母变为小写

none：没有任何影响

* ### text-decoration

  * none：无任何装饰线
  * underline：下划线
  * overline：上划线
  * line-through：中划线（删除线）
  * u/ins元素就是默认设置了text-decoration为underline

* ### letter-spacing、Word-spacing

  * 前者是字母之间的距离，后者是词与词之间的距离

* ### text-indent

  * 缩进（px/em)

* ### text-align

  设置元素在文本中的对齐方式

  * left：左对齐
  * right：右对齐
  * center：正中间显示
  * justify:左右对齐（但是对最后一行无效）（ text-align-last:justify;）可以解决
  
* ### font-size

  * 单位：px em(百分比) rem

* ### font-family

  * 字体

* ### font-weight

   设置文字的粗细100-900：每个数字代表一个重量

  * normal(=400)

  * bold(=700)

  * strong/b/h1-h6等标签的font-weight默认为bold

* ### font-style

  用于设置文字的常规，斜体显示

  * normal：常规显示
  * italic:用字体的斜体显示
  * oblique：文本的倾斜显示
    * 上面两者的区别是：italic必须字体可以倾斜，文本才会显示倾斜，而oblique无论什么字体都可以，所以oblique常用
  * em/i/cite/address/var/dfn等元素的font-style默认就是italic

* ### font-varient
  
  * small-caps:小写字母变大写，但是规格依旧是小写字母的
  
* ### line-height

  line-height：两行文字基线（baseline）之间的间距，x下的线就是基线，不是文字下的线哦~（=文字的高度+行距）

  height:元素的整体高度（比如div元素的高度）

  <img src="F:\前端\笔记\line-light.PNG" style="zoom:25%;" />

* ### font

  是一个缩写属性

  <img src="F:\前端\笔记\font缩写.PNG" style="zoom: 25%;" />

## 七、颜色空间

* ### rgb三原色

background-color:rgb(0, 172, 252)

background-color:rgba(0, 172, 252，1)

* ### hsl
  
  * 色相（*hue*）是色轮上从 0 到 360 的度数。0 是红色，120 是绿色，240 是蓝色。
  * 饱和度（*saturation*）是一个百分比值，0％ 表示灰色阴影，而 100％ 是全色。
  * 亮度（*lightness*）也是百分比，0％ 是黑色，50％ 是既不明也不暗，100％是白色。
  
* ### hex颜色：

  * 十六进制（0-f;0-255)





