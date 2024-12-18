import PostList from './PostList.js';
import { request } from "../api/api.js";
import PostHeader from "./PostHeader.js";

export default function PostIndexPage({ $target, route }) {
    const $postsPage = document.createElement("section");
    $postsPage.id = "left";

    new PostHeader({
        $target: $postsPage
    })

    const postList = new PostList({
        $target: $postsPage,
        initialState: [],
        route
    });

    const fetchPosts = async () => {
        const posts = await request("/");
        postList.prepend(posts);
    }

    this.render = async () => {
        await fetchPosts();
        $target.prepend($postsPage);
    }
    this.route = () => {
        this.setState();
    }
}