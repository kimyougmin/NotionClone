import { request } from "../api/api.js";

export default function DeletePage({ $target, documentId, onNavigate }) {
    const $page = document.createElement("div");
    $page.className = "delete-page";

    // 페이지 렌더링
    this.render = () => {
        $page.innerHTML = `
            <h1>문서 삭제</h1>
            <p>정말로 이 문서를 삭제하시겠습니까?</p>ㄹ
            <button id="confirm-delete">삭제</button> 
            <button id="cancel-delete">취소</button>
        `;
        $target.appendChild($page);

        // 삭제 버튼 클릭 시 -> 이벤트 리스너 등록
        $page
            .querySelector("#confirm-delete")
            .addEventListener("click", async () => {
                try {
                    // DELETE 요청을 보내 문서 삭제
                    await request(`/${documentId}`, { method: "DELETE" });
                    alert("문서가 삭제되었습니다.");
                    onNavigate("/"); // 메인 페이지로 이동
                } catch (error) {
                    alert("문서 삭제 실패: " + error.message);
                }
            });

        // 취소 버튼 클릭 시
        $page.querySelector("#cancel-delete").addEventListener("click", () => {
            onNavigate("/"); // 취소 시 메인 페이지로 이동
        });
    };

    // 페이지 제거 함수 (새 페이지로 이동할 때 기존 페이지 제거)
    this.destroy = () => {
        $page.remove();
    };

    // 페이지 렌더링 호출
    this.render();
}
