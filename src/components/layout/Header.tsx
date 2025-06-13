import React, { useState } from 'react';
import { Bell, Menu, X, LogOut, User, Settings } from 'lucide-react';
import { mockNotifications } from '../../utils/mockData';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../common/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  
  const unreadNotifications = mockNotifications.filter(n => !n.read).length;
  
  const handleLogout = () => {
    logout();
  };
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img src="/ingresseclub_light.svg" alt="Ingresse Club" className="w-40" />
              </Link>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="relative">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="p-2 rounded-full text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary relative"
              >
                <Bell className="h-5 w-5" />
                {unreadNotifications > 0 && (
                  <span className="absolute top-1 right-1 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full"></span>
                )}
              </button>
              
              {isNotificationsOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="text-sm font-medium text-gray-900">Notificações</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {mockNotifications.length === 0 ? (
                      <p className="px-4 py-2 text-sm text-gray-500">Não há notificações</p>
                    ) : (
                      mockNotifications.map(notification => (
                        <div 
                          key={notification.id} 
                          className={`px-4 py-3 hover:bg-gray-50 ${!notification.read ? 'bg-primary-50' : ''}`}
                        >
                          <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                          <p className="text-sm text-gray-500 mt-1">{notification.message}</p>
                          <p className="text-xs text-gray-400 mt-1">
                            {new Date(notification.date).toLocaleDateString()}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="px-4 py-2 border-t border-gray-100">
                    <a href="#" className="text-xs text-primary hover:text-primary-800 font-medium">Ver todas</a>
                  </div>
                </div>
              )}
            </div>
            
            <div className="ml-3 relative">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={user?.avatar}
                  alt={user?.name}
                />
              </button>
              
              {isProfileMenuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <User className="mr-2 h-4 w-4" /> Meu perfil
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <Settings className="mr-2 h-4 w-4" /> Configurações
                  </a>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <LogOut className="mr-2 h-4 w-4" /> Sair
                  </button>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="p-2 rounded-full text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary relative mr-2"
            >
              <Bell className="h-5 w-5" />
              {unreadNotifications > 0 && (
                <span className="absolute top-1 right-1 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full"></span>
              )}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block pl-3 pr-4 py-2 border-l-4 border-primary text-base font-medium text-primary-700 bg-primary-50"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
            >
              Meus Benefícios
            </a>
            <a
              href="#"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
            >
              Gerenciar Assinatura
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={user?.avatar}
                  alt={user?.name}
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">{user?.name}</div>
                <div className="text-sm font-medium text-gray-500">{user?.email}</div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <a
                href="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Meu perfil
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Configurações
              </a>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      )}
      
      {isNotificationsOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="px-4 py-2 border-b border-gray-100">
              <h3 className="text-sm font-medium text-gray-900">Notificações</h3>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {mockNotifications.length === 0 ? (
                <p className="px-4 py-2 text-sm text-gray-500">Não há notificações</p>
              ) : (
                mockNotifications.map(notification => (
                  <div 
                    key={notification.id} 
                    className={`px-4 py-3 hover:bg-gray-50 ${!notification.read ? 'bg-primary-50' : ''}`}
                  >
                    <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                    <p className="text-sm text-gray-500 mt-1">{notification.message}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(notification.date).toLocaleDateString()}
                    </p>
                  </div>
                ))
              )}
            </div>
            <div className="px-4 py-2 border-t border-gray-100">
              <a href="#" className="text-xs text-primary hover:text-primary-800 font-medium">Ver todas</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}