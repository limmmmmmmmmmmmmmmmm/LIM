let join = [
  
]
console.log( join);


function 등록(){
    let inputId = document.querySelector(`#아이디`)
    let inputPs = document.querySelector(`#비밀번호`)

    let id = inputId.value;
    let ps = inputPs.value;


    let 회원가입 = {아이디 : id , 비밀번호 : ps }

    join.push(회원가입)

    alert(`회원가입 성공`)

    console.log( join);

    inputId.value = ''
    inputPs.value = ''

}

function 로그인(){
    let inputId = document.querySelector(`#아이디`)
    let inputPs = document.querySelector(`#비밀번호`)

    let id = inputId.value;
    let ps = inputPs.value;

    for(let i=0; i<join.length; i++){

        if (join[i].아이디 == id){
            if (join[i].비밀번호 == ps) {
                alert(`로그인성공`);return;
            }
        }
    } // 
    // break; 
    alert('없는 아이디입니다.');

}
// return 

