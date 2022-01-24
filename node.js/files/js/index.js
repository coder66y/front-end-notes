
    let H = document.querySelector("#HH");
    let M = document.querySelector("#MM");
    let S = document.querySelector("#SS");

    function time() {
      let dt = new Date();
      let HH = dt.getHours();
      HH = HH < 10 ? '0' + HH :  HH;
      let MM = dt.getMinutes();
      MM = MM < 10 ? '0' + MM :  MM;
      let SS = dt.getSeconds();
      SS = SS < 10 ? '0' + SS :  SS;

      H.innerHTML = HH;
      M.innerHTML = MM;
      S.innerHTML = SS;
    }

    time();
    setInterval("time()",1000);
  