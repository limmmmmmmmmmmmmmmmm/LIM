제품목록 = [ {제품명 : `코카콜라`, 가격:`1000`},
             {제품명 : `사이다`, 가격:`3000`}
] 

function 등록() {
    let 제품input = document.querySelector(`#제품`).value;
    let 가격input = document.querySelector(`#가격`).value;

    let 최종제품 = {제품명:제품input, 가격:가격input}

    let 제품목록 = JSON.parse(localStorage.getItem(`제품목록`));
    if (제품목록 == null) {제품목록 = [];}

    제품목록.push(최종제품)

    console.log(제품목록);

    localStorage.setItem(`제품목록`, JSON.stringify(제품목록));

    document.querySelector(`#제품`).value=``;
    document.querySelector(`#가격`).value=``;

}







출력();
function 출력() {

    let 제품목록 = JSON.parse(localStorage.getItem(`제품목록`));
    if (제품목록 == null) {return;}

    let random = parseInt(Math.random()*30); 

    let 제품랜덤 = 제품목록[random];
    
    console.log(random);

    
    let 출력구역 = document.querySelector(`#출력구역`)

    console.log(출력구역);

    let html = ``

    for (let i = 0; i < 제품목록.length; i++) {
        html +=
        ` <tr>  <td>${i+1}</td><td>${제품목록[i].제품명}</td>
                <td>${제품목록[i].가격}</td><td>시간</td>
            </tr>
        `
    }

    출력구역.innerHTML = html
}
