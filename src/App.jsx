import { Routes, Route } from "react-router-dom";

import './App.css';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import Layout from "./components/Layout.jsx";
import LoginPage from './pages/LoginPage.jsx';
import RegistrationPage from './pages/RegistrationPage.jsx';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshThunk } from "./redux/auth/operations.js";

function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const isRefreshing = useSelector(state => state.auth.isRefreshing); // если есть флаг

  useEffect(() => {
    if (token) {
      dispatch(refreshThunk());  // Обновляем токен перед запросами
    }
  }, [dispatch, token]);
  return (
  <Routes>
    <Route path='/' element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path='contacts' element={<ContactsPage />} />
    </Route>
    <Route path="login" element={<LoginPage />} />
    <Route path="register" element={<RegistrationPage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Routes>
  )
}

export default App;
