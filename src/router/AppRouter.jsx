import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

import Admin from '../Pages/Admin'
import Dashboard from '../Pages/Dashboard'
import Details from '../Pages/Details'
import Footer from '../components/ui/Footer'
import FooterAdmin from '../components/admin/FooterAdmin'
import Login from '../Pages/Login'
import ProfileAdminDrawer from '../components/drawers/ProfileAdminDrawer'
import Register from '../Pages/Register'
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
