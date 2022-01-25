import $ from 'jquery';

// 定义jQuery的入口函数
$(function () {
  // 实现奇数偶数行变色
  $('li:odd').css('background-color', 'red');
  $('li:even').css('background-color', 'pulm');
})
