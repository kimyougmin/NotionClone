export default function PostList({ $target, initialState }) {
    const $postsList = document.createElement("div");
    $postsList.className = "post_list";
    $target.appendChild($postsList);

    this.state = initialState;

    this.setState = (nState) => {
        this.state = nState;
        this.render();
    }
    this.render = () => {
        $postsList.innerHTML = `
            <div></div>
            <div>
                
            </div>
        `;
    }
    this.render()
}