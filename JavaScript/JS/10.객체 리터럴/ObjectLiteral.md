## 10.1 객체란?

객체 리터럴: 객체를 생성하는 방법

자바스크립트에서, **원시 값**(primitive, 또는 원시 자료형)이란 객체가 아니면서 메서드 또는 속성도 가지지 않는 데이터입니다. 원시 값에는 7가지의 종류가 있습니다.

- string
- number
- bigint
- bollean
- undefined
- symbol

### 객체 구성

객체: 0개 이상의 프로퍼티로 구성된 집합, 프로퍼티는 키와 값으로 구성

- 프로퍼티: 객체의 상태를 나타내는 값
    - 프로퍼티 키: 프로퍼티 값에 접근할 수 있는 이름, 식별자 역할
- 메서드: 프로퍼티를 참조하고 조작할 수 있는 동작

## 10.2 객체 리터럴에 의한 객체 생성

- 자바스크립트는 프로타입 기반 객체지향 언어 → 클래스 기반 객체지향 언어와는 달리 다양한 객체 생성 방법을 지원함
    - 객체 생성 방법
        - 객체 리터럴
        - Object 생성자 함수
        - 생성자 함수
        - Object.create 메서드
        - 클래스(ES6)
    - 프로토타입 기반 프로그래밍
        - 클래스가 없고, 클래스 기반 상속이 아닌 객체를 프로토타입으로 하여 복제해 객체를 다시 사용하는 방법

### 객체 리터럴

- 일반적이고 간단한 객체 생성 방법은 객체 리터럴이다
    - **리터럴**은 JavaScript에서 값을 나타냅니다. 이는 변수가 아닌 여러분이 문자 그대로 스크립트에 제공한 고정된 값
    - 객체 리터럴은 중괄호(`{}`)로 묶인 0개 이상의 객체의 속성 이름과 그와 연관된 값의 쌍의 목록
        - 객체 리터럴의 중괄호는 코드 블록을 의미하지 않는다. 객체 리터럴 닫는 중괄호 뒤에는 세미콜론 붙이기
        
        ```jsx
        let person = {
          name: ['geonwoo', 'Smith'],
          age: 25,
          gender: 'male',
          interests: ['music', 'soccer'],
          bio: function() {
            console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old`);
          },
          greeting: function() {
            console.log(`Hi! I'm ${this.name[0]}.`);
          }
        };
        ```
        

인스턴스 : 클래스에 의해 생성되어 메모리에 저장된 실체, 객체지향 프로그래밍에서 객체는 클래스와 인스턴스를 포함한 개념

## 10.3 프로퍼티

객체는 프로퍼티의 집합 , 프로퍼티는 기와 값으로 구성

```jsx
var person = {
	// 프로퍼티 키는 name 값은 'geonwoo'
	name: 'geonwoo',
	// 프로퍼티 키는 age, 프로퍼티 값은 20
	age: 25
};
```

프로퍼티 키와 값으로 사용 가능한 값

- 프로퍼티 키: 빈 문자열을 포함하는 모든 문자열 또는 심벌 값
- 프로퍼티 값: 자바스크립트에서 사용할 수 있는 모든 값

## 10.4 프로퍼티 접근

1. 마침표 프로퍼티 접근
2. 대괄호 프로퍼티 접근

```jsx
var person = {
	// 프로퍼티 키는 name 값은 'geonwoo'
	name: 'geonwoo',
	// 프로퍼티 키는 age, 프로퍼티 값은 20
	age: 25
};

// 마침표 표기법
console.log(person.name); // geonwoo
// 대괄호 표기법
console.log(person['name']); // geonwoo
```

객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환 참조 에러는 발생하지 않는다.

```jsx
console.log(person.hobby); // undefined not Reference Error
```

## 10.5 프로터티 갱신, 동적 생성, 삭제

```jsx
person = {
	name: 'geonwoo',
	age: 25
};

// 프로퍼티 값 갱신
person.name = 'su'

console.log(person) // su

// 프로퍼티 동적 생성
person.hobby = 'soccer'

console.log(person.hobby) // soccer

// 프로퍼티 삭제
delete person.hobby;
delete person.age;

console.log(person); // {name: 'geonwoo'}
```

참조

- 모던 자바스크립트 딥다이브
- https://kangdy25.tistory.com/147
- [[https://ko.wikipedia.org/wiki/프로토타입_기반_프로그래밍](https://ko.wikipedia.org/wiki/%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85_%EA%B8%B0%EB%B0%98_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)](https://ko.wikipedia.org/wiki/%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85_%EA%B8%B0%EB%B0%98_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)