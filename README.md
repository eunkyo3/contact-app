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
