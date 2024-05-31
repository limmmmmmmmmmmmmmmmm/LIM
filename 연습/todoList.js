todoList = [
    {할일 : `밥먹기`, 상태 : true},
    {할일 : `잠자기`, 상태 : false}
]       
console.log(todoList);

//그냥 볼때, 등록/수정/삭제 할때

function input() {
    let input = document.querySelector(`#input`).value;

    let 할일 = {할일 : input, 상태 : false}

    todoList.push(할일);

    print();
}



print();
function print() {
    let 출몰구역 = document.querySelector(`#출목구역`)

    let 무엇을 = ``

    for(let i = 0 ; i<todoList.length ;i++){
        무엇을 +=    `<div>
                         todoList[i].할일
                        <button></button>
                        <button></button>
                    </div>`
    } 

    출몰구역.innerHTML=무엇을
}