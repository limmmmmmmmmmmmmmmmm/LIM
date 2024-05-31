/*

interval : 시간적인 간격에 따라 특정 로직/함수 반복실행
    1. setinterval(함수, 주기)
      함수 : 주기에 따라 실행할 함수명
      주기 : 1/1000초(밀리초), 1000:1초 , 10000 : 10초
        -주기 마다 특정 함수 실행
    2. 
*/

let value = 0 ;

function 증가함수() {
    value++
    document.querySelector(`#box1`).innerHTML=value;
}


//1초마다 value를 1씩 증가하고 value 출력하는 함수를 실행
setInterval(증가함수, 1000);

function 시계함수() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    document.querySelector(`#box2`).innerHTML=`${hour} : ${minute} : ${second}`
}

//2. 1초마다 시계함수를 호출
setInterval(시계함수, 1000);


//3. 
let time = 0; //타이머의 초
let timerId;

function 타이머함수() { //타이머 작동 로직
    time++ ;
    document.querySelector(`#box3`).innerHTML=time;
}
//타이머 시작



 //선언은 밖에서


function 타이머시작() {
 
    let timerId = setInterval(타이머함수, 1000);
}

function 타이머종료() {
    //clearInterval(인터벌 변수명)
    clearInterval(timerId);
}