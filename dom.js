//finding element using dom 

const ele1=document.getElementById("box-1");
console.log(ele1); 

//using class name 
const ele2 =document.getElementsByClassName("container");
console.log(ele2[0]);


//using tag 
const tg=document.getElementsByTagName("div");
console.log(tg);


//using css selector
const select =document.querySelector('.container #box-1');
console.log(select)
