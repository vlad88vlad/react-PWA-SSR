import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const RenderRoutes = ({ routes = [], rootPath = '' }) => (
    <Switch>
        {(routes.map((route) => (
            <Route
                key={route.key}
                exact={route.exact}
                path={`${rootPath}${route.path}`}
                render={(props) => (
                    <>
                        <route.component {...props} routes={route.routes} />
                        <Helmet
                            {...route?.meta}
                        />
                    </>
                )}
            />
        )))}
    </Switch>
);

export default RenderRoutes;
