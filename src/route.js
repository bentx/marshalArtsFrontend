import React from 'react';
import Login from './pages/login';
import StudentLogin from './pages/studentLogin';
import Status from './pages/status';
import Admin from './pages/admin';
import Details from './pages/details';

export default [
  {
    path: '/',
    exact: true,
    element: <Login />,
  },
  {
    path: '/student',
    element: <StudentLogin />,
  },
  {
    path: '/status',
    element: <Status />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/details',
    element: <Details />,
  },
];
