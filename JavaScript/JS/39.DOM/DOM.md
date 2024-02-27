# DOM

## 1. DOM의 정의 및 기본 구조

- **DOM (Document Object Model)**
- HTML 문서의 계층적 구조와 정보를 표현하며 이를 제어할 수 있는 API(프로퍼티와 메서드)를 제공하는 트리 자료구조이다.
    - 트리 자료구조란?
    - 노드들의 계층적 구조로 이루어져, 부모 노드와 자식노드로 구성되어 노드간의 계층적 구조를 표현하는 비선형(데이터가 계층적이거나 그래프형식으로 된, 한 요소가 여러개의 요소와 연결 될 수 있는 자료구조. 비선형: 그래프, 트리/ 선형: 배열,스택, 큐등 ) 자료구조.
    - 부모 노드가 없는 하나의 최상위 노드, 루트노드에서 시작해서 0개이상의 자식노드를 가지는 형태로 이루어져있고, 자식 노드가 없는 노드를 리프노드(leaf노드)라고 한다.
    - **노드 객체들로 구성된 트리 자료구조 = DOM**  (때문에 DOM 트리라고도 한다.)
- HTML과 XML 문서를 위한 프로그래밍 인터페이스
- 페이지 로드 시, 브라우저는 HTML 문서를 파싱하여 구조화된 DOM 트리를 생성.(브라우저 렌더링 과정 참고)

### DOM이 왜 필요한가

 HTML 문서는 정적인 구조를 가지고 있어, 사용자의 입력이나 서버에서의 데이터 변경과 같은 동적인 상황에 유연하게 대응하기 어렵다.  때문에 JS가 HTML 문서를 동적으로 변경하게 하기 위해서 DOM이 JS가 HTML 문서의 내용, 구조, 스타일 등을 쉽게 조작하게 해준다. 

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
  </head>
  <body>
    <ul>
      <li id="apple">Apple</li>
      <li id="apple">Banana</li>
      <li id="apple">Orange</li>
    </ul>
    <script src="app.js"></script>
  </body>
</html>
```

![Untitled](DOM%208c7df7f81208448d924b321d5e94bc3f/Untitled.png)

## 2. DOM 트리 구조

### **DOM 트리의 구성**

문서의 계층적 구조를 나타낸다.

**이 트리 구조는 문서의 모든 요소(HTML 태그), 속성(attribute), 텍스트 등을 포함하며, 각각은 객체(object)로 표현된다. 이 객체들을 조작함으로써, 자바스크립트를 사용해 동적으로 웹 페이지의 내용, 구조, 스타일을 변경할 수 있다.**

- **노드(Node)**: DOM의 기본 단위. 노드는 다양한 타입이 있으며, 대표적으로 문서 노드(document node), 요소 노드(element node), 텍스트 노드(text node), 속성 노드(attribute node) 등이 있습니다.
- 문서의 최상위 객체는 document이다.⇒ HTML문서의 모든 요소는 document의 자식요소로 표현된다.
- **문서 노드(Document Node)**: DOM 트리의 최상위에  위치하며, document 객체는 브라우저가 렌더링한 전체 문서를 가리킨다. HTML 문서당 document 객체는 유일하다. 타 노드에 접근하려면 무조건 거쳐야한다.
    - javascript 코드가 script태그에 의해 분리되어있어도 하나의 전역객체인 window를 공유한다. = 모든 자바스크립트 코드는 전역 객체 window의 document프로퍼티에 바인딩 되어있는 하나의 document객체를 바라봄
- **요소 노드(Element Node)**: HTML 태그와 대응되며, DOM 트리에서 구조를 표현한다.
- **속성 노드(Attribute Node)**: HTML 요소의 속성(예: class, id)을 나타낸다. 직접적인 자식이 아니라 요소 노드에 연결된 정보로 취급된다.
    - 요소 노드는 부모 노드와 연결되어있지만 속성노드는 부모 노드와 연결되어있지 않으므로 요소노드의 형제 노드는 아니다.
- **텍스트 노드(Text Node)**: HTML 요소 안의 텍스트 내용을 담고 있다. 요소 노드의 자식 노드이다. DOM트리의 최종단(밑바닥) 이다. 접근하려면 부모인 요소노드를 거쳐야한다. HTML요소 사이의 개행이나 공백도 (공백)텍스트 노드에 포함된다.

+주석을 위한 Comment 노드, DOCTYPE을 위한 DocumentType노드, 복수의 노드를 추가할때 사용하는 DocumentFragment노드등 총 12개의 타입이 있다. 언급된것 외에는 더이상 현재 DOM버전에서 사용되지 않거나, XML에서만 사용되는 타입들이다.

### 3. 노드 객체와 상속 구조

- DOM을 구성하는 노드 객체는 자신의 구조와 정보를 제어할 수 있는 DOM API를 사용할 수 있다.
- DOM을 구성하는 노드 객체는 ECMAScript(자바스크립트 핵심 언어 사양)사양에 정의된 표준 *빌트인객체* 가 아니라, 브라우저 환경에서 추가적으로 제공하는 *호스트 객체*이다. 하지만, 노드객체도 자바스크립트 객체이므로 프로토타입에 의한 상속 구조를 갖는다.
    - 추가설명
        - 빌트인 객체
            - ECMAScript에 정의된 표준 객체
            - Array, Date, RegExp등
        - 호스트 객체
            - 브라우저와 같은 호스트 환경에서 추가적으로 제공하는 객체 ECMAScript사양의 일부는 아니지만 자바스크립트를 통해 접근/조작 할 수 있다.
            - Node, Element, Document등
        - 프로토타입
            - 자바스크립트의 모든 객체는 프로토타입을 통해 상속 구조를 가짐 ⇒ 이는 빌트인객체 뿐만아니라 호스트객체도 해당된다.
            - 예) Element객체는 Node객체의 메서드와 속성을 상속받는다.
        - 프로토타입 체인
            - 자바스크립트의 모든 객체는 다른 객체의 프로토타입에서 메서드와 속성을 상속받을 수 있으며, 이러한 상속 구조를 프로토타입 체인이라고 한다.
    
    예) input 요소 객체는 `HTMLInputElement`,`HTMLElement,` `Element`, `Node`, `EventTarget`, `Object`의 prototype에 바인딩되어있는 프로토타입 객체를 상속받는다. = 프로토타입 체인에 있는 모든 프로퍼티나 메서드를 상속받아 사용할 수 있다. 
    

![Untitled](DOM%208c7df7f81208448d924b321d5e94bc3f/Untitled%201.png)

노드 객체의 종류, 타입에 상관없이 모든 노드 객체가 공통으로 갖는 기능도 있고, 노드 타입에 따라 고유한 기능도 있다.  

### 3. DOM 조작

- **요소 선택 방법**
    - 요소의 ID를 통해 요소 선택: **`document.getElementById('id')`**
    - 클래스, 태그, CSS 선택자를 통해 요소 선택: **`document.querySelector('.class')`**, **`document.querySelectorAll('tag')`**
- **요소 내용 및 속성 조작**
    - 내용 변경: **`element.innerText = '새로운 내용';`** / **`element.innerHTML = '<span>새로운 HTML 내용</span>';`**
    - 스타일 변경: **`element.style.color = 'blue';`**
- **요소의 추가 및 삭제**
    - 새 요소 추가:
    
    ```jsx
    const newDiv = document.createElement('div');
    newDiv.innerText = '새로운 요소';
    document.body.appendChild(newDiv);
    ```
    
    - 요소 삭제:
    
    ```jsx
    const parent = document.getElementById('parent');
    const child = document.getElementById('child');
    parent.removeChild(child);
    ```
    
    ---
    
    ## 4. 이벤트 처리
    
    ### DOM 이벤트란 무엇인가
    
    DOM 이벤트는 사용자의 상호작용(클릭, 키보드 입력, 마우스 이동 등)이나 브라우저의 특정 동작(페이지 로딩 완료 등)을 감지하는 방법이다.
    
    - 이벤트 리스너를 등록하기 위해, **`addEventListener`** 메소드를 사용
    - **이벤트 리스너 등록**
        - 클릭 이벤트 처리:
        
        ```jsx
        document.getElementById('button').addEventListener('click', () => {
            alert('버튼 클릭!');
        });
        ```
        
        - 다양한 이벤트 처리: **`mouseover`**, **`keydown`**, **`submit`** 등 다양한 이벤트에 대해 리스너 등록 가능.
    - **이벤트 위임**
        - 부모 요소에서 이벤트 리스너를 사용하여 자식 요소들의 이벤트를 관리:
        
        ```jsx
        document.getElementById('parent').addEventListener('click', (event) => {
            if (event.target.tagName === 'LI') {
                console.log('리스트 아이템 클릭:', event.target.textContent);
            }
        });
        ```
        
        ---
        
        ### 추가:
        
        ### 가상 DOM 이란?
        
        DOM 의 요소만 간결하게 흉내낸 자바스크립트 객체
        
        - 어? 그런데 가상 DOM을 사용하지 않는 Svelte가 더 빠른데요? React, Vue vs Svelte의 차이점
            
            **React와 가상 DOM**: React는 가상 DOM을 사용하여 컴포넌트 기반의 UI를 효율적으로 업데이트 한다. 데이터가 변경되면 React는 가상 DOM에서 이러한 변경을 먼저 적용하고, 변경된 부분만 실제 DOM에 반영한다. 
            
            React/Vue: 라이브러리/Framework 
            
            Svelte: 컴파일러 
            
            가상DOM을 사용하기 때문에 가볍게 화면 조작이 가능하다
            
            단, “런타임”이라는 제약조건 하에서 브라우저에서 로드된 라이브러리로서 이 DOM에 가해지는 변화들을 최소한의 방법으로 구현하기 위한 방식 
            
            ⇒ Svelte의 경우, 브라우저로 결과물을 갖다주기 전에, 빌드를 하고 필요한 것만 자바스크립트 파일로 컴파일해서 내놓기때문에 가상 DOM을 사용하지 않고도 빠르다.
            
        
        ---
        
        ### 복습:
        
        ## 5.브라우저 렌더링과 DOM의 상관관계
        
        - DOM의 조작은 이 렌더링 과정에 직접적으로 영향을 미친다. JavaScript를 통해 DOM을 동적으로 변경하면, 이 변경 사항이 렌더 트리 재구축, 레이아웃 재계산, 그리고 페인팅으로 이어진다.
        - **리플로우와 리페인트의 차이점 설명**
            - 리플로우는 문서의 레이아웃을 다시 계산해야 할 때 발생하며, 리페인트는 시각적인 스타일 변경이 있을 때 발생한다.
            - **`display: none`**은 리플로우와 리페인트를 모두 유발하며, **`visibility: hidden`**은 리페인트만 유발한다.
        
        ### 렌더 트리
        
        - **렌더 트리:**
            - DOM과 CSSOM을 결합하여 생성된 트리로, 실제로 화면에 렌더링되는 요소들만을 포함한다.
            - 렌더 트리는 DOM 트리의 시각적인 표현을 결정한다.
            
            ---
            ### 추가 참고자료
          
            [https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction)
            
            [https://velog.io/@yesbb/virtual-dom의-성능이-더-좋은이유#virtual-dom이라는-이름-계속-사용해도-되는가](https://velog.io/@yesbb/virtual-dom%EC%9D%98-%EC%84%B1%EB%8A%A5%EC%9D%B4-%EB%8D%94-%EC%A2%8B%EC%9D%80%EC%9D%B4%EC%9C%A0#virtual-dom%EC%9D%B4%EB%9D%BC%EB%8A%94-%EC%9D%B4%EB%A6%84-%EA%B3%84%EC%86%8D-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%8F%84-%EB%90%98%EB%8A%94%EA%B0%80)
            
            [https://www.youtube.com/watch?v=1ojA5mLWts8&list=PLKSCwvURUboyM-r8eaq8oG5lBVs-gMfn6&index=4](https://www.youtube.com/watch?v=1ojA5mLWts8&list=PLKSCwvURUboyM-r8eaq8oG5lBVs-gMfn6&index=4)
            
            [https://www.youtube.com/watch?v=mFawNZz_Uu0&list=PLKSCwvURUboyM-r8eaq8oG5lBVs-gMfn6&index=2&t=11s](https://www.youtube.com/watch?v=mFawNZz_Uu0&list=PLKSCwvURUboyM-r8eaq8oG5lBVs-gMfn6&index=2&t=11s)
