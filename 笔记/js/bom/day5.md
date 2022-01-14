# 一、元素偏移量offset系列

## 1、offset概述

![](F:\前端\笔记\js\bom\img\offset概述.png)

## 2.offset与style的区别

![offset与style的区别](F:\前端\笔记\js\bom\img\offset与style的区别.png)

## 3.案例---京东放大镜

![](F:\前端\笔记\js\bom\img\放大镜效果.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .phone{
      width: 400px;
      height: 400px;

      position: relative;
      border: 1px solid #ddd;

      /* overflow: hidden; */
    }

    .mask{
      display: none;
      width: 300px;
      height: 300px;

      position: absolute;
      top: 0;
      left: 0;

      background-color: #fede4f;
      opacity: .5;
      border: 1px solid #ddd;

      cursor: move;
    }

    .big{
      display: none;
      width: 500px;
      height: 500px;

      position: absolute;
      left: 412px;
      top: 0;

      background-color: #fff;

      overflow: hidden;
    }

    .phone>img{
      width: 400px;
    }

    .big>img{
      width: 660px;

      position: absolute;
      top: 0;
      left: 0;
    }

  </style>
</head>
<body>
  <div class="phone">
    <img  class="phone-img" src="../../笔记/js/bom/img/京东放大镜图片.jpg" alt="">
    <div class="mask"></div>
    <div class="big">
      <img class="big-img" src="../../笔记/js/bom/img/京东放大镜图片.jpg" alt="">
    </div>
  </div>
  <script>
    let phone = document.querySelector(".phone");
    let mask = document.querySelector(".mask");
    let big = document.querySelector(".big");

    // 1.鼠标经过事件
    phone.addEventListener("mouseover", function() {
      mask.style.display = "block";
      big.style.display = "block";
    })
    phone.addEventListener("mouseout", function() {
      mask.style.display = "";
      big.style.display = "";
    })

    // 2.遮挡层跟着鼠标移动
    phone.addEventListener("mousemove", function(e) {
      // 算出鼠标在盒子里面的坐标
      let x = e.pageX - this.offsetLeft;
      let y = e.pageY - this.offsetTop;

      let maskX = x - mask.offsetWidth / 2;
      let maskY = y - mask.offsetHeight / 2;
      
      // 限制遮盖层宽度
      let maskMax = phone.offsetWidth - mask.offsetWidth;
      if(maskX <= 0){
        maskX = 0;
      }
      else if(maskX > maskMax) {
        maskX = 100;
      }
      if(maskY <= 0){
        maskY = 0;
      }
      else if(maskY > maskMax) {
        maskY = 100;
      }

      mask.style.left = maskX + "px";
      mask.style.top = maskY + "px";
      // mask.style.transform = "translate(-50%, -50%)";

      let bigImg = document.querySelector(".big-img");
    // 大图片最大移动距离
    let bigMax = bigImg.offsetWidth - big.offsetWidth;
    // 重点：大图片移动距离
    let bigX = maskX * bigMax / maskMax;
    let bigY = maskY * bigMax / maskMax;

    // 注意这里大图片移动的距离为负值
    bigImg.style.left = -bigX + "px";
    bigImg.style.top = -bigY + "px";
    })
  </script>
</body>
</html>
```

# 二、元素可视区client系列

![](F:\前端\笔记\js\bom\img\client系列.png)

## 2.client与offset的区别

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
      width: 300px;
      height: 300px;
      background-color: pink;
      border: 1px solid red ;

      margin: 100px;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div></div>
  <script>
    let div = document.querySelector("div");
    // width + padding
    console.log(div.clientWidth); // 320
    // width + padding + border
    console.log(div.offsetWidth); // 322
  </script>
</body>
</html>
```

## 3.flexible.js分析

![](F:\前端\笔记\js\bom\img\淘宝flexible.js分析.png)

# 三、立即执行函数

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
    // 1.立即执行函数： 不需要调用函数，立马能够自己执行的函数
    function fn() {
      console.log(1);
    }

    fn();

    // 2.写法 也可以传参
    // 2.1(function() {})()  或者 2.2(function() {} ())

    (function(a, b) {
      console.log(a + b);
    }(1, 2));

    (function sum(a, b) {
      console.log(a + b);
    })(4, 2);

    // 3.最大的作用就是独立创建了一个作用域，里面所有的变量都是局部变量
  </script>
</body>
</html>
```

# 四、元素滚动scroll系列

![](F:\前端\笔记\js\bom\img\scroll.png)

![scroll2](F:\前端\笔记\js\bom\img\scroll2.png)

![](F:\前端\笔记\js\bom\img\scroll3.png)

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
      background-color: pink;
      border: 1px solid red ;

      margin: 100px;
      padding: 10px;
      overflow:auto;
    }
  </style>
</head>
<body>
  <div>
    我是内容我是内容我是内容我是内容
    我是内容我是内容我是内容我是内容
    我是内容我是内容我是内容我是内容
    我是内容我是内容我是内容我是内容
    我是内容我是内容我是内容我是内容
    我是内容我是内容我是内容我是内容
  </div>
  <script>
    let div = document.querySelector("div");
    // 自身实际高度
    console.log(div.scrollHeight); // 436
    console.log(div.clientTop); // 1
    console.log(div.clientHeight); // 120
    div.addEventListener("scroll", function() {
      console.log(div.scrollHeight); // 436
      console.log(div.scrollTop); // 随着滚动变化
      console.log(div.scrollLeft); // 0
    })

  </script>
</body>
</html>
```

# 五、三大系列总结

![](F:\前端\笔记\js\bom\img\三大系列主要用法.png)

![三大系列总结](F:\前端\笔记\js\bom\img\三大系列总结.png)

# 六、mouse over 和mouseenter区别

![](F:\前端\笔记\js\bom\img\mouseenter和mouseover.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .father{
      width: 300px;
      height: 300px;
      background-color: pink;
    }
    .son{
      width: 200px;
      height: 200px;
      background-color: purple;
      margin: 50px;
    }
  </style>
</head>
<body>
  <div class="father">
    <div class="son"></div>
  </div>
  <script>
    let father = document.querySelector(".father");
    let son = document.querySelector(".son");
    // father.addEventListener("mouseover", function(){
    //   console.log("我是father1");
    // })
    // 经过子盒子就没有打印，只有经过自身才会触发
    father.addEventListener("mouseenter", function(){
      console.log("我是father2");
    })
  </script>
</body>
</html>
```

# 七、动画函数封装

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .div1{
      width: 200px;
      height: 200px;
      background-color: pink;

      position: absolute;
      left: 100px;
      top: 0;
      z-index: 9;
    }

    .div2{
      width: 100px;
      height: 100px;
      background-color: purple;

      position: absolute;
      left: 100px;
      top: 0;

      z-index: 9;
    }

    input{
      z-index: 99;
    }
  </style>
</head>
<body>
  <button>点击</button>
  <div class="div1"></div>
  <div class="div2"></div>
  <script>
    let div1 = document.querySelector(".div1");
    let div2 = document.querySelector(".div2");
    let btn = document.querySelector("button");
    // let timer = setInterval(function(){
    //   if(div.offsetLeft >= 700 || div.offsetTop >= 700) {
    //     clearInterval(timer);
    //   }
    //   else{
    //     div.style.left = div.offsetLeft + 5 + "px";
    //     div.style.top = div.offsetTop + 5 + "px"; 
    //   }
    // },30);

    // let obj = {};
    // obj.name = "andy0";
    // 简单动画函数封装obj目标对象 target 目标位置
    // 给不同的元素指定不同的定时器

    function animate(obj, target) {
        obj.timer = setInterval(function(){
        if(obj.offsetLeft >= 700 || obj.offsetTop >= target) {
          clearInterval(obj.timer);
        }
        else{
          obj.style.left = obj.offsetLeft + 5 + "px";
          obj.style.top = obj.offsetTop + 5 + "px"; 
        }
      },30);
    }
    // 不断点击按钮，速度会越来越快
    btn.addEventListener("click", function() {
      animate(div1, 500);
    }) 
    animate(div2, 300);
  </script>
</body>
</html>
```

## 1.左右缓动动画函数

```js
function animate(obj, target,callback) {
  clearInterval(obj.timer);
    obj.timer = setInterval(function(){
    let step = Math.ceil((target - obj.offsetLeft) / 10);
    step = step > 0?Math.ceil(step) : Math.floor(step);
    if(obj.offsetLeft == target) {
      clearInterval(obj.timer);
      callback&&callback();
    }
    else{
      // 把每次 +5 改为一个慢慢变小的值 步长值
      obj.style.left = obj.offsetLeft + step+ "px";
    }
  },3000);
}
```

