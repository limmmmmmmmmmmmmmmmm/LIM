// 복습예제 1: 1차점수, 2차점수 입력받아 총점이 150점 이상이면 성공 아니면 실패
/*
let point1 = prompt("1차 점수를 입력하시오 :")*1;
let point2 = prompt("2차 점수를 입력하시오 :")*1;

let total = point1+point2 ; console.log(total);



let msg = total >=150 ? "성공" : "실패" ; console.log(msg);

let html = `결과 : ${msg} `;

let divVar = document.querySelector(`#result1`);   console.log(divVar);
result1.innerHTML = html
*/

/*복습예제2: 
두 사람의 이름을 입력 받아 
만일 이름이 '유재석' 이면 (방장) 이라고 이름뒤에 붙이기
HTML의  <ol>의 두사람의 이름을  <li>으로 출력하시오


*/

let 이름1 = prompt(`이름 1 : `)
let 이름2 = prompt(`이름 2 : `)

console.log( 이름1=='유재석' ?  이름1+`(방장)` : 이름1 )
console.log( 이름2=='유재석' ? `${이름2}(방장)` : 이름2 )

//3. HTML출력하기

let html = ` <li>${이름1}</li>    
        <li>${이름2}</li>`;  console.log(html);

let result2 = document.querySelector(`#result2`);
result2.innerHTML = html;
