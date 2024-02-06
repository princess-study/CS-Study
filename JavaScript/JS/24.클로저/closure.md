# 클로저

- 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다.

    - 렉시컬 환경? 실행할 스코프 범위 안에 있는 변수와 함수를 프로퍼티로 저장하는 객체
    - 모든 함수는 [[Environment]]라는 프로퍼티를 가지고 있다. 이 프로퍼티는 함수가 만들어질 때 그 함수를 둘러싼 외부 렉시컬 환경에 대한 참조를 저장한다. 즉 외부 렉시컬 환경에 대한 참조는 상위 스코프에 대한 참조이다. 그리고 저장된 상위 스코프는 함수가 존재하는 한 유지된다.


```jsx
const x = 1;

function outer() {
    const x = 10;
    const inner = function () { console.log(x); };
    
    return inner;
}

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

