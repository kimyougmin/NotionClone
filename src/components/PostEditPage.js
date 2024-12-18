import PostEditHeader from "./PostEditHeader.js";
import PostEditBody from "./PostEditBody.js";

export default function PostEditPage({ $target, initialState }) {
    const $postEditPage = document.createElement("section");
    $postEditPage.id = "right";

    // PostEditHeader에 documentId와 onNavigate 전달
    new PostEditHeader({
        $target: $postEditPage,
        documentId: initialState.documentId, // 여기서 documentId를 전달
        onNavigate: (path) => {
            window.history.pushState(null, null, path);
            // 경로 변경 시 페이지를 다시 렌더링하는 로직 추가
        },
    });

    new PostEditBody({
        $target: $postEditPage,
    });

    this.render = () => {
        $target.prepend($postEditPage);
    };
    this.render();
}
