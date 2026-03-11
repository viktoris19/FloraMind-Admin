import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin/AdminLogin';
import Dashboard from './pages/Dashboard/Dashboard';
import Orders from './pages/Orders/Orders';
import './App.css';

function App() {
  // Проверка, авторизован ли пользователь
  // В реальном проекте здесь проверка токена в localStorage
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Страница входа - доступна всем */}
          <Route 
            path="/login" 
            element={!isAuthenticated ? <AdminLogin /> : <Navigate to="/dashboard" />} 
          />
          
          {/* Dashboard - только для авторизованных */}
          <Route 
            path="/dashboard" 
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
          />

          <Route 
            path="/orders" 
            element={isAuthenticated ? <Orders /> : <Navigate to="/login" />} 
          />
          
          {/* Перенаправление с корневого пути */}
          <Route 
            path="/" 
            element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} 
          />
          
          {/* Страница 404 - если путь не найден */}
          <Route 
            path="*" 
            element={<Navigate to="/" />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;