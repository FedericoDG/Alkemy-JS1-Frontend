import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

import Admin from '../pages/Admin'
import Dashboard from '../pages/Dashboard'
import Details from '../pages/Details'
import Footer from '../components/ui/Footer'
import FooterAdmin from '../components/admin/FooterAdmin'
import LoginPage from '../pages/LoginPage'
import ProfileAdminDrawer from '../components/drawers/ProfileAdminDrawer'
import RegisterPage from '../pages/RegisterPage'
import ResetPasswordDialog from '../components/admin/ResetPasswordDialog'
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
              <Route element={<Details />} path="/user/:id" />
            </Routes>
            <ProfileAdminDrawer />
            <FooterAdmin />
            <ResetPasswordDialog />
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
            <Footer />
          </PrivateRoutes>
        }
        path="/dashboard/*"
      />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
