# 一、移动端

## 1.触摸事件概述

![](img\触屏事件概述01.png)

## 2、触摸事件对象

![](img\触摸事件对象.png)

### 2.1拖动盒子

![](img\触屏事件概述.png)

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

      background-color: #ff0;

      position:absolute;
      top: 50px;
      left: 50px;
    }
  </style>
</head>
<body>
  <div></div>
  <script>
    let div = document.querySelector("div");
    let startX = 0;
    let startY = 0;
    let x = 0;
    let y = 0;
    div.addEventListener("touchstart",function(e) {
      startX = e.targetTouches[0].pageX;
      startY = e.targetTouches[0].pageY;
      y = this.offsetTop;
      x = this.offsetLeft;
    })
    div.addEventListener("touchmove", function(e) {
      let moveX = e.targetTouches[0].pageX - startX;
      let moveY = e.targetTouches[0].pageY - startY;
      this.style.left = x + moveX + "px";
      this.style.top = y + moveY + "px";
    })
  </script>
</body>
</html>
```

# 暂停 后面再看移动端视频

## 3.轮播图

## 4.视频插件

### 4.1  zy.media.js

# 开始有点慌，好多东西还没接触，呜呜呜