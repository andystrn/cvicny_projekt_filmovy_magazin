import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Reviews from './components/Reviews';
import Articles from './components/Articles';
import Movies from './components/Movies';

const App = () => {
  return (
    <div className="container">
      <Menu />
      <Outlet />
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/reviews',
        element: <Reviews />
      },
      {
        path: '/articles',
        element: <Articles />
      },
      {
        path: '/movies',
        element: <Movies />
      }
    ]
  },
  
])

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router} />);
