import { withRouter } from "react-router";
import { useEffect, memo } from "react";

export const ScrollToTop = memo<any>(({ children, location: { pathname } }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return children;
});

export default withRouter(ScrollToTop);
