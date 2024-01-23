var x = 'global'

function foo() {
    var x = 'local';
    console.log(x)
}

foo();

console.log(x)

// 함수 레벨 스코프
var x = 1;

if (true){
    // var 키워드로 선언된 변수는 함수의 코드 블록만을 지역 스코프로 인정
    // x 는 함수 밖에서 var로 선언됨 = 함수 내부가 아님 == 전역변수
    var x = 10;
    // x가 2개 선언되서 중복 선언으로 인한 값이 변경됨
}

// 렉시컬 스코프
var x = 1;

function foo() {
    var x = 10;
    bar();
}

function bar() {
    console.log(x)
}

foo();
bar();