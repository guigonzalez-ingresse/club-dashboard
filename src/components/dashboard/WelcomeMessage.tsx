import React from 'react';
import { mockUser } from '../../utils/mockData';

export default function WelcomeMessage() {
  // Get current hour to personalize greeting
  const hour = new Date().getHours();
  let greeting = 'Bom dia';
  
  if (hour >= 12 && hour < 18) {
    greeting = 'Boa tarde';
  } else if (hour >= 18) {
    greeting = 'Boa noite';
  }
  
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        {greeting}, {mockUser.name}!
      </h1>
      <p className="mt-2 text-sm text-gray-600">
        Bem-vindo ao Ingresse Club. Aqui você pode gerenciar seu plano e acessar seus benefícios exclusivos.
      </p>
    </div>
  );
}