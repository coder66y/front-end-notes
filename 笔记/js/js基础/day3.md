# 一、数组

### 1.数组的基本操作

```js
// 1.定义数组
var movies = ["海王", "上海堡垒", "唐人街探案","门锁"];

// 2.获取数组的长度属性：length
console.log(movies.length);

// 3.根据索引值获取数据
var m1 = movies[1];
var m2 = movies[5]; // 不存在的数值，不会报错，但是会显示为undefined  
console.log(m1, m2);
```

### 2.数组的遍历和反向遍历

对每个元素都访问一次就叫遍历

```js
// 数组的遍历
for (var i = 0; i < movies.length; i++ ){
    console.log(movies[i]);
}
// 数组的反向遍历
var m = movies.length
for (var i = 0; i < m; i++ ){
    console.log(movies[m-1-i]);
}
```

### 3.数组元素的拼接

```js
// 数组的元素拼接
var message = "";
for (var i = 0; i < movies.length; i++ ){
    message += movies[i];
    if (i == movies.length-1){
        break;
    }
    message += "-";
}
console.log(message);
```

### 4.求数组中的数字和平均值

```js
var nums = [18, 24, 20, 20, 18, 20];
var sum = 0;
for (var i = 0; i < nums.length; i++){
    sum += nums[i]
}
console.log(sum, sum/nums.length);
```

### 5.找出数组中的最大值

```js
var nums = [18, 24, 20, 29, 18, 20];
var max = nums[0];
for (var i = 0; i < nums.length; i++) {
    if (max <= nums[i]) {
        max = nums[i];
    }
}
console.log(max);
```

### 6.反转数组

```js
// 反转数组
var movies = ["海王", "上海堡垒", "唐人街探案","门锁"];
var f_movies = [];
for (var i = movies.length - 1; i >= 0; i--) {
    f_movies[movies.length - i - 1] = movies[i];
}
console.log(f_movies);
console.log(movies);
```

### 7.数组的排序--排序算法

#### 7.1冒泡排序、选择排序、插入排序

```js
// 冒泡排序
var nums = [18, 24, 20, 21, 19, 23];
// max = nums[0];
for (var i = nums.length-1; i > 0; i--) {
    for (j = 0; j < i; j++) {
        if (nums[j] > nums[j + 1]) {
            var temp = nums[j];
            nums[j] = nums[j + 1];
            nums[j + 1] = temp;
        }
    }
}
console.log(nums);
```

#### 7.2堆排序、希尔排序、快速排序

# 二、