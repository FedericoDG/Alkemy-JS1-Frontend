import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

import Admin from '../Pages/Admin'
import Dashboard from '../Pages/Dashboard'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

import AdminRoutes from './AdminRoutes'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route
        element={
          <PublicRoutes>
            <Routes>
              <Route element={<Login />} path="/" />
              <Route element={<Register />} path="/register" />
              <Route element={<Navigate replace to="/" />} path="/*" />
            </Routes>
          </PublicRoutes>
        }
        path="/*"
      />
      {/* ADMIN ROUTES */}
      <Route
        element={
          <AdminRoutes>
            <Routes>
              <Route element={<Admin />} path="/" />
            </Routes>
          </AdminRoutes>
        }
        path="/admin/*"
      />
      {/* USER ROUTES */}
      <Route
        element={
          <PrivateRoutes>
            <Routes>
              <Route element={<Dashboard />} path="/" />
              {/* <Route element={<Error404 />} path="/*" /> */}
            </Routes>
          </PrivateRoutes>
        }
        path="/dashboard/*"
      />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
