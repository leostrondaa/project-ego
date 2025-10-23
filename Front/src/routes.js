// React Router
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './pages/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
