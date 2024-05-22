/*
-변수/상수 데이터 1개 저자할수 있는 공간/메모리/상자
JS 데이터 종류
 1. 문자 : "",'',`
 2. 숫자 : 7 , 10 ,10.5
 3. 블리언 : true, false
 4. 배열 : [데이터1, 데이터2, 데이터3, 데이터4....]


-배열 
 - 순서대로 번호가 붙은 데이터들이 연속적인 형태로 구성된 구조
 - 인덱스/순서대로 번호 : 중복된 데이터를 식별하기 위해서
 - 예)
    사과박스 = [사과, 사과, 사과, 사과, 사과, 사과, 사과...]
 1. 배열 : [] 대괄호 이용한 여러개 데이터를 묶은 데이터
     [데이터1, 데이터2, 데이터3, 데이터4....]
 2. 인덱스 번호 : 0번부터 시작, 개수 / 길이 n-1
 
 3. 배열 만들기
    

*/ 


// 1. 배열 만들기 = 데이터 여러개 저장하기
['사과','사과','사과','사과']
// 2. 선언된 배열 출력하기
console.log(['사과','사과','사과','사과']);


// 3. 뱌욜울 뵨수/상수 저장
let 과일상자변수 = ['사과','바나나','포도','딸기'];
console.log(과일상자변수);

// 4-2 배열이 가지고 있는 특정 위치의 데이터 호출
console.log(과일상자변수[3]);


// 5. 배열 수정
    // 변수명 = 새로운 배열
과일상자변수 = ['사과','거봉','수박'];
console.log(과일상자변수[2]);

// 5-2 배열내 특정 인덱스 데이터만 수정
    //변수명[안댁스번호]=새로운 데이터
    과일상자변수[2] = '양고기';
    console.log(과일상자변수[2]);


과일상자변수.push('체리'); //기존 배열에 새로운 인덱스 추가
console.log(과일상자변수);


// 7. 배열에 특정요소에 데이터 삭제
과일상자변수.splice(0,1);  //0번째에서 부터 1개를 삭제하겠다(삽입 삭제)
console.log(과일상자변수);

과일상자변수.splice(0,0,'수박') //삽입 추가 가능 
console.log(과일상자변수);

// 8. 데이터의 인덱스 찾기
    // 변수명.indexof('찾을 데이터') 있으면 0~ 없으면 -1
console.log(과일상자변수.indexOf('양고기')); //  2
console.log(과일상자변수.indexOf('양고'));  // -1

let 삭제할인덱스 = 과일상자변수.indexOf('양고기')
console.log(삭제할인덱스);
과일상자변수.splice(삭제할인덱스,1);
console.log(과일상자변수);
