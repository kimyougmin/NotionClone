export default function PostEditHeader({ $target }) {
    const $editHeader = document.createElement("div");
    $editHeader.className = "document-info-container";
    $target.appendChild($editHeader);
    this.render = () => {
        $editHeader.innerHTML =
            `<h3>상위 페이지 > 새로운 글의 제목</h3>
             <div class="btn-container">
                 <button class="save-btn">
                     <img src="src/public/save.png" alt="저장 이미지" />
                     <span>저장</span>
                 </button>
                <button>
                    <img src="src/public/trash.png" alt="삭제 이미지" />
                    <span>삭제</span>
                </button>
            </div>
            `
        ;
    }

    this.render();

};