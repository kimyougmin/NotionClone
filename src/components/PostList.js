// import { PostListUl } from "../utilly/PostListUl.js";
//
// export default function PostList({ $target, initialState }) {
//     const $postsList = document.createElement("div");
//     $postsList.className = "left-main";
//     $target.appendChild($postsList);
//
//     this.state = initialState;
//
//     this.setState = (nState) => {
//         this.state = nState;
//         this.render();
//     }
//     this.prepend = (items) => {
//         this.setState([...items, ...this.state])
//     };
//
//     this.render = () => {
//         $postsList.innerHTML = `
//             <div class="search-box">
//                 <input type="text" />
//                 <button>
//                     <img src="src/public/search.png" alt="돋보기 아이콘" />
//                 </button>
//             </div>
// <!--상위 페이지 하위 페이지는 다른 컴포넌트에서 제작할 예정-->
//             ${PostListUl(this.state)}
//         `;
//         this.addToggleEvent();
//     }
//     this.addToggleEvent = () => {
//         const toggleButtons = $postsList.querySelectorAll(".top-document-left button");
//
//         toggleButtons.forEach((button) => {
//             button.addEventListener("click", (event) => {
//                 const parentElement = event.target.closest(".top-document-info");
//                 const subDocument = parentElement.nextElementSibling;
//
//                 if (subDocument && subDocument.classList.contains("sub-document")) {
//                     const isHidden = subDocument.style.display === "none";
//                     subDocument.style.display = isHidden ? "block" : "none";
//                 }
//             });
//         });
//     };
//
//     // $postsList.addEventListener("click", (event) => {
//     //     // 토글 버튼 클릭 시
//     //     const parentElement = event.target.closest(".top-document-info");
//     //     const subDocument = parentElement.nextElementSibling;
//     //
//     //     if (subDocument && subDocument.classList.contains("sub-document")) {
//     //         // 토글 상태 변경
//     //         const isHidden = subDocument.style.display === "none";
//     //         subDocument.style.display = isHidden ? "block" : "none";
//     //     }
//     // });
//
//     this.render();
// }
// PostList
import { PostListUl } from "../utilly/PostListUl.js";

export default function PostList({ $target, initialState }) {
    const $postsList = document.createElement("div");
    $postsList.className = "left-main";
    $target.appendChild($postsList);

    this.state = initialState;

    this.setState = (nState) => {
        this.state = nState;
        this.render();
    };
    this.prepend = (items) => {
        this.setState([...items, ...this.state]);
    };

    this.render = () => {
        $postsList.innerHTML = `
            <div class="search-box">
                <input type="text" />
                <button>
                    <img src="src/public/search.png" alt="돋보기 아이콘" />
                </button>
            </div>
            ${PostListUl(this.state)}
        `;
        this.addEvents();
    };

    this.addEvents = () => {
        // 모든 li 요소에 이벤트 리스너 추가
        const listItems = $postsList.querySelectorAll(".sub-document-item");
        listItems.forEach((item) => {
            item.addEventListener("click", (event) => {
                // 모든 li의 배경색 초기화
                listItems.forEach((li) => {
                    li.style.backgroundColor = "white";
                });

                // 클릭한 li의 배경색 변경
                const clickedItem = event.currentTarget;
                clickedItem.style.backgroundColor = "#f3f3f3";
            });
        });

        // 토글 버튼 이벤트
        const toggleButtons = $postsList.querySelectorAll(".top-document-left button");
        toggleButtons.forEach((button) => {
            button.addEventListener("click", (event) => {
                const parentElement = event.target.closest(".top-document-info");
                const subDocument = parentElement.nextElementSibling;

                if (subDocument && subDocument.classList.contains("sub-document")) {
                    const isHidden = subDocument.style.display === "none";
                    subDocument.style.display = isHidden ? "block" : "none";
                }
            });
        });
    };

    this.render();
}
