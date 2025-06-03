import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">&copy; 2023 Ingresse Club. Todos os direitos reservados.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Termos de Uso</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Política de Privacidade</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">Suporte</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}