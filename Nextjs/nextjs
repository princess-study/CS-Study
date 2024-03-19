## Next.js란 무엇인가요

풀스택 웹 애플리케이션 구축을 위한 React 프레임워크입니다. React 구성요소를 사용해 사용자 인터페이스를 구축하고 Next.js를 사용해 추가 기능과 최적화를 수행합니다.

## **[주요 특](https://nextjs.org/docs#main-features)징**

Next.js의 주요 기능 중 일부는 다음과 같습니다.

| 특징 | 설명 |
| --- | --- |
| https://nextjs.org/docs/app/building-your-application/routing | 레이아웃, 중첩 라우팅, 로딩 상태, 오류 처리 등을 지원하는 서버 구성 요소 위에 구축된 파일 시스템 기반 라우터입니다. |
| 렌더링 | 클라이언트 및 서버 구성 요소를 사용한 클라이언트 측 및 서버 측 렌더링. Next.js를 사용하여 서버에서 정적 및 동적 렌더링으로 더욱 최적화되었습니다. Edge 및 Node.js 런타임에서 스트리밍합니다. |
| https://nextjs.org/docs/app/building-your-application/data-fetching | 서버 구성 요소의 async/await를 사용하여 데이터 가져오기를 단순화하고 fetch요청 메모, 데이터 캐싱 및 재검증을 위한 확장된 API를 제공합니다. |
| https://nextjs.org/docs/app/building-your-application/styling | CSS 모듈, Tailwind CSS, CSS-in-JS 등 선호하는 스타일 지정 방법 지원 |
| https://nextjs.org/docs/app/building-your-application/optimizing | 애플리케이션의 핵심 웹 바이탈 및 사용자 경험을 개선하기 위한 이미지, 글꼴 및 스크립트 최적화. |
| https://nextjs.org/docs/app/building-your-application/configuring/typescript | 더 나은 유형 검사, 더 효율적인 컴파일, 사용자 정의 TypeScript 플러그인 및 유형 검사기를 통해 TypeScript에 대한 지원이 향상되었습니다. |

## 라우팅

---

버전에 따라 `app` 라우팅(13버전 부터)과 `pages` 라우팅으로 나뉘어집니다. 이 글에선 최신버전인 14버전 기준으로 설명할 것이기 때문에 `app` 라우팅을 기준으로 설명하겠습니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2d462fa1-eb06-49c7-b095-093aaf9d0e22/f8d0d83d-a85f-4aee-9791-ba5e7eb4ef13/Untitled.png)

- 파일시스템 구조인 트리 형태로 구성할 수 있습니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2d462fa1-eb06-49c7-b095-093aaf9d0e22/93b3ae6d-e921-4a30-986a-8f5ca7c34d4c/Untitled.png)

- URL Segment : 슬래시로 구분된 URL 경로의 일부입니다.
- URL Path : 도메인 뒤에 오는 URL의 일부(세그먼트로 구성)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2d462fa1-eb06-49c7-b095-093aaf9d0e22/58f67f5d-18c6-44ed-a7ce-f332fb623aa5/Untitled.png)

- `app` 디렉터리에서 작동하며  `pages` 도 허용합니다. 하지만 우선순위는 `app` 라우터가 더 높습니다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2d462fa1-eb06-49c7-b095-093aaf9d0e22/8b63f330-faa6-4785-a007-12416515386f/Untitled.png)

- 경로의 각 폴더는 경로 세그먼트를 나타냅니다. 각 path segment는 URL 경로의 해당 세그먼트에 매핑됩니다.
- [라우팅 파일](https://nextjs.org/docs/getting-started/project-structure#routing-files) 확인

## 서버 렌더링

---

웹 애플리케이션을 렌더링할 수 있는 환경에는 클라이언트와 서버가 있습니다. 서버에서 렌더링하는데는 세가지 전략이 있습니다.

1. 정적 렌더링
2. 동적 렌더링
3. 스트리밍

### 서버 렌더링의 장점

- 데이터를 가져올 때 : 클라이언트보다 더 가까운  서버에서 데이터를 가져올 수 있다.
- 보안 : 민감한 데이터와 로직을 클라이언트에 노출할 위험 없이 서버에 보관
- 캐싱 : 서버에서 렌더링하면 결과를 캐싱하고 재사용할 수 있습니다.(성능 향상 비용 절감)
- 성능 : 클라이언트 측 JavaScript 다운로드 양을 줄여 초기 속도를 향상시킬 수 있습니다.
- SEO, Social : 렌더링된 HTML은 페이지 색인화에 이용되고 소셜 네트워크 미리보기를 생성합니다.
- 스트리밍 : 렌더링 작업을 청크로 분할하고 클라이언트로 스트리밍 가능합니다. 사용자는 전체 페이지 로딩 전 페이지 일부를 일찍 볼 수 있습니다.

### 정적 렌더링(default)

- 빌드시 렌더링되거나 데이터 재검증(캐시 제거 후 최신 데이터를 가져오는 프로세스) 후 백그라운드에서 렌더링됩니다. 결과는 캐시되어 CDN(Content Delivery Network)로 푸시될 수 있습니다.
- 경로에 사용자 개인화 데이터가 없고, 블로그 게시물이나 제품 페이지 같은 빌드 시 알 수 있는 데이터가 있는 경우 유용합니다.

### 동적 렌더링

- 요청시 각 사용자에 대한 경로가 렌더링됩니다.
- 동적 렌더링은 경로에 사용자에게 맞춤화된 데이터가 있거나 쿠키나 URL의 검색 매개변수와 같이 요청 시에만 알 수 있는 정보가 있는 경우 유용합니다.
- 렌더링하는 동안 [동적 기능](https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-functions) 이나 [캐시되지 않은 데이터 요청이](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#opting-out-of-data-caching) 발견되면 Next.js는 전체 경로를 동적으로 렌더링하도록 전환합니다.
- **`[cookies()](https://nextjs.org/docs/app/api-reference/functions/cookies)` , `[headers()](https://nextjs.org/docs/app/api-reference/functions/headers)` , `[searchParams](https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional)`  이러한 요소들이 사용될 때 경로가 동적렌더링이됩니다.**

### 스트리밍

- 서버에 UI를 점진적으로 렌더링할 수 있습니다.
- 스트리밍은 기본적으로 Next.js 앱 라우터에 내장되어 있습니다. 이는 초기 페이지 로딩 성능뿐만 아니라 전체 경로 렌더링을 차단하는 느린 데이터 가져오기에 의존하는 UI를 모두 개선하는 데 도움이 됩니다.
- [여기](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#instant-loading-states)를 참조
