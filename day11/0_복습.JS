//1. 복습예제 : 특정 html(star1 div)에 `☆`을 5개를 출력하시오
/* 

*DOM객체
document.querySelector() : 특정 선택자의 html 요소를 js객체로 반환해주는 함수
document.querySelector('#idName')
document.querySelector('.cssName')
document.querySelector('tagName')


Dom객체.innerHTML = 마크업 사이에 넣을 HTML형식의 문자열
    * <마크업> 여기 </마크업>
    * <div></div>, <ol><ol>  <span><span>
    * <input> <img> 등 은 innerHTML 사용 불가능 

*/

let star =  '☆'            //1. 데이터구성
html = ''
for ( let i = 1 ; i <= 5 ; i++ ){     //2. 데이터를 1부터 5까지 1씩 증가하면서 하나씩 출력
    html += '☆'
    // 누적합계 : 변수+=값, 변수 = 변수 + 값
}
//4. 특정 HTML의 innerHTML에 변수값 대입하기.
document.querySelector('#star1').innerHTML = html;

//2. 복습예제 특정html(star div)에 총점 5점에서 고객평점을 출력하시오.
//  출력형식 : 만약에 고객평점이 3점이면 ★★★☆☆
let 고객평점 = 3;
let html2 =''
for(let i = 1; i<=5; i++){
    if (i<=3) {html2 += '★'; continue;        
    }
    html2 += '☆'
}
document.querySelector('#star2').innerHTML = html2


//3. 복습예제 : 특정html(sheet div)에 좌석배열 상태에 아래와 같이 출력하시오
let sheetArray = ['O', 'X' , 'O' , 'O', 'X' , 'O' ]

for(let i = 0 ; i<=sheetArray.length-1 ; i++){
    html3 += '<div></div>'
}

document.querySelector('#sheet').innerHTML = html3;
