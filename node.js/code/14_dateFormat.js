function dateFormat(dtStr) {
  let dt = dtStr;

  const y = dt.getFullYear();
  const m = padZero(dt.getMonth() + 1);
  const d = padZero(dt.getDate());
  const num = dt.getDay();
  const arr = ['天','一', '二', '三', '四', '五', '六'];
  const w = arr[num];


  const hh = padZero(dt.getHours());
  const mm = padZero(dt.getMinutes());
  const ss = padZero(dt.getSeconds());

  return `${y}年${m}月${d}日  星期${w}  ${hh}:${mm}:${ss}`;

  // 定义补零函数

  function padZero(n) {
    return n < 10 ? '0' + n : n;
  }
}

module.exports = {
  dateFormat,
}