function animate(obj, target,callback) {
  clearInterval(obj.timer);
    obj.timer = setInterval(function(){
    let step = Math.ceil((target - obj.offsetLeft) / 10);
    step = step > 0?Math.ceil(step) : Math.floor(step);
    if(obj.offsetLeft == target) {
      clearInterval(obj.timer);
      if(callback){
        callback();
      }
    }
    else{
      // 把每次 +5 改为一个慢慢变小的值 步长值
      obj.style.left = obj.offsetLeft + step+ "px";
    }
  },10);
}
