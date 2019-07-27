import Home from "./pages/home/home";
import About from "./pages/about/about";
import PrivacyPolicy from "./pages/privacy-policy/privacy-policy";
import TermsOfUse from "./pages/terms-of-use/terms-of-use";

export const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/privacy-policy",
        component: PrivacyPolicy
    },
    {
        path: "/terms-of-use",
        component: TermsOfUse
    }
];

export default routes;