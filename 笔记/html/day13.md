#                                                                          一、html5+css3

## 1、新增语义化

![](F:\前端\笔记\截图、\语义化元素.PNG)



## 2、媒体元素：

### video

![](F:\前端\笔记\截图、\video.PNG)

### audio

![](F:\前端\笔记\截图、\audio.PNG)

### input元素扩展

<img src="F:\前端\笔记\截图、\input元素拓展.PNG" style="zoom:25%;" />

# 二、flex布局

## 1、flex布局



<img src="F:\前端\笔记\截图、\flex布局/flex布局模型.PNG" alt="flex布局模型" style="zoom:25%;" />

## 2、flex相关的属性

<img src="F:\前端\笔记\截图、\flex布局/flex相关属性.PNG" alt="flex相关属性" style="zoom:25%;" />

## 3、flex-container相关

* ##### flex-direction（决定主轴的方向）

​                                                                  <img src="F:\前端\笔记\截图、\flex布局/flex-directin.PNG" style="zoom:25%;" /> 

* ##### justify-content（决定主轴上flex items如何排布）

  <img src="F:\前端\笔记\截图、\flex布局\justify-content.PNG" style="zoom:25%;" />

* ##### align-items（决定flex-items在交叉轴上的对齐方式）

  <img src="F:\前端\笔记\截图、\flex布局\align-items.PNG" style="zoom:25%;" />

* #####  align-content（决定交叉轴上flex items如何排布）

  <img src="F:\前端\笔记\截图、\flex布局\align-content.PNG" style="zoom:25%;" />

* ##### flex-wrap

  * flex items 是否可以换行的属性

  * 值：
    * nowrap(默认，不可以自动换行)
    * wrap（自动换行）
    * wrap-reverse（多行，对比wrap，cross start与cross end相反）

* ##### flex-flow

  * flex-direction和flex-wrap的简写

## 3、flex-items相关属性

* ### order

  * 决定flex-items的排布顺序

  *  可以设置任意整数，值越小越排在前面

  * 默认值为0；  

    ```css
     .item1{
         background-color: #f00;
         order: 15;
    }
    
    .item2{
        background-color: #0f0;
        order: 10;
    }
    
    .item3{
        background-color: #00f;
        order: 11;
    }
    /*item2/3/1 的顺序排布*/
    ```

* ### align-self

  与align-items作用相同，不同在于这个是flex-items自己的，会覆盖align-items的属性值。

* ### flex-grow

  <img src="F:\前端\笔记\截图、\flex布局\flex-grow.PNG" style="zoom:25%;" />

  所有的flex-grow加起来大于1，则包含块的剩余部分全部分给每个items,小于1,可能分不完。

* ### flex-shrink

  默认情况下，如果items没有设置可以换行，就会收缩。

  <img src="F:\前端\笔记\截图、\flex布局\flex-shrink.PNG" style="zoom:25%;" />

* ### flex-basis

  <img src="F:\前端\笔记\截图、\flex布局\flex-basis.PNG" style="zoom:25%;" />

* ### flex

​       属性是 flex-grow、flex-shrink 和 flex-basis 属性的简写属性。



