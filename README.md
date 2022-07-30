# 싸피 7기 2학기 대전 1반 106B팀 프론트 진행상황

### 220722

#### 종현

- 프론트 프로젝트 생성 첫 커밋
- 프로젝트 초기 설정, 필수 모듈 설치
- 디렉토리 구조 이식, 기본 라우팅 설정
- 상단 네비게이션 바 컴포넌트 생성
- 버튼 컴포넌트 생성
- 메뉴 전용 버튼 컴포넌트 생성
- 이미지 프로필 컴포넌트 생성

#### 성찬

- 전역 css 설정 (font, color)
- 체크박스 컴포넌트 생성

#### 채윤

- 각 section에 사용될 sheet 컴포넌트 생성

### 220723

#### 종현

- 비동기에 사용될 loadingSpinner 컴포넌트 생성

#### 채윤

- 유저 선택을 위한 dropdown 컴포넌트 생성

### 220724

#### 종현

- 폼 형식에 사용될 input 컴포넌트 생성

### 220725

#### 성찬

- 라디오박스, 라디오박스 그룹 컴포넌트 생성
- 모달 컴포넌트 생성

#### 종현

- sheet 컴포넌트 재설정
- 로그인 전용 네비게이션 바 컴포넌트 생성 (HeaderNavAuth)
- 로그인 및 회원가입용 사진 컴포넌트 생성 (WelcomePicture)
- 로그인 컴포넌트 생성
- 로그인 페이지 기본 디자인 완료

### 220726

#### 성찬

- 랜딩 페이지 섹션 컴포넌트 생성
- 랜딩 페이지 레이아웃 설정

#### 종현

- React APP 환경 구축
- next APP -> React APP으로 변환
- 현 시점 모든 코드 전환 완료

### 220727

#### 성찬

- 개발 컨벤션: ESLint & Prettier 설정
- 사용자 메인 페이지 (포스트 섹션 제외) 생성

#### 종현

- 모든 코드 ESLint 규칙에 맞게 리팩토링
- 미팅 페이지에 필요한 컴포넌트 생성 (진행중)
- Meeting.js
  - VideoDisplay1
  - VideoDisplay2
  - VideoControlBtns
  - Chatting

### 220728

#### 성찬

- 좌측 프로필 섹션에 PropTypes 적용
- 프로필 영역에 채우지 못한 아이콘(하트(heart), 설정(gear)) 및 국기 이미지 추가
- 설정 아이콘 클릭 시 사용자 설정 페이지로 이동하도록 링크 추가
- 사용자 메인 페이지 우측 포스트 섹션 구현
- 포스트 아이템 클릭 시 모달 창을 표시하도록 구현
- 포스트 섹션 내 '더 보기' 버튼 및 포스트 더미 데이터 추가

#### 종현

- 미팅 페이지 생성 완료
- Meeting.js
  - VideoDisplay1
  - VideoDisplay2
  - VideoControlBtns
  - Chatting
    - ChattingLog
- Kurento 연결 초기 작업

### 220729

#### 종현
- 유효성 검사 로직 구현
  - 유효성 함수를 외부 함수로 두어, input 재사용 컴포넌트에서 실행함
  - 종속성 최소화, 확장 가능
  - 현 시점 email, password 유효성 완료
  - 연산 처리 및 컴포넌트 재평가 많음 (디바운싱 작업 필요)

#### 성찬
- 로딩 모달 (로딩 중 & 완료) 구현
  - 페이지 대신 모달 형식으로 구현
- 모달의 `contents.content` prop 타입을 `string`에서 `node`로 변경
- 모달의 레이아웃을 클릭했을 때 모달이 닫히지 않게 하는 `locked` prop 추가


### 220730

#### 종현
- 유효성 검사 로직 구현
  - 유효성 함수 외부 모듈로 옮김 (utils/validation)
  - age,nickName,phone 유효성 완료
  - 남은 유효성 (회원가입에만 쓰이는 컴포넌트) 검사는 회원가입 페이지 제작 후 진행
- 유효성 검사 개선 
  - 디바운싱 처리 완료
- 로그인 로직 구현 완료
  - 서버와의 연결은 객체 공유 라이브러리 선정 후 진행 예정
