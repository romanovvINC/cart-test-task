import React, {
    memo, Suspense, useCallback,
} from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { User } from 'entities/User';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const routeElement = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                element={
                    route.authOnly
                        ? <RequireAuth roles={route.roles}>{routeElement}</RequireAuth>
                        : routeElement
                }
                path={route.path}
            />
        );
    }, []);
    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default AppRouter;
