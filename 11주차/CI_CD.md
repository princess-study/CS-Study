# CI/CD

### 자동화 전

- 개발자가 코드 수정, 빌드, 테스트, 배포를 수동으로 진행.
    - 상당한 시간 소요
    - 불필요한 시간 낭비, 개발에 투자 가능한 시간 감소

![Untitled](https://github.com/princess-study/CS-Study/assets/92621272/b907d329-75c5-4fcc-84f6-2901ca1e9fb0)

### 1. CI란 (Continuous Integration)

- **개념**: 개발자가 작업한 코드를 주기적으로 빌드 및 테스트하여 공유 레포지토리에 통합하는 자동화 프로세스.
- **이점:** 여러 개발자가 동시에 작업할 때 발생할 수 있는 충돌을 해소. 코드의 품질을 유지하고 신속한 피드백을 제공.
- **구현 요소**: 코드 변경을 정기적으로 커밋→ 모든 개발자에게 동일한 작업 기반을 제공.
    
    커밋 시 자동 빌드 및 테스트 실행 → 문제 방지 (충돌을 더 작은 단위에서 일어나게 함)
    
- CI는 CICD 파이프라인 구현의 첫 단계

### 2. CD란 (Continuous Delivery/Deployment)

- **개념**: 코드 변경이 자동으로 빌드, 테스트를 거쳐 프로덕션에 배포되는 과정.
    - Continuous Delivery 와 Continuous Deployment를 포함. 두 단어는 상호 교환적으로 사용되기도, 자동화의 정도에 따라 별도로 사용되기도 한다.
- **이점**: 수동 개입 없이 최신 기능을 빠르게 사용자에게 제공. 개발주기 단축과 품질 유지.
- **구현 요소**: 강력하고 신뢰할 수 있는 자동화 배포 파이프라인 구축. 코드 변경 후 자동화된 프로세스를 통한 효율적 배포.

### 3. CICD 도구

- **종류**: Jenkins, CircleCI, TravisCI, Github Actions 등.
- **선택 기준**: 프로젝트의 요구 사항, 팀의 경험 및 환경에 적합한 도구 선택.
<details>
<summary>CI/CD도구 예</summary>
  <div markdown="1">
    
  - [Jenkins](https://cloud.redhat.com/blog/deploying-jenkins-on-openshift-part-1?extIdCarryOver=true&intcmp=7013a000002wBnmAAE&sc_cid=7013a000002DgC5AAK%27]]&cicd=32h281b&cicd=32h281b): 단순 CI 서버에서 완전한 CD 허브까지 모든 것을 처리하도록 설계된 툴
  - [Spinnaker](https://spinnaker.io/): 멀티클라우드 환경을 위해 구축된 CD 플랫폼
  - [GoCD](https://www.gocd.org/): 모델링 및 시각화에 중점을 둔 CI/CD 서버
  - [Concourse](https://concourse-ci.org/): "지속적인 오픈소스 작업 툴"
  - [Screwdriver](https://screwdriver.cd/): CD용으로 설계된 빌드 플랫폼
    
   ### Jenkins 
  
  - **오픈 소스**: 광범위한 지원과 플러그인 생태계.
  - **유연성**: 다양한 프로그래밍 언어와 플랫폼에 걸쳐 광범위한 통합 지원.
  - **복잡한 설정**: 초기 설정과 관리가 복잡할 수 있으나, 매우 강력한 커스터마이징이 가능.
    
  ### GitHub Actions
    
  - **깃허브 통합**: 코드 호스팅 플랫폼 내에서 직접 CI/CD 가능.
  - **마켓플레이스**: 사용자가 공유한 액션을 통해 확장성과 재사용성 향상.
  - **이벤트 기반 트리거**: 코드 푸시, 풀 리퀘스트, 이슈 코멘트 등 다양한 GitHub 이벤트에 의해 자동 실행.

    
   [https://www.redhat.com/ko/topics/devops/what-is-ci-cd](https://www.redhat.com/ko/topics/devops/what-is-ci-cd)
  
  </div>
  </details>
    

### 4. CICD 적용 전과 후 비교

- **적용 전**: 개발자가 코드 수정, 빌드, 테스트, 배포를 모두 수동으로 처리 → 시간 소모 및 리소스 낭비.
- **적용 후**:
    - **자동화**: 코드를 push하면 CI 서버에서 자동으로 Build, Test, Lint 실행. 에러 수정 후 자동 배포.
    - **효율성**: 개발에 더 많은 시간 투자 가능, 개발 프로세스의 효율성 및 신뢰성 향상.

### 요약

CI/CD는 개발 과정을 자동화하여 개발자가 코드 품질에 더 집중할 수 있게 돕고, 배포 프로세스를 효율적으로 만드는 DevOps 방식. 여러 CICD 도구를 통해 구현 가능.

  <details>
  <summary>추가 용어</summary>
  <div markdown="1">
  
  - 파이프라인:  데이터나 명령어가 처리되는 일련의 과정 또는 단계
  
  - CI/CD 파이프라인: 코드의 변경사항을 자동으로 감지하여 테스트하고, 배포하는 과정을 자동화하는 단계
  
  - DevOps: "Development(개발)"과 "Operations(운영)"의 합성어로, 소프트웨어 개발과 운영을 통합하는 문화, 운동, 또는 관행을 의미. 핵심 목표는 개발(Development)과 운영(Operations) 팀 간의 협력과 의사소통을 강화하여, 더 빠르고 안정적으로 소프트웨어를 배포하고 운영하는 것.
  
  - Lint: 코드의 오류, 버그, 스타일 문제, 그리고 의심스러운 구문 등을 자동으로 검사하고 식별하는 과정이나 도구.
  
  </div>
  </details>


### 참고

[https://www.redhat.com/ko/topics/devops/what-is-ci-cd](https://www.redhat.com/ko/topics/devops/what-is-ci-cd)

[https://seosh817.tistory.com/104](https://seosh817.tistory.com/104)
