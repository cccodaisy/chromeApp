/*
function you(name, age){
    console.log(" 안녕 ", name , "너는 ", age, " 살 이야. ")
}
you("이시월", 6);
you("이토리", 3);

 function family(gender, no){
     console.log("우리집 서열은", gender, "가 ", no, "순위 이다" )
 }

 family("여자", 1);

 const calculator = {
     plus : function(a, b){
         return a + b;
     },
     minus : function (a, b){
         return a - b;
     },
     multi : function(a, b){
         return a * b;
     },
     divide : function(a, b){
         return a / b;
     }
 }

 const plus = calculator.plus(5, 2)
 const minus = calculator.minus(5, 2)
 const multi = calculator.multi(5, 2)
 const divide = calculator.divide(5, 2)
 console.log(divide);
 
const title = document.getElementById("title");

console.log(title)
title.innerHTML = "Hi! from JS"
console.dir(title)
title.style.color = "yellow";


function handleColor(){
    title.style.color = "blue";
}
title.addEventListener("click", handleColor);

const title = document.querySelector("#title");
const BASE_COLOR = "rgb(153, 170, 255)";
const OTHER_COLOR = "#7f8c9a";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();
*/
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
    
    /* toggle 은 아래 문범과 같은기능
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if (!hasClass) {
        title.classList.add(CLICKED_CLASS);
    }else {
        title.classList.remove(CLICKED_CLASS);
    }*/
    /*const currentClass = title.className;
     if (currentClass !== CLICKED_CLASS) {
        title.className = CLICKED_CLASS;
    } else {
        title.className = "";
    }*/
} 
function init() {
    title.addEventListener("click", handleClick);
}
init();