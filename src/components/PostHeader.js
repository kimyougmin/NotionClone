export default function PostHeader({ $target }) {
    const $postHeader = document.createElement("div");
    $postHeader.className = "postHeader";
    $target.appendChild($postHeader);

    this.render = () => {
        $postHeader.innerHTML =
            `<img src="../public/notepad_logo.png" />
            <h2>Notepad</h2>
            <img src="../public/round_plus.png"/>`
        ;
    }

    this.render()
}