const body = document.querySelector("body");
const IMG_NUM = 4;

function paintImg(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add('bgImg');
    body.appendChild(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUM);
    return number;
}

function init(){
    const randomNum = genRandom();
    paintImg(randomNum);
}

init();