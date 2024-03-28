# TypeScript2

## 타입스크립트 계층 구조

![type_hierarchy](https://github.com/princess-study/CS-Study/assets/92621272/d4a9772b-f58e-45da-b4ac-250cf405f3e2)


## 저번에 안 다룬 타입

### Unknown

| any | unknown |
| --- | --- |
| 어떤 타입이든 any타입에  할당 가능  | 어떤 타입이든 unknwon타입에  할당 가능 |
| 어떤 타입으로도 할당 가능 | any타입 외에 다른 타입으로 할당 불가능 |

```jsx
let unknownValue: unknown; 
unknownValue = 100; //any타입과 유사하게 숫자든 문자열이든 함수이든 상관없이 할당이 가능 

let someValue1:any = unknwonValue //(0)any 타입 제외한 다른 변수에 할당이 불가 
let someValue2:number = unknownValue //(X)

//할당하는 시점에서는 에러가 발생하지 않음 
let unknownFunction: unknwon = () => console.log("this is unknown type") 

//실행시(호출시)에는 에러가 발생: Error:Object is of type "unknwon".ts(2571)
unknwonFunction()
//객체의 속성 접근, 클래스 생성자 호출을 통한 인스턴스 생성등의 내부에 접근하는 모든 시도에서 에러 발생 
```

- 어떤 타입이 할당되었는지 알 수 없다 ⇒ unknown타입으로 선언된 변수는 값을 가져오거나 내부 속성에 접근 할 수 없다. ⇒ 그 값에 대해 어떤 연산이나 메서드를 직접 사용할 수 없으므로,값을 사용하기 전에 해당 값의 타입을 확인하거나 확정해야 한다. (사용하려면 먼저 데이터의 값을 확인(가드) 해야한다.)
- 즉, unknown타입으로 할당된 변수는 어떤 값이든 올 수 있지만, 타입 검사를 강제한다.
- any타입과 유사하지만, 타입검사를 강제하고 타입이 식별된 후에 사용할 수 있어 any타입보다 안전하다.
- 데이터 구조를 파악하기 힘들때 any 대신 unknown타입 사용 권장.

### Void

자바스크립트: 명시적인 반환문을 작성하지 않으면 기본적으로 undefined반환 

타입스크립트: void타입 사용됨 

- 함수가 어떤 값을 반환하지 않는 경우에는 void지정
- 변수에도 할당은 할 수 있지만 함수가 아닌 값에 대해서는 무의미. undefined또는 null값만 할당 가능. 명시적으로 그냥 직접 undefined/null 할당하는게 더 바람직
- 함수 자체를 다른 함수의 인자로 전달하는 경우가 아니라면 잘 명시x 타입스크립트 컴파일러가 알아서 void로 추론함

```jsx
function showModal(type: ModalType):void {
	feedbackSlice.actions.createModa(type); 
	}
```

### Never

- 함수에 주로 사용. 값을 반환할 수 없는 타입
- 반환하지 ‘않는’게 아니라 ‘없는’ 타입이다.
- 반환할 수 없는 예)
    - 에러를 던지는 경우
        - throw키워드등를 사용해서 의도적으로 런타임에 에러를 발생시킬 경우, 값을 반환하는것으로 간주하지 않는다.
        - 특정 함수가 실행중 마지막에 에러를 던지는 작업을 수행한다면 해당 함수의 반환 타입은 never
    
    ```jsx
    function generateError(res: Response):never {
    	throw new Error (res.getMessage());
    }
    ```
    
    - 무한히 실행되는 경우
        - 함수 내에서 무한 루프를 실행하는 경우(드뭄)
        - 종료되지 않았으니 값을 반환하지 못한다.
- 모든 타입의 하위 타입이다. = never자신을 제외한 어떤 타입도 never에 할당할 수 없다. (any타입도 never타입에 할당될 수 없다.)

### Array

### 배열

- 자바스크립트에서는 배열을 객체에 속하는 타입으로 분류한다. 자바스크립트에서는 배열을 단독으로 배열이라는 자료형에 국한하지 않는다.
- 자바스크립트는 하나의 배열로 선언된 변수에 숫자, 문자열, 객체등 자료형이 무엇이든 상관없이 원소를 관리할 수 있다 ⇒ 타입스크립트의 정적 타이핑과 잘 부합하지 않는다. 타입스크립트에서는 일반적으로 배열의 크기까지 제한하지는 않지만, 배열의 원소로 명시적인 타입을 선언하여 해당 타입의 원소를 관리하는것을 강제한다.

```jsx
const array: number[] = [1,2,3]

//제너릭 (둘은 형식외 차이x)
const array:Array<number> = [1,2,3]

//여러 타입을 모두 관리해야하는 배열 
//유니온 타입 
const array:Array<number|string> = [1,"string"]
const array:number[] | string[] = [1,"string"]
```

- 사전에 허용하지 않은 타입이 서로 섞이는 것을 방지하여 타입 안정성 제공

### 튜플

- 배열의 하위 타입으로, 기존 배열에 길이 제한까지 추가한 타입 시스템
- 대괄호 안에 선언하는 타입의 개수가 튜플이 가질 수 있는 원소의 개수를 나타낸다.
- 길이까지 제한하여 원소의 개수와 타입을 보장

```jsx
let tuple: [number] = [1]; 
tuple = [1,2] //불가능 
tuple = [1,string]; //불가능
let tuple: [number, string, boolean] = [1, "string", true] //혼합도 가능. 

let tuple: [number, number, number] = [1,2,3]
```

- useState훅은 튜플을 반환한다.

```jsx
const [value, setValue] = useState(false); 
```

- 튜플의 성질과 배열의 성질을 혼합해서 사용가능. 스프레드 연산자 사용.

```jsx
const httpStatusFromPaths: [number, string, ...string[]]={
400, //숫자
"bad Request", //문자열
"/users/:id", //이후로는 문자열 타입의 원소를 개수 제한없이 받을 수 있다. 
...
}
```

## 타입 조합

### 인덱스 시그니쳐 (Index Signatures)

- 특정 타입의 속성 이름은 알 수 없지만 속성값의 타입을 알고 있을때 사용.
- 인터페이스 내부에 [Key: K] : T 꼴로 타입 명시
    - 해당 타입의 속성 키는 모두 K타입이어야 하고 속성값은 모두 T타입이어야 한다.

```jsx
interface IndexSignatureEx{
	[key: string]: number; 
}
```

- 인덱스 시그니처 선언시 다른 속성 추가 명시 가능 but 명시된 속성은 시그니처에 포함되는 타입이어야 한다.

```jsx
interface IndexSignatureEx{
	[key:string]: number | boolean 
	length: number; 
	invalid: boolean; 
	name: string; //에러발생 
}
```

### 인덱스드 엑세스 타입 (Indexed Access Types)

- 다른 타입의 특정 속성이 가지는 타입을 조회하기 위해 사용됨.
- 인덱스에 사용되는 타입 또한 그 자체로 타입이라 유니온타입, keyof, 타입 별칭등의 표현 사용가능

```jsx
type Example ={
a: number; 
b: string; 
c: boolean; 
}

type IndexedAccess = Example["a"]  //Example 타입의 a 속성이 가지는 타입을 조회하기 위한 엑세스 타입
type IndexedAccess2 = Example["a"|"b"] // number | string
type IndexedAccess2 = Example[keyof Example] //number | string | boolean

type ExAlias = "b"| "c"
type IndexAccess4 = Example[ExAlias]' //string | boolean
```

- 배열의 경우 : 배열의 인덱스는 숫자 타입이므로 number로 인덱싱하여 배열 요소를 얻고 typeof연산자를 붙여주면 됨

```jsx
const PromotionList = [
 {type: "product", name: "chicken"},
 {type: "product", name: "pizza"},
 {type: "card", name: "cheer-up"},
]

type ElementOf<T> = typeof T[number]; //T배열의 요소 타입

//type PromotionItemType = {type:string; name:string}
type PromotionItemType = ElementOf<PromotionList>; 

```

### 맵드(Mapped) 타입

- map: 여러 항목의 목록 A를 변환된 항목의 목록 B로 바꾸는 것
- 다른 타입을 기반으로 한 타입을 선언할때 사용하는 문법.
- 인덱스 시그니처 문법을 사용해서 반복적인 타입 선언을 효과적으로 줄일 수 있다.
- 아래 예시:
    - **`keyof T`**는 타입 **`T`**의 모든 속성 키(여기서는 **`a`**, **`b`**, **`c`**)를 유니온 타입으로 반환한다. 예를 들어, **`keyof Example`**은 **`'a' | 'b' | 'c'`**와 같다.
    - **`[K in keyof T]`**는 **`T`**의 각 키를 순회한다.
    - **`?`** (선택적속성)
    - **`T[K]`**는 키 **`K`**에 해당하는 타입을 지칭한다. 따라서, 각 키는 원본 타입 **`T`**에서 해당 키의 타입을 그대로 사용한다.**`T`**가 **`{a: number, b: string}`**이고 **`K`**가 **`'a'`**라면, **`T[K]`**는 **`number`**
    이다.
- **`Subset<T>`**를 사용하면, **`T`**의 모든 속성이 선택적이 되는 새로운 타입을 생성할 수 있다. 원본 타입 **`T`**에서 각 속성을 가질 수도 있고 안 가질 수도 있는 더 유연한 버전
- 매핑할때는 readonly와 ?를 수식어로 적용할 수 있다. 맵드 타입은 이런 수식어를 더해주는것 뿐만 아니라 뺄 수도 있다.

```jsx
type Example={
	a: number; 
	b: string; 
	c: boolean; 
}

type Subset<T> = {
	[K in keyof T]?: T[K]; 
}

const aExample : Subset<Example> = {a: 3} 
const bExample : Subset<Example> = {b: "hello"}
const acExample: Subset<Example> = {a: 4, c: true} 
```

### 탬플릿 리터럴 타입

- 자바스크립트의 템플릿 리터럴 문자열을 사용하여 문자열 리터럴 타입을 사용할 수 있는 문법.

```jsx
 type Stage = 
 |"init"
 |"select-image"
 |"edit-image"
 |"decorate-card"
 
 type StageName = `${Stage}-stage` // 'init-stage' | 'select-image-stage'....
```

### 제네릭

- C나 자바같은 정적 언어에서 다양한 타입간의 재사용성을 높이기 위해 사용하는 문법.
- “일반화된 데이터 타입”
- 함수, 타입, 클래스등에서 내부적으로 사용할 타입을 미리 정해두지 않고 타입 변수를 사용해서 해당 위치를 비워둔 다음, 실제로 그 값을 사용할 때 외부에서 타입 변수 자리에 타입을 지정하여 사용하는 방식
- 일반적으로 <T>와 같이 꺽쇠괄호 내부에 정의
- 보통 타입 변수명으로 T(type), E(element), K(key), V(value_등 한 글자로 된 이름을 많이 사용
- 생성 시점에 원하는 타입으로 특정.
- 반드시 <>안에 타입을 명시해야 하는것은 아니고, 타입을 명시하는 부분을 생략하면 컴파일러가 인수를 보고 타입을 추론해준다.

```jsx
function exampleFunc<T>(arg: T): T[] {
	return new 블라블라
}

exampleFunc("hello") //T는 string으로 추론된다.
```

- 특정 요소 타입을 알 수 없을때는 제네릭 타입에 기본 값 추가 가능.
- 제네릭은 어떤 타입이든 될 수 있기 때문에, 특정 타입에서만 존재하는 멤버를 참조해서는 안 된다.
    - ex) 배열에서만 존재하는 length속성.
    - 꺽쇠괄호 내부에 제약을 걸어주면 사용 가능
    
    ```jsx
    interface TypeWithLength{
    	length: number; 
    }
    
    function ExampleFunc2<T extends TypeWithLength>(arg: T): number{
     return arg.length; 
    }
    ```
    
- 주의해야 할점 : 파일 확장자가 tsx일때, 화살표 함수를 사용하면 에러가 발생한다.  타입스크립트+JSX이므로 제네릭의 꺾쇠괄호와 태그의 꺽쇠괄호를 혼동하여 문제가 생긴다.
    - 제네릭 부분에 extends키워드를 사용하여 컴파일러에게 특정 타입의 하위 타입만 올 수 있음을 알리면 된다. 보통 제네릭을 사용할 때는 function키워드를 사용하는 경우가 많다.
    
    ```jsx
    const arrowExampleFunc = <T>(arg: T): T[] => {
     return new Array(3).fill(arg); 
    } //에러 발생: JSX element 'T' has no corresponding closing Tag
    
    const arrowExampleFunc = <T extends{}>(arg: T): T[] => {
     return new Array(3).fill(arg); 
    }
    ```
    
- 제네릭이 굳이 필요하지않을때 사용하면 가독성을 해칠 수 있다.

출처: 
이 글에 사용된 모든 코드 예제는 "우아한 타입스크립트 with 리액트" (우아한형제들 웹프론트개발그룹 지음, 김민태 감수)에서 참고하였음을 밝힙니다. 이 책은 한빛미디어에서 출판되었습니다.
[https://itchallenger.tistory.com/447](https://itchallenger.tistory.com/447)
책-우아한 타입스크립트 with 리액트 
