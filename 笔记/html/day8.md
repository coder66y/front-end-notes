# 一、元素的类型

## 1.css属性-display

display常用属性值：block（将行内级元素变为块级元素）、inline（将block元素变为行内级元素）、none（隐藏元素，不占空间）、inline-block（可以和其他元素在同一行显示、可以设置宽度和高度）

还有以下取值

<img src="F:\前端\笔记\截图、\display的其他属性.PNG" style="zoom:25%;" />

<img src="F:\前端\笔记\截图、\inline-block.PNG" style="zoom:25%;" />

### display+hover练习

代码及效果如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>66's</title>
    <!-- 样式的重置 -->
    <style>
         ul{
             list-style:none;
             padding: 0;
             margin: 0;
         }

         a{
             text-decoration: none;
             color:#3951B3;
         }

         /* 局部样式 */
         .page ul li {
             display: inline-block;
         } 

         /* 边框宽高 */
         .page ul li a{
             display: inline-block;
             width: 34px;
             height: 34px;
             border:1px solid #e1e2e3;
             text-align:center;
             line-height: 34px;
             font-size:14px;
         }
         /* 悬浮效果 */
         .page ul li a:hover{
            border:1px solid #38f;
            background-color:#f2f8ff;
         }
         /* 第一页和最后一页 */
         .page .prev a,.page .next a{
            width: 80px;
             height: 34px;
         }
        /* 选中页面效果 */
         .page .active{
             width: 36px;
             height: 36px;
             line-height: 36px;
             border:none;
             font-weight: 700;
             color:#000;
         }
    </style>
</head>
<body>
    <div class="page">
        <ul>
            <li class="prev"><a href="#">&lt;上一页</a></li>
           <li><a href="#">1</a></li>
           <li><a class="active" href="#">2</a></li>
           <li><a href="#">3</a></li>
           <li><a href="#">4</a></li>
           <li><a href="#">5</a></li>
           <li><a href="#">6</a></li>
           <li><a href="#">7</a></li>
           <li><a href="#">8</a></li>
           <li><a href="#">9</a></li>
           <li><a href="#">10</a></li>
            <li class="next"><a href="#">下一页&gt;</a></li>
        </ul>
    </div>
</body>
</html>
```

![](F:\前端\笔记\截图、\百度分页列表.PNG)



## 2、css属性

### 2.1visibility

#### 1.display:none; div元素不占空间 

#### 2.visibility:hidden 隐藏元素，依旧占据空间 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        div{
            width: 100px;
            height: 100px;
            background-color: #f00;

            /* 隐藏div */
            /* 1.display:none; div元素不占空间 */
            /* 2.visibility:hidden 隐藏元素，依旧占据空间 */
            visibility:hidden;
        }
    </style>
</head>
<body>
    <div>我是div元素</div>
    <p>我是p元素</p>
</body>
</html>
```

### 2.2、overflow属性的使用

#### 属性：overflow 

* visible:超出依然可见，默认值

* hidden:超出部分，隐藏起来

* scroll:溢出的内容可以通过滚动查看
* auto:有超出部分就滚动查看，没有就正常显示

### 2.3、元素之间的空格

<img src="F:\前端\笔记\截图、\元素之间的空格.PNG" style="zoom:25%;" />

### 2.4注意点

<img src="F:\前端\笔记\截图、\css元素注意点.PNG" style="zoom:25%;" />

# 二、盒子模型

<img src="F:\前端\笔记\截图、\盒子模型示意图.PNG" style="zoom:25%;" />

#### 1、内容（content）

属性:

* width:宽度
* min-width：最小宽度
* max-width：最大宽度
* height：高度（和width一样，也有最大和最小）

#### 2、内边距（padding）

padding属性缩写时按照：上、右、下、左的顺序。

word-break:让汉字换行

<img src="F:\前端\笔记\截图、\padding.PNG" style="zoom:25%;" />

#### 3、外边距（margin）

与padding属性一样

注意：外边距传递只针对上下，不针对左右。

margin的父子传递：如果块级元素的顶部线和父元素的顶部线重叠，那么这个块级元素的margin-top值会传递给父元素。（块级元素的上外边距会传递给父元素的外边距）

##### 如何解决传递

触发BFC：block format context

如何触发：浮动可以触发，设置一个元素的overflow为非visible

<img src="F:\前端\笔记\截图、\上下margin服务器.PNG" style="zoom:25%;" />

##### 如何解决折叠（collapse）

注意：外边距折叠只针对上下，不针对左右。

<img src="F:\前端\笔记\截图、\上下margin折叠.PNG" style="zoom:25%;" />

### 4、边框（border）

边框实现三角形