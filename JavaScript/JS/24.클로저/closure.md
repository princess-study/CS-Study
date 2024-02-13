# 클로저

- 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다.

    - 렉시컬 환경?  block, function, script를 실행하기 앞서 생성되는 특별한 객체로, 실행할 스코프 범위 안에 있는 변수와 함수를 프로퍼티로 저장하는 객체
    - 모든 함수는 [[Environment]]라는 프로퍼티를 가지고 있다. 이 프로퍼티는 함수가 만들어질 때 그 함수를 둘러싼 외부 렉시컬 환경에 대한 참조를 저장한다. 즉 외부 렉시컬 환경에 대한 참조는 상위 스코프에 대한 참조이다. 그리고 저장된 상위 스코프는 함수가 존재하는 한 유지된다.


```jsx
const x = 1;

function outer() {
    const x = 10;
    const inner = function () { console.log(x); };
    
    return inner;
}
// outer의 함수 실행이 종료되면 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 제거됨

const innerFunc = outer(); // outer함수의 생명주기 마감
innerFunc(); // 10
```

- 외부 함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명 주기가 종료한 외부 함수의 변수를 참조할 수 있다. 이러한 중첩 함수를 클로저라고 부른다.



## 클로저의 활용

- 클로저는 상태를 안전하게 변경하고 유지하기 위해 사용된다. 상태가 의도치 않게 변경되지 않도록 상태를 안전하게 은닉하고 특정 함수에게만 상태 변경을 허용하기 위해 사용한다.

```jsx
let num = 0;

// 카운트 상태 변경 함수
const increase = function () {
    return ++num;
};

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3
```
### 바르게 동작하기 위한 전제 조건
- 카운트 상태는 increase 함수가 호출되기 전까지 변경되지 않고 유지되어야한다.
- 이를 위해 카운트 상태는 increase 함수만이 변경될 수 있어야 한다.

### 위 코드의 문제점
- 전역 변수를 통해 관리되고 있기 때문에 언제든지 누구나 접근할 수 있고 변경할 수 있다.


```jsx
// 즉시 실행함수는 한 번만 실행된다.
const increase = (function (){
    // 그렇기 때문에 재차 초기화될 일은 없다.
    // private 변수이다.
    let num = 0;

    // 클로저
    return function () {
        return ++num;
    }
}());

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3
```

- 즉시 실행 함수가 호출되고 즉시 실행 함수가 반환한 함수가 increase 변수에 할당된다.
- 할당된 함수는 자신이 정의된 위치에 의해 결정된 상위 스코프인 즉시 실행 함수의 렉시컬 환경을 기억하는 클로저이다.

