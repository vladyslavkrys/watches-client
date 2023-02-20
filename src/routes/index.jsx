import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import Main from '../pages/MainPage/Main';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />
  }
]);
