import { Routes, Route } from "react-router-dom";

import './App.css';
import ContactsPage from './pages/ContactsPage';



import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import { refreshThunk } from "./redux/auth/operations.js";
import { selectIsRefreshing } from "./redux/auth/selectors.js";

import Layout from "./components/Layout.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import PublicRoute from "./components/PublicRoute.jsx";

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));
const Loader = lazy(() => import('./components/Loader/Loader.jsx'))
const LoginPage = lazy(() => import('./pages/LoginPage.jsx'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage.jsx'));

function App() {
  const dispatch = useDispatch();
  
  const isRefreshing = useSelector(selectIsRefreshing); // если есть флаг

  useEffect(() => {
    
      dispatch(refreshThunk());  // Обновляем токен перед запросами
    
  }, [dispatch]);
  return isRefreshing ? <Loader /> : (
    
  <Routes>
    <Route path='/' element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path='contacts' element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
    </Route>
    <Route path="login" element={<PublicRoute><LoginPage /></PublicRoute>} />
    <Route path="register" element={<PublicRoute><RegistrationPage /></PublicRoute>} />
    <Route path='*' element={<NotFoundPage />} />
  </Routes>
  
  );
};

export default App;
