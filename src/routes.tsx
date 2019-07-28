import Home from "./pages/home/home";
import Post from "./pages/post/post";

export const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/post/:postId",
        component: Post
    }
];

export default routes;
