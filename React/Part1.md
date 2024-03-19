## 1. React에 대해 설명해주세요.

**React**는 **UI**를 만들기 위한 **JavaScript** 라이브러리

**React**는 스스로 상태를 관리하는 캡슐화된 컴포넌트를 조합해 **복잡한 UI**를 만들 수 있도록 지원하며, 데이터가 변경됨에 따라 **적절한 컴포넌트만 효율적으로 갱신**하고 렌더링한다.

## 2. React의 원리, 특징이 무엇인가요?

**1. React의 작동 원리:**

- **Virtual DOM:** 실제 DOM을 추상화하여 메모리에 저장하고 변경 사항만 적용하여 렌더링 성능 향상
- **Reconciliation:** Virtual DOM을 사용하여 변경 사항을 최소화하고 효율적인 업데이트 수행
- **Fiber:** 컴포넌트 트리를 재구성하여 렌더링 작업을 분할하고 우선순위를 조정

**2. React의 주요 특징:**

- **Virtual DOM:** 렌더링 성능 향상, 메모리 사용량 감소, 코드 간결화
- **단방향 데이터 흐름:** 데이터 변경이 예측 가능하고 디버깅 용이
- **컴포넌트 기반:** 코드 재사용성이 높고 유지 관리가 용이
- **성능 최적화:** Virtual DOM, Reconciliation, Fiber 기술을 통해 렌더링 성능 향상
- **활발한 커뮤니티:** 다양한 라이브러리, 도구, 학습 자료 활용 가능

**3. 추가 정보:**

- **React 18:** Concurrent Mode 도입으로 성능 더욱 개선
- **TypeScript:** React와 함께 사용하면 코드 안전성 및 유지 관리 향상

## 3. Virtual DOM 작동 원리에 대해 설명해주세요.

Virtual DOM의 뒤에는 **재조정(Reconciliation)** 알고리즘이 있습니다.

> 리액트는 항상 두개의 가상돔 객체를 가지고 있습니다.
> 
> 1. 렌더링 이전 화면 구조를 나타내는 가상돔
> 2. 렌더링 이후에 보이게 될 화면 구조를 나타내는 가상돔
> 
> 두개를 비교해 어떤 element가 변했는지 비교하고 차이가 발생한 부분만 실제 dom에 적용하는 것을 Reconciliation이라 함 변경된 모든 element들을 한번에 실제 DOM에 적용하는 방식
> 

## **Virtual DOM 작동 원리 (쉽게 설명)**

**1. 두 개의 가상 DOM:**

리액트는 항상 두 개의 가상 DOM 객체를 가지고 있습니다.

- **이전 화면 구조:** 현재 화면에 보이는 모습
- **새로운 화면 구조:** 변경 후 보이게 될 화면 모습

**2. 비교 및 업데이트:**

리액트는 두 가상 DOM을 비교하여 변경된 부분만 실제 DOM에 적용합니다. 이 과정을 **재조정(Reconciliation)**이라고 합니다.

**3. 효율적인 업데이트:**

- **변경 사항만 업데이트:** 전체 화면을 다시 그리는 대신 변경된 부분만 업데이트하여 성능 향상
- **일관성 유지:** 실제 DOM과 가상 DOM을 동기화하여 화면 깜박임 방지

**4. Fiber:**

리액트 16부터 도입된 Fiber는 렌더링 작업을 더욱 효율적으로 수행합니다.

- **스케줄링:** 우선순위를 기반으로 렌더링 작업 수행
- **분할:** 렌더링 작업을 여러 단계로 나누어 수행

**5. Virtual DOM 장점:**

- **성능 향상:** 빠른 렌더링 속도 및 부드러운 사용자 경험 제공
- **메모리 사용량 감소:** 불필요한 DOM 조작 줄여 메모리 효율 향상
- **코드 간결화:** 실제 DOM 조작을 추상화하여 코드 작성 및 관리 용이

**6. 비유:**

Virtual DOM을 그림을 그리는 것에 비유할 수 있습니다.

- **실제 DOM:** 최종 완성된 그림
- **가상 DOM:** 그림의 초안

초안을 통해 변경 사항을 미리 확인하고, 최종 그림에 필요한 부분만 수정하여 효율적으로 그림을 완성하는 것과 비슷합니다.

## 4. JSX에 대해 설명해주세요.

JSX는 Javascript + XML(HTML 과 같은 마크업 언어)를 합친것

**JSX**는 **JavaScript**를 확장한 문법으로, 공식문서에서 React와 함께 사용할 것을 권장하고 있는 문법입니다.

**JSX**는 **JavaScript**의 모든 기능이 포함되어 있으며, **React Element**를 생성하기 위해 사용됩니다.

## 5.엘리먼트와 컴포넌트의 차이에 대해 설명해주세요.

엘리먼트는 자바스크립트 객체고, 리액트로 화면을 그려내는 데에 가장 기본적인 요소입니다. 엘리먼트는 한 번 생성되면 다시는 변형되지 않습니다.

반면 컴포넌트는 엘리먼트를 반환하는 함수 혹은 클래스를 의미합니다.

재사용성을 강조하여, 엘리먼트를 좀 더 자유롭게 다룰 수 있으며, 컴포넌트의 이름을 사용하여 하나의 태그처럼 사용할 수 있습니다.

## 5. 리액트에서 컴포넌트를 어떻게 생성하나요?

컴포넌트를 생성하는 방법으로는 함수형 컴포넌트와 클래스형 컴포넌트가 있습니다.2

함수형 컴포넌트는 JavaScript 함수와 같은 방법으로 정의하며, 인자를 받아, React element를 반환하도록 만들 수 있습니다.

클래스형 컴포넌트는 ES6의 `class`를 사용하여 정의합니다. `class`안에서 `render()`함수를 정의하고, 여기에서 React element를 반환하도록 만들 수 있습니다.

주의해야할 점으로, 컴포넌트의 이름은 항상 **대문자**로 시작해야 합니다. React는 소문자로 시작하는 컴포넌트를 DOM 태그로 처리합니다. 이는 babel 컴파일을 진행할 때, 원시태그와 컴포넌트를 구분하기 위한 규칙으로, 지키지 않으면 에러가 발생합니다.

## 6. 클래스형 컴포넌트와 함수형 컴포넌트의 차이에 대해 설명해주세요.

클래스형 컴포넌트는 LifeCycle API를 제공하나, 함수형 컴포넌트는 기본적으로는 제공되지 않습니다. (Hook을 사용하면 사용할 수 있습니다.)

반면, 함수형 컴포넌트는 메모리 자원을 클래스형 컴포넌트보다 덜 사용하며, 빌드한 결과물의 크기 역시 클래스형 컴포넌트보다 적습니다.

**React 공식문서에서 클래스형 컴포넌트로 선언하는 방법을 아예 Legacy API로 분류해 놓을 정도로 함수형 컴포넌트는 강력합니다. 더 이상 클래스형 컴포넌트와 함수형 컴포넌트의 비교는 무의미해졌기 때문에 이후 나오는 클래스형 컴포넌트에 대한 질문들을 삭제하였습니다.**

## **7. 리액트 컴포넌트 라이프사이클 (쉽게 설명)**

**1. 라이프사이클 단계:**

- **마운트:** 컴포넌트가 생성 및 DOM에 추가되는 단계
- **업데이트:** props 또는 state 변경 시 컴포넌트 업데이트
- **언마운트:** 컴포넌트 DOM에서 제거되는 단계

**2. 각 단계별 메서드:**

**마운트:**

- **constructor:** 컴포넌트 초기화
- **getDerivedStateFromProps:** props를 기반으로 state 설정
- **render:** 컴포넌트 UI 렌더링
- **componentDidMount:** 컴포넌트 마운트 완료 후 실행

**업데이트:**

- **getDerivedStateFromProps:** props 변경 시 state 업데이트
- **shouldComponentUpdate:** 컴포넌트 업데이트 여부 결정
- **render:** 컴포넌트 UI 업데이트
- **getSnapshotBeforeUpdate:** 업데이트 전 DOM 상태 저장
- **componentDidUpdate:** 컴포넌트 업데이트 완료 후 실행

**언마운트:**

- **componentWillUnmount:** 컴포넌트 제거 전 실행

**3. 쉽게 이해하기:**

- **마운트:** 컴포넌트가 태어나 화면에 등장하는 과정
- **업데이트:** 컴포넌트가 성장하고 변화하는 과정
- **언마운트:** 컴포넌트가 사라지고 화면에서 퇴장하는 과정

**4. 비유:**

컴포넌트 라이프사이클을 인간의 삶에 비유하자면

- **마운트:** 출생
- **업데이트:** 성장, 변화
- **언마운트:** 죽음

## 9. React Hooks에 대해 설명해주세요.

훅은 16.8버전 이전까지 클래스 기반의 리액트 로직을 함수 기반으로 대체하기 위해 만들어짐

즉, **훅은 코드 재사용성을 위해 만들어졌습니다.**

리액트에서 훅은 호출되는 순서에 의존합니다.

그 이유는 `state`가 자바스크립트의 클로저를 이용하여 구현되었기 때문입니다.

클로저 내에서는 해당 `state`의 인덱스를 기록하고, 이 인덱스 값을 추적할 수 있도록 배열 내에서 상태값들을 관리합니다.

따라서 훅을 조건문 내에서 사용하면 이 순서에 문제가 생길 수 있으므로, **조건문 내에서 훅을 사용하면 안됩니다.**

## 10. useEffect와 useLayoutEffect의 차이점에 대해 설명해주세요.

제일 큰 차이점은 `useEffect`는 비동기적으로 동작하고, `useLayoutEffect`는 동기적으로 동작한다는 것입니다. 리액트에서 `useEffect`는 렌더링이 끝나고 특정 행동을 수행하고, `useLayoutEffect`는 렌더링 전에 특정 행동을 수행합니다.

따라서 성능 모니터링이나 애니메이션 구현 등 즉시 반응이 필요한 경우에 `useLayoutEffect`를 사용하고, 네트워크 요청, DOM 접근, 비동기 작업을 하는 경우에는 `useEffect`를 사용하는 것이 좋습니다.

## 11. State에 대해 설명해주세요.

`State`는 컴포넌트가 정보를 기억할 수 있도록 하는 기능입니다.

컴포넌트에 `state`를 추가하기 위해서는 `useState`나 `useReducer` 훅을 사용할 수 있습니다.

> 앱이 복잡하고 확장성이 있는 경우 useReducer를 이용한 상태 관리가 좋고 간단한 상태 관리일 경우는 useState를 이용해서도 충분히 구현 가능하다.
> 

## 12.React에서 State를 어떻게 관리하나요?

배열을 사용하여 관리하고, 해당 배열의 인덱스와 `state` 값을 클로저 내에 관리하여 `useState()` 함수가 반환되고 나서도, 별도의 메모리 공간에 값들을 저장합니다.

1. **`useState()`를 사용한 상태 관리:** React에서 **`useState()`** 후크를 사용하면 기본적으로 기능적 구성 요소 내에 상태 조각이 생성됩니다. 후크는 현재 상태 값과 해당 값을 업데이트하는 함수라는 두 가지 요소가 포함된 배열을 반환합니다.
2. **JavaScript의 클로저:** 클로저는 외부 함수의 실행이 완료된 후에도 내부 함수가 외부 함수의 변수 및 매개변수에 액세스할 수 있는 JavaScript의 기능입니다. **`useState()`**의 경우 반환된 업데이트 함수는 이 클로저로 인해 상태 변수에 대한 액세스를 유지합니다.
3. **상태 업데이트:** **`useState()`**에서 제공하는 업데이트 기능을 사용하여 상태를 업데이트하면 React는 상태 업데이트를 적절하게 관리하고 필요에 따라 구성 요소를 다시 렌더링하는지 확인합니다.

**`useState()`**는 JavaScript의 클로저를 사용하여 상태를 관리합니다. 여기서 상태 변수와 업데이트 함수는 구성 요소 함수 범위 내에서 액세스할 수 있으므로 적절한 상태 관리 및 업데이트가 보장된다.

## 13.Props에 대해 설명해주세요.

`props`는 컴포넌트에 전달해주는 값으로, 매개변수와 같은 역할을 합니다.

`props`는 부모 컴포넌트와 자식 컴포넌트를 독립적으로 생각할 수 있도록 도와줍니다.

## 14.Prop Drilling에 대해 설명해주세요.

`props`를 UI 트리 깊숙이 전달해야 하거나 여러 컴포넌트에 동일한 `props`가 필요한 경우, `props` 전달이 굉장히 불편해 집니다.

이렇게 `props`를 계속 이어서 전달하는 상황을 `prop drilling`이라고 부릅니다.

## 15.Prop Drilling을 어떻게 해결할 수 있나요?

`prop drilling`을 해결하는 대표적인 방법은 Context API를 사용하는 것입니다.

`Context`는 컴포넌트가 해당 컴포넌트 하위의 트리 전체에 정보를 제공할 수 있도록 하는 기능입니다.

## 16.데이터를 자식에서 부모로도 전달할 수 있나요?

부모가 자식으로 `setter` 함수를 props를 통해 보내면 됩니다.

```jsx
// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [parentData, setParentData] = useState('');

  // Setter function to update parentData
  const updateParentData = (newData) => {
    setParentData(newData);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Parent Data: {parentData}</p>
      {/* Pass the setter function to the ChildComponent */}
      <ChildComponent updateParentData={updateParentData} />
    </div>
  );
}

export default ParentComponent;

// ChildComponent.js
import React from 'react';

function ChildComponent({ updateParentData }) {
  // Function to update parentData
  const handleClick = () => {
    // Call the setter function provided by the parent
    updateParentData('Data updated from ChildComponent');
  };

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={handleClick}>Update Parent Data</button>
    </div>
  );
}

export default ChildComponent;
```

## 17.Props와 State의 차이에 대해 설명해주세요.

React legacy 공식문서에 의하면, `props`는 함수 매개변수처럼 컴포넌트에 전달되는 반면 `state`는 함수 내에 선언된 변수처럼 컴포넌트 안에서 관리됩니다.

## 18.왜 state를 직접 바꾸지 않고 setState (useState)를 사용해야 하나요?

`state`는 일반적인 변수와 다르게 값이 변하면 리렌더링이 발생합니다. 즉, 값이 변하게 되면, 연관되어 있는 컴포넌트들이 다시 렌더링이 되어 화면이 바뀌게 됩니다.

그런데, `React`는 `setState` 호출에 의한 `state`의 주소 변경에만 반응하여 리렌더링이 발생하게 됩니다. 즉, 이런 방식으로 변경하지 않으면 `React`가 감지하지 못합니다.

## 19.React 에서 상태 변화가 생겼을 때, 변화를 어떻게 알아채는지에 대해 설명해주세요.

`React`는 `state`를 **immutable**하게 관리합니다. 그렇기 때문에 `state`가 변경되면, `state`의 주소값이 변경되게 되고, 이 변화를 알아채게 됩니다.

이것이, `state`가 배열의 형태로 존재할 때, 배열에 원소를 `.push()`를 이용해 추가하더라도, `state` 변화를 알아채지 못하는 이유입니다.

## 20.React에서 State의 불변성은 어떻게 유지할 수 있나요?

setState 함수를 활용하면 인수로 새로운 값을 할당하기 때문에 이전 객체와는 다른 참조 주소를 가지고 있습니다.

때문에 리액트는 이전 state와 새로운 state를 다른 참조 주소로 인식하여 변화된 값을 올바르게 변경해줍니다.

다음은 setState를 활용하여 state 불변성을 유지하며 state 값을 변경해주는 예시입니다.

```
const arr = [1,2,3]
const [value,setValue] = useState(arr)

setValue([...value,4])

```

**...(스프레드 연산자)**를 사용하면 해당 배열의 값을 꺼내어 새로운 배열의 값으로 할당해줄 수 있습니다.

때문에 새로운 배열에 이전 state값을 꺼내고 추가로 할당하고 싶은 값을 넣어주어 새로운 배열을 할당해주면 불변성을 유지하여 값을 변화를 감지하게 할 수있다.

## 21. setState는 동기적으로 동작하나요? 아니면 비동기적으로 동작하나요?

`setState`는 비동기적으로 동작합니다. 하지만 비동기 함수는 아닙니다.

## 22. 왜 비동기적으로 동작하나요?

그 이유는 리액트의 리렌더링 원리가 비동기적으로 작동하기 때문입니다.

그리고 그이유는 리액트가 가상돔을 사용하도록 설계되어 있기 때문입니다.

이는 리액트의 `Fiber`와 밀접한 관련이 있습니다.

`fiber architecture`는 재조정 알고리즘을 구현할 때, 변경된 부분을 찾고, 실제 돔에 변경사항하는 작업을 나누어 진행합니다.

그런데, 이 과정을 동기적으로 진행한다면, 메인스레드가 차단되고, 이는 프레임 드롭이나 응답지연으로 이어지기 때문에 UX를 저해하게 됩니다.

## 참조

- https://velog.io/@dnr6054/fe-interview-React
- https://ko.legacy.reactjs.org/docs/getting-started.html