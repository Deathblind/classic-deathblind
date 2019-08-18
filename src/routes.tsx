import Home from "./pages/home/home";
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
        path: "/alliance-leveling-guide/:postId",
        component: AllianceLevelingGuide
    }
];

export default routes;
