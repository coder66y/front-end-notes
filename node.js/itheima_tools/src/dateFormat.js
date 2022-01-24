function dateFormat(dataStr) {
  let dt = new Date(dataStr);

  const Y = padZero(dt.getFullYear());
  const M = padZero(dt.getMonth() + 1);
  const D = padZero(dt.getDate());
  const w = dt.getDay();
  const arr = ['天','一', '二', '三', '四', '五', '六'];
  const week = arr[w]

  const H = padZero(dt.getHours());
  const m = padZero(dt.getMinutes());
  const s = padZero(dt.getSeconds());

  let dtStr = `${Y}年${M}月${D}日  星期${week}  ${H}:${m}:${s}`;
  return dtStr;
}

function padZero(n) {
  return n < 10 ? '0' + n : n;
}

module.exports = {
  dateFormat,
}