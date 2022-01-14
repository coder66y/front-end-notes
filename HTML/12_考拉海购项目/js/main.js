let leftAside = document.querySelector(".left-aside");
let rightAside = document.querySelector(".right-aside");
let main = document.querySelector("#main");
let mainTop = main.offsetTop;
let leftAsideTop = leftAside.offsetTop - mainTop;
let rightAsideTop = rightAside.offsetTop - mainTop;


document.addEventListener("scroll", function() {
    // console.log(window.pageYOffset);
    if(window.pageYOffset >= mainTop){
    leftAside.style.position = "fixed";
    leftAside.style.top = leftAsideTop + "px";
    leftAside.style.margin = "0";
    leftAside.style.left = "6%";

    // console.log(leftAside.offsetLeft);
    rightAside.style.position = "fixed";
    rightAside.style.top = rightAsideTop + "px";
    rightAside.style.margin = "0";
    rightAside.style.left= "88%";
    }
    else{
        leftAside.style.position = "";
        leftAside.style.top = "";
        leftAside.style.margin = "";
        leftAside.style.left = "";
        leftAside.style.right = "";
        

        rightAside.style.position = "";
        rightAside.style.top = "";
        rightAside.style.margin = "";
        rightAside.style.right = "";
        rightAside.style.left= "";
    }
})


