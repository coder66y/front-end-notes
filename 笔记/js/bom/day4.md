# 一、BOM概述

## 1、什么是BOM？

![](img\什么是BOM.png)

## 2.BOM的构成



![](img\bom构成.png)

![bom构成2](img\bom构成2.png)

# 二、BOM常见事件

## 1.页面加载事件：onload

```html
   <script>
    //  load 等页面全部加载完毕，包括图片，dom元素 flash css 等
    // DOMContentLoaded是DOM加载完毕， 不包含图片 flash css等就可以执行 加载速度笔load更快
    window.addEventListener("DOMContentLoaded", function(){
      alert(22);
    })
    window.addEventListener("load", function(){
      alert(33);
    })
   </script>
```

## 2.调整窗口大小事件

```js
    window.addEventListener("resize",function(){
      console.log("变化了");
    })
```

###  案例：当窗口宽度小于300时，盒子隐藏

```html
  <div></div>
  <script>
    // 当窗口宽度小于300时，盒子隐藏
    window.addEventListener("load", function(){
      let div  = document.querySelector("div");
      window.addEventListener("resize", function(){
        if(window.innerWidth <= 300) {
          div.style.display = "none";
        }
      })
    })
  </script>
```

# 三、定时器

## 1、两种定时器

### 1.1setTimeout()

![](img\setTimeout定时器.png)

```html
   <script>
    //  window.setTimeout(调用函数，延长时间）;
    // window在写的时候可以省略，延长时间为毫秒，可以省略，如果省略，默认为“0”
    // 页面中可能有很多定时器，所以会给每个定时器开名字,用来区别不同的定时器
    // 1.写法一
    setTimeout(function() {
      console.log("时间到了");

    }, 2000);

    // 2.写法二
    function callback(){
      console.log("爆炸啦");
    };

    let timer1 = setTimeout(callback, 3000);

    // 3.写法三
    let timer2 = setTimeout('callback()', 4000);// 字符串的形式 不推荐
   </script>
```

#### 1.1.1案例--倒计时5秒关闭广告

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
  <img src="../../../图片可爱/夸我.gif" alt="">
  <button>关闭</button>
  <script>
    let img = document.querySelector("img");
    let btn = document.querySelector("button");

    btn.addEventListener("click", function(){

      // 倒计时5秒
      for(let i = 5; i >= 0; i--){
        setTimeout( function() {
          btn.innerHTML = i;
          console.log(i);
        }, 5 - i + "000");
      }
      // 延迟5秒关闭
      setTimeout( function() {
        img.style.display = "none";
        btn.style.display = "none";
      }, 5000)
    })
  </script>
</body>
</html>
```

#### 1.1.2清除计时器

clearTimeout(计时器名字);

![](img\停止setInterval定时器.png)

```html
  <input type="button" value="清除定时器">
  <script>
    let timer = setTimeout(function(){
      console.log("爆炸了");
    }, 3000);

    let btn = document.querySelector("input");
    btn.addEventListener("click", function(){
      clearTimeout(timer);
    })
  </script>
```

### 1.2setInterval()

-   window.setInterval(调用函数，延长时间）;
-   window在写的时候可以省略，延长时间为毫秒，可以省略，如果省略，默认为“0”
-   页面中可能有很多定时器，所以会给每个定时器开名字,用来区别不同的定时器
-   setTimeout() 延迟时间到啦 就去调用这个函数 只调用一次 就结束了这个定时器
-   setInterval() 每个这个延迟时间，就会调用一次，所以会不断重复调用
- ![](img\setInterval定时器.png)

#### 1.2.1案例 --jd秒杀倒计时

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
      margin: 100px auto;
    }
    span{
      display: inline-block;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: #000;
      color: #fff;
    }
  </style>
</head>
<body>
  <div>
    <span class="hours">1</span>
    <span class="mins">2</span>
    <span class="seconds">3</span>
  </div>
  <script>
    // 1.获取元素
    let hours = document.querySelector(".hours");
    let mins = document.querySelector(".mins");
    let seconds = document.querySelector(".seconds");
    function countDown(time) {
      let nowTime = +new Date();
      let inputTime = +new Date(time);
      let times = (inputTime - nowTime) / 1000;
      let h = parseInt(times / 60 / 60 % 24);
      h = h < 10?"0" + h : h;
      hours.innerHTML = h;
      let m = parseInt(times / 60 % 60);
      m = m < 10?"0" + m : m;
      mins.innerHTML = m;
      let s = parseInt(times % 60);
      s = s < 10?"0" + s : s;
      seconds.innerHTML = s;
      // return h+"时"+m +"分" + s + "秒"
    }

    // 开启定时器
    countDown('2022-01-10 17:00'); // 先调用一次，这样页面刷新的时候不会有页面空白
    setInterval("countDown('2022-01-10 17:00')", 1000);

  </script>
</body>
</html>
```

#### 1.2.2案例-- 发送短信

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
  <div>
    手机号码: <input type="number">
    <button>发送验证码</button>
  </div>

  <script>
    let btn = document.querySelector("button");
    let timer = null;
    let time = 10;
    btn.addEventListener("click", function(){
      btn.disabled = true;
      timer = setInterval(function() {
        if(time == 0){
        btn.disabled = false;
        btn.innerHTML = "发送验证码";
        clearInterval(timer);
        time = 10; // 这里一定注意要把time复原
        }
        else{
          btn.innerHTML = '还剩下'+ time +'秒';
          time--;
        }
      },1000);
    })
  </script>
</body>
</html>
```

# 四、js执行机制

## 1.js是单线程

![](img\js是单线程.png)

## 2.同步和异步

![](img\同步和异步.jpg)

![同步和异步2](img\同步和异步2.png)

## 3.执行机制

![](img\js执行机制.png)

![](img\js执行机制2.png)

# 五、location对象

## 1.什么是location对象

window对象给我们提供了一个**location属性**用于**获取或者设置窗体的URL**，并且可以用于解析URL，因为这个属性返回的是一个对象，所以我们将这个属性也称为location对象

## 2.URL

![](img\URL.png)

## 3.location对象的属性

![](img\location对象的属性.png)

### 3.1案例---倒计时跳转页面  获取页面href地址

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
  <input type="button" value="点击">
  <div></div>
  <script>
    let btn = document.querySelector("input");
    let div = document.querySelector("div");
    let time = 5;
    let timer = null;

    // function countDown(){
    //   if(time == 0){
    //     location.href = "http://www.baidu.com";
    //     time = 5;
    //   }
    //   else{
    //     div.innerHTML = "您将在" + time + "秒钟后跳转页面";
    //     time--;
    //   }
    // }

    // btn.addEventListener("click", function (){
    //   countDown(); // 先调用函数，这样的话就不会有页面空白
    //   setInterval(countDown, 1000);
    // })

    // 这个需要反应一会儿
    btn.addEventListener("click", function (){
      timer = setInterval(function() {
        if(time == 0){
          location.href = "http://www.baidu.com";
          clearInterval(timer);
          time = 5;
        }
        else{
          div.innerHTML = "您将在" + time + "秒钟后跳转页面";
          time--;
        }
      }, 1000);
    })
  </script>
</body>
</html>
```

### 3.2案例---点击登录 跳转页面 获取页面参数

## 4.location对象的方法

![](img\location对象的方法.png)

# 六、navigator对象

![](img\navagator对象.png)

# 七、history对象

![](img\history对象.png)