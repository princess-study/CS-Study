# 5장 표현식 문

## 값

> a **value** is the representation of some entity that can be manipulated by a program

값은  프로그램에 의해 조잘 될 수 있는 것을 의미
> 

값은 식(표현식)이 평가되어 생성된 결과를 의미함


## 평가

식을 해석해서 값을 생성하거나 참조하는 것


## 리터럴

사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법

```jsx
"박건우"
"돼지"
100
200
10.2
0x41 (16 진수)
true
false
undefined
/[A-Z]+/g (정규 표현식 리터럴)
```


## 식 , 표현식

> an **expression** is a syntactic entity in a programming language that may be evaluated to determine its value.
> 
- 값으로 평가될 수 있는 구문 = 값을 반환한다.
- 상수, 변수, 함수, 연산자들의 조합으로 이루어짐. 식으로 또 다른 ‘값’을 생성해 냄 이러한 과정을 평가라고 한다.
- 표현식이 평가되면 새로운 값을 생성하거나 기존 값을 참조함
- 값도 식이다. ( 3 , true 등), 연산식, 리터럴, 함수호출(return)
    - 그냥 값 자체도 평가하면 값이 나오기때문에 식이다.
- 종류: 리터럴 표현식. 식별자 표현식, 연산자 표현식,함수 메서드 호출 표현식 등

```jsx
// 리터럴 표현식
"박건우"
"돼지"
"100kg"

// 식별자 표현식(선언 이미 존재한다 가정
pig
pgw
pigpgw

//연산자 표현식
84 + 10
pgw = 84

//함수/메서드 호출 표현식(선언 이미 존재 가정)
pigMove()
```


## 문

- 프로그램을 구성하는 기본 단위이자 최소 실행 단위
- ‘문’은 데이터에 어떠한 액션을 취할 것인지를 결정
- ‘문'은 ‘식’을 내부 요소로 가질 수 있다
- 값을 반환하지 않는 것
- 종류 : 선언문, 할당 문, 조건문, 반복문

```jsx
const a = 1; // 선언문
b = a + 5; // 할당문

play(car); // 함수 호출
return; // 리턴 호출

for (let i = 0; i < limit; i++) // 반복문
if (flag) // 조건문
```

명령문과 표현식

할당문은 값을 반환하지 않음

할당 표현식은 값을 반환


## 표현식인 문과 표현식이 아닌 문

표현식인 문과 표현식이 아닌 문 구별법 : 변수에 할당하기

- 변수에 할당 했을때 에러가 발생하지 않는다면 표현식인 문 : 할당했다 === 값이 존재한다. 값으로 평가 될 수 있냐 여부

```jsx
// 변수 선언문은 표현식이 아닌 문이다.
var x;

// 할당문 표현식인 문
x = 100;
```

값이 존재한다 === 표현식인 문

참조

- https://www.bsidesoft.com/760
- https://365kim.tistory.com/85
- [https://velog.io/@reyang/JavaScript-표현식과-문](https://velog.io/@reyang/JavaScript-%ED%91%9C%ED%98%84%EC%8B%9D%EA%B3%BC-%EB%AC%B8)
- 모던 자바스크립트 딥 다이브