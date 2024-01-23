var f = function add(x,y){
    return x + y
}

console.log(f(1, 2))

//  기명함수 표현식
var add = function foo(x, y){
    return x + y
}

console.log((add(2,5)))

// 함수 이름으로 호출시 ReferenecError
// 함수 이름은 함수 몸체 내부에서만 유효한 식별자이다.
// console.log(foo(2,5))

// Function 생성자 함수
var add = new Function('x','y', 'return x + y')
console.log(add(2,5))

// 화살표 함수
const arrowAdd = (x, y) => x + y;
console.log(arrowAdd(2,5))

// // 매개변수가 여러개 일때 하나의 매개변수를 선언학 객체를 인수로 전달하는 방법
// $.ajax({
//     method: 'POST',
//     url: '/user',
//     data: { id: 1, name: 'Lee'},
//     cache: false
// })

function chageVal(primitive, obj){
    primitive += 100;
    obj.name = 'kim'
}

var num = 100;
var person = { name: 'Lee' }

console.log(num)
console.log(person)

chageVal(num,person)

console.log(num)
console.log(person)

// // 익명 즉시 실행 함수
// (function () {
//     var a = 3;
//     var b = 5;
//     return a + b
// }());

var res = (function(){
    var a = 3;
    var b = 5;
    return a + b;
}())

console.log(res)

res = (function (a,b){
    return a + b
}(3,5))

console.log(res)

// 재귀 함수
function countdown(){
    for (var i = 10; i >= 0; i--){
        console.log(i)
    }
}

function countdown(n){
    if (n < 0) return
    console.log(n)
    countdown(n - 1)
}

// 콜백 함수

function repeat(n){
    // i를 출력한다
    for (var i = 0; i < n; i++) console.log(i);
}

repeat(5)


function repeat2(n){
    for (var i =0; i< n; i++){
        if (i % 2) console.log(i)
    }
}

repeat2(5)

function repeat(n,f){
    for (var i = 0; i < n; i++){
        f(i)
    }
}

var logAll = function (i) {
    console.log(i)
}

repeat(5,logAll)

var logOdds = function(i) {
    if (i % 2) console.log(i);
}

repeat(5, logOdds)

repeat(5, function(i){
    if (i % 2) console.log(i)
})

// logOdds 함수는 단 한 번만 생성된다
var logOdds = function (i) {
    if (i % 2) console.log(i);
}

// 고차 함수에 함수 참조를 전딜
repeat(5, logOdds)

// 순수 함수
var count = 0;

function increase(n){
    return ++n;
}

count = increase(count)
console.log(count)

count = increase(count);
console.log(count)