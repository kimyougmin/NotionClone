export default function PostList({ $target, initialState }) {
    const $postsList = document.createElement("div");
    $postsList.className = "left-main";
    $target.appendChild($postsList);

    this.state = initialState;

    this.setState = (nState) => {
        this.state = nState;
        this.render();
    }
    this.prepend = (items) => {
        this.state = [...items, ...this.state];
    };

    this.render = () => {
        $postsList.innerHTML = `
            <div class="search-box">
                <input type="text" />
                <button>
                    <img src="src/public/search.png" alt="돋보기 아이콘" />
                </button>
            </div>
<!--상위 페이지 하위 페이지는 다른 컴포넌트에서 제작할 예정-->
            <div >
                
            </div>
        `;
    }
    this.render()
}