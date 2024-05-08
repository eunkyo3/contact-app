# sequelize를 사용해서 연락처 앱 만들기
## package.json 한번에 적용하기

```
npm install
```
## 패키지 전역 설치
```
npm install nodemon --save-dev // 서버를 재시작 할 필요없음
npm install -g sequelize-cli // 
npx sequelize init // db 조작 코드 생성
npx sequelize db:create // 실제로 db 생성
npx sequelize-cli db:migrate
```
```
npm 전역 설치 확인
npm root -g
```
## 앞으로 추가 할 기능
  - 로그아웃
  - 로그인 해야 넘어가기(url로 넘어갈 수 있음)
  - 로그인 세션
  - 로그아웃 시 토큰 만료
  - 로그아웃 버튼
### 참고 자료

[doit-node Repository](https://github.com/funnycom/doit-node)
