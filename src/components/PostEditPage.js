import PostEditHeader from "./PostEditHeader.js";
import PostEditBody from "./PostEditBody.js";

export default function PostEditPage({ $target, initialState }) {
    const $postEditPage = document.createElement("section");
    $postEditPage.id = "right";

    this.state = initialState;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };
    // initialState에서 documentId 추출
    const { documentId } = initialState;

    // 여기서 documentId가 정상적으로 전달되는지 확인
    if (!initialState.documentId) {
        console.error("documentId가 전달되지 않았습니다.");
        return; // documentId가 없으면 실행 중단
    }

    // PostEditHeader에 documentId와 onNavigate 전달
    new PostEditHeader({
        $target: $postEditPage,
        documentId: this.state.documentId, // 제대로 전달되었는지 확인
        onNavigate: (path) => {
            window.history.pushState(null, null, path);
            // -> 경로 변경 시 페이지를 다시 렌더링하는 로직 추가
            location.reload(); // 페이지 이동
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
