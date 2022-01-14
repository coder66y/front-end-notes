# 一、内置对象

<img src="img\内置对象.png" style="zoom:25%;" />

## 1.math对象

**`Math`** 是一个内置对象，它拥有一些数学常数属性和数学函数方法。`Math` 不是一个函数对象，所以不用new来调用

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math

### 1.1math对象取整方法

```js
    // 1.绝对值方法
    console.log(Math.abs(-5)); // 5
    console.log(Math.abs(5)); // 5
    console.log(Math.abs("-5")); // 5  隐式转换，字符串会转换为数字型
    console.log(Math.abs("coder66")); // NaN
    
    // 2.三个取整方法
    // 2.1Math.floor()  向下取整
    console.log(Math.floor(1.1)); // 1
    console.log(Math.floor(1.9)); // 1

    // 2.2 Math.round()  四舍五入
    console.log(Math.round(-1.5)); // -1
    console.log(Math.round(1.5)); // 2
    console.log(Math.round(-1.1)); // -1
    console.log(Math.round(1.1)); // 1

    // 2.3 Math.ceil() 向上取整
    console.log(Math.ceil(1.1)); // 2
    console.log(Math.ceil(-1.1)); // -1
    console.log(Math.ceil(-1.9)); // -1
```

### 1.2随机数方法

```js
 // 3 Math.random() 随机数方法 返回一个随机的小数  0 <= x < 1
    // 括号里面什么都不用加
    console.log(Math.random());
    // 我们想要得到两个整数之间的随机整数
    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // 随机点名
    var names = ["66", "李思思", "张三丰", "李四", "Lisa"]
    console.log(names[getRandom(0, names.length-1)]);

    //  案例：猜数字游戏
    var randomNum = getRandom(1, 10);
    // console.log(randomNum);
    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    while(1) {
      var num = prompt("请输入1-10之间的一个数字");
      if (num < randomNum){
        alert("该数字小了,继续猜");
        continue;
      }
      else if(num > randomNum) {
        alert("该数字大了，继续猜");
        continue;
      }
      else{
        alert("猜对了");
        break;
      }
    }
```

## 2.date对象

<img src="img\日期对象方法使用.png" style="zoom:25%;" />

日期对象 是一个构造函数，所以必须使用new来调用创建的日期对象

```js
    var date = new Date();
    console.log(date);//如果没有参数，就会返回当前系统的当前时间

    // 参数常用写法 数字型 2019, 10, 01 或者是字符串类型 "2019-10-1 8:8:80"
    var date1 = new Date(2019, 10, 01);
    var date2 = new Date("2019-10-1 8:8:8");
    console.log(date1);
    console.log(date2);
```

### 2.1格式化日期

![]()

```JS
var now = new Date();
console.log(now);//如果没有参数，就会返回当前系统的当前时间
week = ["天", "一", "二", "三", "四", "五", "六"]

console.log("今天是：", now.getFullYear() + "年" + now.getMonth() + 1 + "月" + now.getDate() + "日",
            "星期" + week[now.getDay()]); // 周日返回的是0

//今天是： 2022年01月2日 星期天
```

```JS
    // 要求封装一个函数，返回时分秒
    function getTime(date) {
      var h = date.getHours();
      var m = date.getMinutes();
      var s = date.getSeconds();
 
      return h + ":" + m + ":" + s;
    }
    console.log(getTime(now));
```

### 2.2时间戳

<img src="img\获得时间戳的四种方法.png" style="zoom:25%;" />

<img src="img\日期对象案例.png" style="zoom:25%;" />

```js
    function countDown(time) {
      var nowTime = +new Date();// 返回的是当前时间总的毫秒数
      var inputTime = +new Date(time);
      var times = (inputTime - nowTime) / 1000;//剩余时间总的毫秒数
       
      var d = parseInt(times / 60 / 60 / 24);
      d = d < 10?"0" + d : d;
      var h = parseInt(times / 60 / 60 % 24);
      h = h < 10?"0" + h : h;
      var m = parseInt(times / 60 % 60);
      m = m < 10?"0" + m : m;
      var s = parseInt(times % 60);
      s = s < 10?"0" + s : s;

      return d + "天" + h + "时" + m + "分" + s +"秒";
    }

    console.log(countDown("2022-1-2 24:00:00"));
```

## 3.数组对象

#### 3.1创建数组的两种方法

```js
    // 创建数组的两种方法
    // 1.利用字面量创建数组
    var arr = [1, 2, 3, 4, 5];
    console.log(arr[0]);

    // 2.利用new Array[]
    var arr1 = new Array(2); // 一个值表示长度，这个表示有两个数组元素，元素为空
    var arr2 = new Array(2, 3); // 两个值以上表示数组内容

    console.log(arr1); // [空属性 × 2]
    console.log(arr2); // [2, 3]
```

#### 3.2检测是否为数组

```js
    var arr3 = [1, 2, 3]
    var obj ={};

    // 检测是否为数组
    // instanceof 运算符 它可以用来检测是否为数组

    console.log(arr3 instanceof Array);
    console.log(obj instanceof Array);

    // 2.Array.isArray() H5新增的方法 ie9以上的版本支持
    console.log(Array.isArray(arr3)); 
```

#### 3.3添加删除数组元素的方法

<img src="img\数组对象删除和添加.png" style="zoom:25%;" />

```js
    // 添加数组对象的方法
    // 1.push() 在我们数组的末尾 添加一个或者多个数组元素
    var arr3 = [1, 2, 3];
    // arr3.push(4, "pink");//在数组后追加新元素
    console.log(arr3.push(4, "pink"));
    console.log(arr3);// 原数组会发生改变

    // 2.unshift() 在数组前加上新元素
    // arr3.unshift(0);
    console.log(arr3.unshift(0));
    console.log(arr3); // 原数组会发生改变

    // 3.pop() 删除数组最后一个数组元素
    // arr3.pop();
    console.log(arr3.pop());
    console.log(arr3);

    // 4.shift() 删除数组中的第一个元素
    arr3.shift();
    console.log(arr3);
```

#### 3.4数组翻转和排序方法

```js
    // 数组翻转和数组排序
    var arr = [1500, 1200, 2000, 2100, 1800]
    // 数组翻转和数组排序
    console.log(arr.reverse());

    arr1 = [13, 4, 77, 1, 7]
    arr1.sort(function(a, b){
      // return a - b; // 升序
         return b - a; // 降序
    })
    console.log(arr1); // 数组排序（冒泡排序）

```

#### 3.5获取数组元素索引

```js
    // 返回数组索引号方法 indexof(数组元素) 作用返回数组元素的索引号
    // 只返回第一个满足条件的索引号
    var arr = ["red", "blue", "green", "pink", "blue"];
    console.log(arr.indexOf("blue")); // 1
    console.log(arr.indexOf("yellow")); // -1
    // 从后面开始索引
    console.log(arr.lastIndexOf("blue")); // 4 

```

##### 应用

```js
    // 案例 数组去重
    var arr = ['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c','b'];
    var newArr = [];
    for(i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) < 0) {
        newArr.push(arr[i]);
      }
    }

    console.log(newArr);
```

#### 3.6数组转换为字符串

```js
    var arr = [1, 2, 3];
    // 1.toString() 将数组转化为字符串
    console.log(arr.toString());

    // 2.join(分隔符)
    var arr = ["red", "blue", "green", "pink", "blue"];
    console.log(arr.join("_")); // red_blue_green_pink_blue
```

## 4.基本包装类型

<img src="img\基本包装类型.jpg" style="zoom:;" />

```js
    var str = "andy";
    console.log(str.length);
    // 对象才有属性和方法 
    // 为什么简单数据类型 str 也会有length属性？
    // 基本包装类型： 就是把简单的数据类型包装成了复杂数据类型

    // 1.把简单数据类型包装为复杂数据类型
    var temp = new String("andy");
    // 2.把临时变量的值给str
    str = temp;
    // 3.销毁这个临时变量
    temp = null;
```

### 4.1字符串对象

#### 4.1.1根据字符串返回位置

```js
    // 案例 查找字符串"abcoefoxyozzoppo"中所有o出现的位置以及次数

    var str = "abcoefoxyozzoppo";
    var i = str.indexOf("o");
    var j = 0;
    while(i > 0) {
      console.log(i);
      i = str.indexOf("o", i + 1)
      j++;
    }
    console.log(j);
```

```js
    // 课后作业
    var str = ['red', 'blue', 'red', 'green', 'pink', 'red'];
    var index = str.indexOf('red');
    console.log(index);
    var num = 0;
    while(index >= 0) {
      console.log(index);
      index = str.indexOf('red', index + 1);
      num++;
    }
    console.log("red出现的次数是:",num);
```

#### 4.1.2根据位置返回字符

```js
    var str = "andy";
    console.log(str.charAt(3));

    console.log(str[2]);//H5新增
    

    // 遍历所有字符
    for(i = 0; i < str.length; i++) {
      console.log(str.charAt(i));
    }
```

#### 4.1.3案例 返回字符位置

```js
    // 案例 判断字符串"abcoefoxyozzoppo"中出现最多的字符，并统计次数
    // 第一步，写到对象里面
    var str = "abcoefoxyozzoppo";
    var o = {};
    for(var i = 0; i < str.length; i++) {
      var chars = str.charAt(i);
      // 注意：o[chars]： o["chars"]和o.chars不一样
      // 第一个指o对象里面的全部属性
      // 第二个和第三个指o对象里面的chars属性
      if (o[chars]) {
        o[chars]++;

      } 
      else{
        o[chars] = 1;
      }
    }
    console.log(o);
    // 第二步，遍历对象
    var max = 0;
    var ch = "";
    for(var k in o){
      if (max <= o[k]){
        max = o[k];
        ch = k;
      }
    }
    console.log(max);
    console.log("最多的字符是："+ch);
```

### 4.2字符串操作方法

```js
    // 1.concat("字符串1", "字符串2",……)
    var str = "andy";
    console.log(str.concat("red"));

    // 2.substr("截取的起始位置", "截取的几个字符");
    var str1 = "改革春风吹满地";
    console.log(str1.substr(2, 2));

    // 3.replace("被替换的字符","替换为的字符")
    var str = "andyandy";
    console.log(str.replace("n", "a"));// 只替换第一个字符

    // 替换所有的"o",可以用来过滤敏感词
    var str = "abcoefoxyozzoppo";
    while(str.indexOf("o") > 0) {
      str = str.replace("o","*");
    }
    console.log(str);

    // 4.字符转化为数组 split("分隔符")

    var str = "red& pink& blue";
    console.log(str.split("& "));
```

##### 4.2.1作业

```js
    var str = "abaasdffggghhjjkggk44gfddsssss3444343";
    // 字符串的长度
    console.log(str.length);
    // 取出指定位置的字符：如0,3,5,9;
    console.log(str[0], str[3], str[5]);
    console.log(str.charAt(0),str.charAt(3),str.charAt(5));
    // 找出一下字符是否在字符串中存在：i,c,b
    var i, c, b;
    console.log(str.indexOf(i));
    console.log(str.indexOf(c));
    console.log(str.indexOf(b));

    // 替换字符
    console.log(str.replace("g","22"));
    console.log(str.replace("ss","b"));

    // 截取字符串
    console.log(str.substr(1,5));
    // 找出出现最多的字符，和出现的次数
    var o = {};
    var max = 0;
    var maxChars = [];
    for (i = 0; i < str.length; i++) {
      var chars = str.charAt(i)
      if (o[chars]){
        o[chars]++;
      }
      else{
        o[chars] = 1;
      }
    }

    for(k in o){
      if (max <= o[k]){
        max = o[k];
      }
    }
//这里将出现次数相同的对象找出
    for(k in o){
      if(o[k] == max){
        maxChars.push(k);
      }
    }

    console.log(o);
    console.log("出现次数最多的字符:",maxChars.toString());
    console.log("出现最多的次数:",max);
```

## 5.数据类型

简单数据类型放在栈里面，存放的是值

复杂数据类型首先在栈里面存放地址，真正的值放在堆里面



