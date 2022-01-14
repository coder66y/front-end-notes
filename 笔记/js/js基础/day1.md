# 一、认识JavaScript

## 1、回顾网页的组成

* HTML：网页的内容
* css：网页的视觉体验
* JavaScript：网页的交互处理
* 这些代码都依赖于浏览器

## 2、编程语言的发展史

* C语言、c++/c#/java/go/dart等都是高级语言
* 按照运行方式的不同：
  * 编译性语言：C语言（printf(123)-->一次性编译成二进制代码-->执行
  * 解释性语言： js语言、matlab/python
* 计算机基于布尔代数：true/false
* 阶段一：机器语言
* 阶段二：汇编语言：用符号来代替昂长的、难以记忆的01代码（mov/add指令，汇编代码在进一步转成0101）
* 阶段三：高级语言
  * 接近自然语言，更符合人类的思维方式
  * JavaScript就是这样的一门语言

<img src="F:\前端\笔记\js\ECMAscript与JavaScript关系.PNG" style="zoom:25%;" />

# 二、JS的历史

浏览器两大厂商：网景公司、微软公司

java-->跨平台-->虚拟机-->linux/windows/mac

<img src="F:\前端\笔记\js\js历史.PNG" style="zoom:25%;" />



# 三、JavaScript特点

* 解释型语言

  <img src="F:\前端\笔记\js\js介绍.PNG" style="zoom:25%;" />

* 静态类型的语言

  在代码执行之前，可以确定一个变量（标识符），准确的类型，并且之后不允许修改

* 动态类型的语言

  不确定一个变量的类型，在代码执行过程中，动态修改。

* JavaScript可以在执行规程中动态改变变量的类型，但是不安全

目前前端已经越来越多的转向typescript，其最强大之处在于提供了类型检测

# 四、JS编写位置

```html
 <!-- 1.在HTML元素中直接执行Javascript代码 (不推荐)-->
<a href="#" onclick="alert('我是一个弹窗')">弹出弹窗</a>
<a href="javascript:alert('我也是一个弹窗')">弹出弹窗</a>

<!-- 2.书写到script标签中(学习阶段) -->
<script>
    alert('我是直接弹出的弹窗');
</script>

<!-- 3.写到外部文件中（真实开发） -->
<script src="js/test.js"></script>

```

* 注意事项
  * script标签不能写成单标签：
  * 省略type属性
  * 加载顺序
  * javascript严格区分大小写

<img src="F:\前端\笔记\js\注意事项.PNG" style="zoom:25%;" />

# 五、JS注释使用

```html
<script>
        //  1.javascript注释的写法一:单行注释
        alert("hello world");

        /* 2.javascript注释写法二：多行注释

        // 3.javascript注释写法三：文档注释（了解）
        /**
        *这是一个测试函数
        */
</script>
```

# 六、和浏览器如何交互

## 1、交互方式1：浏览器弹出弹窗

```js
// 1.交互方式一：浏览器弹出弹窗
alert:("hello world");

// 2.交互方式二：在控制台打印一段内容
console.log("hollo world", "codewhy", "18");

// 3.交互方式三：DOM操作时（了解）
document.write("<h2>hello world</h2>");

// 4.交互方式四：接受用户输入的一个内容(了解)
var age = prompt("请输入您的年龄");
console.log("您的年龄是:",age);
```

# 七、如何定义变量

```js
// 1.变量的定义方式
var name = "why";

// 给变量重新赋值,重新赋值可以不用声明变量
name = "66";

alert(name);
console.log(name);

// 2.先声明，再赋值
var age;
age = 10;

// 3.同时定义多个变量,以逗号进行分割
var num1, num2, num3;
num1 = 20;
num2 = 30;
num3 = 40;

var num1 = 20, num2 = 30, num3 = 40;
```

## 4、变量的命名规则与规范

### 4.1变量的命名规则

* 首字母（第一个字符），必须是字母（a-z/A-Z)或者_或者$

* 其他字符可以是字母或者下划线或$或数字

* 不可以使用关键字或者保留字命名

### 4.2变量的命名规范（在图中）

* 多个单词使用驼峰标识

* 变量尽量做到见名知意
* 赋值符号两边都加上空格
* 一个语句结束后加上分号（不加也不报错）

<img src="F:\前端\笔记\js\命名.PNG" style="zoom: 50%;" />

### 4.3、保留字

<img src="F:\前端\笔记\js\保留字.PNG" style="zoom: 80%;" />

### 4.4、关键字

<img src="F:\前端\笔记\js\关键字.PNG" alt="关键字" style="zoom:80%;" />

### 4.5、变量交换

```js
// 1.两个变量之间的互相命名
var num11 = 20;
var num12 = num11;
console.log(num12);

// 2.两个变量值交换
var num1 = 100;
var num2 = 200;

// 交换方式1：利用临时变量
// change = num1;
// num1 = num2;
// num2 = change;

// console.log(num1,num2);

// 交换方式2：利用加减特性对他们进行交换
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;

console.log(num1,num2);
```

# 八、基础数据类型

### 1、类型

#### 1.1字符串型的数据（字符型）：string

* 用于表示一段文字

```js
// 字符串类型：string的使用
var name = "66呀";
var address = "广州市";
var introduce = '认真是一种可怕的力量';//也可以用单引号

console.log(name, address, introduce);

// 转义字符的使用：掌握\'   \"   \t   \n 四个的用法
var message = 'fadbeh\tf\\be\'hq\"luryss';
console.log(message);

// 获取字符串的长度：length属性
console.log(message.length);
```

#### 1.2数字类型的数据（数值型）：number

* 数字的表示方法：十进制、十六进制、二进制、八进制
* 数字的范围：最大值和最小值

```JS
// 1.数字类型的基本使用
var age = 20;
var height = 1.88;
var tel = 110;
console.log(typeof age);
console.log(typeof height);
console.log(typeof tel);

// 2.进制 #ff ff ff
var num1 = 100;
var num2 = 0x10;//十六进制
var num3 = 0o10;//八进制
var num4 = 0b10;//二进制
console.log(num1);
console.log(num2);
console.log(num3);

//最大值和最小值
console.log(Number.MAX_VALUE);//1.7976931348623157e+308
console.log(Number.MIN_VALUE);//5e-324
```

#### 1.3布尔型：Boolean

* true
* false

```js
// 布尔类型
var isLogin = false;
if (!isLogin){
    console.log("请登录，再进行后续操作");
}
console.log(isLogin);
```

#### 1.4空类型：null

```js
// null:进行回收
var info = {name: "66", age: 18};
info = null;
```

#### 1.5未定义类型：undefined

```js
// undefined：当一个变量进行了申明，但是没有赋值，这个时候他的值就是undefined
var flag;
console.log(flag);
```

* NaN(not a number)：一个特殊的数值，js中当对数值进行计算时没有结果返回，则返回NaN.
* isNaN，用于判断是否不是一个数字。不是返回true，是数字返回false

### 2、查看数据类型

* typeof 查看数据类型

  ```JS
  //查看数据的类型：typeof 操作符
  console.log(typeof "我是66呀!");//string       
  console.log(typeof 123456);//number
  
  // typeof另一种写法
  typeof("coderwhy");
  console.log(typeof("coderwhy"));//string
  ```

### 3、变量存储的本质

内存的分类：栈空间和堆空间

# 九、数据类型的转换

### 1、其他类型转化为数字类型:

#### 1.1Number(变量)

```js
// 数据类型的转换
var message = '123';
console.log(typeof message)

// 1、将message转换为数字类型
var num = Number(message);
console.log(typeof num);
```

#### 1.2parseInt（ 字符串  ，radix）

将字符串转换为整数，radix为进制。

#### 1.3parseFloat（ 字符串  ，radix）

将字符串转换成小数，radix为进制。

```js
var str1 = "123";
var num1 = parseInt(str1);
console.log(num1, typeof num1); // 123 'number'

var str2 = "123.234";
var num2 = parseFloat(str2);
console.log(num2, typeof num2); // 123.234 'number'

var str3 = "abs123";
var num3 = parseFloat(str3);
console.log(num3, typeof num3); // NaN 'number'

var str31 = "123abs";
var num31 = parseFloat(str31);
console.log(num31, typeof num31); // 123 'number'

var str4 = "123";
var num4 = parseFloat(str4);
console.log(num4, typeof num4); // 123 'number'

var str5 = "123.556";
var num5 = parseInt(str5);
console.log(num5, typeof num5); // 123 'number'
```

### 2、其他数据类型转换为字符串类型

#### 2.1转换方式一：变量.toString()

只可以将数字类型和布尔类型转换，其他不可以转换

```js

// 1.转换方式一：变量.toString();只可以将数字类型和布尔类型转换，其他不可以
console.log(num.toString());
// console.log(obj.toString()); null不适用
// console.log(message.toString()); undefined不适用
console.log(flag.toString());
```

#### 2.22.转换方式二：String(变量)

可以将所有基本类型转换为字符串类型

```js
// 2.转换方式二：String(变量)；可以将所有基本类型转换为字符串类型
console.log(String(num));
console.log(String(obj));
console.log(String(message));
console.log(String(flag))
```

### 3.其他数据类型转换为布尔类型

* Boolean（变量）

  除了null、0、undefined、“  ”、NaN以外，其他的都为true，这五个值转换时为false.

  ```js
  // 1.特殊转换为布尔
  console.log(Boolean("")); // false
  console.log(Boolean(0)); // false`
  console.log(Boolean(null)); // false
  console.log(Boolean(undefined)); // false
  console.log(Boolean(NaN)); // false
  
  // 2.其他转换
  console.log(Boolean(123)); // true
  console.log(Boolean("abc123")); // true
  ```

  







