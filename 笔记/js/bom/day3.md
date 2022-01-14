# 一、注册事件

## 1、注册事件概述

![](img\注册事件概述.png)

## 2、事件监听方式

<img src="img\addEventListener监听方式.png" style="zoom:150%;" />

![](img\addEvent监听方式.png)

```html
  <button>传统注册方式</button>
  <button>方法监听注册事件</button>
  <script>
    let btns = document.querySelectorAll("button");
    // 1、传统注册事件
    // 两个事件，只显示一个事件
    btns[0].onclick = function() {
      alert("hi");
    }
    btns[0].onclick = function() {
      alert("how are U?");
    }
    // 2、事件侦听注册事件 addEventListener
    // 2.1里面的时间类型是字符串，必定+引号,而且不带on
    // 2.2同一个元素、同一个事件可以添加多个侦听器（事件处理程序）
    // 两个事件会连续显示
    btns[1].addEventListener("click", function() {
      alert(22);
    })
    btns[1].addEventListener("click", function() {
      alert(33);
    })
  </script>
```

# 二、删除事件

## 2.1删除事件的方式

```html
  <div>1</div>
  <div>2</div>
  <div>3</div>

  <script>
    var divs = document.querySelectorAll("div");
    divs[0].onclick = function(){
      alert("hi");
      // 1.传统方式删除事件
      this.onclick = null;
    }

    divs[1].addEventListener("click", fn)// 里面的fn不需要调用加小括号
    // 2.removeEventListener()
     function fn() {
      alert("我是div元素2");
      divs[1].removeEventListener("click", fn);
    }
  </script>
```

# 三、事件流理论

![](img\dom事件流.png)

![](img\dom事件流1.png)

```html
  <div class="father">
    <div class="son">son盒子</div>
  </div>

  <script>
    // 1.dom事件流只能执行捕获或者冒泡其中一个阶段
    // 2.onclick 和 attachEvent(ie) 只能得到冒泡阶段
    // 3.捕获阶段 如果addEventListener 第三个参数是true 那么处于捕获阶段
    // 事件流顺序：document -> html -> body -> father ->son
    let son = document. querySelector(".son");
    let father = document. querySelector(".father");
    son.addEventListener("click",function() {
      alert("son");
    },true);
    father.addEventListener("click",function() {
      alert("father");
    },true);

    // 如果第三个值为空，或者为false 那么事件流顺序为冒泡阶段
    // son -> father -> body -> html ->document
  </script>
```

![](img\dom事件流2.jpg)

# 四、事件对象

## 4.1什么是事件对象

![](img\鼠标对象事件.png)

```html
  <div>123</div>
  <script>
    var div = document.querySelector("div");
    div.onclick = function(e) {
      
      console.log(e||window.event);

      // 事件对象 e.target 返回的是触发事件的对象（元素）
      console.log(e.target);
      // this 返回的是绑定事件的对象（元素）
      console.log(this);
    };
    // 1.event 就是一个事件对象 写到我们侦听函数的小括号里面 当形参来看
    // 2.事件对象只有有了事件才会存在，它是系统给我们自动创建的，不需要我们传递参数
    // 3.事件对象 是 我们事件的一系列相关数据的集合 跟事件相关的 比如鼠标点击里面就包含了鼠标的相关信息
    // 4.事件对象我们可以自己命名 比如 event evt e 
    // 5.事件对象也有兼容性问题 IE678 通过 window.event
 </script>
```

## 4.2常见事件对象的属性和方法

![](img\事件对象的常见属性和方法.png)

```html
  <div>123</div>
  <a href="http://www.baidu.com">百度</a>
  <form action="http://www.baidu.com">
    <input type="submit" value="提交">
  </form>
  <script>
    var div = document.querySelector("div");
    div.addEventListener("click",fn);
    div.addEventListener("mouseover",fn);
    div.addEventListener("mouseout",fn);

    function fn(e){
      console.log(e.type);
    }

    // 阻止默认链接跳转 
    var a = document.querySelector("a");
    // a.addEventListener("click", function(e){
    //   e.preventDefault();// dom标准写法
    // })

    a.onclick = function(e){
      // 普通浏览器写法
      e.preventDefault();
      // 低版本浏览器写法
      e.returnValue;
      // return false 也能阻止默认行为，没有兼容性问题
      return false;
    }
  </script>
```

### 阻止事件冒泡的方法

![](img\防止事件冒泡的兼容性方案.png)

```html
  <div class="father">
    <div class="son">son1盒子</div>
  </div>

  <script>
    let son = document. querySelector(".son");

    let father = document. querySelector(".father");
    son.addEventListener("click",function(e) {
      alert("son");
      // 阻止冒泡程序
      e.stopPropagation();//标准
      // 低版本浏览器
      e.cancelBubble = true;
    });

    father.addEventListener("click",function() {
      alert("father");
    });
  </script>
```

# 五、事件委托

![](img\事件委托.png)

```html
  <ul>
    <li>知否知否，点我应有弹框在手</li>
    <li>知否知否，点我应有弹框在手</li>
    <li>知否知否，点我应有弹框在手</li>
    <li>知否知否，点我应有弹框在手</li>
    <li>知否知否，点我应有弹框在手</li>
    <li>知否知否，点我应有弹框在手</li>
  </ul>

  <script>
    // 事件委托原理：给父节点添加侦听器，利用事件冒泡影响每一个子节点
    let ul = document.querySelector("ul");
    ul.addEventListener("click",function(e){
      alert("知否知否，点我应有弹框在手");
      console.log(e.target);
      e.target.style.color = "pink";
    });
  </script>
```

# 六、常见鼠标事件

![](img\常见鼠标事件.png)

## 6.1禁止鼠标右键使用和选中文字

```html
  我是一段不愿意共享的文字
  <script>
    // 禁止鼠标右键使用 contextmenu
    document.addEventListener("contextmenu", function(e){
      e.preventDefault();
    });
    // 禁止选中文字 selectstart
    document.addEventListener("selectstart", function(e){
      e.preventDefault();
    })

  </script>
```

## 6.2鼠标事件对象

<img src="img\鼠标对象事件.png"/>

```html
  <br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br>


  <script>
    document.addEventListener("click", function(e){
      console.log(e.type);
      // 返回鼠标在可视区的 x 和 y 的坐标
      console.log(e.clientX);
      console.log(e.clientY);
      console.log("---------------");
      // 返回鼠标在文档页面的坐标
      console.log(e.pageX);
      console.log(e.pageY);
    })
  </script>
```

## 6.3案例--鼠标箭头变成图片

```html
  <style>
    img{
      width: 50px;
      position: absolute;
    }
  </style>
</head>
<body>
  <img src="../../../图片可爱/猴子撒花.gif" alt="">
  <script>
    document.addEventListener("mousemove", function(e){
      let x = e.pageX;
      let y = e.pageY;

      let img = document.querySelector("img");
      let body = document.body;
      img.style.left = x - 25 + "px";
      img.style.top = y - 25 + "px";
      body.style.cursor = "none";
    })
  </script>
</body>
```

# 六、键盘事件

## 6.1常用键盘事件

<img src="img\常用键盘事件.png"/>

```html
  <script>
    document.onkeyup = function() {
      console.log("我弹起来了");
    }

    document.onkeypress = function() {
      console.log("我按下了press");
    } // 不识别功能键 比如：Ctrl shift 箭头

    document.onkeydown= function() {
      console.log("我按下了down");
    }
    //  三个事件的执行顺序：keydown -> keypress -> keyup
  </script>
```

## 6.2键盘对象

```html
  <script>
    document.addEventListener("keydown",function(e) {
      console.log("down:",e.key, e.keyCode);
    
      // 我们的keyup 和 keydown 不区分大小写 a 和 A 得到的都是65
      // 我们的keypress 区分大小写 a 97 和 A 65
    })
    document.addEventListener("keypress",function(e) {
      console.log("press:",e.key, e.keyCode);
    })
  </script>
```

## 6.3案例-按下s键，自动聚焦搜索框

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    input{
      width: 300px;
      height: 30px;
    }
  </style>
</head>
<body>
  <input type="text">
  <script> 
    document.addEventListener("keyup", function(e){
      console.log(e.keyCode);
      if(e.keyCode === 83) {
        let search = document.querySelector("input");
        search.focus();
      }
    })

  </script>
</body>
</html>
```

## 6.4模拟京东快递单号查询

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .search{
      position: relative;
      width: 178px;
      margin: 100px;
    }
    .con{
      display: none;
      position:absolute;
      top: -40px;
      width: 171px;
      border: 1px solid rgba(0, 0, 0, .2);
      box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
      padding: 5px 0;
      font-size: 18px;
      line-height: 20px;
      color: #333;
    }
    /*小三角的css写法*/
    .con::before{
      content: "";
      width: 0;
      height: 0;
      position:absolute;
      top:28px;
      left: 18px;
      border: 8px solid #000;
      border-style:solid dashed dashed;
      border-color: #fff transparent transparent;
    }
  </style>
    
</head>   
<body>
    
  <div class="search">
    <div class="con"></div>
    <input type="text" placeholder="请输入您的快递单号">
  </div>
    
  <script>
    let con = document.querySelector(".con");
    var jd_input = document.querySelector("input");
    jd_input.addEventListener("keyup", function(e){
      if(this.value === ""){
        con.style.display = "";
      }else{
        con.style.display = "block";
        con.innerHTML = this.value;
      }
    })
  </script>
    
</body>
</html>
```

