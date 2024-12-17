export default function PostHeader({ $target }) {
    const $postHeader = document.createElement("div");
    $postHeader.className = "postHeader";
    $target.appendChild($postHeader);

    this.render = () => {
        $postHeader.innerHTML =
            `<img src="../images/folder.png" />
            <h2>Notepad</h2>
            <img src="../images/bluePlus.png"/>`
        ;
    }

    this.render()
}