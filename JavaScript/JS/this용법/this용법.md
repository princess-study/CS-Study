# This

### **1. `this` 키워드의 개요**

- **`this`**는 실행 컨텍스트(execution context)에 기반하여 현재 객체를 참조하는 식별자입니다.
- **함수의 호출 방식에 따라 `this`의 값이 결정됩니다**

### **2. 전역 컨텍스트에서의 `this`**

- 전역 실행 컨텍스트(Global Execution Context)에서 **`this`**는 전역 객체를 가리킵니다.
    - 브라우저에서는 **`window`** 객체가 전역 객체입니다.
    - Node.js에서는 **`global`** 객체가 전역 객체입니다.

```jsx
console.log(this); // 브라우저에서는 'window', Node.js에서는 'global'

```

### **3. 함수 컨텍스트에서의 `this`**

- 기본적으로, 일반 함수에서 **`this`**의 값은 전역 객체를 가리킵니다.
- 엄격 모드('use strict')에서는 **`this`**가 **`undefined`**로 설정됩니다.

```jsx

function showThis() {
  console.log(this);
}
showThis(); // 전역 객체 (브라우저에서는 'window', Node.js에서는 'global')
```

### **4. 메서드로서의 함수에서의 `this`**

- 객체의 메서드로서 함수가 호출될 때, **`this`**는 해당 메서드를 호출한 객체를 가리킵니다.

```jsx

const obj = {
  name: 'jj',
  sayName: function() {
    console.log(this.name);
  }
};
obj.sayName(); // 'jj'

```

### **5. 생성자 함수에서의 `this`**

- 생성자 함수에서 **`this`**는 새로 생성될 객체를 가리킵니다.
- 생성자 함수는 **`new`** 키워드로 호출됩니다.

```jsx

function Person(name) {
  this.name = name;
}
const person = new Person('Alice');
console.log(person.name); // 'Alice'

```

### **6. `call`, `apply`, `bind` 메서드와 `this`**

- **`call`**, **`apply`**, **`bind`** 메서드를 사용하여 함수의 **`this`** 값을 명시적으로 지정할 수 있습니다.
- **`call`**과 **`apply`**는 함수를 즉시 호출하며, **`bind`**는 새 함수를 반환합니다.

```jsx

function greet() {
  console.log(`Hello, ${this.name}`);
}
const user = { name: 'John' };
greet.call(user); // 'Hello, John'
greet.apply(user); // 'Hello, John'

const greetJohn = greet.bind(user);
greetJohn(); // 'Hello, John'

```

### **7. 화살표 함수에서의 `this`**

- 화살표 함수에서 **`this`**는 상위 스코프의 **`this`** 값을 가집니다 (lexical **`this`**).
- 화살표 함수는 자신만의 **`this`**를 생성하지 않습니다.

```jsx

const obj = {
  name: 'jj',
  sayName: () => {
    console.log(this.name);
  }
};
obj.sayName(); // 전역 이름이 출력됨, 화살표 함수 내부에서의 this는 상위 스코프인 전역 스코프의 this 값을 가짐

```

이 정보를 바탕으로 발표 자료를 구성하면, 청중이 **`this`**의 다양한 사용 사례와 관련 규칙을 이해하는 데 도움이 될 것입니다. 발표 시에는 각 상황에 대한 실제 코드 예제를 제공하고, **`this`** 값이 어떻게 결정되는지 설명하는 것이 좋습니다.
