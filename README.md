# Notepad 프로젝트
<a href="https://pokemon-react-2ab1d.web.app/">사이트 바로가기</a>
<br><br><br>
## 🖥️ 프로젝트 개요
- 이 프로젝트는 주요 기능을 바닐라 js와 hisdtory api를 활용하여 구현한 프로젝트입니다. 문서 생성, 삭제, 편집, 검색, 애니메이션 같은 주요 기능을 구현하면서 SPA의 기본 구조를 설계하는 데 초점을 맞추었습니다.
<br><br><br>
## 👥 팀원 소개
- 김영민(팀장) : 전반적인 프로젝트 관리를 담당했으며, ~~
- - 김동현 :
- - 김지우 :
- - 전성우 :
- - - 한형주 :

<br><br><br>
### 🔧 주요 기능

- 포켓몬 리스트를 출력할 때 많은 양의 비동기 통신을 해야함으로 Promise.all() 메서드를 활용하여 프로미스를 병렬로 처리하였습니다. 또한, 더보기 버튼을 클릭하였을때 useRef 훅을 사용하여 pages를 관리해 포켓몬 리스트를 예측 가능하고 일관성 있게 만들었습니다.
  
  <img width=500px src="https://github.com/kdh990315/pokemon-react/assets/104114383/539afcaf-b81c-4c11-a629-88011da2e4dc" alt="포켓몬리스트">

  <br>
  <br>
  <br>

|제목|내용|설명|
|------|---|---|
|테스트1|테스트2|테스트3|
|테스트1|테스트2|테스트3|
|테스트1|테스트2|테스트3|

- UseParams훅을 사용해 URL의 동적인 부분을 추출하여 해당 id에 맞는 포켓몬 데이터를 가져왔습니다. 이때, 컴포넌트가 렌더링되기 전 데이터를 미리 가져올 수 있는 react-router-dom의 loader를 사용하였습니다.
  
<div>
  <img width=400px src="https://github.com/kdh990315/pokemon-react/assets/104114383/208d2097-593a-4f93-8c1d-f7b4bedc867f" alt="포켓몬URL">
</div>
<br>
  <img width=500px src="https://github.com/kdh990315/pokemon-react/assets/104114383/2eaa328d-f470-4fc4-a1ff-3723dbaf7627" alt="포켓몬디테일">
  
  <br>
  <br>
  <br>

- 포켓몬 이름을 검색하여 해당 포켓몬이 있을 경우 포켓몬디테일을 보여줄 수 있게 제작하였습니다. 만약 해당 포켓몬이 없다면 찾을 수 없다는 모달창이 나온 후 1.5초 후에 자동으로 닫히게 하였습니다.
  (이 기능을 구현할 때 한글로 포켓몬 이름을 지원하는 api를 찾지 못해 모든 포켓몬의 한글이름과 도감번호를 json형태로로 제작하여 find()메서드를 활용하여 도감번호를 반환해주는 형식으로 제작하였습니다)
  
  <img width=500px src="https://github.com/kdh990315/pokemon-react/assets/104114383/5539223e-3bea-4be9-9f23-1320b02f3d86" alt="포켓몬검색창">
  <br>
  <br>
  <br>
  
- 사용자가 화면 우상단의 아이콘을 클릭하면 다크모드와 화이트모드로 전환할 수 있게 구현하였습니다. useContext훅을 사용해 전역적으로 상태를 관리할 수 있도록 구현했습니다.
  
  <img width=500px src="https://github.com/kdh990315/pokemon-react/assets/104114383/86c4a912-2252-4a0e-8ace-21ba9c3e5cff" alt="다크모드">
 


  <br>
  <br>
  <br>
- 사용자가 원하는 포켓몬을 가방에 담을 수 있는 기능을 구현하였습니다. useContext 훅을 활용하여 데이터를 중앙에서 관리하였습니다.
  
  <img width=350px src="https://github.com/user-attachments/assets/9b878156-b08c-4a2a-9895-f79466bbd479" alt="즐겨찾기 기능">
 


  <br>
  <br>
  <br>
  <br>

### 추후 추가적인 기능
- 1차
  - 더보기 기능(완료)
  - 검색기능(완료)
  - 포켓몬 디테일(완료)

- 2차 (예정)
  - 포켓몬 상세정보(체력, 경험치 등)
  - 포켓몬 세대별 모습
  - 포켓몬 즐겨찾기 (완료)
  - 포켓몬데이터 리펙토링 (완료)
  
