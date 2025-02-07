import { Routes, Route } from "react-router-dom";

import './App.css';

import Loader from "./components/Loader/Loader.jsx";



import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import { refreshThunk } from "./redux/auth/operations.js";
import { selectIsRefreshing } from "./redux/auth/selectors.js";

import Layout from "./components/Layout.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import PublicRoute from "./components/PublicRoute.jsx";
import RestrictedRoute from "./components/RestrictedRoute.jsx";

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'))
const LoginPage = lazy(() => import('./pages/LoginPage.jsx'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage.jsx'));

function App() {
  const dispatch = useDispatch();
  
  const isRefreshing = useSelector(selectIsRefreshing); // если есть флаг

  useEffect(() => {
    
      dispatch(refreshThunk());  // Обновляем токен перед запросами
    
  }, [dispatch]);
  return isRefreshing ? <Loader /> : (
    <Suspense fallback={null}>
  <Routes>
    <Route path='/' element={<Layout />}>
    <Route index element={<PublicRoute><HomePage /></PublicRoute>} />
    <Route path='contacts' element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
    </Route>
    
    <Route path="login" element={<RestrictedRoute><LoginPage /></RestrictedRoute>} />
   
    <Route path="register" element={<PublicRoute><RegistrationPage /></PublicRoute>} />
    <Route path='*' element={<NotFoundPage />} />
  </Routes>
  </Suspense>
  );
};

export default App;
