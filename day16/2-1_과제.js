todoList = [
    {할일 : `밥먹기`, 상태 : false},
    {할일 : `잠자기`, 상태 : false}
]

출력();
function 출력() { 

    let 출력구역 = document.querySelector(`#출력구역`)

    let html = ``   
    
    for(let i = 0; todoList.length; i++){
        html += `   <div>${todoList[i].할일}</div>
                    <button>수정</button>
                    <button>삭제</button>`  
    }
    
    출력구역.innerHTML = html
 }