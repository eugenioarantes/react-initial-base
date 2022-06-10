import React from 'react';

import { Routes, Route } from 'react-router-dom';

import CreateRegister from '../pages/CreateRegister';
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
      path="/create-register"
      element={
        <ProtectedRoute isPrivate>
          <CreateRegister />
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
