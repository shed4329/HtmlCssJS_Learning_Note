console.log("js");
var title = document.querySelector("h1");
//title.style.color = "red";
title.style.background = "black";

document.querySelector("#sp-list").addEventListener("click",function(){
    title.classList.toggle("title");
})
//返回html内容
title.innerHTML="<em>Goodbye<em>"
//返回文本
console.log(title.textContent);
//属性 id或class之类
document.querySelector("li").attributes;

document.querySelector("li").getAttribute("class");

document.querySelector("li").setAttribute("class","ll")