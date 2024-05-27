const nameList = []

let 등록 = function(){
    let input = document.querySelector(`#name`)

    let name = input.value;

    if(nameList.indexOf(name)>=0){alert(`중복된 이름입니다.`)}
    else if(name.length != 3){alert(`3글자가 아닙니다.`)}
    else if(!isNaN(name[0])||!isNaN(name[1])||!isNaN(name[2])){alert(`숫자를 포함할수 없습니다.`)}
    else{

    nameList.push(name);   

    출력()

    input.value = ``
    }
}

function 삭제(){
    let input = document.querySelector(`#name`);

    let name = input.value;

    let deleteIndex = nameList.indexOf(name);

    if( deleteIndex != -1){  nameList.splice( deleteIndex , 1 );}
    else{ alert('없는 회원 입니다.'); }

    출력()

    input.value = ``

}



function 출력(){
    let nameTable = document.querySelector(`#nameTable`)

    let html = `<tr><th>번호</th><th>이름</th></tr> `

    for(let i = 0 ; i < nameList.length ; i++){
        html += `<tr> 
                <td> ${ i+1 } </td> 
                <td> ${ nameList[i] } </td> 
                </tr>`
    }console.log( html );

    nameTable.innerHTML = html;





}