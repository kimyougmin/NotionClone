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

        // 이벤트 리스너 등록
        $page
            .querySelector("#confirm-delete")
            .addEventListener("click", async () => {
                await request(`/${documentId}`, { method: "DELETE" });
                alert("문서가 삭제되었습니다.");
                onNavigate("/"); // 메인 페이지로 이동
            });

        $page.querySelector("#cancel-delete").addEventListener("click", () => {
            onNavigate("/"); // 취소 시 메인 페이지로 이동
        });
    };

    //

    this.destroy = () => {
        $page.remove();
    };

    this.render();
}
