const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = [];


function delToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    //filter는 forEach와 같이 각각 실행되게 해줌
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDoList.removeChild(li);
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
//JSON.stringify(obj) obj를 string으로 변화 시켜줌

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;  
    if(toDos.length < 5){
        delBtn.innerText = "❌";
        delBtn.addEventListener("click", delToDo);
        span.innerText = text;
        li.appendChild(span);
        li.appendChild(delBtn);
        li.id = newId;
        toDoList.appendChild(li);
        const toDoObj = {
            text: text,
            id : newId
        }
        toDos.push(toDoObj);
        saveToDos();
    }else{
        alert("limit 5.")
    }
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}
/*function ex(toDos){
    console.log(toDos.text);
}*/

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        //JSON.parse(str) string를 obj으로 변화 시켜줌
        //parsedToDos.forEach(ex); 아래와 같음
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    } else {

    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();