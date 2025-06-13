import React, { useState } from 'react';
import { Star, Shield, Users, Zap } from 'lucide-react';
import LoginForm from './LoginForm';

interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (email: string, password: string) => {
    setIsLoading(true);
    // Simular autenticação
    setTimeout(() => {
      onLogin(email, password);
      setIsLoading(false);
    }, 1500);
  };

  const features = [
    {
      icon: Star,
      title: 'Benefícios Exclusivos',
      description: 'Acesso antecipado a eventos e descontos especiais'
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Seus dados protegidos com criptografia de ponta'
    },
    {
      icon: Users,
      title: 'Comunidade VIP',
      description: 'Faça parte de uma comunidade exclusiva de membros'
    },
    {
      icon: Zap,
      title: 'Experiências Únicas',
      description: 'Viva momentos inesquecíveis em eventos premium'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="flex min-h-screen">
        {/* Left side - Login Form */}
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="text-center mb-8">
              <img
                className="mx-auto h-12 w-auto"
                src="/ingresseclub_light.svg"
                alt="Ingresse Club"
              />
              <h2 className="mt-6 text-3xl font-bold text-gray-900">
                Bem-vindo de volta
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Entre na sua conta para acessar seus benefícios exclusivos
              </p>
            </div>

            <LoginForm onLogin={handleLogin} />

            {/* Demo credentials */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-sm font-medium text-blue-800 mb-2">
                Credenciais de demonstração:
              </h3>
              <div className="text-xs text-blue-700 space-y-1">
                <p><strong>Email:</strong> joao.silva@email.com</p>
                <p><strong>Senha:</strong> 123456</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="hidden lg:flex lg:flex-1 lg:flex-col lg:justify-center lg:px-12 xl:px-16 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Ingresse Club
              </h1>
              <p className="text-lg text-gray-600">
                Sua porta de entrada para experiências exclusivas e benefícios únicos
              </p>
            </div>

            <div className="space-y-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl shadow-sm">
              <div className="flex items-center space-x-4">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Testimonial"
                />
                <div>
                  <p className="text-sm text-gray-600 italic">
                    "O Ingresse Club transformou minha experiência com eventos. Benefícios incríveis!"
                  </p>
                  <p className="text-sm font-medium text-gray-900 mt-1">
                    Maria Santos, membro desde 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}