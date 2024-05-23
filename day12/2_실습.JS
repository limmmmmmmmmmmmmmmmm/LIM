//메모리 구성
let datelist = []
let namelist = []
let moneylist = []

function add(){
    let dateinput = document.querySelector(`#dateinput`);
    let nameinput = document.querySelector(`#nameinput`);
    let moneyinput = document.querySelector(`#moneyinput`);

    let date = dateinput.value;  
    let name = nameinput.value;  
    let money = moneyinput.value;  

    datelist.push(date);
    namelist.push(name);
    moneylist.push(money);

    alert(`항목저장완료`);

    
}


function tatal(){
    let sum = 0;
    for(let i = 0; i<moneylist.length; i++){
        console.log(moneylist[i]);
        sum += moneylist[i];
    }

    //대입

    return sum;
}


function print(){

    let moneytable = document.querySelector(`#moneytable`)
    
    let html = `<tr><th>총합계</th><th>${total}</th></tr>`
    
    moneytable.innerHTML = html ;

}