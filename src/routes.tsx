import Home from "./pages/home/home";
import Post from "./pages/post/post";
import AllianceLevelingGuide from "./pages/alliance-leveling-guide/alliance-leveling-guide";

export const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/alliance-leveling-guide",
        component: AllianceLevelingGuide
    },
    {
        path: "/post/:postId",
        component: Post
    }
];

export default routes;
