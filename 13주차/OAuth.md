# Oauth 2.0

[https://hudi.blog/oauth-2.0/](https://hudi.blog/oauth-2.0/) 기반

## **OAuth 등장 배경 및 필요성**

- **직접적인 ID/PW 저장의 문제점**:
    - 서비스가  타 플랫폼의 서비스를 이용하고 싶음⇒ but 사용자의 구글, 페이스북, 트위터 등의 ID와 비밀번호를 직접 저장하고 활용하는 것은 큰 보안 리스크 초래
- **제3자 신뢰 문제**:
    - 사용자는 새로운 서비스를 쉽게 신뢰하기 어렵고, 민감한 정보를 제3자에게 제공해야함. ⇒서비스 제공자와 타 플렛폼 모두에게 부담

### 개발 배경

- **비표준화된 인증 시스템의 한계**:
    - 따라서 구글 AuthSub, 야후 BBAuth와 같이 각 회사가 독자적인 인증 방법 개발함 ⇒ 표준화되지 않아 서로 다른 시스템 간의 호환성 문제 발생. 각 서비스 이용시 개별적인 유지보수 필요
    - **표준책으로 등장한것이 OAuth.**

### **OAuth란?**

- **정의**: 사용자 데이터(리소스)에 접근하기 위해 사용자의 접근 권한을 클라이언트에게 위임하는 수단으로서 사용되는 개방형 표준.
- **기능**: 사용자가 우리의 서비스를 사용하는 동안 구글, 페이스북 등의 플랫폼으로부터 위임받은 권한을 이용함.
- 인증과 인가 대상을 분리한다.
- OAuth 2.0은 1.0에서 알려진 보안 문제 등을 개선한 버전

## **용어**

### **OAuth 2.0 주체**

- **Resource Owner**: 리소스(개인정보) 를 소유하고 있는 사용자.
- **Authorization Server & Resource Server:**
    - **Authorization Server:** 인증(권한 부여) 서버(액세스 토큰을 발급)
    - **Resource Server**: 리소스 서버(개인정보 소유,응답 ).
        - 공식문서상 별개이지만, 별개로 구성할지, 하나로 구성할지는 개발자(구글, 페이스북의 …)가 결정
- **Client**: 리소스 서버의 자원을 이용하고자 하는 서비스.

### 사전 개념

- **Redirect URI**: 인증 성공 후 사용자를 리디렉션할 URI.
- **Client ID & Client Secret**: 클라이언트 등록 후 발급받은 식별자 및 비밀번호.
- **Scope**: 클라이언트의 리소스 접근 권한 범위.

## **OAuth 2.0 흐름**

다음은 Authorization Code Grant 방식 기반의 설명이다 

<details>
<summary> OAuth 2.0의 기본적인 4가지 프로토콜</summary>
<div markdown="1">
    
    
**1. 코드 부여 방식 (Authorization Code Grant):**

- 가장 일반적이고 안전한 방식.
- 사용자는 클라이언트 제공 링크로 이동하여 로그인 후, 인증 서버로부터 **승인 코드**를 받는다.
- 클라이언트는 승인 코드를 사용하여 **액세스 토큰**과 **갱신 토큰**을 발급.
- 액세스 토큰을 사용하여 리소스 서버에 자원에 접근한다.

**2. 암시적 부여 방식 (Implicit Grant):**

- 간편한 웹 애플리케이션에 적합.
- 사용자는 클라이언트 제공 링크로 이동하여 로그인 후, **액세스 토큰**과 **ID 토큰**을 직접 받는다.
- 액세스 토큰을 사용하여 리소스 서버에 자원에 접근.
- **보안성이 코드 부여 방식보다 떨어진다.**

**3. 리소스 소유자 자격 증명 부여 방식 (Resource Owner Password Credentials Grant):**

- 이미 사용자의 인증 정보를 보유한 클라이언트에 적합.
- 클라이언트는 사용자의 **아이디**와 **비밀번호**를 사용하여 **액세스 토큰**을 발급받는다.
- 액세스 토큰을 사용하여 리소스 서버에 자원에 접근.
- **사용자의 인증 정보를 클라이언트에 노출시키므로 보안 위험이 높다.**

**4. 클라이언트 자격 증명 부여 방식 (Client Credentials Grant):**

- 클라이언트 자체가 리소스에 접근해야 하는 경우에 사용됨.
- 클라이언트 ID와 클라이언트 비밀번호를 사용하여 **액세스 토큰**을 발급받는다.
- 액세스 토큰을 사용하여 리소스 서버에 자원에 접근.
- **사용자 인증 없이 리소스에 접근하기 때문에 주의가 필요하다.**


</div>
</details>

![Untitled](https://github.com/princess-study/CS-Study/assets/92621272/bba86752-1505-45c8-9e37-3c53306d61f4)


## 인증

클라이언트는 오로지 로그인 페이지에 URI만 제공해주고 실 로그인 페이지나 인증 과정 수행등은 Resource Owner와 Authorization 서버만 참여. ⇒인증과 인가의 대상분리

- Resource Owner ↔Authorization  Server:  ID, PW를 제공해 Authorization Code발급

## 인가

- Client↔  Authorization Server: 발급한 Authroization Code를 제공해 access token과 refresh token 발급
- Client↔ Resource Server: Token을 넘겨 개인정보(리소스) 응답받음

### **Authorization Code의 필요성**

- 민감 정보 보호: **Authorization Code** 발급과정 생략시, Authorization Server가 Access Token을 Client에 전달하기 위해 Redirect URI를 통해야 함→ URL 자체에 데이터를 실어 전달하는 방법뿐임 →  데이터가 그대로 노출됨
- Access Token 은 민감한 데이터⇒ 노출되면 안됨 ⇒ 보안을 위해 Authroization Code 먼저 발급.
- (Implicit Grant 방식의 문제점)

### 참고

[https://hudi.blog/oauth-2.0/](https://hudi.blog/oauth-2.0/)

[https://inpa.tistory.com/entry/WEB-📚-OAuth-20-개념-💯-정리](https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-OAuth-20-%EA%B0%9C%EB%85%90-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC)

[https://blog.naver.com/mds_datasecurity/222182943542](https://blog.naver.com/mds_datasecurity/222182943542)

[https://www.youtube.com/watch?v=Mh3LaHmA21I&t=41s](https://www.youtube.com/watch?v=Mh3LaHmA21I&t=41s)
