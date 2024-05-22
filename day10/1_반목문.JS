/*
    JS제어문(반복문)
    for
        - 조건충족일때 특정 특정 범위내 코드를 반복 실행
        - for 형태
          for(초기값 ; 조건문; 증감식){반복실행코드 ;}
          1. 초기값 : 반복을 할때 반복의 카운터/횟수 체크하는 변수의 처음값
          2. 조건문 : 반복실행문이 실행되는 조건이므로 true 이면  {}실행 아니면 for 종료
          3. 증감식 : 반복변수의 증가 혹은 감소 변화 연산식/패턴
          4. 실행코드 : 조건문이 true일때 실행할 코드
        -흐름순서
        1. 초기값 -> 2. 조건문 -> 3.실행코드 -> 4.증감식 -> 5.조건문 ->6.실행코드 
        -> 증감식 -> 조건문 -> 실행코드
        -> 증감식 -> 조건문 -> 실행코드
        -> 증감식 -> 조건문 -> 실행코드 ---- 조건문에 false가 될떄까지 반복
                                      ------ false 이면 for{} 탈출/종료 한다.
        - 어디서부터 어디까지 몇씩 증가하면서 무엇을 실행하는지?                                        


        -배열과 반복문
            배열의 인덱스는 순차적인 순서가 존재한다.
            1. 배열 순회
              -반복변수를 index 처럼 사용.
              for(let index = 0; index < 배열변수.length ; index++){}
            2. 향상된 for문
              1.for(let 반복변수 in 배열변수) {} : 배열변수내 인덱스를 순차적으로 하나씩 반복변수에 대입 반복
              2.for(let 반복변수 of 배열변수) {} : 배열변수내 데이터를 순차적으로 하나씩 반복변수에 대입 반복
            3. *스트링 반복 함수 : forEach() map() filter()

        - for 중첩
        fot(){
            for(){}
        }

        - 무한루프 / 종료없는 반복 : 
        for( ; ; ){}
        while(true){}
         -조건문 (IF) 과 break


         -반복문 키워드 (if로 조지기)
         1.break; // 가장 가까운 for문의 {} 탈출/종료/끝내기
         2.continue;

*/

//1.동일한 코드를 입력하기 위해서는 ctrl + c -> v 하면 된다.
console.log(`콜라 구매`);
console.log(`콜라 구매`);
console.log(`콜라 구매`);
console.log(`콜라 구매`);
console.log(`콜라 구매`); // 5번 반복 
//- 1부터 5까지 1씩 증가하면서 `콜라 구매` 출력
for(let 반복변수 = 1; 반복변수<=5; 반복변수++)
    {console.log(`콜라 구매`);}

//2. 1~10 숫자 출력하시오.
for(let i =1; i<=10; i++) {console.log(i);}


//3. 1~10 숫자의 누적합계를 구하시오.
let sum = 0; //1. 누적값 저장하는 변수는 1번만 선언해야 하므로 for 밖에 선언
for(let i = 1; i<=10; i++){
    console.log(i);
    sum = sum + i;
    console.log(sum);

} 

//4. 1~100까지 7배수만 누적합계 값 출력하시오. (7씩 증가 하면서 누적합계 계산)
let sum2 = 0;
for(let i = 0; i<=100; i+=7)
{ sum2 += i; }
console.log(`sum2 : ${sum2}`);

//5. 반복문을 이용한 구구단 중에 2단을 출력하시오.

for(let i = 1; i<=9 ; i++){
    console.log(`2x${i} = ${2*i}`);
}

//6. 배열의 데이터개수 : 3개, 인덱스 0~2
let 과일상자 = [`사과`, `포도`, `딸기`];
//인덱스는 0부터 2까지 1씩증가
for(let index = 0; index <=2 ; index++){console.log(과일상자[index]);}
//인덱스는 0부터 배열명.length
for(let index = 0; index<=과일상자.length-1; index++ ){console.log(과일상자[index]);}


//7.
console.log(`7번 문제`);

for(let index in 과일상자){console.log(index);}
for(let 과일 of 과일상자){console.log(과일);}

//8.
/*
console.log(`8번 문제`);

let studentList = [`유재석`, `강호동`, `신동엽`];

let html = '';
for(let i = 0; i<=studentList.length-1; i++){
html += `<li> ${studentList[i]} </li>`}
        //=대입, +=누적합계
console.log(html);

document.querySelector(`.studentList`).innerHTML = html;
*/

//9. for 중첩
for(let 부모 = 1; 부모<=5; 부모++){    //1부터 5까지 1씩증가반복(5회전)
    console.log(`부모 : ${부모}`);

    for( let 자식 = 1; 자식<=3 ; 자식++) // 1부터 3까지 1씩증가반복(3회전* 5 =>)
        {
            console.log(`>>>자식 : ${자식}`);
        } //fot 2반복

}//for 1반복

for(let i = 2; i<=9; i++){
    for(let j = 1; j<=9; j++ )
        {
         console.log(`${i} X ${j} = ${i*j}`);
        } 
} 

//11 

for( ; ; ){
    let input = prompt(`바이러스 수고 `);  //prompt, alert, confirm 등등 몇몇 함수들은 입력/출력시 모든 코드실행 중지됨.
    if (input == `X`) {break;    
    }
}




//12. break; 이용한 1부터 100까지 1씩 증가하면서 20 이면 반복문 종료
for(let i = 1; i<=100; i++){
   
    if(i==20){break;}//i가 20이면 반복문 종료
    console.log(i);
} 


//13. continue; 이용한 1부터 30까지 1씩 증가하면서 출력, 만일 20이면 건너뛰기
for(let i = 1; i<=30; i++){
    if(i==5 || i==10){continue;} //i가 5 or 10 이면 건너 뛰기 
    console.log(i);
} 

//14. 입력받은 데이터를 numArray에 push(추가) 하기
    // 조건1 : 중복 입력은 가능하지만 중복 저장은 불가능하도록 
    // 조건2 : 배열에 중복없이 6개의 숫자가 등록되면 반복문 종료 if(numArray[6]>=0){break;}

let numArray = []
//1. 총 6번의 입력받는다 (6회)
for(let i = 1; i<=6; i++ ){
    let num = prompt(`${i}번째 수를 입력 : `) ;//2. 입력받고 변수의 저장
    //************중복 제외*********************
        //입력받은 숫자가 배열내 존재하면 for문 증감식으로 이동
    if (numArray.indexOf(num)>=0) {
        i--; // 현재 반복변수의 카운터는 무효/차감
        continue;}   //continue; 또는 break; 만나면 아래코드는 실행되지 않는다.

    numArray.push(num); //3 배열의 저장한다

}
console.log(numArray); //for문 끝나고 배열 출력