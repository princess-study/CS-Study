
## 👉[링크](https://khj93.tistory.com/entry/Docker-Docker-%EA%B0%9C%EB%85%90)

## Docker란?
Docker는 Go언어로 작성된 리눅스 컨테이너 기반의 오픈소스 가상화 플랫폼입니다. 현재 Docker 0.9버전부터는 직접 개발한 libcontainer 컨테이너를 사용하고 있습니다.

### 가상화를 사용하는 이유
컴퓨터의 성능을 효율적으로 사용하기 위해 가상화 기술이 등장했습니다. 서버 관리자 입장에서는 낮은 CPU 사용률을 보이는 서버들의 리소스 낭비를 줄이고, 안정성을 높이며 리소스를 최대한 활용하기 위해 서버 가상화가 필요합니다. 대표적인 가상화 플랫폼으로는 VM이 있습니다.

### 컨테이너란?
컨테이너는 OS 레벨의 가상화로 프로세스를 격리시켜 동작하는 가상화 기술 중 하나입니다. 대표적으로 LXC(Linux Container)가 있습니다.

### VM 가상화 플랫폼 vs Docker 가상화 플랫폼
VM 가상화: Host OS 위에 Hypervisor 엔진과 Guest OS를 올려 사용합니다. 완벽하게 Host와 분리됩니다.
Docker 가상화: Docker 엔진 위에 필요한 바이너리만 올라가며, Host의 커널을 공유합니다. 성능의 효율성이 높습니다.
### Docker Image
Docker Image는 컨테이너를 실행할 수 있는 실행 파일, 설정 값들을 포함합니다. Image를 컨테이너에 담아 실행하면 해당 프로세스가 동작합니다.

### Docker File
Docker Image들을 저장하고 배포하는 Docker Hub가 활성화되어 있습니다. Docker File은 이미지 생성의 출발점으로, 이미지를 구성하기 위한 명령어들을 작성하여 이미지를 구성할 수 있습니다.

dockerfile
```
Copy code
FROM jdk8:latest

WORKDIR /app

RUN mkdir /app/nexus-2.14.9-01
RUN mkdir /app/sonatype-work
RUN yum -y install httpd

ENV JAVA_HOME /usr/local/jdk1.8.0_181
ENV PATH=$JAVA_HOME/bin:$PATH
ENV CLASSPATH=.

EXPOSE 3411 
ADD run.sh /app/

CMD ["/app/run.sh"]
```
Docker Hub & Docker Registry
Docker Hub: 이미지를 저장하고 관리해주며, 공개 이미지들을 공유할 수 있습니다.
Docker Registry: 비공개적으로 격리된 저장소를 구축할 수 있습니다.
Docker Architecture
Docker의 구성과 동작 방식을 이해하는 것은 Docker 사용의 기본입니다.

### 결론
Docker의 사용량은 꾸준히 증가하고 있으며, 격리된 프로세스를 통한 이식성과 유연성 덕분에 서버 관리의 표준이 되고 있습니다.
