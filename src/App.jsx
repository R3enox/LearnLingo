import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { AppWrapper } from './App.styled';
import * as ROUTES from './constans/routes';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const TeachersPage = lazy(() => import('./pages/TeachersPage/TeachersPage'));
const FavoritePage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));

const appRoutes = [
  {
    path: ROUTES.HOME_ROUTE,
    element: <HomePage />,
  },
  {
    path: ROUTES.TEACHERS_ROUTE,
    element: <TeachersPage />,
  },
  {
    path: ROUTES.FAVORITES_ROUTE,
    element: (
      <PrivateRoute>
        <FavoritePage />
      </PrivateRoute>
    ),
  },
];

export const App = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
};
