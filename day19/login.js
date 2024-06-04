/*

    로그인페이지
        1. 아이디I와 비밀번호 입력받아 기존 회원 목록에 일치한 정보 찾기
        2. 로그인 성공시
            1. 세션저장소 로그인 성공 여부(회원번호) 저장하기
            2. 메인 (index.html)로 이동하기
        3. 로그인 실패시    
            0. 결과 안내


    * 단) 회원 목록은 localStoeage 사용할것
*/
memberList=[]


function login() { console.log(`login()`);

    memberList = JSON.parse(localStorage.getItem(`memberList`))
    if (memberList == null) { memberList = [];}


    let id = document.querySelector(`#idInput`).value;
    let pw = document.querySelector(`#pwInput`).value;

    for (let i = 0; i < memberList.length; i++) {
        let member = memberList[i];
        if (member.id == id && member.pw == pw) {
            alert(`로그인 성공`);
            // 만약에 로그인 성공시 세션저장소 부여
            sessionStorage.setItem(`loginNo`, member.no);
            location.href="index.html";
            return;
        }        
    
    }

    alert(`로그인 실패`);
}