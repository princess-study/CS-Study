# CORS

## CORS란?

**Cross-Origin Resource Sharing**. 한국어로는 교차-출처 리소스 공유라고 한다.

교차 출처 = 다른 출처 

**출처:** 보내고 받는 각각의 위치=웹사이트, api주소
**리소스:** 주고받아지는 데이터

## SOP

**Same Origin Policy. 동일 출처 정책.** 동일한 출처**,** 같은 출처에서만 리소스를 공유할 수 있다는 정책

서로 다른 출처끼리 요청을 주고 받는건 원래 안되는게 기본값. 

그러나 다른 출처의 리소스가 필요한 경우가 많음 ⇒  이걸 합의된 출처들간에는 허용주기 위해 예외를 두는 매커니즘이 CORS. 

**CORS오류:** "이게 되게 하려면 CORS를 허용해라”

CORS는 SOP의 반대 개념. 다른 출처간에 리소스를 공유할 수 있도록 하는것.

**CORS정책을 준수하지 않는 경우, 다른 출처의 리소스를 사용할 수 없다.**

### 다른 출처간 리소스 공유에 제한이 없을 경우 예

1. 이메일에 포함된 링크나 설득력 있는 게시물을 통해 사용자를 악성 웹사이트로 유도.
2. 사용자의 브라우저는 이 악성 사이트의 HTML, CSS, JavaScript 코드를 받아 실행.
3. 악성 사이트의 스크립트는 사용자 브라우저에 저장된 인증 토큰을 사용해 사이트 A로부터 개인 정보를 조회하는 요청을 보냄. 
4. 사이트 A로부터 받은 개인 정보를 악성사이트의 서버로 전송해 탈취 가능. 

### 같은 출처 vs 다른 출처
![Untitled](https://github.com/princess-study/CS-Study/assets/92621272/84810e2c-ac62-41e2-9080-f9a05138dd7f)

[https://velog.io/@jh100m1/CORS-에러가-뭔데-어떻게-해결하는건데](https://velog.io/@jh100m1/CORS-%EC%97%90%EB%9F%AC%EA%B0%80-%EB%AD%94%EB%8D%B0-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%95%B4%EA%B2%B0%ED%95%98%EB%8A%94%EA%B1%B4%EB%8D%B0)

 (프로토콜의 기본 포트를 사용할때 포트 번호 생략이 가능: https:443 )

**동일한 출처(origin)= 동일한 Protocol+Host+Port** 셋 다 같아야 같은 출처로 간주하며, 하나라도 다르면 다른 출처이다. 나머지는 상관없다.

브라우저 콘솔창에 console.log(location.origin)을 치면 현재 사이트의 출처를 알 수 있다.

예) 웹페이지 주소 : [https://brie.github.io](https://brie.github.io/)

| URL | 결과 | 이유 |
| --- | --- | --- |
| https://brie.github.io/about | 같은 출처 | Protocol, Host, Port 동일 |
| https://brie.github.io/about?q=work | 같은 출처 | Protocol, Host, Port 동일 |
| http://brie.github.io/ | 다른 출처 | Protocol 다름 |
| https://brie.heroku.com/ | 다른 출처 | Host 다름 |
| https://brie.github.io:81/about | 다른 출처? (웹 페이지 주소의 포트번호가 생략되어있어서 애매하지만 443 ≠ 81이므로) | Port 다름 |

표: [https://velog.io/@jh100m1/CORS-에러가-뭔데-어떻게-해결하는건데](https://velog.io/@jh100m1/CORS-%EC%97%90%EB%9F%AC%EA%B0%80-%EB%AD%94%EB%8D%B0-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%95%B4%EA%B2%B0%ED%95%98%EB%8A%94%EA%B1%B4%EB%8D%B0)

**주의!: 출처를 비교하는 로직은** 서버단이 아니라 **브라우저 단에서 이루어진다.**

⇒ 서버에 동일 출처 요청만을 받겠다고 설정하지 않았다면,  CORS 정책을 위반하는 요청에도 먼저 정상적으로 응답한다. 이후 브라우저가 응답을 분석해 CORS 위반으로 판단하면 해당 응답을 버린다. (때문에 postman에선 정상적으로 응답하는 경우에도 브라우저에서는 막힐 수 있다.)

![Untitled 1](https://github.com/princess-study/CS-Study/assets/92621272/13519064-39a3-4912-bfc8-d5e2f30cbbdb)
[https://velog.io/@jh100m1/CORS-에러가-뭔데-어떻게-해결하는건데](https://velog.io/@jh100m1/CORS-%EC%97%90%EB%9F%AC%EA%B0%80-%EB%AD%94%EB%8D%B0-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%95%B4%EA%B2%B0%ED%95%98%EB%8A%94%EA%B1%B4%EB%8D%B0)

* 이후 언급될 Preflight Request 에서 요청 자체가 안전한지에 대한 사전 확인 요청이 필요한것도 이것과 연관됨. Preflight 요청 없이 바로 서버의 데이터에 영향을 줄 수 있는 본 요청: Delete, Put등을 보낼 경우, 서버에서는 기본적으로 CORS위반 요청에도 정상적으로 응답하기 때문에, 이후 브라우저가 위반이라고 판단해서 응답을 버려도 이미 서버는 변경된 뒤이므로 위험하다.

## CORS기본 동작 원리

1. **HTTP 요청과 Origin 헤더**: 웹 페이지에서 다른 출처로 리소스를 요청하려고 할 때, 기본적으로 브라우저는 HTTP 프로토콜을 사용하여 요청을 보낸다. 이때, 브라우저는 **`Origin`** 헤더를 이용해 요청을 보내는 출처를 서버에 알린다. 

```jsx
**Origin: http://jyejyes.github.io**
```

1. **서버의 응답과 Access-Control-Allow-Origin 헤더**: 서버가 요청을 받고 나서 응답을 보낼 때, **`Access-Control-Allow-Origin`**이라는 응답 헤더를 사용하여 이 리소스에 접근이 허용된 출처를 명시. 
2. **브라우저의 유효성 판별**: 응답을 받은 브라우저는 자신이 보낸 **`Origin`**과 서버가 응답으로 보낸 **`Access-Control-Allow-Origin`**을 비교. 이 두 값이 일치할(또는 `*`) 경우 유효하게 처리. 불일치시CORS 정책에 의해 리소스 사용이 거부되며, CORS 오류가 발생.

## 종류

### Preflight Request

![Untitled 2](https://github.com/princess-study/CS-Study/assets/92621272/5601bc34-7d8f-464e-a613-78443b601caa)
[https://velog.io/@jh100m1/CORS-에러가-뭔데-어떻게-해결하는건데](https://velog.io/@jh100m1/CORS-%EC%97%90%EB%9F%AC%EA%B0%80-%EB%AD%94%EB%8D%B0-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%95%B4%EA%B2%B0%ED%95%98%EB%8A%94%EA%B1%B4%EB%8D%B0)

가장 많이 마주치는 방식.

 본 요청을 한번에 보내지 않고 `options`메서드를 통해 먼저 예비 요청(Preflight)를 보내서 본 요청(Actual request)이 안전한지 확인하고, 허락이 떨어져야 본 요청을 보낼 수 있음.

서버의 데이터에 영향을 줄 수 있는 요청들이기 때문에 요청 허용 여부를 예비요청을 통해 검증하는 것. 

**Preflight Request**

- `Origin`: 요청 출처
- `Access-Control-Request-Method`: 실제 요청의 메서드
- `Access-Control-Request-Headers`: 실제 요청의 추가 헤더

**Preflight Response**

- `Access-Control-Allow-Origin`: 서버 측 허가 출처
- `Access-Control-Allow-Methods` : 서버 측 허가 메서드
- `Access-Control-Allow-Headers`: 서버 측 허가 헤더
- `Access-Control-Max-Age`: Preflight 응답 캐시 기간
    - 기간 내에 다시 같은 요청을 보낼때 캐싱을 확인하고 바로 본 요청을 보낼 수 있다.

### Simple Request

![Untitled 3](https://github.com/princess-study/CS-Study/assets/92621272/8f039e79-1c83-4166-b737-352f0a3f9922)
[https://velog.io/@jh100m1/CORS-에러가-뭔데-어떻게-해결하는건데](https://velog.io/@jh100m1/CORS-%EC%97%90%EB%9F%AC%EA%B0%80-%EB%AD%94%EB%8D%B0-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%95%B4%EA%B2%B0%ED%95%98%EB%8A%94%EA%B1%B4%EB%8D%B0)

예비요청 없이 바로 본 요청을 한다. 

다음의 조건을 모두 만족하는 경우에만 Simple Request를 사용가능하다. 

**조건**

1. 요청의 메소드: GET, HEAD, POST 중 하나.
2. 헤더: Accept, Accept-Language, Content-Language, Content-Type만 허용. 
3. Content-Type: application/x-www-form-urlencoded, multipart/form-data, text/plain만 허용.

### Credentialed Request

인증관련 헤더를 포함할 때 사용하는 요청. (토큰등 사용자 식별 정보가 담긴 요청) 

**조건:** 

**클라이언트 측:** (보내는 측) 

- `credential:` true

**서버 측:** (받는 측)

- `Access-Control-Allow-Origin`**:** 와일드카드 `*` 안됨, 웹페이지 주소 정확히 명시
- `Access-Control-Allow-Credential` : true

## CORS오류 해결 방법?

- 정석: 서버에서 해결하기
    - 서버에서 Access-Control-Allow-Origin에 유효한 값을 포함해서 달라고 요청
        
        A. 직접 헤더에 명시 
        
        ```jsx
        // Node.js 예시
        res.setHeader('Access-Control-Allow-Origin', 'https://your-frontend-domain.com');
        ```
        
        B. cors 미들웨어 사용(응답에 Access-Control-Allow-Origin 헤더가 자동으로 추가되어 나감)
        
        ```jsx
        // Express.js + cors 미들웨어 사용 예시
        const cors = require('cors');
        app.use(cors({ origin: 'https://your-frontend-domain.com' }));
        ```
        
    - 와일드카드 `*`는 보안문제 야기하므로 특정 주소로 명시해주는 것이 좋음(credentialed 아닌경우에도.
- 프론트엔드: (위 못할경우?) proxy 서버 사용하기.
    - 프록시 서버는 클라이언트와 목적지 서버 사이에서 중개자 역할
    - 서버에서 서버로 요청을 보낼 경우에는 CORS에러가 나지 않는다는 점을 이용하여 우회하는것

…

### CORS 체험 사이트

[CORS Tutorial](https://chuckchoiboi.github.io/cors-tutorial/)

## CORS 미들웨어를 이용한 요청 예시 (GPT, 참고용)

## Node.js

```jsx
const express = require('express');
const cors = require('cors');

const app = express();

// CORS 옵션 설정
const corsOptions = {
    origin: function (origin, callback) {
        if (origin === "http://localhost:3000" || !origin) { // React 앱의 출처
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true, // 자격 증명을 포함한 요청 허용
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// 간단한 GET 요청
app.get('/simple-request', (req, res) => {
    res.json({ msg: 'This is a simple request and does not trigger a preflight.' });
});

// 사전 요청을 유발하는 POST 요청 (자격 증명 포함)
app.post('/credentialed-request', express.json(), (req, res) => {
    res.json({ msg: 'This is a response to a credentialed request.' });
});

const port = 8000; 
app.listen(port, () => console.log(`Server running on port ${port}`));

```

### 클라이언트 요청 (Fetch API)

- simple request

```jsx
fetch('http://localhost:8000/simple-request', {
    method: 'GET', // 간단한 요청은 특정 헤더와 메소드(GET, HEAD, POST)를 사용합니다.
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log('Error:', error));

```

- preflight + credentialed request

```jsx
fetch('http://localhost:8000/credentialed-request', {
    method: 'POST',
    credentials: 'include', // 쿠키/인증과 같은 자격 증명을 포함하기 위해
    headers: {
        'Content-Type': 'application/json', // 사전 요청을 유발하는 커스텀 헤더
    },
    body: JSON.stringify({ data: 'Some data' }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log('Error:', error));

```

## 참고 자료

[https://velog.io/@jh100m1/CORS-에러가-뭔데-어떻게-해결하는건데](https://velog.io/@jh100m1/CORS-%EC%97%90%EB%9F%AC%EA%B0%80-%EB%AD%94%EB%8D%B0-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%95%B4%EA%B2%B0%ED%95%98%EB%8A%94%EA%B1%B4%EB%8D%B0) ⇒ 기반

[https://www.youtube.com/watch?v=bW31xiNB8Nc](https://www.youtube.com/watch?v=bW31xiNB8Nc) 

[https://www.youtube.com/watch?v=-2TgkKYmJt4&t=1166s](https://www.youtube.com/watch?v=-2TgkKYmJt4&t=1166s)

[교차 출처 리소스 공유 (CORS) - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS)

[https://inpa.tistory.com/entry/NODE-📚-CORS-설정하기-cors-모듈](https://inpa.tistory.com/entry/NODE-%F0%9F%93%9A-CORS-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0-cors-%EB%AA%A8%EB%93%88)

[https://inpa.tistory.com/entry/WEB-📚-CORS-💯-정리-해결-방법-👏](https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F) [Inpa Dev 👨‍💻:티스토리]
