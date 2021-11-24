

# 프로젝트팀명 : BUYMESUSHI


## 👜👢🧢BUYMESUSHI('회사조') - 탄소 감축을 위한 인증 SNS 플랫폼
## 프로젝트 시작일 : 2021-11-05

## 👜👢🧢[**서비스로 이동**](http://주소 미정/)



p.s. 현재 서버를 닫은 관계로 실행이 되지 않습니다

--  
<img width="700" alt="스크린샷 2021-11-05" src="https://user-images.githubusercontent.com/89692626/142747278-39f3f30e-f8d2-4b99-a61f-ceae18ca9d0b.png">  

---   

Member. 


이성재:[깃허브](https://github.com/seongjae-Leee)   
최현석:[깃허브](https://github.com/Hyerin1208)  
김혜린:[깃허브](https://github.com/Tozinoo)  
이소윤:[깃허브](https://github.com/jsoyun)  




  
  

# 목차
[1.개요](#개요)

[2.목적](#목적)

- 기존 서비스와의 차별점

[3.전체 소스 코드](#전체-소스-코드-click)

[4.사용한 기술](#사용한-기술)

[5.주요 기능](#주요-기능)

[6.발생한 이슈 & 해결 방법](#발생한-이슈--해결-방법)

[7.상세 설명](#상세-설명)

 - DB 구조 (ERD)

 - 전체 흐름도
 
 - 프로젝트 설명 PPT

[8.시연 영상](#시연-영상)

[9.참여인원](#참여-인원-3명)

***

### 개요
  
탄소 감축을 위한 인증 SNS 플랫폼  

### 목적

>  탄소 감축을 위한 인증 SNS 플랫폼
> 
> 1. SNS 기능 활성화
> 2. 프로젝트 경험
> 3. 블록체인 기반 암호화폐로 대체될 포인트제도 숙달
> 

- **기존 서비스와의 차별점**

   - 커뮤니티 서비스 제공
   - 자체 할인율 적용 결제서비스 연동(솔루션)
   

### 전체 소스 코드 [소스](https://github.com/buymesushi/BUYMESUSHI.git)


### 사용한 기술

- 웹 화면 구성 : `HTML5` `CSS3` `React` `JavaScript` `Styled-Component`
- 검색 결과 데이터 요청 및 출력 : `Ajax` `JSON` `axios`
- DB 액션 처리 : `Mongoose`
- DBMS : `MongoDB`
- 개발 Tool :`PostMan``Visual Studio Code`
- 날씨 Api : `openweathermap API`
- 프레임워크 : `NodeJs`
- 프로젝트 관리 Tool : `Google Drive` `GitHub`  


-------------------------------------------------------------------여기까지------------------------------------------------------------------------




- 사용 모듈(server) : "bcrypt": "^5.0.1",
        "body-parser": "^1.19.0",
        "concurrently": "^6.3.0",
        "cookie-parser": "^1.4.5",
        "cors": "^2.8.5",
        "express": "^4.17.1",
        "faker": "^5.5.3",
        "fs": "^0.0.1-security",
        "jsonwebtoken": "^8.5.1",
        "jwt-decode": "^3.1.2",
        "jwt-token": "^1.0.9",
        "mongo-seeding": "^3.7.0",
        "mongoose": "^6.0.12",
        "mongoose-auto-increment": "^5.0.1",
        "mongoose-sequence": "^5.3.1",
        "multer": "^1.4.3",
        "path": "^0.12.7"  
        
- 사용 모듈(client) :     "@ckeditor/ckeditor5-build-classic": "^31.0.0",
    "@ckeditor/ckeditor5-react": "^3.0.3",
    "@emotion/react": "^11.5.0",
    "@emotion/styled": "^11.3.0",
    "@material-ui/core": "^4.12.3",
    "@material-ui/icons": "^4.11.2",
    "@mui/icons-material": "^5.0.5",
    "@mui/material": "^5.0.6",
    "@mui/styled-engine-sc": "^5.0.4",
    "@mui/styles": "^5.1.0",
    "@nivo/core": "^0.74.0",
    "@nivo/line": "^0.74.0",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "@toast-ui/editor-plugin-code-syntax-highlight": "^3.0.0",
    "@toast-ui/editor-plugin-color-syntax": "^3.0.2",
    "@toast-ui/react-editor": "^3.1.1",
    "axios": "^0.24.0",
    "bulma": "^0.9.3",
    "chart.js": "^3.6.0",
    "eslint-plugin-import": "^2.25.2",
    "formik": "^2.2.9",
    "http-proxy-middleware": "^2.0.1",
    "material-ui-icons": "^1.0.0-beta.36",
    "mobx": "^6.3.7",
    "mobx-persist": "^0.4.1",
    "mobx-react": "^7.2.1",
    "mobx-react-form": "^3.2.0",
    "moment": "^2.29.1",
    "observer": "0.0.2",
    "prismjs": "^1.25.0",
    "prop-types": "^15.7.2",
    "react": "^17.0.2",
    "react-chartjs-2": "^3.2.0",
    "react-dom": "^17.0.2",
    "react-hook-form": "^7.18.1",
    "react-icons": "^4.3.1",
    "react-modal": "^3.14.3",
    "react-pretty-carousel": "^1.0.19",
    "react-redux": "^7.2.6",
    "react-router-dom": "^5.3.0",
    "react-scripts": "4.0.3",
    "react-scroll": "^1.8.4",
    "react-scroll-slider": "^1.0.1",
    "react-slick": "^0.28.1",
    "react-spring": "^9.3.0",
    "redux": "^4.1.2",
    "redux-devtools-extension": "^2.13.9",
    "redux-promise": "^0.6.0",
    "redux-thunk": "^2.4.0",
    "sass": "^1.43.4",
    "sass-loader": "^12.3.0",
    "slick-carousel": "^1.8.1",
    "styled-components": "^5.3.3",
    "swiper": "^7.2.0",
    "web-vitals": "^1.0.1",
    "webpack": "4.44.2",
    "yup": "^0.32.11"
        
### 주요 기능

- 로그인 : 일반 로그인, `mongoose` `JWT` `redux` `mongodb`
- 회원가입 : `mongodb` `nodeJS`
- 회원정보변경 :`mongoose` `mongodb`
- 장바구니 : `mongoose` `mongodb`
- 마이페이지 : `mongoose` `mongodb`
- 게시판 : `mongoose` `mongodb`  




# 발생한 이슈 & 해결 방법

### "Nodejs 처리에서의 문제점 파악 ,db및 구조설계 "

- Nunjucks 템플릿 엔진 사용에 미숙으로 인한 에러발생

[상황] nunjucks 동적인 처리 미숙으로 인해 템플릿 에러발생

[문제] nunjucks 동적인 처리 미숙으로 인해 템플릿 에러발생

[해결] public파일 생성후 에러 해결

- nunjucks for문 구현 시 화면에 구현 장애

[상황] 장바구니 구현시 nunjucks 활용

[문제] for문 과 mysql 관계 설정 미숙으로 인해 화면에 렌더링이 안댐

[해결] nunjucks 와 관게쿼리 해결 완료 로 인해 문제해결

- 라우트 get,post,CRUD 메서드 연결 구현 이해부족

[상황] 게시물,장바구니,상품등록,회원가입 구현에 있어서 에러발생

[문제] 게시물,장바구니,상품등록등 등 관계쿼리 사용부분에 있어서 CRUD에 대한 이해부족으로 인해 장애발생

[해결] 추가적인 학습과 관계쿼리 추가로 이해하면서 보안하여 장애 해결

- Git 브랜치 활용 미숙

[상황] 코드 병합

[문제] 각자 코드 작성 한것에 대한 코드 병합시 에러발생 (코드 병합시 코드 삭제댐)

[해결] 분업화 및 소통활성화 후에 코드 병합시 순차적으로 병합 

- Nunjucks css,js코드먹통

[상황] 코드 가 스크립트,링크로 경로를지정해줘도 코드가먹지않는현상

[문제] 동적인파일이먹는곳은 메인,레이아웃등 헤더, 코드가 연결이되는데 그외에 인크루드방식으로 사용하는 html은 코드가 먹통이되는현상이생김

[해결] 인크루드방식코드는 html파일자체에 css,js를 작성했음

      - 코드먹통으로인한 SASS사용

      [상황] 링크,스크립트경로지정이안되어 SCSS 컴파일한 CSS 동적인요소언어들이 먹지않는현상

      [문제] 어떻게든 스크립트형식이나 링크를 해결할려고했으나 구글링을해도 넌적스에대한 관련대체방안들이 너무적어서 참고할요소가 없어서 SCSS를 포기해야되는지 고민

      [해결] SCSS파일을 CSS로 컴파일후 겹치는 CSS요소가있는지 각파일마다 확인후 자체적으로 따로 HTML파일안에 스타일을 지정해줌으로써 해결

- Socket.io 의 ngrock 서버문제

[상황] ngrock의 문제

[문제] ngrock 이 최대 3명만가능해서 채팅기능이 3명이상 채팅이불가능했던 문제

[해결] ec2서버를열때 rgrock 을 사용하지않고 소켓을 자체적으로 서버를 열어서 인크루드방식으로 바꿈으로서 대량의인원도 문제없도록 해결함

### "게시판 CRUD 기능에서의 라우팅과 db관계설정"

- 두 테이블간의 관계 핸들링 미숙

[상황] 게시글을 작성한 유저의 nick 값을 작성자 란에 넣지 못함

[문제] 해당 페이지로 데이터를 보냄과 nunjucks 문으로 그 값을 불러오는데 있어 미숙

[해결] 라우터에서 정보를 get할 때 User model에서 nick을 attributes에 추가해주고 nunjucks 문에서는 board의 User 모델을 불러옴

- 조회수 ++ 선언과 할당에 대한 이슈

[상황] 특정 게시물을 눌렀을 때 조회수(viewcount column)값을 올리지 못함

[문제] 렌더링/선언과 할당에 대한 이해 부족

[해결] 해당 게시물이 렌더링 되기 전에 선택된 그 글의 viewcount에 1을 더한값을 할당해 보여줌  

### "NodeJs ,Socket.IO 를 통해 실시간 통신을 구현"

- 실시간 채팅 구현

[상황] 사용자들끼리 실시간 쇼핑관련 소통을하기위한 채팅

[문제] socket.io서버 를 코드에 추가할 떄 오류 발생

[해결] 서버의 순서도를 재배치 함으로써 문제 해결

- socket.id와 idx

[상황] 특정 사용자에게 메세지를 보내려면 해당 사용자의 socket.id를 알아야 함

[문제] socket.id는 브라우저를 킬 때마다 새롭게 생성됨, 고유한 key가 되지 못함

[해결] 해당 회원을 식별할 수 있는 idx 값을 활용:  idx값을 속성이름으로 추가, 그 속성의 값은 소켓의 ID값으로 할당함

- connected

[상황] 'ooo님이 채팅방에 입장/퇴장 하셨습니다' 기능을 추가해야함

[문제] 시간 부족으로 인해 미완성

[해결]  나중에 보안 할 예정

**NodeJs socket.io 깨달은 점 **

실시간 사용자들끼리의  채팅이기에 socket.id를 사용하는 1:1 채팅을 구현했음. socket.io 특성 상 사용자 지정에 대한 이해도 숙지 

# AWS 활용(EC2, RDS)  
<img width="500" alt="34" src="https://user-images.githubusercontent.com/89692626/137617870-177cb2d9-854b-423a-b04d-3bf45de24ae9.png">     
<img width="1000" alt="35" src="https://user-images.githubusercontent.com/89692626/137617902-f1bfc9b5-8462-4300-9365-4bd45017b2f3.png">    
<img width="1000" alt="36" src="https://user-images.githubusercontent.com/89692626/137617905-318f133b-24b3-48ee-800d-3e491d550487.png"> 


데이터베이스 AWS EC2방식 체택 인스턴스 생성후 키값생성 후
서버 연결
<img width="400" alt="41" src="https://user-images.githubusercontent.com/89692626/137617959-d52e400d-d98f-4f6d-a035-948354a394ad.png">
<img width="400" alt="42" src="https://user-images.githubusercontent.com/89692626/137617960-c55d109a-dad6-4357-9c5f-87e25edac9dd.png">
<img width="400" alt="43" src="https://user-images.githubusercontent.com/89692626/137617961-14e02f5a-e202-41a7-9035-75bd4fd9eadd.png">
<img width="400" alt="44" src="https://user-images.githubusercontent.com/89692626/137617962-37868599-b3c1-4225-b012-1d4a30439032.png">


데이터베이스 AWS EC2방식 체택 인스턴스 생성후 키값생성 후
서버 연결

AWS의 RDS로 데이터베이스를 공유하여 협업하여 프로젝트를 진행하였고
AWS의 EC2를 활용하여 배포를 하였습니다

서버 연결하기 전 SCREEN을 활용 cmd창을 닫거나 컴퓨터를 종료하여도 서버가 계속 돌아가게 유지했습니다






# 상세 설명
전체 코드 : [코드](https://github.com/3eteam/3eteamproject)

    - 폴더 설명
    views : html(Nunjucks)
    video : video files(front 영상)
    vendor : cdn파일(scss, jQuery 모음)
    uploads : img파일(게시글 등록, 상품 등록 시 자동생성되어 이미지를url로 mySQL DB에 저장)
    routes : 페이지별 라우트 생성(CRUD, sequelize)
    public : front 동적(css, js, img)
    profileimg : img파일(회원가입 시 자동생성되어 이미지를url로 mySQL DB에 저장)
    passport : 로그인 관리
    node_modeules
    models : DB 테이블 생성(sequelize, 관계도 형성)
    imgages/icons : favicon파일
    fonts : 다운받은 폰트 모음
    config : AWS RDS 연동
    
    

서버(app.js) : [코드](https://github.com/3eteam/3eteamproject/blob/f2a2e1500f375490e0b2090779ab612237ae2039/3e/app.js)
-> 각 페이지별 라우터 설정, passport 6002번, express 모듈로 넌적스를 http로 연결

### 페이지별 설명(views-html)   


## board : board, boarddetail, boardwrite, boardedit  
<img width="400" alt="61" src="https://user-images.githubusercontent.com/89692626/137718441-cb96579f-a46a-4201-90aa-ed579aa468f2.png">  
게시판의 첫 페이지로 게시글 번호는 AUTO INCREMENT되는 게시글의 id로 나타나고 작성자에는 해당 게시글을 작성한 유저의 닉네임이 표시된다.  
<img width="400" alt="62" src="https://user-images.githubusercontent.com/89692626/137718449-2d768a39-72bf-4168-912a-4912b46db76f.png">  
글 작성 버튼을 누르면 넘어가는 페이지로 제목과 내용과 사진을 업로드할 수 있고 제출버튼을 누르면 게시글이 DB에 저장되어 board게시판에 보여진다.  
<img width="400" alt="63" src="https://user-images.githubusercontent.com/89692626/137718456-fb72d3c2-3d5a-43f0-b5aa-508ba4a759d7.png">  
방금 작성한 게시글이 닉네임과 함께 등록된 모습이다.  
<img width="400" alt="64" src="https://user-images.githubusercontent.com/89692626/137718457-02edc0c9-5f7f-4db9-a3ad-d6562be1a375.png">  
게시글의 제목을 누르면 해당 글을 더 자세히 볼 수 있는데 조회수는 해당 페이지로 렌더링되기 전에 게시글의 viewcount가 1 올라간다.   
<img width="368" alt="55" src="https://user-images.githubusercontent.com/89692626/137724837-d882c490-206e-4b66-b4b6-3b303fa00707.png">  
자기가 쓴 글에는 유저Nick과 해당 게시글의 Nick이 같기 때문에 수정과 삭제 버튼이 생긴다. 삭제를 하게 되면 DB에서 해당글이 사라진다.  
<img width="400" alt="65" src="https://user-images.githubusercontent.com/89692626/137718460-66a12fda-10f2-46c0-81b3-5f248780e6d4.png">  
수정을 하면 제목과 내용은 value를 가져와서 그대로 뜬 상태에서 글을 수정할 수 있게 되어있고 위와 같이 수정이 된다.  
<img width="400" alt="66" src="https://user-images.githubusercontent.com/89692626/137718461-a7c693cf-884f-454a-a2a1-a1f795c38a25.png">  
수정을 하면 위와 같이 수정된 내용이 게시글에 다시 표시가 된다.   
  

  












 







### DB구조 (ERD)
![KakaoTalk_Photo_2021-10-17-15-22-45](https://user-images.githubusercontent.com/88940298/137614327-8508ccda-6572-4a70-af91-d1f9063c4a60.jpeg)


### 프로젝트 기획안 PPT
[구글 프레젠테이션 파일](https://docs.google.com/presentation/d/1OXVmXrEVzpxmP-WIhmVdoelkYk0yFbY2/edit?usp=sharing&ouid=116791032032435384891&rtpof=true&sd=true)

# 시연 영상
[유튜브첫페이지 전반적인 틀,index 영상](https://www.youtube.com/watch?v=FMPbevKqxzo)    
[유튜브시연영상1](https://www.youtube.com/watch?v=tTzy22FIxdk)    
[유튜브시연영상2](https://www.youtube.com/watch?v=OSPGKf2z3MY)    

