import PostEditHeader from "./PostEditHeader.js";
import PostEditBody from "./PostEditBody.js";

export default function PostEditPage({ $target }) {
    const $postEditPage = document.createElement("section");
    $postEditPage.id = "right";

    new PostEditHeader({
        $target: $postEditPage
    });
    new PostEditBody({
        $target: $postEditPage
    });

    this.render = () => {
        $target.prepend($postEditPage);
    };
    this.render();
}
