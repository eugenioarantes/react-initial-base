import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';

const Router: React.FC = () => (
  <Routes>
    <Route
      path="/"
      element={
        <ProtectedRoute isPrivate>
          <Home />
        </ProtectedRoute>
      }
    />

    <Route
      path="/login"
      element={
        <ProtectedRoute>
          <Login />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default Router;
