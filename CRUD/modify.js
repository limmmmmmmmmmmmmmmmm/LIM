/*

    수정페이지
        1.URL 매개변수/ 쿼리스트링의 게시물번호 (no) 호출
        2.해당 게시물번호의 title,content 정보를 html 대입
        3. 새롭게 입력받은 값 수정처리

*/

//1.현재 수정할 게시물의 번호를 URL 쿼리스트링에서 호출
let no = new URL(location.href).searchParams.get('no');
console.log(no);

//2. 수정할 게시물의 기존 내용물을 넣어주는 함수 : JS 열렸을떄
let boardList = []
board();
function board() {
    
    boardList = JSON.parse(localStorage.getItem('boardList'));
    if (boardList==null) { boardList = [];}

    for (let i = 0; i < boardList.length; i++) {
        if (boardList[i].no == no) {
            document.querySelector('#title').value = boardList[i].title;
            document.querySelector('#content').value = boardList[i].content;

            return;
        }        
    }
}

//3.
function modify() {
    



}