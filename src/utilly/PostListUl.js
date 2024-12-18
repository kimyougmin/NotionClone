<<<<<<< HEAD
export default function PostListUl(state) {
    return (
        `<ul>
            ${state.map((e) => {
                // const 
        })}
        </ul>`
    )
};
=======
import { PostListMiniUl } from "./PostListMiniUi.js";

export function PostListUl(state) {
    const $listContainer = document.createElement("ul");

    $listContainer.innerHTML = state
        .map((e) => {
            const listToggleName = `isOpened-${e.id}`;
            return `
                <div class="top-document-info">
                    <div class="top-document-left active ${listToggleName}">
                        <button>
                            <img src="src/public/down_arrow.png" alt="아래 화살표" />
                        </button>
                        <h2>${e.title}</h2>
                    </div>
                    <div class="top-document-right">
                        <button>
                            <img src="src/public/plus.png" alt="하위 페이지 추가 버튼" />
                        </button>
                   <button class="remove-btn" data-id="${documentId}">
                            <img src="src/public/trash.png" alt="상위 페이지 삭제 버튼" />
                        </button>
                    </div>
                </div>
                ${
                    e.documents.length > 0
                        ? `<ul class="sub-document" style="display: none">${PostListMiniUl(
                              e.documents
                          )}</ul>`
                        : ""
                }
            `;
        })
        .join("");

    return $listContainer.outerHTML;
}
>>>>>>> 6614a35 (feat: 헤더의 삭제 기능 추가)
