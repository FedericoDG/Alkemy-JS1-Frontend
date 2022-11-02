import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

import Admin from '../pages/Admin'
import Dashboard from '../pages/Dashboard'
import Footer from '../components/ui/Footer'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ResponsiveAppBar from '../components/ui/Header'

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
              <Route element={<LoginPage />} path="/" />
              <Route element={<RegisterPage />} path="/register" />
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
            <ResponsiveAppBar />
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
            <ResponsiveAppBar />
            <Routes>
              <Route element={<Dashboard />} path="/" />
              {/* <Route element={<Error404 />} path="/*" /> */}
            </Routes>
          </PrivateRoutes>
        }
        path="/dashboard/*"
      />
    </Routes>
    <Footer />
  </BrowserRouter>
)

export default AppRoutes
