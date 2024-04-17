# POTG Front-end

> 위 프로젝트를 실행하기 위해서는 [potg-be](https://github.com/Team-POTG/potg-be)와 실행하여야 합니다.

## 1. Run

### 1-1. Installed NodeJS on Machine

1. [NodeJS](https://nodejs.org/en) 설치
2. terminal 실행
3. `npm install` 입력
4. `npm run start` 입력

### 1-2. Installed Docker on Machine

1. [Docker](https://www.docker.com) 설치
2. terminal 실행
3. `docker build -t potg-fe .` 입력
4. 빌드가 끝나면 `docker run -p 3000:3000 potg-fe` 입력

### 1-2. Installed Docker on Machine

### 2. 실행화면

![main](.github/main.png)

### 3. 주요 기술스택

```
- ReactJS
- Typescript
- GraphQL
- EmotionJS (TailwindCSS 레거시 제거 중)
- Tanstack Query (react-query)
```
