/*
    0. 
    1. 세미콜론 ;
        - 컴퓨터에게 문장 마침 알림
        - 한줄에 코드문장이 1개일때 생략 가능.
        - 한줄에 코드문장이 2개 이상일때는 코드문장마다; 마침.

    2. 데이터 타입
        typeof : data 타입/형식을 출력
          -HTML : 문자열
    3. 문자열 처리
        2. 변수호출 이나 



*/
/*
//1
console.log('사과');

//2
console.log(typeof '사과') //string
console.log(typeof 10)     //number
console.log(typeof true)   //boolean
console.log(typeof [1,2])  //object : 객체 (array 포함)

//3
console.log('유재석')  //문자열
console.log('33333')  //문자열
// console.log('유재석")  //불가능 '열고 "닫기"
console.log('유재석"30"')
console.log(`유재석"30"`)
//4

let 나이 = 40
console.log('유재석'+`강호동`)   //문자열+문자열 : 연결연산자 : 유재석강호동
console.log('유재석'+30)          //문자열+숫자 : 연결연산자 : 유재석30
console.log('유재석'+나이)        //문자열+변수 : 연결연산자 : 유재석40

console.log(`${`유재석`}${`강호동`}`)  // ${data}${data}


//4-2   변수는 문자처리X  변수를 문자처리 할때 `${}
let 직원1 = `유재석`;
let 직원2 = `강호동`;

let ageHTML1 = "<ol> <li>"+직원1+"</li> <li>"+직원2+"</li> </ol>";
document.write(ageHTML1);
let ageHTML2= `<ol> <li>${직원1}</li> <li>${직원2}</li> </ol>`;
document.write(ageHTML2);

//5. 차량번호
/*let 차량번호 = '250아7142'
console.log(차량번호[1]);
console.log(차량번호.length);
차량번호.split('아');
console.log(차량번호);*/

// 예1 > 2명의 사원정보를 이름과 나이를 입력받아 HTML(table)형식 출력
let 사원1 = prompt('sdsd:')
let 사원2 = prompt('sdsd:')
console.log(사원1)

//1. HTML 형식의 문자열을 저장하는 배열
let tableHTML = `<table>
                    <tr>
                        <th>번호</th><th>이름</th>
                    </tr>
                    <tr>
                        <td>1</td><td> ${사원1} </td>
                    </tr>
                    <tr>
                        <td>2</td><td>${사원2}</td>
                    </tr>
                </table>`;


// 2. HTML 문자열이 저장된것을 HTML에 출력하자.
Document.write(tableHTML);
