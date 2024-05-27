
console.log( 'js실행' );



// 3. 로직(함수안에서 처리할 코드) 작성
const nameList = [ ]

function 등록( ){    console.log( '등록()' ); 
  
let input = document.querySelector('#name')

  let name = input.value; //인풋만 가져오는데 value를 입력함으로써 인풋에 있는 value까지 적용              
  
  input.value = '';




//=============유효성 검사==================
    if(nameList.indexOf( name)!= -1 ){alert(`이미 등록된 이름입니다.`);}
    else if(name.length !=3){alert(`회원명은 3글자만 입력 가능합니다.`);}
    else if( !isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2])) {alert(`회원명에 숫자를 포함할수 없습니다.`);}
    else{
        nameList.push(name);
         출력(); 
         input.value = '' // +  input 초기화
    }

} 
//



function 삭제(){  
  // 1. [입력] 
  let name = document.querySelector('#name').value;  
  // 2. [처리]
  let deleteIndex = nameList.indexOf( name );  
  if(deleteIndex !=-1){ nameList.splice( deleteIndex , 1 );}
  else{alert(`없는 회원입니다.`);}
  // 3. [출력]
  출력( );
  document.querySelector('#name').value = '';

}

function 출력( ){
 
    // [ 3-1 어디에 ]
    let nameTable = document.querySelector('#nameTable');
    // [ 3-2 무엇을 ]
    let html = `<tr> <th> 번호 </th> <th> 이름 </th>  </tr>` 
    // - 0부터 마지막 인덱스 까지 1씩증가 반복 
    for( let i = 0 ; i < nameList.length ; i++ ){
      // - 배열내 i번째 회원명을 문자열템플릿 ${ } 을 이용한 HTML 문자열에 대입
      html += `<tr> 
                <td> ${ i+1 } </td> 
                <td> ${ nameList[i] } </td> 
              </tr>`
    }; console.log( html );
    nameTable.innerHTML = html;
}



/*
if(nameList.indexOf( name)!= -1 ){alert(`이미 등록된 이름입니다.`); return;}
if(name.length !=3){alert(`회원명은 3글자만 입력 가능합니다.`); return;}
if( !isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2])) {
    alert(`회원명에 숫자를 포함할수 없습니다.`); }
    
}nameList.push(name); 출력(); 
     
==========================================================================
if(nameList.indexOf( name)!= -1 ){alert(`이미 등록된 이름입니다.`);}
else if(name.length !=3){alert(`회원명은 3글자만 입력 가능합니다.`);}
else if( !isNaN(name[0]) || !isNaN(name[1]) || !isNaN(name[2])) {alert(`회원명에 숫자를 포함할수 없습니다.`);}
else{
    nameList.push(name);
        출력(); 
        input.value = '' // +  input 초기화
}




*/