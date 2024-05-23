//메모리 구성
let idlist = []
let pslist = []


//함수 구성
function signup(){   

    let idinput = document.querySelector(`#signid`); console.log(signid);
    let psinput = document.querySelector(`#signps`);


    let id = idinput.value;
    let ps = idinput.value;


    idlist.push(id);
    pslist.push(ps);

    alert(`회원가입 성공`);
}


function login(){

    let loginid = document.querySelector(`#loginid`)
    let loginps = document.querySelector(`#loginps`)
  
    let id  = loginid.value;
    let ps  = loginps.value;

    //기존 데이터와 비교
    let index = idlist.indexOf(id)

    if( index != -1 ){
    
        if( pslist[index] == ps ){
        alert(`로그인성공`)
        }
         else{alert(`패스워드가 다릅니다.`)}
    }

    else{alert(`없는 아이디입니다.`)}
    
}