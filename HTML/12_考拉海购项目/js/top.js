// 轮播图中自动生成小圆圈的个数
let swiper = document.querySelector(".swiper");
let control = swiper.querySelector(".control");
let prev = control.querySelector(".prev");
let next = control.querySelector(".next");
let num = 0;
let circle = 0;
let timer = null;


// 1.按钮选中效果：鼠标悬浮
swiper.addEventListener("mouseenter", function() {
  control.style.display = "block";
  clearInterval(timer);
})
swiper.addEventListener("mouseleave", function() {
  control.style.display = "none";
  timer = setInterval(() => {
    next.click();
  }, 3000);
})
prev.addEventListener("mouseenter",function() {
  prev.style.backgroundPosition = "-625px -153px";
  clearInterval(timer);
})
prev.addEventListener("mouseleave",function() {
  prev.style.backgroundPosition = "";
  timer = setInterval(() => {
    next.click();
  }, 3000);
})
next.addEventListener("mouseenter",function() {
  next.style.backgroundPosition = " -670px -153px";
  clearInterval(timer);
})
next.addEventListener("mouseleave",function() {
  next.style.backgroundPosition = "";
  timer = setInterval(() => {
    next.click();
  }, 3000);
})

// 2.动态生成小圆点 有几张图，就生成几个小圆点
let ul = swiper.querySelector("ul");
let lis = ul.children;
let dot = swiper.querySelector(".dot");
let swiperImgWidth = ul.children[0].offsetWidth;
for(let b = 0; b < lis.length; b++) {
  // 创建一个i，把i插入span.dot里面
  let i = document.createElement("i");
  // 记录当前小圆圈的索引号
  i.setAttribute("index", b);
  // 将i放入dot里
  dot.appendChild(i);
  // 3.小圆圈的排他思想：悬浮效果
  i.addEventListener("click",function() {
    for(let b = 0; b < dot.children.length; b++){
      dot.children[b].className = "";
    }
    this.className = "active";
    // 4.点击小圆点 移动图片
    // 设置小圆圈与图片之间的互动：点击小圆圈 相应图片滚动
    // 图片的索引号 × 图片的宽度
    let index = this.getAttribute("index");
    num = index;
    circle = index;
    animate(ul, -index * swiperImgWidth )
  })
}
// 设置第一个小圆圈为active
dot.children[0].className = "active";

// 5.按钮滚动图片
// 克隆第一张图片，放到ul的最后面
let first = ul.children[0].cloneNode(true);
ul.appendChild(first);

next.addEventListener("click", function(){
  // 图片无缝滚动
  if(num == ul.children.length - 1){
    ul.style.left = "0";
    num = 0;
  }
  num++;
  animate(ul, -num * swiperImgWidth, function() {
    flag = true;
  });
  // 6.点击右侧按钮，小圆圈跟着一起变化
  circle++;
  if(circle == ul.children.length-1){
    circle = 0;
  }
  circleChange();
})

prev.addEventListener("click", function() {
  if(num == 0) {
    num = ul.children.length - 1;
    ul.style.left = - num * swiperImgWidth + "px";
  }
  num--;
  animate(ul, -num * swiperImgWidth, function() {
    flag = true;
  });

  if(circle == 0) {
    circle = ul.children.length - 1;
  }
  circle--;
  circleChange();
})
  

 function circleChange() {
  for(let b = 0; b < dot.children.length; b++){
    dot.children[b].className = "";
  }
  dot.children[circle].className = "active";
 }

//  自动播放轮播图
 timer = setInterval(() => {
  next.click();
}, 3000);




