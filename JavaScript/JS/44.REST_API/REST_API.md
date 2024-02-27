# REST API

**REST (Representational State Transfer)**: 

**HTTP를 기반으로 클라이언트가 서버에 접근하는 방식을 구현한 아키텍쳐.**

- HTTP의 장점을 최대한 활용할 수 있는 구조로서 로이필딩(Roy fielding) 2000년 소개됨.
- HTTP 프로토콜을 의도에 맞게 디자인하도록 유도한다. 이해하기 쉽고 편리한 API를 만드는것이 목적
- 이 **REST의 기본원칙**을 철저히 지킨 서비스 디자인을 **“RESTful”**이라고 한다.

**REST API:** REST를 기반으로 구현된 서비스 API. 

---

### REST API의 구성

REST는 자체 표현 구조(self-descriptiveness)로 구성되어  REST API 만으로도 HTTP 요청의 내용을 이해할 수 있다.

**3가지 요소**

- 자원 (Resource)
- 행위 (Verb)
- 표현 (representation)
    
    
    | 구성요소 | 내용 | 표현방법 |
    | --- | --- | --- |
    | 자원(Resource) | 자원 | URI(엔드포인트) |
    | 행위(Verb) | 자원에 대한 행위 | HTTP 요청 메서드 |
    | 표현(Representation) | 자원에 대한 행위의 구체적 내용 | 페이로드 |
    - URI: 인터넷에서 식별 가능한 모든 것에 대한 고유한 식별자
    - HTTP 요청 메서드: 클라이언트가 서버에게 요청하는 행동을 나타내는 메서드. 주요: GET, POST, PUT, DELETE
    - 페이로드 :네트워크 상에서 전송되는 데이터의 실제 내용. 요청이나 응답에 들어있는 내용.
- 예시
    
    ```jsx
    // 예시: 블로그 게시물 가져오기
    fetch('https://api.example.com/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    ```
    
    1. **자원 (Resource)**: 블로그 게시물
        - URL: **`'https://api.example.com/posts'`**
        - 이 URL은 블로그 게시물에 대한 자원을 가리킨다.
    2. **행위 (Verb)**: HTTP 동사 (GET)
        - Method: **`'GET'`**
        - 이 요청은 블로그 게시물을 가져오는(GET) 행위를 나타낸다.
    3. **표현 (Representation)**: JSON 형식으로 데이터를 표현
        - **`response.json()`**을 통해 응답 데이터를 JSON 형식으로 해석합니다.
        - 이는 표현(Representation)의 예시입니다.

---

### REST API 설계 원칙

중요한 원칙 두가지 

- **URI 는 리소스를 표현해야 한다.**
    - URI 는 리소스를 표현하는데 중점을 둬야하기 때문에, 리소스를 식별할수 있는 이름은 동사보다는 **명사를 사용해야 한다.**
    
    ```jsx
    #bad 
    GET /getTodos/1
    GET /todos/show/1 
    #get show등의 동사가 들어감x
    
    #good
    GET /todos/1 
    #리소스를 표현하는 명사만을 사용
    ```
    
- **리소스에 대한 행위는 HTTP요청 메서드로 표현한다.**
    
    ```jsx
    #bad 
    GET /todos/delete/1 
    #동사(행위)는 URI에 포함하지 않는다.
    
    #good
    DELETE /todos/1
    ```
    
    [https://prohannah.tistory.com/156](https://prohannah.tistory.com/156)
    
    기본 6가지 원칙: 
    
    1. **Client–server** 구조: 클라이언트와 서버는 분리되어야 한다.클라이언트는 오직 URIs 리소스만 알아야한다. 이 구조는 관심사를 분리하여 각각의 독립적인 발전을 가능하게 한다.
    2. **Stateless 무상태성**: 서버는 클라이언트의 상태 정보를 저장하지 않는다. 각 요청은 서버가 해당 요청을 이해하고 처리하는 데 필요한 모든 정보를 포함해야 한다.
    3. **Cacheable 캐시 가능**: 응답은 캐싱이 가능하도록 명시되거나 암묵적으로 정의되어야 한다. 캐싱의 적절한 활용은 네트워크 트래픽을 줄이고 성능을 향상시킨다.
    4. **Layered system 계층화된 시스템**: 다중 계층 허용. 클라이언트는 오직 REST 서버와만 상호작용하며, 그 사이에 어떤 계층들이 작동하는지, 또 그 계층들이 어떻게 상호작용하는지 알 수 없다. 각 계층은 바로 앞이나 뒤에 있는 계층과만 통신하고, 다른 계층들에 대해서는 알 수 없다. 이러한 계층 구조는 시스템의 확장성을 증가시키고 보안을 강화한다.
    5. **Uniform interface 인터페이스 일관성**: 시스템의 인터페이스는 일관성을 유지해야 한다. 이를통해 사용자 경험, 유지보수성, 생산성등이 향상될 수 있다. 인터페이스 규칙 4개 
        1.  **identification of resources (리소스 식별)**:
            - 각 리소스는 고유한 식별자(URI)를 갖고 있어야 한다.
            - 이를 통해 클라이언트는 리소스를 고유하게 식별하고 요청할 수 있다.
        2. **Manipulation of resources through representations (표현을 통한 리소스 조작)**:
            - 클라이언트는 리소스의 표현을 통해 리소스를 조작할 수 있어야 한다.
            - 서버는 클라이언트에게 허용된 작업을 수행할 수 있는 표현을 제공해야 한다.
        3. **Self-descriptive messages (자기 서술적 메시지)**:
            - 메시지는 자신을 설명하는 데 필요한 모든 정보를 포함해야 한다.
            - 이를 통해 클라이언트는 메시지를 해석할 수 있고, 추가적인 문서나 메타데이터(다른 데이터를 설명하는 데이터)없이도 메시지를 처리할 수 있다.
        4. **Hypermedia as the engine of application state (HATEOAS, 하이퍼미디어를 이용한 애플리케이션 상태의 엔진)**:
            - 클라이언트는 하이퍼미디어를 통해 애플리케이션의 상태를 파악하고 상호 작용할 수 있어야 합니다.
            - 즉, 서버는 클라이언트에게 리소스 간의 관계와 다음으로 취해야 할 조치에 대한 정보를 제공해야 한다.
    6. **Code on demand(선택적)**: 서버는 필요에 따라 클라이언트에 실행 가능한 코드를 전송할 수 있다. 이는 클라이언트의 기능을 일시적으로 확장할 수 있다.(사용자 정의)
    예)사용자가 특정 페이지를 방문할 때, 혹은 특정 사용자에게만 필요한 자바스크립트 라이브러리나 함수, 스크립트를 서버에서 제공하는 URL을 통해 동적으로 로드. 보안 및 성능상의 이유로 비권장.
        
        ```jsx
        <!-- HTML 페이지에 동적으로 자바스크립트 코드를 추가하는 예 -->
        <script src="서버에서제공하는URL/동적기능.js"></script>
        ```
        
    

### **HTTP 요청 메서드**

- 클라이언트가 서버에게 요청의 종류와 목적, 즉 **리소스에 대한 행위**를 알리는 방법이다.
- 주로 5가지 요청 메서드(GET, POST, PATCH, DELETE등)를 사용하여 CRUD를 구현한다.
    - **CREATE: POST:** 웹 애플리케이션에서 새로운 리소스를 생성하거나 데이터를 서버에 제출할 때 사용된다. 예를 들어, 새 사용자 등록이나 글 작성에 사용.
    - **READ: GET:** 서버에서 리소스를 조회하거나 데이터를 받아오기 위해 사용된다. 웹 페이지를 열거나, 데이터베이스에서 특정 정보를 검색할 때 주로 사용.
    - **UPDATE: PUT/PATCH:** 기존 리소스를 갱신할 때 사용된다. **`PUT`**은 리소스의 전체를 교체하는 데 사용되며, **`PATCH`**는 리소스의 일부만 수정할 때 사용.
    - **DELETE: DELETE:** 서버에서 특정 리소스를 삭제하기 위해 사용된다. 예) 사용자 계정을 삭제하거나 게시물을 제거할 때 사용.
    - (’종류’는 HTTP의 역할과 사용 사례를 설명하기 위해 흔히 사용되는 비공식적인 분류 용어라고 생각하면 될 듯 하다.)
    
    | HTTP요청 메서드 | 종류 | 목적 | 페이로드 |
    | --- | --- | --- | --- |
    | GET | index/retrieve(인덱스/검색) | 모든/특정 리소스 취득 | x |
    | POST | create(생성) | 리소스 생성 | O |
    | PUT | replace(교체) | 리소스의 전체 교체 | O |
    | PATCH | modify(수정) | 리소스의 일부 수정 | O |
    | DELETE | delete(삭제) | 모든/특정 리소스 삭제 | X |
- 예시 코드
    
    ```jsx
    const express = require('express');
    const app = express();
    app.use(express.json()); // JSON 파싱 미들웨어
    
    // Create
    app.post('/resources', (req, res) => {
      // 리소스 생성 로직
      res.status(201).send('Resource created');
    });
    
    // Read (Retrieve)
    app.get('/resources', (req, res) => {
      // 모든 리소스 검색 로직
      res.status(200).send('All resources');
    });
    
    app.get('/resources/:id', (req, res) => {
      // 특정 리소스 검색 로직
      res.status(200).send(`Resource ${req.params.id}`);
    });
    
    // Update
    app.put('/resources/:id', (req, res) => {
      // 리소스 전체 갱신 로직
      res.status(200).send(`Resource ${req.params.id} updated`);
    });
    
    app.patch('/resources/:id', (req, res) => {
      // 리소스 일부 수정 로직
      res.status(200).send(`Resource ${req.params.id} partially updated`);
    });
    
    // Delete
    app.delete('/resources/:id', (req, res) => {
      // 리소스 삭제 로직
      res.status(200).send(`Resource ${req.params.id} deleted`);
    });
    ```
    

- 추가적인 메서드
    - **HEAD**: 웹 페이지나 대용량 파일을 다운로드하기 전에 크기나 수정 날짜를 미리 확인할 때  사용된다.
    - **OPTIONS**: 웹 애플리케이션에서 특정 URL에 대해 어떤 HTTP 메서드가 허용되는지 확인할 때 사용된다. CORS 정책을 구현할 때 중요하다.
    - **CONNECT**: 보안이 중요한 통신을 할 때, HTTPS를 통한 연결을 프록시 서버를 경유하여 설정할 필요가 있을 때 사용된다.
    - **TRACE**: 웹 애플리케이션 개발 중 네트워크 요청의 경로를 추적하고 문제를 진단할 때 사용될 수 있다. 보안 상의 이유로 실제 운영 환경에서는 잘 사용되지 않는다.
    
    | HTTP요청 메서드 | 종류 | 목적 | 페이로드 |
    | --- | --- | --- | --- |
    | HEAD | retrieve | 모든/특정 리소스의 헤더 정보 취득 | X |
    | OPTIONS | utility | 웹 서버에서 지원되는 메서드의 종류 확인 | X |
    | CONNECT | utility | 프록시를 통한 터널링 요청 | X |
    | TRACE | utility | 요청 메시지의 루프백 테스트 | X |
    
    ```jsx
    // HEAD
    app.head('/resources', (req, res) => {
      // 헤더 정보만 전송. 실제로는 빈 응답 본문을 반환합니다.
      res.status(200).end();
    });
    
    // OPTIONS
    app.options('/resources', (req, res) => {
      // 사용 가능한 HTTP 메서드를 반환합니다.
      res.header('Allow', 'GET, POST, HEAD, OPTIONS').end();
    });
    
    // TRACE와 CONNECT는 Express.js에서 직접적으로 지원하지 않으며,
    // 이러한 메서드의 사용은 보안상 권장되지 않습니다.
    // 특히 TRACE는 Cross-Site Tracing(XST) 공격에 취약할 수 있습니다.
    // CONNECT는 주로 HTTPS를 통한 프록시 연결에 사용되며, 일반적인 API 구현에서는 필요하지 않습니다.
    ```
    
    - 터널모드: VPN이나 IPSec과 같은 보안 통신에서 사용되는 용어로, 데이터 패킷의 전체(헤더와 페이로드)를 암호화하는 방식.
    - 루프백: 네트워크에서, 특히 테스트 목적으로 사용되는 가상 인터페이스. 자신에게 보낸 데이터를 받는 데 사용되며, 일반적으로 **`127.0.0.1`** IP 주소를 사용한다.
    - 프록시: 클라이언트와 서버 사이에서 요청과 응답을 중계하는 역할을 합니다. 보안, 캐싱, 요청 필터링 등 다양한 목적으로 사용됨.
    
    ---
    
    추가단어(개인적인 헷갈림 해소용)
    
    1. **URI (Uniform Resource Identifier)**:
        - 인터넷 상의 리소스를 식별하는 범용적인 용어.
        - **리소스를 식별하는 고유한 주소**
        - URL과 URN을 모두 포함.
    2. **URL (Uniform Resource Locator)**:
        - 리소스의 위치를 나타내는 특정한 형태의 URI
        - 리소스가 어디에 위치하는지를 나타낸다.
        - 일반적으로 URL은 프로토콜(예: HTTP, HTTPS), 호스트(예: [www.example.com](http://www.example.com/)), 리소스 경로 등을 포함함.
        - 예시: **`https://www.example.com/index.html`**
    3. **URN (Uniform Resource Name)**:
        - **리소스의 이름**을 나타내며, 리소스의 위치를 식별하지 않는다.
        - URN은 리소스가 무엇인지를 나타내며, 위치에 상관없이 *유일한* 이름을 제공.
        - 예시: ISBN 번호처럼, 리소스를 식별하는 고유한 이름.
        - 
