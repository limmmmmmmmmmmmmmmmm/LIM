/*
    document -> HTMl을 가져오겠다 / querySelector 선택해서 가져오겠다
    -요소 불러오는 함수
    document : HTML 전체요소
    document.querySelector(`선택자`) : 요소1개의 객체 변환
    document.querySelectorAll(`선택자`) : 요소 여러개 객체를 배열로 변환
    -선택자
    1.마크업 2. .클래스명 3. ID명

    -요소 조작 함수
    .innerHTML 속성
      - 사용가능 요소 : <div>, <table>, <>열고 닫는 마크업은 다 가능
      - 사용 불가능 : <input>, <img>, <br>
      (호출) document.querySelector(`.box2`).innerHTML
      (수정) document.querySelector(`.box2`).innerHTML = 데이터


    .value 속성
    <호출> document.querySelector(`선택자`).value
    <선언> document.querySelector(`선택자`).value = HTML 형식의 문자열데이터

    src 속성
    - 사용가는 속성 : <img> <audio> <video>

    .style 속성
    <전체호출>document.querySelector(`선택자`).style
    <전체수정>document.querySelector(`선택자`).style = 새로운`css`
    <일부호출>document.querySelector(`선택자`).style.css속성명
      -css속성명 작성시 카멜표기법 예시
         1. background-color -> backgroundColor
         2. margin-left -> marginLeft
*/

//1. DOM 객체 확인
console.log(document); //현재 실행된 HTML을 뜻함
console.log(document.body); //body를 가져옴
console.log(document.querySelector(`body`)); //body를 가져옴

/*
    <div>박스1</div>
    <div>박스2</div>
    <div>박스3</div>
 */
//2. document.querySelector(`선택자`)
console.log(document.querySelector(`div`)); //박스1 만 가져옴
console.log(document.querySelectorAll(`div`));  //전체를 다 가져옴(배열로)

console.log(document.querySelector(`.box2`));// 클래스로 호출
console.log(document.querySelector(`#box3`));// 아이디로 호출

console.log(document.querySelector(`body > div`)); //자식 자손선택자까지 

//3. 선택된 요소(마크업)를 저장

let box3 = document.querySelector(`#box3`)
console.log(box3);

/*2가지 value 경우
let box3 = document.querySelector(`#box3`)
let box = box3.value;

let box3 = document.querySelector(`#box3`).value;
*/


//4. innerHTMl : 문서의 요소 필요
console.log(document.querySelector(`.box2`).innerHTML) //호출
document.querySelector(`.box2`).innerHTML = `box2` //HTMl 박스를 box로 수정


//5. value
console.log(document.querySelector(`input`).value)
document.querySelector(`input`).value=`강호동` //강호동으로 수정됨

let select = document.querySelector(`select`)
console.log(select.value); //첫번째 목록이 기본값 이므로 바나나 호출

select.value = `수박` // 목록을 수박으로 수정대입

//console.log(document.querySelector('textarea').value );
//document.querySelector(`textarea`).value = `긴글텍스트`


//6. 
//document.querySelector(`img`).src =  

//7. style
    //전체 스타일
console.log(document.querySelector(`#box4`).style);
document.querySelector(`#box4`).style = `color : white; background-color:blue`
    //일부분 스타일
    //카멜 표기법 : 낙타 등 모양처럼        Why?함수에는 특수문자를 사용할수 없음
    //carspeed -> catSpeed, background-color -> backgroundColor
console.log(document.querySelector(`#box4`).style.backgroundColor); 
