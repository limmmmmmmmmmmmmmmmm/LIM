

//0.전역변수
let timerId = ``; //인터벌 저장하는 변수
let count = 0 ; //인터벌 실행횟수를 저장하는 변수


//1. 시작함수
function start() {
    console.log( `start()`);
    // setInterval( , 500) : 0.5초마다 함수 생성
    timerId = setInterval(createImg , 100)


}

//2. 이미지 생성함수
function createImg() {
    console.log('createImg()');
    //어디에
    let box = document.querySelector(`#box`)

    //난수 생성(top 0-470    left 0-470)
    let top = parseInt(Math.random()*471); // Math.random() : 0-1 실수 생성
    let left = parseInt(Math.random()*471);

    count++; //실행횟수 1증가
    //무엇을
    let img = `   <img id="img${count}" onclick="removeImg(${count})"
                    style="top:${top}px;left:${left}px" 
                    src="urban-20230228144115810458.jpg" />` ;

    //출력 누적
    box.innerHTML+= img;


    //조건종료 30개일때 멈추기
    //querySelectorAll : 여러요소
    let lmgList = document.querySelectorAll(`#box > img`);
    // 만약에 imgList의 요소가 30개 이상이면 종료
    if (lmgList.length>30) {alert(`실패`);clearImg()

    }




}


//3. 이미지 제거함수
function removeImg(count) {    console.log('removeImg()'+count);
//내가 클릭한(count) 이미지 요소 가져오기
let clicking = document.querySelector(`#img${count}`)

console.log(clicking);

//요소 제거하는 방법 [innerHTML 사용안함]   
//1. 제거할 요소의 부모요소 호출
let box = document.querySelector(`#box`)
//2. 부모요소객체.removeChild(자식요소객체)
box.removeChild(clicking);
}


//4. 인터벌 종료 함수
function clearImg() {
    //clearInterval(인터벌 변수명)
   

    
        clearInterval(timerId);
    
    
}