export default function PostHeader({ $target }) {
    const $postHeader = document.createElement("div");
    $postHeader.className = "logo";
    $target.appendChild($postHeader);

    this.render = () => {
        $postHeader.innerHTML = `<a href="#">
                <img src="public/notepad_logo.png" alt="로고 이미지" />
                <h1>Notepad</h1>
             </a>
            <button>
                <img src="public/round_plus.png" alt="상위 페이지 추가 버튼" />
            </button>
            <div class="top-document">
            
            </div>
            `;
    };

    this.render();
}
