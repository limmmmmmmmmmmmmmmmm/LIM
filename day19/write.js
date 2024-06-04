/*

  (저장)  c : 회원가입           글쓰기                       제품등록
  메모리저장 배열명.push()

  (호출)  R : 로그인, 내정보     전체글출력, 개별글츨력        제품출력
  메모리호출   전체호출:for문, 개별호출:배열명[]

  (수정)  U : 회원수정           글수정                       제품수정
  메모리수정   배열명[].속성명 = 새로운값

  (삭제)  D : 회원탈퇴            글삭제                      제품수정
  메모리삭제    배열명.splice(인덱스,1)


*/

// 로그인 상태 유효성검사
let loginNo = sessionStorage.setItem(`loginNo`);
// 만약에 없으면
if (loginNo == null) {
    alert(`로그인후 글쓰기가 가능합니다.`);
    location.href="login.html";
}



let boardList = []

function _write() { console.log(`write()`);
    
    //1. html 입려된 데이터 가져오기
    let title = document.querySelector(`#title`).value;
    let content = document.querySelector(`#content`).value;


    //2.유효성검사

    let writer = '';
    let memberList = [];
    memberList = JSON.parse(localStorage.getItem(`memberList`));
    if (memberList==null) {memberList  ==null}

    for (let i = 0; i < memberList.length; i++) {
        if (memberList[i].no==loginNo) {
            
            writer = memberList[i].id;

            break;

        }
    }







    //3. 데이터 가공 (입력의 추가정보, 원하는 데이터형식 => 객체)
    let board = {   
        no : boardList.length == 0 ? 1 : boardList[boardList.length-1].no+1,
        title : title,
        content : content,
        writer : `이이이`,
        date : new Date(),
        view : 1
    }

    //4. 저장
    boardList.push(board); 

   


    //5. 안내후 이후 처리
    alert(`글쓰기 성공`)
    location.href="board.html"
}