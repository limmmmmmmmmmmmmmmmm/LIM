todoList = [
    {해야할일:`밥먹기`, 상태: true }
] 
console.log(todoList);

function 등록(){
    let inputTodo = document.querySelector(`#할일`)

    let todo = inputTodo.value;
    
    let todoValue = {해야할일 : todo , 상태: true}

    todoList.push(todoValue)

    console.log(todoList);
   
    inputTodo.value = ''
    
    출력()
}

function 출력() {
    let todoTable = document.querySelector(`#todoTable`)
    let html = ``
    for(let i=1; i<todoList.length; i++){
        if (todoList[i].상태==true) {
            html +=    `<div style="background-color: blue;">
            <div>${todoList[i].해야할일} </div>
            <button id="변경" onclick="변경()" type="button">변경</button>
            <button id="삭제" onclick="삭제()" type="button">삭제</button>
        </div>`
        
        }
        else{html +=
            `<div style="background-color: red;">
            <div>${todoList[i].해야할일}</div>
            <button id="변경" onclick="변경()" type="button">변경</button>
            <button id="삭제" onclick="삭제()" type="button">삭제</button>
        </div>`
        }

        todoTable.innerHTML=html
    }

    
}

function 변경() {
    let 변경 = document.querySelector(`#변경`)

    let html = ``

    if (todoList[i].상태==true) {
        {html +=
            `<div style="background-color: red;">
            <div>${todoList[i].해야할일}</div>
            <button id="변경" onclick="변경()" type="button">변경</button>
            <button id="삭제" onclick="삭제()" type="button">삭제</button>
        </div>`
        }
    }
    else{    `<div style="background-color: blue;">
    <div>${todoList[i].해야할일} </div>
    <button id="변경" onclick="변경()" type="button">변경</button>
    <button id="삭제" onclick="삭제()" type="button">삭제</button>
    </div>`
    }
    todoTable.innerHTML=html
}