### 변수

변수는 값을 저장한 메모리 공간을 식별하기 위해 붙인 이름

## var

1. 변수의 중복 선언이 허용된다.

```jsx
var x = 1;
var y = 1;

// 초기화 문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
var x = 100;

// 초기화문이 없는 변수 선언문은 무시된다.
var y;

console.log(x); // 100
console.log(y); // 1
```

3. 함수 레벨 스코프를 갖는다.

- var 키워드로 선언한 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정한다.
- var 키워드로 선언한 변수는 코드 블록 내에서 선언해도 모두 전역 변수가 된다.

단점
- 전역 변수를 남발할 가능성이 높고 의도치 않게 전역 변수가 중복 선언되는 경우가 발생할 수 있다.
- 가독성이 떨어진다.

```jsx
var x = 1;

if(true) {
    // x는 전역 변수다. 이미 선언된 전역 변수 x가 있으므로 x 변수는 중복 선언된다.
    // 이는 의도치 않는 변수값이 변경되는 부작용을 발생시킨다.
    var x = 10;
}

console.log(x); // 10;

var i = 10;

for(var i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}

// 의도치 않게 i 변수의 값이 변경되었다.
// 먼저 선언된 변수 값이 변경된다.
console.log(i); // 5
```

1. 변수 호이스팅
- 소스코드가 한 줄씩 순차적으로 실행되는 시점 이전 단계에서 실행된다.
- 변수 호이스팅에 의해 var로 선언한 변수는 선언문 이전에 참조할 수 있다. 할당 이전에 변수를 참조하면 undefined를 반환한다.(초기화)

```jsx
// 이 시점에서 호이스팅에 의해 이미 foo변수 선언됨
console.log(score); // undefined

var score;
// 값 할당
score = 80;

console.log(score); // 80
```


## let

var 키워드의 단점을 보완하기 위해 ES6에서 도입되었다.

1. 변수 중복 선언 금지

```jsx
// let으로 이름이 같은 변수를 중복 선언하면 문법 에러(SyntaxError)가 발생한다.

let bar = 123;

let bar = 456; // SyntaxError
```

2.  블록 레벨 스코프
- let, const 키워드로 선언한 변수는 모든 코드 블록을 지역 스코프로 인정하는 블록 레벨 스코프를 따른다.
   
```jsx
let foo = 1; //전역 변수

{     
    let foo = 2; // 지역 변수
    let bar = 3; // 지역 변수
}

console.log(foo); //1

// 전역에서 bar변수를 참조할 수 없다.
console.log(bar); // ReferenceError: bar is not defined
```

- 함수 내의 코드 블록은 함수 레벨 스코프에 중첩된다.
  
```jsx
let i = 10; // 전역 스코프

function foo() { // 함수 레벨 스코프
    let i = 100;

    for(let i = 0; i< 3; i++) { //  블록 레벨 스코프
        console.log(i); // 1 2
    }

    console.log(i); // 100
}

foo()

console.log(i)// 10
```

3. 변수 호이스팅(const도 동일)

- let 키워드로 선언한 변수는 호이스팅이 발생하지 않는 것처럼 동작한다.
- let 키워드로 선언한 변수를 변수 선언문 이전에 참조하면 참조 에러 가 발생한다. 

```jsx
console.log(foo); // ReferenceError: foo is not defined

let foo;
```

- let 키워드로 선언한 변수는 선언단계와 초기화 단계를 분리해서 진행한다.
- 런타임 이전에 자바스크립트 엔진에의해 암묵적으로 선언 단계가 먼저 실행되지만 초기화 단계는 변수 선언문에 도달했을 때 실행된다.
- let 키워드로 선언한 변수는 스코프의 시작 지점부터 초기화 단계 시작 지점(변수 선언문)까지 변수를 참조할 수 없다.(일시적 사각지대(TDZ))

```jsx
// 선언 단계
// 일시적 사각지대(TDZ) -> 변수 참조X
console.log(foo); // ReferenceError: foo is not defined

let foo; // 변수 선언문에서 초기화 단계가 실행된다.
console.log(foo); // undefined

foo = 1; // 할당
console.log(foo); // 1
```

- let으로 선언한 변수는 호이스팅이 발생하지 않는 것처럼 보이지만 호이스팅이 발생하기 때문에 참조 에러가 발생한다. 

```jsx
console.log(foo); // ReferenceError: Cannot access 'foo' defore initialization
let foo = 2; // let은 선언 단계에서 초기화되기 때문
```


## const

상수: 상수는 변수의 반댓말로 변하지 않는 수를 말한다.

1. const로 선언한 변수는 반드시 선언과 동시에 초기화해야 한다.

- const로 선언된 변수에 원시 값을 할당한 경우 원시 값은 변경할 수 없는 값이고 const에 의해 재할당이 금지되므로 할당된 값을 변경할 수 있는 방법은 없다.

```jsx
const foo = 1; 

const foo; // SyntaxError: Missing initializer in const declaration
```

2. const로 선언된 변수에 할당한 값을 변경할 수 없다.

```jsx
const person = {
    name: 'Hwang'
};

// 객체는 변경 가능한 값이기 때문에 재할당 없이 변경 가능
person.name = 'Kim';

console.log(person); // {name: "Kim"}
```

- const는 재할당을 금지할 뿐 "불변"을 의미하진 않는다. 
- 프로퍼티 동적 생성, 삭제, 프로퍼티 값의 변경을 통해 객체를 변경하는 것은 가능하다.(참조 값은 변경되지 않는다.)

