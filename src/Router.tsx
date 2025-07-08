import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/Error';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import Page from './pages/Page';
import Music from './pages/Music';
import NotFound from './pages/NotFound';
import App from './App';

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
        path: '/portfolio/:slug',
        element: <Portfolio />
      },{
        path: '/music',
        element: <Music />
      },{
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