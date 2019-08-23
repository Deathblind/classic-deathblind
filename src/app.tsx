import React, { SFC, memo, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { withRouter, RouteComponentProps, Route, Redirect } from "react-router";
import { styled } from "./theme/util/helpers";
import { defaultPadding } from "./theme/theme/sizes";

import Navigation from "./layout/navigation/navigation";
import Footer from "./layout/footer/footer";
import routes from "./routes";

const StyledApp = styled.div`
    display: grid;
`;

const StyledMain = styled.main`
    display: grid;
    grid-row-gap: ${defaultPadding};
    justify-items: center;
    grid-template-columns: 1fr;
    padding: 0 ${defaultPadding} ${defaultPadding};
`;

export const App: SFC<RouteComponentProps> = memo(
    withRouter(props => {
        const [currentUrl, setCurrentUrl] = useState<string | null>(null);

        useEffect(() => {
            setCurrentUrl(window.location.href);
        }, []);

        return (
            <>
                <Helmet>
                    {currentUrl && <link rel="canonical" href={currentUrl} />}
                </Helmet>

                <StyledApp>
                    <Navigation />

                    <StyledMain>
                        {routes.map(({ component, path }) => (
                            <Route
                                key={path}
                                path={path}
                                exact
                                component={component}
                            />
                        ))}

                        <Route
                            exact
                            path="/post/719"
                            render={() => (
                                <Redirect to="/alliance-leveling-guide" />
                            )}
                        />
                    </StyledMain>

                    <Footer />
                </StyledApp>
            </>
        );
    })
);
