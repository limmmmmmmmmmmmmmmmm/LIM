/*



    -브라우저 세션과 쿠키

    -js 실행 : http(주소) 이용한 html 요청했을때 --> html 열렸을때 (html에서 js를 포함하고 있기때문에)
    -f5(새로고침) : 현재 html(주소) 재요청 ->  


    브라우저 저장소 (보안 취약)
        localStorage   객체 : 브라우저 꺼져도 데이터 유지, 유저가 직접 삭제, (활용 : 자동로그인)
        sessionStorage 객체 : 프로그램(브라우저) 꺼지면 데이터 사라짐 (활용: 검색엔진,임시데이터)
            -속성
            setItem('키','값');      : 세션/쿠키 에 key의 value 쌍으로 데이터 저장
            getItem('키','값');      : 세션/쿠키 에 value호출
                -value : 문자 데이터형식만 가능 / 배열,객체 X
                
    객체<--->문자
    JSON(자바스크랩트 객체 형식)
    JSON.stringify({}) : 객체 ---> 문자
    JSON.parse("") : 문자---> 객체


    - 데이터타입/형식 과 값은 다르다.
    "3" : 같은 숫자이지만 데이터타입/


*/



localStorage.setItem('이름','유재석');
console.log(localStorage.getItem('이름'));

sessionStorage.setItem('나이','40');
console.log(sessionStorage.getItem('나이'));

//localStorage.setItem(`객체`, {이름:`유재석`, 나이 : `40`})
//console.log(localStorage.getIte(`객체`));

console.log({이름:`유재석`, 나이 : `40`});
console.log( JSON.stringify({이름:`유재석`, 나이 : `40`}));

//console.log("{'이름':'유재석'}");
//console.log( JSON.parse("{이름:유재석}"));

localStorage.setItem('저장소',JSON.stringify({국어 : 30, 영어 : 50}));
console.log(JSON.parse(sessionStorage.getItem('저장소')));