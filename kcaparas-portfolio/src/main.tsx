import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import AboutComponent from './About';
import ProjectsView from './Views/ProjectsView';
import ContactsView from './Views/ContactView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <AboutComponent />,
  },
  {
    path: '/projects',
    element: <ProjectsView />,
  },
  {
    path: '/contact',
    element: <ContactsView />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
