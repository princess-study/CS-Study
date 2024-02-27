### 제네레이터란?

코드 블록의 실행을 일시 중지했다가 필요한 시점에 재개할 수 있는 특수한 함수

### **제네레이터의 기본**

제네레이터 함수는 **`function*`** 키워드로 선언합니다. 함수 내부에서는 **`yield`** 키워드를 사용하여 실행을 일시 중지하고, 이터레이터를 통해 외부로 값이나 상태를 전달할 수 있습니다. 화살표 함수로 사용이 불가합니다.

```jsx
function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
}
```

이터레이터를 사용하여 제네레이터 함수를 실행하면, **`next()`** 메소드 호출 시마다 **`yield`**된 값이 반환됩니다.

```jsx
//제네레이터 함수는 일반함수와 달리 객체를 반환한다.	
const generator = simpleGenerator(); 

console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3

```

### **제네레이터와 비동기 프로그래밍**

제네레이터는 비동기 프로그래밍에 유용하게 사용될 수 있습니다. 예를 들어, **`yield`**를 사용하여 비동기 호출을 일시 중지하고, 비동기 호출의 결과가 준비되면 다시 실행을 계속할 수 있습니다. 이 과정은 **`async/await`**의 등장 전에 비동기 코드를 작성하는 데 자주 사용되었습니다.

```jsx
function* fetchData() {
    const url = 'https://api.example.com/data';
    const response = yield fetch(url); // fetch 호출을 일시 중지
    const data = yield response.json(); // 응답 처리를 일시 중지
    console.log(data);
}

// 제네레이터 실행을 위한 함수
function run(generatorFunction) {
    const generator = generatorFunction();

    function handle(result) {
        if (result.done) return;
        result.value.then(data => {
            handle(generator.next(data));
        });
    }

    handle(generator.next());
}

run(fetchData);
```

---

### **Promise: 비동기 연산의 기본 단위**

**`Promise`**는 비동기 연산의 최종 완료(또는 실패) 및 그 결과값을 나타냅니다. 기본적으로 **`Promise`**는 다음 세 가지 상태 중 하나를 가집니다:

- 대기(**`pending`**): 초기 상태, 성공 또는 실패로 결정되지 않음.
- 이행(**`fulfilled`**): 연산이 성공적으로 완료됨.
- 거부(**`rejected`**): 연산이 실패함.

```jsx
const myPromise = new Promise((resolve, reject) => {
    // 비동기 작업을 여기서 수행하고,
    if (/* 작업 성공 */) {
        resolve(value); // 성공 결과를 resolve 함수로 전달
    } else {
        reject(error); // 실패 원인을 reject 함수로 전달
    }
});
```

### **Async/Await: 비동기 코드의 간소화**

**`async/await`** 구문은 제네레이터를 더 쉽게 사용할 수 있게 해주는 ES2017(ES8)의 추가 기능입니다. **`async`**로 선언된 함수는 항상 **`Promise`**를 반환하며, **`await`** 연산자는 **`Promise`**가 이행되거나 거부될 때까지 함수의 실행을 일시 중지합니다.

### Async 함수

**`async`** 함수 선언은 함수 앞에 **`async`** 키워드를 추가함으로써 이루어집니다. 이 함수는 항상 **`Promise`**를 반환합니다.

```jsx
async function fetchData() {
    return "Data from server";
}
```

### Await 연산자

**`await`** 키워드는 **`async`** 함수 내에서만 사용됩니다. 이는 **`Promise`**가 settled 상태가 될때까지 함수의 실행을 일시 중지하고, **`Promise`**의 resolve한 결과를 반환합니다.

```jsx
async function fetchData() {
    let data = await fetch('https://api.example.com/data');
    let json = await data.json();
    console.log(json);
}
```

이처럼 **`await`** 키워드는 다음 실행을 일시 중지시켰다가 프로미스가 settled 상태가 되면 다시 재개합니다. 때문에 여러개의 프로미스에 **`await`**  키워드를 사용하는 것에는 주의를 해야합니다.

### 에러처리 try … catch

**`async/await`** 구문에서 에러처리는 `**try…catch**`를 통해 사용할 수 있습니다.

```jsx
try {
	setTimeout( () => { throw new Error('Error'); }, 1000 );
}
catch (e) {
	console.error(e);
}
```

`**async**` 함수 내에서 `**catch**` 문을 사용해 에러처리를 하지 않으면 `**async**` 함수는 발생한 에러를 reject하는 프로미스를 반환합니다. 따라서 `**async**` 함수를 호출하고 후속 처리 메서드로 캐치할 수도 있습니다.

```jsx
const foo = async () => {
	setTimeout( () => { throw new Error('Error'); }, 1000 );
}

foo()
	.then(console.log)
	.catch(console.error);
```
