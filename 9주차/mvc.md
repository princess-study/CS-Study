# MVC패턴과 그 외의 패턴들

## 요약
- 소프트웨어를 Model, View, Controller라는 3가지 구성 요소로 구분한 개발 방법론이라고 한다.
- MVC(모델-뷰-컨트롤러)는 사용자 인터페이스, 데이터 및 논리 제어를 구현하는데 널리 사용되는 소프트웨어 디자인 패턴이다. 
- 소프트웨어의 비즈니스 로직과 화면을 구분하는데 중점을 두고 있으며, 이러한 관심사 분리 는 더나은 업무의 분리와 향상된 관리를 제공한다.

## Model, View, Controller의 관계
![mvc패턴](https://github.com/princess-study/CS-Study/assets/108172664/b80c2715-0687-485d-90f1-8a49cd67fd75)

1. 사용자의 Request(요청)를 Controller가 받는다.
2. Controller는 Service에서 비즈니스 로직을 처리한 후 결과를 Model에 담는다.
3. Model에 저장된 결과를 바탕으로 시각적 요소 출력을 담당하는 View를 제어하여 사용자에게 전달한다.

### Model

Model은 소프트웨어나 애플리케이션에서 정보 및 데이터 부분을 의미한다. 이는 Controller에게 받은 데이터를 조작(가공)하는 역할을 수행한다고 볼 수 있다. 즉, 데이터와 관련된 부분을 담당하며 값과 기능을 가지는 객체라고 보면 된다.

규칙

1. 사용자가 편집하길 원하는 모든 데이터를 가지고 있어야 한다.
2. View나 Controller에 대해서 어떤 정보도 알지 말아야 한다.
3. 변경이 일어나면, 변경 통지에 대한 처리방법을 구현해야만 한다.

### View

View는 입력값이나 체크박스 등과 같은 사용자 인터페이스 요소를 나타낸다. 이는 Controller에게 받은 Model의 데이터를 사용자에게 시각적으로 보여주기 위한 역할을 수행한다. 사용자에게 보여지는 화면이라고 볼 수 있다.

규칙

1. Model이 가지고 있는 정보를 따로 저장해서는 안된다.
2. Model이나 Controller를 알고 있을 필요가 없다.
3. 변경이 일어나면 변경통지에 대한 처리방법을 구현해야만 한다.

### Controller
Controller는 Model과 View 사이에서 데이터 흐름을 제어한다. 사용자가 접근한 URL에 따라 요청을 파악하고 URL에 적절한 Method를 호출하여 Service에서 비즈니스 로직을 처리한다. 이 후 결과를 Model에 저장하여 View에게 전달하는 역할을 수행한다. 결국 Controller는 Model과 View의 역할을 분리하는 중요한 요소이다.
Model과 View는 각각의 역할에 충실하지만 Controller는 Model과 View의 흐름을 제어하기 위한 역할이 더욱 중요하다고 느껴졌다.

규칙

1. Model이나 View에 대해서 알고 있어야 한다.
2. Model이나 View의 변경을 모니터링 해야 한다.

## 실전에서 MVC 규칙을 지키면서 코딩하는 방법
- 모델은 컨트롤러나 뷰에 의존하면 안된다.
- 모델 내부에 컨트롤러 및 뷰와 관련된 코드가 있으면 안된다.
- 뷰는 모델에만 의존해야 하고, 컨트롤러에는 의존하면 안된다.
- 뷰 내부에 모델의 코드만 있을 수 있고, 컨트롤러의 코드가 있으면 안된다.
- 뷰가 모델로부터 데이터를 받을 때는 사용자마다 다르게 보여주어야 하는 데이터에 한해서만 받아야 한다.
- 컨트롤러는 모델과 뷰에 의존해도 된다.
- 컨트롤러 내부에는 모델과 뷰의 코드가 있을 수 있다.
- 뷰가 모델로부터 데이터를 받을 때는 반드시 컨트롤러에서 받아야 한다.

## 왜 MVC패턴을 사용해야 할까?

### 관심사의 분리
  - 컴퓨터 프로그램을 구별된 부분으로 분리시키는 디자인 원칙으로, 각 부문은 개개의 관심사를 해결하는 것이라고 알려주고 있다.
  - MVC 패턴에서 관심사를 분리한다는 것은 어떻게 나눌 것인가? 라고 말할 수도 있을 것 같다.

### 그 밖의 장점
  - 컴포넌트의 명확한 역할 분리로 인해 서로간의 결합도를 낮출 수 있다.
  - 코드의 재사용성 및 확장성을 높일 수 있다.
  - 서비스를 유지보수하고 테스트하는데 용이해진다.
  - 개발자 간의 커뮤니케이션 효율성을 높일 수 있다.

## MVC 패턴의 한계점

### Model과 View의 의존성을 완전히 분리시킬 수 없다.

 - 일반적으로 View는 Controller와 연결되어 화면을 구성하게 된다. 그렇기에 자연스럽게 Controller는 여러 개의 View를 가질 수 있게 된다.
 - 이 때, Model은 Controller를 통해서 View와 연결된다. 즉, Controller에 의해 하나의 View에 연결되는 Model도 여러 개가 될 수 있다는 말이다.
 - 결국 복잡한 구조의 애플리케이션일수록 하나의 Controller에 다수의 View와 Model이 복잡하게 연결되어 서로간의 의존성이 커지는 상황이 발생할 수 있다.
  
### 컨트롤러의 비중이 높아져 부담이 커진다면 Massive-View-Controller(대규모 MVC 어플리케이션) 현상을 피할 수 없다.

- 위 사진처럼 규모가 복잡하고 큰 서비스 및 프로그램의 경우는 하나의 Controller에도 수많은 View와 Model이 연결되어 있기 때문에 자연스럽게 컨트롤러의 부하가 커지게 된다.
- MVC 패턴에서 컨트롤러의 역할이 과도하게 커지고 복잡해지는 상황을 지칭한다. 
- 이는 주로 대규모 애플리케이션에서 발생할 수 있으며, 코드의 비대화, 재사용성 및 확장성 저하, 유지보수성 하락 및 테스트 용이성 저하 등의 문제를 야기할 수 있다.

![Massive-View-Controller](https://github.com/princess-study/CS-Study/assets/108172664/2348991c-0adb-4369-b97e-f38e73060fdf)


## MVC 패턴의 문제를 해결하기 위한 대안

- MVVM
- MVP
- MVW
- Flux
- Redux
- RxMVVM

## MVVM(Model-View-ViewModel) 패턴

- MVVM 패턴은 MVC 패턴의 한계를 극복하기 위해 개발된 패턴중 하나로 Model, View, View Model 요소로 이루어진 소프트웨어 아키텍처 패턴이다.
- 여기서 Model과 View는 MVC 패턴에서의 Model, View와 동일하다. 중요한 것은 바로 View Model이다.
- View Model은 View와 Model 사이에서 중개자 역할을 수행하며, View를 보여주기 위한 데이터 처리 역할을 수행하는 요소이다. 즉, View를 표현하기 위해 만들어진 Model이라고 보면 된다.

### 장점
- MVVM 패턴은 Command 패턴과 Data Binding 패턴, 2가지 패턴을 활용하여 구현되었으며, 이 패턴들을 통해 View와 Model 사이에 연관되는 의존성을 제거하였다.

*Command 패턴 : View에 입력이 들어오면 커맨드 패턴으로 ViewModel에 명령

*Data Binding 패턴 : ViewModel의 값이 변하면 자동으로 UI가 업데이트됨
  
### 단점
- MVVM 패턴은 MVC 패턴에서 발생하는 View와 Model의 의존성 문제를 해결할 수 있었지만 ViewModel을 설계하는 과정이 복잡하고 어렵다는 단점 또한 존재한다.

![mvvm패턴](https://github.com/princess-study/CS-Study/assets/108172664/337f8a68-58e4-4db0-9857-6299dfb8e10c)

순서
1. 사용자의 요청은 View를 통해 받게 된다.
2. View에서 요청을 받는다면, Command 패턴으로 View Model로 요청을 전달한다.
3. View Model은 Model에게 요청 처리에 필요한 데이터를 요청한다.
4. Model은 내부적으로 비즈니스 로직을 수행하여 View Model에게 필요한 데이터를 전달한다.
5. View Model은 전달받은 데이터를 가공하여 저장한다.
6. View는 View Model과 Data Binding하여 사용자에게 요청에 적절한 화면을 출력한다23
 
## MVP(Model-View-Presenter) 패턴

- MVP 패턴 또한 MVC 패턴의 단점을 보완하기 위해 등장한 패턴으로, Model, View, Presenter로 구성되는 소프트웨어 - 아키텍처 패턴이다.
- 여기서 Model과 View는 MVC 패턴과 동일하며 Controller의 역할을 Presenter가 담당한다고 볼 수 있다.
- Presenter는 Model과 View 사이에서 중개자 역할을 하며, MVC 패턴에서의 Controller와 유사하지만, View에 직접 연결되지 않고 사용자 인터페이스를 통해 상호작용하게 된다. 그래서 View에서 요청한 정보를 통해 Model을 가공하여 View로 전달해주는 방식을 취한다.

### 장점
- MVP 패턴도 MVVM 패턴과 유사하게 Presenter를 통해서만 데이터를 전달받기 때문에 MVC 패턴의 약점 중 하나인 View와 Model의 의존성을 제거해줄 수 있었다.

### 단점
- MVP 패턴은 View와 Presenter 사이의 의존성이 높아지게 된다는 단점이 있다.

![mvp패턴](https://github.com/princess-study/CS-Study/assets/108172664/5e21d4f4-744a-4298-a881-e1cb9f39e29a)

### 순서

1. 사용자의 요청은 View를 통해 받게 된다.
2. View는 데이터를 Presenter에 요청한다.
3. Presenter는 Model에게 데이터를 요청한다.
4. Model은 요청을 통해 비즈니스 로직을 수행하여 Presenter에서 요청받은 데이터를 전달한다.
5. Presenter는 View에게 전달받은 데이터를 응답한다.
6. View는 Presenter가 응답한 데이터를 이용하여 화면을 출력한36

## FLUX 패턴

### 등장 배경
- Flux 패턴은 2014년 페이스북 F8 컨퍼런스에서 발표된 아키텍처로, Client-Side 웹 애플리케이션을 만들기 위해 사용하는 디자인 패턴입니다.
- 페이스북은 왜 Flux 패턴이 필요했던 걸까요? 그 답은 대규모 애플리케이션에서 데이터 흐름을 일관성 있게 관리함으로써 프로그램의 예측가능성(Predictability)을 높이기 위함이었습니다.

### 정의
- Flux는 사용자 입력을 기반으로 Action을 만들고 Action을 Dispatcher에 전달하여 Store(Model)의 데이터를 변경한 뒤 View에 반영하는 단방향의 흐름으로 애플리케이션을 만드는 아키텍처입니다.
- 각 요소들은 단방향 흐름에 따라 순서대로 역할을 수행하고, View로부터 새로운 데이터 변경이 생기면 처음부터 다시 이 순서대로 실행합니다. 이렇게 함으로써 예외 없이 데이터를 처리할 수 있게 되었습니다.
 
### 장점
 
단방향 데이터 흐름을 도입하여 양방향 데이터 바인딩으로 인해 발생하는 데이터 흐름의 복잡성을 해결하였다. 또한, 컴포넌트 간의 의존성을 줄여서 유지보수가 용이하게 만들어준다.

### 단점
- Flux 패턴은 단방향 데이터 흐름으로 인해 코드량이 많아지고, 복잡도가 증가할 수 있다. 또한, 한 개 이상의 store 를 사용할 때, store 간의 의존성이 발생할 수 있으며 이를 해결하기 위해서는 추가적인 로직이 필요하다.
  - 이를 위해, Redux에서는 reducer 함수를 사용하여 상태를 변경하는 로직을 구현하고, React에서는 useReducer를 사용하여 Flux 패턴을 쉽게 활용할 수 있도록 일부분 보완하였다.

![flux패턴](https://github.com/princess-study/CS-Study/assets/108172664/39b54d8c-e2c9-4ad1-8642-6194b115d8e3)

### Action
Action이란 데이터를 변경하는 행위로서 Dispatcher에게 전달되는 객체를 말합니다. Action creator 메서드는 새로 발생한 Action의 타입(type)과 새로운 데이터(payload)를 묶어 Dispatcher에게 전달합니다.

### Dispatcher
Dispatcher는 모든 데이터의 흐름을 관리하는 중앙 허브입니다. Dispatcher에는 Store들이 등록해놓은 Action 타입마다의 콜백 함수들이 존재합니다. Action을 감지하면 Store들이 각 타입에 맞는 Store의 콜백 함수를 실행합니다. Store의 데이터를 조작하는 것은 오직 Dispatcher를 통해서만 가능합니다. 또한 Store들 사이에 의존성이 있는 상황에서도 순서에 맞게 콜백 함수를 순차적으로 처리할 수 있도록 관리합니다.

### Store (Model)
Store는 상태 저장소로서 상태와 상태를 변경할 수 있는 메서드를 가지고 있습니다. 어떤 타입의 Action이 발생했는지에 따라 그에 맞는 데이터 변경을 수행하는 콜백 함수를 Dispatcher에 등록합니다. Dispatcher에서 콜백 함수를 실행하여 상태가 변경되면 View에게 데이터가 변경되었음을 알립니다.

### View
View는 리액트 컴포넌트로 생각하면 됩니다. Store에서 View에게 상태가 변경되었음을 알려주면 최상위 View(Controller View)는 Store에서 데이터를 가져와 자식 View에게 내려보냅니다. 새로운 데이터를 받은 View는 화면을 리렌더링합니다. 또한 사용자가 View에 어떤한 조작을 하면 그에 해당하는 Action을 생성합니다.
<br></br><br></br><br></br><br></br>


# 출처

https://velog.io/@langoustine/%EC%97%AC%EA%B8%B0%EB%8F%84-MVC-%EC%A0%80%EA%B8%B0%EB%8F%84-MVC-MVC-%ED%8C%A8%ED%84%B4%EC%9D%B4-%EB%AD%90%EC%95%BC

https://4z7l.github.io/2021/03/08/MVC_MVP_MVVM.html

https://velog.io/@beberiche/%EC%8B%B1%EA%B8%80%ED%86%A4-%ED%8C%A8%ED%84%B4%EA%B3%BC-Flux-%ED%8C%A8%ED%84%B4%EC%97%90-%EB%8C%80%ED%95%B4-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94