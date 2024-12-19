# Notepad 프로젝트
<a href="https://pokemon-react-2ab1d.web.app/">사이트 바로가기</a>
<br><br><br>
## 🖥️ 프로젝트 개요
- 이 프로젝트는 주요 기능을 바닐라 js와 hisdtory api를 활용하여 구현한 프로젝트입니다. 문서 생성, 삭제, 편집, 검색, 애니메이션 같은 주요 기능을 구현하면서 SPA의 기본 구조를 설계하는 데 초점을 맞추었습니다.
<br><br><br>
## 👥 팀원 소개

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/kimyougmin"><img src="https://github.com/user-attachments/assets/f897139a-08e2-4841-a871-d1009afe4239" width="100px;" alt=""/><br /><sub><b>김영민(팀장)</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/kdh990315"><img src="" width="100px;" alt=""/><br /><sub><b>김동현</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/erase0250"><img src="" width="100px;" alt=""/><br /><sub><b>김지우</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/Castillou"><img src="" width="100px;" alt=""/><br /><sub><b>전성우</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/hhj4569"><img src="" width="100px;" alt=""/><br /><sub><b>한형주</b></sub></a><br /></td>
  </tbody>
</table>
<br><br><br>

## 🎯 프로젝트 목표
- Vanilla JavaScript만을 활용하여 SPA를 설계하고 구현
- HISTORY API를 활용한 페이지 전환과 상태 관리 학습
- JavaScript의 이벤트 리스너의 활용과 비동기 통신에 대한 이해
- 팀원들과의 원활한 소통을 위한 협업 플렛폼 활용 
<br><br><br>

## ⚙️ 주요 기능



  <br>
  <br>
  <br>



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
  
