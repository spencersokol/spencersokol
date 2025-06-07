import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/Error';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import Page from './pages/Page';
import NotFound from './pages/NotFound';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/blog/',
        element: <Blog />
      }, {
        path: '/blog/:slug',
        element: <Blog />
      }, {
        path: '/portfolio',
        element: <Portfolio />
      }, {
        path: '/404',
        element: <NotFound />
      }, {
        path: '/:slug',
        element: <Page />
      }
    ]
  },
]);

export default Router;