# 一、javascript的函数基础

### 1、编程范式：编程方式 

* 面向过程编程：C语言
* 面向对象编程：Java类
* 函数式编程：lisp/scheme/javascript
* javascript：函数式编程、面向对象编程（基于对象）

### 2、认识函数

#### 2.1、什么是函数？

函数式是**一段代码的封装**，这段代码帮助我们完成**某一个功能**

#### 2.2、步骤

* **定义函数**---封装独立的功能
* **调用函数**---享受封装的功能

#### 2.3、定义函数

* 定义函数的过程就是对**某些功能的封装过程**
* 在之后的开发中，我们会根据自己的需求定义很多自己的函数

#### 2.4、调用函数

* 调用函数是让已有的函数为我们所用
* 这些行数可以是自己封装好的某些功能函数
* 也可以使用javascript或者第三方库定义的函数

#### 2.5、函数的作用

开发程序时，使用函数可以**提高变成编写的效率**以及**代码的重用**

### 3、定义和调用函数

* 定义函数使用function关键字：这种写法称之为函数的申明
* 函数名的命名规则和变量名的命名规则一样
* 函数定义完后里面的代码是不会执行的，函数必须调用才可以执行

```js
// 定义函数
function printInfo() {
    console.log("why");
    console.log(18);
    console.log(1.88);
}
// 调用函数
printInfo();


// 练习二:在函数内部计算num1和num2的和
function sum(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}
sum(40, 20);

// 练习三：
// name age height 形参
function printInfo(name, age, height) {
    console.log(name);
    console.log(age);
    console.log(height);
}
// “why” 18 1.88 实参
printInfo("why", 18, 1.88);
printInfo("66", 23, 1.88);

// 练习四：对某个人say hello
function sayHello(name) {
    console.log("hello",name)
}
sayHello(66);
```

### 4、函数的返回值

```js
function sum(num1, num2) {
    var result = num1 + num2;
    // console.log(result);
    return result;
}
var total = sum(40, 20);
console.log(total);

// 返回值的注意事项
// 1.一旦函数没有写返回值，相当于默认返回undefined
// 2.一旦函数中执行了return操作，函数就会立即停止执行，后续的代码都不再执行
// 3.如果一个函数写了return，return后面没有跟内容，相当于return了一个undefined

function test() {
    console.log("1");
    console.log("2");
    return;
    console.log("3");
    console.log("4");
}

var result = test();
console.log(result);
```

### 5.函数的练习

```js
// 1.计算矩形面积
function calcRectArea(width, height) {
    return width * height;
}
var area1 = calcRectArea(20, 30);
console.log(area1);

// 2.计算圆的面积
function calcCircleArea(r){
    const pai = 3.14;
    return pai * r * r;
}
console.log(calcCircleArea(5));

// 3.传入一个n，计算1-n的和
function sum(n){
    var total = 0;
    for (var i = 1; i <= n; i++){
        total +=i;
    }
    return total;
}
console.log(sum(100));

// 4.数组反转函数
function reverseArray(arr){
    for (i = 0; i < arr.length / 2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
var nums = [1, 2, 3, 4, 5, 6];
console.log(nums);
console.log(reverseArray(nums));

// 5.斐波拉契数列
function feibolacci(n){
    var arr = [];
    if (n <= 2){
        arr[0] = 1;
        arr[1] = 1;
    }
    else{
        arr[0] = 1;
        arr[1] = 1;
        for( var i = 2; i < n; i++){
            arr[i] =arr[i-1] + arr[i-2];
        }
    }
    return arr[n-1];
}
console.log(feibolacci(3));

// 6.利用函数的递归调用实现斐波拉契数列

// **在开发中避免使用递归**
//   1、递归没有写好结束条件，意味着会无限调用
//    2.递归调用非常占据栈空间内存
function fib(n) {
    if (n == 0|| n == 1){
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(3));
```

### 6.函数的参数--arguments

<img src="F:\前端\笔记\js\arguments.png" style="zoom:25%;" />

```js
// 新函数：定义一个新函数，可以计算1/2/3/4……
var sum = 40;
function newSum() {
    let sum = 0;
    for(i = 0; i < arguments.length; i++){
        sum +=arguments[i];
    }
    return sum;
}

console.log(newSum(20, 30, 40, 50));
```

### 7.变量的作用域

<img src="img\变量的定义域.png" style="zoom:25%;" />

* **作用域链**
  * 根据内部函数可以访问外部函数的机制，用链式查找来决定哪些数据可以被内部函数访问，就成为作用域链，一般根据**就近原则**

### 8.函数的表达式写法

```js
// 1.定义方式一：函数的声明写法
function test() {

}
test();


// 2.定义方式二：函数表达式

//  2.1命名函数表达式
var abc1 = function test() {
console.log("test函数被调用");
}
abc1();

// 2.1匿名函数表达式
var abc2 = function() {
console.log("匿名函数被调用");
}
abc2();

// 函数都有属性 name
console.log(test.name);
console.log(abc1.name);
console.log(abc2.name);
```

### 9.立即执行函数

* ##### 什么是立即执行函数？

Immediately-Invoked  Function Expression(IIFE立即调用函数表达式)

```js
/* js中不允许直接在一个函数的声明中跟()来执行这个函数*/
// 1.1以下语句不可执行
/*
    function test() {
      console.log("test函数被调用")
    }()

    // 1.2 改进1
    // 可以在函数声明中加上（）来调用
    // 特点：执行完了之后立即被销毁
    (function test() {
      console.log("test函数被调用")
    })()
    // test();所以这个语句没有意义，报错
*/

// 1.3 改进2:将函数和执行的（）一起外层加一个（）
(function test() {
    console.log("test函数被调用")
}())

// 匿名函数表达式,可以直接在其后面加上（）来立即执行
var abc1 = function() {
    console.log("abc1函数被调用");
}()

console.log(typeof(abc1));
console.log(abc1);
```

### 10、预解析

javascript代码是由浏览器中的JavaScript解析器来执行的，JavaScript解析器在运行代码时分为两步：预解析与代码执行

* ##### 预解析

  * js引擎会将所有的 var 和 function 提升到当前作用域的最前面
  * 分为变量预解析和函数预解析，将变量声明或者函数声明提升到当前作用域的最前面，不提升赋值，不调用函数。

```js
// 案例一
var num = 10;
fun();

function fun() {
    console.log(num);//undefined
    var num = 20;
}

// 相当于执行以下
var num = 10;

function fun() {
    var num;
    console.log(num);
    num = 20;
}
fun();
```

```js
// 案例二
var a = 18;
f1();

function f1() {
    var b = 9;
    console.log(a);//undefined
    console.log(b);//9
    var a = '123';
}

//  相当于执行以下代码
var a;
function f1() {
    var a;
    var b;
    console.log(a);
    console.log(b);
    a = '123';
    b = 9;
}

a = 18;
f1();
```

**案例三: 特别注意：全局变量以及局部变量**

```js
// 案例三
f1();
console.log(c);
console.log(b);
console.log(a);

function f1() {
    var a = b = c = 9;
    // 相当于：
    // var a = 9; b = 9; c = 9;b c 没有赋值，没有 var 声明，当 全局变量看
    // 集体声明：var a = 9, b = 9, c = 9;
    console.log(a);
    console.log(b);
    console.log(c);
}

// 相当于以下
function f1() {
    var a = 9; b = 9; c = 9;
    // 集体声明：var a = 9, b = 9, c = 9;
    console.log(a);
    console.log(b);
    console.log(c);
}

f1();
console.log(c);
console.log(b);
console.log(a);
```

* ##### 代码执行

  按照书写顺序从上往下执行

### 11、JavaScript对象

#### 11.1什么是对象？

* 在JavaScript中，对象是一组无序的相关属性和方法的集合，所有的事物都是对象，例如字符串，数值，数组，函数等。

* 对象由属性和行为组成
  * 属性：事物的特征
  * 方法：事物的行为

#### 11.2为什么需要对象？

* 保存一个值，可以使用变量，保存一组数，可以用数组，如果要保存一个人的完整信息，需要对象，会更清晰，更强大。

#### 11.3创建对象的三种方法

* ##### 利用字面量创建对象

```js
// 一、利用对象字面量创建对象{}
// var obj = {};//创建一个空对象
var obj = {
    uname: '张三丰',
    age: 18,
    sex: "男",
    sayHi: function() {
        console.log("hello~");
    }
}
// 1.里面的属性或者方法采用键值对的形式 键 属性名： 值  属性值
// 2.多个属性或者方法中间用逗号隔开
// 3.方法冒号后面跟的是一个匿名函数



// 练习
var obj = {
    name: "keke",
    type: "阿拉斯加",
    age: 5,
    color: "red-brown",
    bark: function(){
        console.log("汪汪汪");
    },
    showFilm: function(){
        console.log("天外飞仙");
    },
}

console.log(obj.name);
obj.bark();

```

* ##### 变量 属性 函数 方法的区别

```js
    // 变量 属性 函数 方法的区别
    // 变量和属性相同点：都用来存储数据
    var num = 10;
    var obj = {
      age: 18
    }
    // 不同点：
    // 变量 单独声明并赋值，使用的时候直接写变量名 单独存在
    // 属性 在对象里面不需要声明，使用的时候必须是 对象.属性
    console.log(num);
    console.log(obj.age);
    // console.log(age)//报错

    // 函数和方法相同点
    // 都实现某种功能
    // 不同点
    // 函数 单独声明 调用时函数名() 单独存在
    // 方法 在对象里面 调用的时候 对象.方法()
```

* ##### 利用new object创建对象

```js
    // 利用new Object 创建对象
    var obj = new Object();//创建了一个空的对象
    // 注意Object O需要大写
    obj.uname = "张三丰";
    obj.age = 18;
    obj.sex = "男"; 
    obj.sayHi = function(){
      console.log("hello~");
    }
    console.log(obj.age);
    console.log(obj.uname);

    obj.sayHi();
```

* ##### 使用构造函数创建对象

  * 我们为什么需要构造函数?
  * 因为我们一次创建一个对象,里面很多属性和方法是大量相同的,我们只能复制
  * 因此我们可以利用函数的方法,重复这些代码,我们就把这个函数称为构造函数
  * 这个函数不一样,里面封装的不是普通代码,而是对象
  * 构造函数 就是把对象中公共的属性和方法封装到函数里面

```js
 // 构造函数语法格式
    // function 构造函数名() {
    //   this.属性 = 值;
    //   this.方法 = function() {}
    // }

    // 1.构造函数首字母大写
    // 2.我们构造函数可以不用renturn就可以返回结果
    // 3.调用构造函数，必须使用new
    // 4.我们只要new Star() 调用函数就创建一个对象
    function Star(uname, age, sex) {
      this.uname = uname;
      this.age = age;
      this.sex = sex;
    }

    var ldh = new Star("刘德华", 18, "男");
    console.log(ldh.sex,ldh.uname);
    // var ldh = new Object();
    ldh.hobby = "打篮球";
    console.log(ldh.hobby);
```

```js
    // 练习
    function Star(name, type, blood){
        this.name = name;
        this.type = type;
        this.blood = blood;
        this.attack = function(skill){
          console.log(skill);
        }
    }

    var lp = new Star("廉颇", "力量型", "500血量");
    var hy = new Star("后羿", "射手型", "100血量");
    lp.attack("近战");
    hy.attack("远程")
    console.log(lp.name,lp.blood);
    console.log(hy.name,hy.blood);
```

#### 11.4调用对象属性和方法的方法

```js
// 二、使用对象
// 1.调用对象的属性 我们使用 对象名.属性名
console.log(obj.age);
// 2.调用对象属性还有一种方法 对象名["属性名"]
console.log(obj["sex"]);
// 调用对象方法 对象名.方法名()不要忘记括号。
obj.sayHi();
```



#### 11.5、遍历对象的属性

```js
    var obj = {
      name: "keke",
      type: "阿拉斯加",
      age: 5,
      color: "red-brown",
      bark: function(){
        console.log("汪汪汪");
      },
      showFilm: function(){
        console.log("天外飞仙");
      }
    }
    
    // for in 遍历对象
    // for （变量 in 对象）
    for (k in obj){
      console.log(k);
      console.log(obj[k]);
    }
    //一般用k或者key来表示变量
```

#### 11.6封装对象

