# sequelize를 사용해서 연락처 앱 만들기
## package.json 한번에 적용하기

```
npm install
```
## 패키지 전역 설치
```
npm install nodemon --save-dev // 서버를 재시작 할 필요없음
npm install -g sequelize-cli //

// npm 전역 설치 확인
npm root -g
```
## DB & 테이블 생성 명령어
```
sequelize db:migrate:undo
sequelize model:generate --name 이름 --attributes 이름:타입

// 여기부터 실행
npx sequelize db:create // 실제로 db 생성
npx sequelize-cli db:migrate <파일명(생략가능)> // 테이블 생성
```
## 실행
```
nodemon app.js
```
## 앞으로 추가 할 기능
  - 로그인 해야 넘어가기(url로 넘어갈 수 있음)
  - 로그인 세션

## 나중에 다른 프로젝트 할 때 넣고싶은 기능
  - 토큰을 활용?(DB에 저장해서)
  - 데이터 전송 구간 암호화(http 프로토콜)
  - 레이아웃 사용
  - mysql을 pool을 사용해서 접근
    
### 참고 자료

[doit-node Repository](https://github.com/funnycom/doit-node)
