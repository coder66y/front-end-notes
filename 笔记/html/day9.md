# 一、盒子模型

## 1.css属性-outline

outline不占据空间

<img src="截图、\outline.PNG" style="zoom:25%;" />

## 2.css属性-box-shadow

<img src="截图、\box-shadow.PNG" style="zoom:25%;" />

## 3、css属性-box-sizing

用来设置盒子模型中的宽高的行为

* content-box

  padding、border都布置在width、height外边

* border-box

  padding、border都布置在width、height里边

不指定 CSS box-sizing 属性

默认情况下，元素的宽度和高度是这样计算的：

- width + padding + border = 元素的实际宽度
- height + padding + border = 元素的实际高度

## 4、元素的水平居中

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box{
            height: 200px;
            background-color: #f00;
            /* 设置内容居中 */
            text-align: center; 
            
        }
        .inner{
            /* display:inline-block; */
            width: 100px;
            height: 100px;
            background-color: #fff;
            /* 设置盒子居中 */
            /* 没有以下设置时：只有span居中 */
             margin:0 auto; 
        }
        strong{
            background-color: #0f0;
        }
    </style>
</head>
<body>
    <div class="box">
        <!-- 1.普通文本 -->
        	<!-- 行内元素 -->
        <!-- 2.行内元素 -->
            <!-- <strong> -->
              <!-- 我是strong元素 -->
            <!-- </strong> -->
        <!-- 3.图片：行内替换元素 -->
            <!-- <img src="../../O1CN01lm4jkI2MLwtfXnWkO_!!0-saturn_solar.jpg_468x468q75.jpg_.webp"> -->
        <!-- 4.行内块级元素 -->
       		 <!-- 盒子里的内容也居中了，继承自父元素的text-align: center;-->
        <!--5.block元素居中使用margin-->
            <div class="inner">hahahah</div>
            <span>span元素</span>
    </div>
</body>
</html>
```

margin：auto; 水平居中原理：浏览器会选择一个合适的margin来应用，可以将一个块水平居中





# 二、背景设置

### 1.background-color

### 2.background-image：

用url（）来使用图片

### 3.background-repeat：

* no-repeat：只有一张背景图片

* repeat-x：背景图片在x轴上重复

* repeat-y：背景图片在y轴上重复

### 4.background-size:

* auto：以图片本身大小显示；

* cover：图片会进行放大缩小，以填充整个元素，尺寸不一样时，会有部分图片看不到；

* contain：保留图片所有，保持宽高比，但是会有部分元素填充不了；

* ```<perentage>```百分比，相对于背景区。设置一个值时，相对于块级元素宽度的百分比，两个值就是相对于块级元素宽高的百分比，缺点是图片宽高比变了，容易变形。

### 5.background-position:

设置背景图像的开始位置。

* center：设置一个center时，是相对于水平方向，两个center是相对于水平和垂直方向。

* 可能的值

  | 值                                                           | 描述                                                         |
  | :----------------------------------------------------------- | :----------------------------------------------------------- |
  | top left、 top center、top right、center left、center center、center right、bottom left、bottom center、bottom right | 如果您仅规定了一个关键词，那么第二个值将是"center"。默认值：0% 0%。 |
  | x% y%                                                        | 第一个值是水平位置，第二个值是垂直位置。左上角是 0% 0%。右下角是 100% 100%。如果您仅规定了一个值，另一个值将是 50%。 |
  | xpos ypos                                                    | 第一个值是水平位置，第二个值是垂直位置。左上角是 0 0。单位是像素 (0px 0px) 或任何其他的 CSS 单位。如果您仅规定了一个值，另一个值将是50%。您可以混合使用 % 和 position 值。 |

### 6.css sprite(css雪碧 css精灵)

一种css图像合成技术，将各种小图片合并到一张图片上，然后利用css的背景定位来显示对应的图片部分

* 好处

  减少网页的http请求数量，加快网页响应速度，减少服务器压力

  减少图片总大小

  解决图片命名的困扰，只需要针对一张集合的图片命名

### 7.background-attachment

* fixed：不随浏览器页面滚动
* scroll：跟着浏览器页面滚动
* local：会随着box内容滚动，背景一起滚动

### 8.background简写

![](截图、\background简写属性.PNG)









