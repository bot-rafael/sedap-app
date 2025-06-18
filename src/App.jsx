import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import './assets/tailwind.css';
import Loading from './components/Loading';
const Login = React.lazy(() => import('./pages/auth/Login'));
const Register = React.lazy(() => import('./pages/auth/Register'));
const Forgot = React.lazy(() => import('./pages/auth/Forgot'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Orders = React.lazy(() => import('./pages/Orders'));
const Customers = React.lazy(() => import('./pages/Customers'));
const UserPage = React.lazy(() => import('./pages/UserPage'));
const ErrorPage = React.lazy(() => import('./pages/ErrorPage'));
const MainLayout = React.lazy(() => import('./layouts/MainLayout'));
const AuthLayout = React.lazy(() => import('./layouts/AuthLayout'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Layout untuk halaman utama setelah login */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/users" element={<UserPage />} />

          {/* Halaman error khusus */}
          <Route
            path="/error-400"
            element={<ErrorPage code="400" description="Bad Request – The web server cannot understand or process the request sent by the browser or web application." backTo="/" buttonLabel="Go Back to Dashboard" />}
          />
          <Route
            path="/error-401"
            element={<ErrorPage code="401" description="Unauthorized – You do not have authorization or permission to access the page or resource you are trying to access." backTo="/" buttonLabel="Go Back to Dashboard" />}
          />
          <Route path="/error-403" element={<ErrorPage code="403" description="Forbidden – The server understands your request but refuses to grant access to the requested resource." backTo="/" buttonLabel="Go Back to Dashboard" />} />

          {/* Catch-all route untuk halaman utama */}
          <Route path="*" element={<ErrorPage code="404" description="Page not found – The webserver cannot locate the requested resource." backTo="/" buttonLabel="Go Back to Dashboard" />} />
        </Route>

        {/* Layout untuk halaman login, register, dll */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot" element={<Forgot />} />

          {/* Catch-all route untuk auth pages */}
          <Route path="*" element={<ErrorPage code="404" description="Page not found – The webserver cannot locate the requested resource." backTo="/login" buttonLabel="Go Back to Login" />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
