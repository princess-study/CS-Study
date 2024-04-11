# reduxtoolkit vs 그 외 상태관리 라이브러리에 대해

### 상태관리란?

데이터를 관리하는 방법. 여러 component간에 데이터 전달과 이벤트 통신을 한 곳에서 관리하는 것.

### 상태관리가 필요한 이유?

1. 데이터가 바뀌어도 페이지가 렌더링 되지 않게 하기 위해
2. 상태(state)들이 복잡하게 얽혀있다면, 상호간에 의존성이 많아지게 되어서 UI가 어떻게 변하는지 알기 어렵기 때문에 효율적인 관리가 필요하다.
3. 전역에서 데이터를 관리하기 위해

## redux 개념

### redux의 탄생

- SPA가 등장한 이후로 다양한 요구사항들을 적용하면서 웹사이트의 규모가 점점 커지게 되었다.
- state. 즉, 관리해야 할 상태들이 많아져 상태관리의 복잡도가 크게 증가.
- 가장 대표적인 예로, 언제 어디서 어떻게 상태가 업데이트 되는지 파악하기가 힘들어졌고 버그의 원인을 찾고 수정하는데에도 시간이 오래 걸리게 되었다.
- 이러한 문제를 해결하고 상태들을 명확하게 관리하기 위해서, 상태 관리만을 위한 기술이 등장하게 되었다.

### Flux architecture

단방향 데이터 흐름을 활용한 리액트용 애플리케이션 아키텍처

![flux패턴](https://cdn.frontoverflow.com/document/first-met-redux/images/chapter_01/flux_data_flow.jpg)

1. Action은 데이터 흐름에 변화를 주기 위한 어떤 동작이 발생한 것
2. Action을 Dispatcher가 받게 됨
3. Dispatcher를 통해 변화된 데이터가 Store에 저장되고, 마지막으로 실제 사용자가 보게 되는 View에는 Store에서 가져온 데이터를 보여주게 되는 것

### redux의 3가지 원칙

1. Single source of truth(단 하나의 진실의 원천)
   1. 진실이라고 여겨지는 값이 여러곳이 아닌, 단 한 곳에만 존재해야 한다는 의미로서 모든 상태는 하나의 store에서 관리된다.
2. State is read-only(상태 값은 읽기 전용)
   1. 상태값을 읽을 수만 있고 변경할 수는 없다는 뜻
   2. 다만, 사전에 미리 정의해둔 어떤 상황이 발생했을 경우에 사전에 정해진대로만 상태를 변경할 수 있다.
3. Changes are made with pure functions(변화는 순수 함수들을 통해 이뤄져야 한다)
   1. 상태의 변화를 일으키는 모든 함수는 입력값(input)을 변경하지 않으며, 같은 입력값에 대해서는 항상 같은 출력값(output)을 리턴해야 한다는 뜻

### redux data flow

![data flow](https://cdn.frontoverflow.com/document/first-met-redux/images/chapter_01/redux_data_flow.gif)

1. 먼저 사용자가 UI에서 Deposit 10$ 버튼을 누릅니다.
2. 그러면 클릭 이벤트가 이벤트 핸들러로 전달이 되고, Action이  만들어지고 Dispatch됩니다.
3. Dispatch된 Action은 현재 State와 함께 Reducer로 전달이 되며 , Reducer에서는 변경된 새로운 State를 리턴합니다 .
5. 그리고 이렇게 변경된 새로운 State가 UI에 나타나 게 됩니다.

### 꼭 redux를 사용해야 할까?

2024.04.11기준 주간 npm 다운로드 현황을 살펴보자

1. redux toolkit - 3,246,322회
2. zustand - 3,175,736회
3. zotai - 882,140회
4. recoil - 552,891회 *업데이트가 활발하지 않음

- 현재로선 redux toolkit과 zustand가 압도적 인기
- 뭘 사용해야 한다기 보단 프로젝트에 맞게 사용하면 될 것 같다.

## redux tookkit(RTK)

효율적인 Redux 개발을 위한 공식 도구 모음이자 Redux를 사용하는 공식 표준 방법

장점
- 전역 상태 관리 라이브러리 중 여전히 다운로드 수 1위로 사용하는 곳이 많다
- Redux를 잘 다룰 줄 알면, Redux를 기반으로 만들어진 다른 라이브러리(Zustend 등)도 금방 익힐 수 있다
- 모든 상태 업데이트를 액션으로 정의하고, 액션 정보에 기반하여 리듀서에서 상태를 업데이트하기 때문에 상태를 더욱 쉽게 예측 가능하게 하여 유지보수 측면에 긍정적인 효과가 있다
- Redux Devtools를 이용해 직관적으로 전역 상태들을 볼 수 있다. 전역으로 관리해야 하는 상태값이 많아질 경우 디버깅이 편하다.
- 컴포넌트가 아닌 곳에서 글로벌 상태를 사용하거나 업데이트를 해야 할 때 (WebSocket을 사용 또는 리액트 네이티브 브릿지에서 연동을 할 때) getState 또는 dispatch를 바로 호출해서 사용하면 꽤 유용한 상황이 있기도 하다.
- 서버 사이드 렌더링이 가능하다. 서버 요청에 대한 응답과 함께 앱의 상태를 서버로 전송하여 앱의 초기 렌더링을 처리 할 수 있습니다.

단점
- 다른 상태관리 라이브러리들 중 가장 사용 방법이 복잡하다
- 컴포넌트와 액션 사이의 연결을 설정하는 작업이 번거롭다
- 보일러플레이트 코드(변화없이 여러 군데에서 반복되는 코드)가 많다.
    → Redux Toolkit을 사용하면 리듀서, 액션타입, 액션 생성함수, 초기상태를 하나의 함수로 선언 할 수 있다.
- 비동기 요청을 위한 Redux-thunk, Redux-Saga 등의 서드파티 라이브러리가 필요하다
- 리덕스로 요청에 관련된 상태를 관리하려면 요청 시작, 요청 성공, 요청 실패에 대한 3가지 액션들을 준비해야 하고 해당 액션들을 처리하는 로직들도 필요하다
    → react-query 로 API 요청에 대한 처리가 쉽게 가능하다.
- 새로 고침 시 리덕스의 store의 state가 날아간다
    → redux-persist 를 설치하여 localStorag 또는 session Storage에 저장가능하다
- Recoil, Zustand, Jotai 중 유일하게 Hook 기반이 아니다

### 왜 redux toolkit이 생겨났나?
-  Redux Store를 생성하는 과정이 너무 복잡하다는 것
-  Redux를 제대로 사용하려면 설치해야 할 패키지가 너무 많다는 것
   -  immer.js
   -  redux-thunk
-  보일러 플레이트 코드가 대량 발생
   -  Actions
   -  Action Creators
-  여러가지 불편한 점을 개선하기 위해서 2019년에 Redux Toolkit이 등장
-

### redux toolkit의 주요 API

### slice

- redux toolkit에서 새로 등장한 개념
- Action Type, Action Creator, Reducer와 같은 redux 구성 요소들을 모아서 조각으로 분리해 놓은 것.
- 기존의 redux와 달리 Action Type, Action Creator들을 자동으로 생성해 준다.
- createSlice() 함수를 사용해서 생성
- 불변성을 위한 처리를 따로 하지 않아도 내부적으로 immer.js를 사용해서 불변성 유지


slice
 ```jsx
 import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increase: (state, action) => {
            state.count++;
        },
        decrease: (state, action) => {
            state.count--;
        },
    },
});

export const { increase, decrease } = counterSlice.actions;

export default counterSlice.reducer;
 ```

 기존의 duck pattern
 ```jsx
 // Actions (Action Types)
const SET_COUNT      = 'my-app/counter/SET_COUNT';
const INCREASE_COUNT = 'my-app/counter/INCREASE_COUNT';
const DECREASE_COUNT = 'my-app/counter/DECREASE_COUNT';

// Reducer
export default function reducer(state = 0, action = {}) {
    switch (action.type) {
        case SET_COUNT:
            return action.count;
        case INCREASE_COUNT:
            return state + 1;
        case DECREASE_COUNT:
            return state - 1;
        default:
            return state;
    }
}

// Action Creators
export function setCount(count) {
    return { type: SET_COUNT, count: count };
}

export function increaseCounter() {
    return { type: INCREASE_COUNT };
}

export function decreaseCounter() {
    return { type: DECREASE_COUNT };
}

// 필요한 경우 Side Effects 작성
export function getCount () {
    return dispatch => get('/count').then(count => dispatch(setCount(count)));
}
 ```


### createAsyncThunk()

비동기 로직을 위한 Thunk를 만들어 주는 함수

```jsx
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiClient from '../api/client';

export const fetchPostById = createAsyncThunk(
    'post/fetchPostById',
    async (postId, thunkAPI) => {
        const response = await apiClient.fetchPostById(postId);
        return response.data;
    }
);

const initialState = {
    pending: false,
    data: null,
    error: null,
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        ...
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostById.pending, (state, action) => {
                state.pending = true;
                state.data = null;
                state.error = null;
            })
            .addCase(fetchPostById.fulfilled, (state, action) => {
                state.pending = false;
                state.data = action.payload;
            })
            .addCase(fetchPostById.rejected, (state, action) => {
                state.pending = false;
                state.error = action.error;
            });
    },
});

export default postSlice;
```

### current()

- current() 함수는 immer에서 제공하는 함수인데, Reducer 내에서 state를 변환하는 과정 중에 draftState의 현재 state 값을 가져올 때 사용하는 함수
- Redux Toolkit에서는 state의 업데이를 위해 내부적으로 immer를 사용하기 때문에, Reducer 내에서 state의 값을 console에 출력해보면 실제 값이 아닌 proxy instance가 나오게 된다.
- 그래서 해당 시점의 state값을 가져오기 위해서 이렇게 current() 함수를 사용하는 것
- Reducer를 디버깅 할 때 자주 사용

```jsx
import { createSlice, current } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increase: (state, action) => {
            state.count++;
            console.log(`현재 카운트: ${current(state.count)}`);
        },
        decrease: (state, action) => {
            state.count--;
            console.log(`현재 카운트: ${current(state.count)}`);
        },
    },
});

export const { increase, decrease } = counterSlice.actions;

export default counterSlice.reducer;
```

* 다른 API들도 존재하지만 자주 사용되는 API에 대해서만 다룸
- https://www.frontoverflow.com/document/1/%EC%B2%98%EC%9D%8C%20%EB%A7%8C%EB%82%9C%20%EB%A6%AC%EB%8D%95%EC%8A%A4%20(Redux)/chapter/1/%EC%A4%80%EB%B9%84%ED%95%98%EA%B8%B0/section/1/redux-devtools%20%EC%86%8C%EA%B0%9C 참조

### redux hooks

### useSelector()

 Redux Store의 state로부터 원하는 데이터만 선택할 수 있게 해주는 훅

![useSelector](https://cdn.frontoverflow.com/document/first-met-redux/images/chapter_15/redux_state_tree_with_hook.png)

```jsx
import { useSelector } from 'react-redux';

function Counter(props) {
    const count = useSelector((state) => state.count);

    return <div>{`현재 카운트: ${count}`}</div>;
}

export default Counter;
```

### useDispatch()
Redux Action을 Dispatch할 수 있게 해주는 훅
Redux Store의 dispatch 함수에 대한 reference를 리턴해준다.

```jsx
import { useDispatch } from 'react-redux';

function Counter(props) {
    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={() => {
                    dispatch({ type: 'INCREASE_COUNT' });
                }}>
                카운트 증가
            </button>
            <button
                onClick={() => {
                    dispatch({ type: 'DECREASE_COUNT' });
                }}>
                카운트 감소
            </button>
        </div>
    );
}

export default Counter;
```

## zustand

장점
- redux의 Redux DevTools 로 디버깅이 가능하다
- 보일러플레이트가 적고 redux 보다 사용이 쉽다
- provider 필요없음 → 앱을 래핑하지 않아도 되기 때문에 불필요한 리렌더링을 최소화한다
- Hook 기반으로 만들 수 있다
- ssr을 지원한다.

단점
- 단순 사용은 정말 쉬운데 그 외 zustand에 들어있는 기능들을 사용하기 위해 공부할 수 있는 최신 한글 자료가 많이 없다.(이건 차차 해결될 듯)

### 간단한 사용법

- create에는 콜백 함수가 주어지는데 여기엔 set 함수가 포함되어 있어 스토어 내의 변수를 업데이트 시키기 데에 사용
- 초기의 상태와 그것의 초기값, 그리고 increasePopulation과 removeAllBears라는 액션이 들어있어 set 함수를 호출해 원하는 대로 값을 업데이트 할 수 있다.
- 보일러플레이트 코드는 필요 없이 간단하게 사용 가능 
- useStore는 컴포넌트 내부에서 사용할 수 있는 훅을 반환

```jsx
import { create } from 'zustand'

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}))
```

- useStore훅을 사용하면 컴포넌트를 provider로 감쌀 필요가 없고 중첩된 코드를 걱정할 필요도 없이 쉽게 상태과 액션에 접근이 가능. 

```jsx
function BearCounter() 
  const bears = useStore((state) => state.bears)
  return <h1>{bears} around here...</h1>
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}{
```

## recoil

장점
- useState 훅과 비슷하게 동작하는, 직관적이면서 간단한 구조를 가지고 있다.
- Redux 대비 보일러플레이트 코드가 적고 사용이 간편하다
- Selector로 비동기 처리가 가능하다. (redux 처럼 따로 미들웨어를 설치할 필요가 없다)

단점
- Redux처럼 따로 안정적인 Devtool이 없어 디버깅이 상대적으로 불편하다
- 어느 컴포넌트라도 전역상태에 직접 접근하여 상태를 업데이트할 수 있기 때문에 어느 컴포넌트가 언제 전역 상태를 변경하는지 알기 어렵다.
- 기능이 점차 추가되고 전역상태가 늘어나면서 여기저기서 상태를 업데이트하게 되면 점점 상태 변경을 예측하기가 어려워진다. (유지 보수도 어려움)
- 새로 고침하면 Recoil State가 증발한다
    → recoil-persist 라이브러리를 사용하면 recoil state가 날라가지 않고 sessionStorage 또는 localStorage에 보관된다.
- 페이스북팀에서 실험단계에서 더 이상 업데이트를 안하는 것 같다(?)

### 간단한 사용법

- Atom은 상태(state)의 일부를 나타낸다.
- atom에 어떤 변화가 있으면 그 atom을 구독하는 모든 컴포넌트들이 재 렌더링 되는 결과가 발생
- 사용할 땐 react hook과 비슷하게 사용가능하여 react와 친화적

```jsx
const textState = atom({
  key: 'textState',
  default: '',
});

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}
```

## zotai

장점
- 사용이 쉽다
- 단순 저장소 기능 외에도 비동기 액션 처리 기능들이 내재되어 있다
- atom.onMount : atom 이 provider에 처음 사용되는 시점을 활용
- Async 간단한 비동기 액션 처리 가능
- Suspense와 함께 사용 가능
- Suspense를 사용하지 않고 fetching 상태를 직접 관리도 가능 (loading, error, data … 등)
- atom을 위한 Provider를 제공하는데, Provider가 없는 모드도 가능

단점
- Zustand와 마찬가지로 공신력 있는 한글 자료가 많이 없다

* 사용법은 recoil과 비슷하다.
- https://jotai.org/ 참고

<br/><br/><br/><br/>


# 참고 자료
https://www.frontoverflow.com/document/1/%EC%B2%98%EC%9D%8C%20%EB%A7%8C%EB%82%9C%20%EB%A6%AC%EB%8D%95%EC%8A%A4%20(Redux)/chapter/16/Redux%20Hooks/section/101/useDispatch()

https://www.npmjs.com/package/recoil

https://docs.pmnd.rs/zustand/getting-started/introduction

https://velog.io/@iberis/%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EB%B9%84%EA%B5%90-Redux-vs-Recoil-vs-Zustand-vs-Jotai

