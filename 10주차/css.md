# CSS 방법론

CSS에서 클래스 이름을 지을 때 사용하는 일종의 naming convention으로, 웹에서 CSS의 영향력이 커지면서 클래스 이름을 어떻게 지을지, 어떠한 방식으로 스타일을 작성할지 등을 효율적으로 작성하기 위해 정의된 규칙입니다.

CSS 방법론에는 주로 OOCSS, BEM, SMACSS가 있으며, 상황에 따라 적절하게 사용됩니다.

## OOCSS (Object Oriented CSS)

- **개념**: CSS를 모듈 방식으로 작성하여 중복을 줄이는 방식입니다.
- **특징**: 구조와 스타일을 분리하여 작성하며, 중복되는 디자인 요소를 따로 빼내어 작성합니다. 코드의 재사용성이 높아집니다.
- **예시**:
  - 컨테이너와 컨텐츠 분리하기
    ```html
    <div class="header common-width">Header</div>
    <div class="footer common-width">Footer</div>
    ```
  - 구조와 모양을 분리하거나 결합하기
    ```html
    <!-- 기존 방식 -->
    <a class="instagram_btn instagram_skin">Instagram</a>
    <a class="facebook_btn facebook_skin">Facebook</a>

    <!-- OOCSS 적용 -->
    <a class="btn skin instagram">Instagram</a>
    <a class="btn skin facebook">Facebook</a>
    ```

## BEM (Block Element Modifier)

- **개념**: 블록(Block), 요소(Element), 상태(Modifier)로 구분하여 클래스 이름을 작성하는 방식입니다.
- **예시**:
  - **블록(Block)**: `.header {...}`
  - **요소(Element)**: `.header__tap {...}`
  - **상태(Modifier)**: `.header--hide {...}`

## SMACSS (Scalable and Modular Architecture for CSS)

- **개념**: CSS를 범주화하여 패턴화하고자 하는 방법론입니다.
- **분류**: 기본(Base), 레이아웃(Layout), 모듈(Module), 상태(State), 테마(Theme)
- **예시**:
  - **기본(Base)**: Reset, Variable 등을 포함합니다.
  - **레이아웃(Layout)**: 주요 요소와 하위 요소로 구분합니다.
  - **모듈(Module)**: 재사용성이 높은 구성 요소를 정의합니다.
- **유의사항**:
  - 파생된 CSS셀렉터 사용 금지
  - Id 셀렉터 사용 금지
  - `!Important` 사용 금지
  - 클래스 이름을 의미 있게 지어야 함

## CSS 방법론 사용 이유

- 원활한 유지보수
- 코드의 재사용성 높이기
- 클래스명만으로도 내용 예측 가능


참조
https://velog.io/@hahan/CSS%EB%B0%A9%EB%B2%95%EB%A1%A0OOCSS-BEM-SMACSS
