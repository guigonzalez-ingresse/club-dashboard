import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './components/dashboard/Dashboard';
import SubscriptionManagement from './components/subscription/SubscriptionManagement';
import DiscountEvents from './components/events/DiscountEvents';
import LoginPage from './components/auth/LoginPage';
import './index.css';

function AppContent() {
  const { isAuthenticated, isLoading, login } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginPage onLogin={login} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="manage-subscription" element={<SubscriptionManagement />} />
          <Route path="discount-events" element={<DiscountEvents />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;