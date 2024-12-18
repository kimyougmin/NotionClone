import { request } from "../api/api.js";

export default function PostEditHeader({ $target, documentId, onNavigate }) {
    const $editHeader = document.createElement("div");
    $editHeader.className = "document-info-container";
    $target.appendChild($editHeader);
    this.render = () => {
        $editHeader.innerHTML = `<h3>상위 페이지 > 새로운 글의 제목</h3>
             <div class="btn-container">
                 <button class="save-btn">
                     <img src="public/save.png" alt="저장 이미지" />
                     <span>저장</span>
                 </button>
                <button class="remove-btn data-id="${documentId}"">
                    <img src="public/trash.png" alt="삭제 이미지" />
                    <span>삭제</span>
                </button>
            </div>
            `;
        // 삭제 버튼 클릭 시 삭제 요청
        $editHeader
            .querySelector(".remove-btn")
            .addEventListener("click", async () => {
                console.log("삭제할 ID 확인 :", documentId); // 삭제할 ID 확인
                try {
                    // DELETE 요청 보내기
                    console.log("삭제하려는 Id :", documentId); // 삭제하려는 documentId 확인

                    // 수정된 부분: URL에 documentId를 추가하여 요청
                    await request(`/${documentId}`, {
                        method: "DELETE",
                    });

                    alert("문서가 삭제되었습니다.");
                    onNavigate("/"); // 메인 페이지로 이동
                } catch (error) {
                    alert("문서 삭제 실패: " + error.message);
                    console.log(error);
                }
            });
    };

    // 렌더링 호출
    this.render();
}
