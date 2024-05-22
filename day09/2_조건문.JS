/*

문제1 


*/
/*문제1
let 점수1 = prompt(`점수 1:`)*1;
let 점수2 = prompt(`점수 2:`)*1;
let 점수3 = prompt(`점수 3:`)*1;
let 총점 = 점수1 + 점수2 +점수3 ;
if (총점>=90) {console.log(`성공`);} 
else {console.log(`실패`);} 
*/

/*문제2
let 점수1 = prompt(`점수 1:`)*1;
let 점수2 = prompt(`점수 2:`)*1;
if (점수1>점수2) {console.log(점수1);}
else{console.log(점수2);}
*/

/*
let 점수1 = prompt(`점수 1:`)*1;
let 점수2 = prompt(`점수 2:`)*1;
let 점수3 = prompt(`점수 3:`)*1;

if (점수1>점수2){
    if (점수1>점수3) {console.log(점수1);}
} ;
if (점수2>점수3){
    if (점수2>점수1) {console.log(점수2);}
} ;
if (점수3>점수2){
    if (점수3>점수1) {console.log(점수3);}
} ;
*/

/*문제4 문자 바꾸기 
let a = prompt('정수')*1;
let b = prompt('정수')*1;
let c = prompt('정수')*1;

if(a>b){
    let temp=a;
    a = b ;
    b = temp;
};
if(a>c){
    let temp=a;
    a = c ;
    c = temp;
};
if(b>c){
    let temp=b;
    b = c;
    c = temp;
}
console.log(`${a}->${b}->${c}`);
*/


/*문제 5
let 점수 = prompt(`점수 :`);
if (점수>=90) {console.log(`A등급`);}
else if (점수>=80) {console.log(`B등급`);}
else if (점수>=70) {console.log(`C등급`);}
else {console.log(`재시험`);}
*/



/*
let ID = prompt(`ID:`);
let PASSWORD = prompt(`PASSWORD:`);
if (ID ==`admin`){
    if (PASSWORD ==`1234`) {console.log(`로그인성공`);}
};  
if (ID !=`admin`|| PASSWORD !=`1234`)
     {console.log(`로그인실패`);}
;
*/
/*
let fruitList = [ '바나나' , '사과' ];   //[조건] 두 개의 과일을 저장하고 있는 배열 선언
let fruit = prompt('과일명');            // 1. 하나의 과일명을 입력받아 변수에 저장

//배열변수.includes(찾을데이터) : 만약에 찾을데이터가 배열내 존재하면 true 아니면 false
if(fruitList.includes(fruit)){ console.log( '이미 존재하는 과일입니다.');}    
//아니면 입력받은과일명을 배열변수에 push 한다.
else{fruitList.push(fruit); console.log(fruitList);}

if(fruitList.indexOf(fruit)>=0){ console.log( '이미 존재하는 과일입니다.');}    
else{fruitList.push(fruit); console.log(fruitList);}
*/

/*
    [배열 관련된 함수]
    1. push() : 추가
    2. splice(): 삭제/삽입
    3. length() : 총길이
    4. indexOf() : 데이터의 인덱스 찾기

*/
/*
    -문자열 : '',"",``,prompt
    -주민등록번호 : 860420-123456;
        -8번째 자리가 성별 표현 1또는 3이면 남자, 2 또는 4 이면 여자
        주민등록번호[7] ==1



*/



/*
let number = prompt(`주민등록번호`);    //1. 주민등록번호 입력받고 변수에 저장한다.
let color = '';                       //2. 색상변수 선언.

//3. 만약에 입력받은데이터 8번쨰 자리의문자가 1또는 3이면 변수에 blue 대입
if (number[7]== 1 || number[7]== 3) {color = `blue`}
else if(number[7]== 2 || number[7]== 4) {color = `red`}   
//4.
console.log(color);
//5 응용
let html = `<h3 style='color : ${color} '> 주민등록번호 : ${number} </h3>` ;
    console.log(html);
document.querySelector('#result1').innerHTML = html;
*/

/*
let p1 = prompt(`가위[0], 바위[1], 보[2]`);
let p2 = prompt(`가위[0], 바위[1], 보[2]`);

//p1 승리 했을때
if(( p1 == 0 && p2 == 2) || ( p1 == 1 && p2 == 0) || ( p1 == 2 && p2 == 1))
    {console.log(`p1 win`);}
else if(( p1 == 0 && p2 == 0) || ( p1 == 1 && p2 == 1) || ( p1 == 2 && p2 == 2))
    {console.log(`draw`);}
else {console.log(`p2 win`);}
*/


/*가위바위보
let p1 = prompt(`가위[0], 바위[1], 보[2]`);
let p2 = prompt(`가위[0], 바위[1], 보[2]`);
let anwser = p1 == p2 ? `draw` : p1 == (p2+1)%3 ? `p1 win` : `p2 win` ;
console.log(anwser);
*/

let sheetList = [ 'O' , 'X' , 'O' ];
let sheetNum = prompt('좌석1, 좌석2, 좌석3 :')

if (sheetList[sheetNum-1] == `O`) {console.log(`예약불가`);}

else if (sheetList[sheetNum- 1 ] ==`X`) {console.log(`예약성공`); 
    
}