import React from 'react';
import Login from './pages/login';
import StudentLogin from './pages/studentLogin';
import Status from './pages/status';
import Admin from './pages/admin';
import Details from './pages/details';
import Teacher from './pages/teacher';
import PublicMaster from './pages/publicMaster';
import MasterStatusDetails from './pages/masterStatusDetail';

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
  {
    path: '/masterDetails',
    element: <Teacher />,
  },
  {
    path: '/master',
    element: <MasterStatusDetails />,
  },
  {
    path: '/masterStatus',
    element: <PublicMaster />,
  },
];
