import React, { useState } from 'react';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { ArrowLeft, CreditCard, Calendar, RefreshCw, X } from 'lucide-react';
import { mockSubscription } from '../../utils/mockData';
import { formatCurrency } from '../../utils/formatters';
import { useNavigate } from 'react-router-dom';

type Tab = 'overview' | 'change-plan' | 'payment' | 'cancel';

export default function SubscriptionManagement() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const navigate = useNavigate();
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab setActiveTab={setActiveTab} />;
      case 'change-plan':
        return <ChangePlanTab setActiveTab={setActiveTab} />;
      case 'payment':
        return <PaymentTab setActiveTab={setActiveTab} />;
      case 'cancel':
        return <CancelTab setActiveTab={setActiveTab} />;
      default:
        return <OverviewTab setActiveTab={setActiveTab} />;
    }
  };
  
  return (
    <div>
      <div className="mb-8">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Voltar para o Dashboard
        </button>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">Gerenciar Assinatura</h1>
      </div>
      
      <div className="bg-white shadow-sm rounded-xl overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-6 text-sm font-medium border-b-2 ${
                activeTab === 'overview'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Visão Geral
            </button>
            <button
              onClick={() => setActiveTab('change-plan')}
              className={`py-4 px-6 text-sm font-medium border-b-2 ${
                activeTab === 'change-plan'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Alterar Plano
            </button>
            <button
              onClick={() => setActiveTab('payment')}
              className={`py-4 px-6 text-sm font-medium border-b-2 ${
                activeTab === 'payment'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Forma de Pagamento
            </button>
            <button
              onClick={() => setActiveTab('cancel')}
              className={`py-4 px-6 text-sm font-medium border-b-2 ${
                activeTab === 'cancel'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Cancelar
            </button>
          </nav>
        </div>
        
        <div className="p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

interface TabProps {
  setActiveTab: React.Dispatch<React.SetStateAction<Tab>>;
}

function OverviewTab({ setActiveTab }: TabProps) {
  return (
    <div className="space-y-6">
      <div className="pb-6 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Detalhes da Assinatura</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Plano Atual</h3>
            <div className="flex items-center">
              <span className="text-lg font-medium text-gray-900">
                {mockSubscription.plan}
              </span>
              <Badge variant="plan_active" className="ml-2">
                Ativo
              </Badge>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Próximo Vencimento</h3>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-lg font-medium text-gray-900">
                {new Date(mockSubscription.nextPaymentDate).toLocaleDateString()}
              </span>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Valor Mensal</h3>
            <span className="text-lg font-medium text-gray-900">
              {formatCurrency(mockSubscription.price)}
            </span>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Data de Adesão</h3>
            <span className="text-lg font-medium text-gray-900">
              {new Date(mockSubscription.startDate).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
      
      <div className="pb-6 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Forma de Pagamento</h2>
        
        <div className="flex items-center mb-4">
          <div className="p-2 bg-gray-100 rounded-md mr-3">
            <CreditCard className="h-6 w-6 text-gray-700" />
          </div>
          <div>
            <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
            <p className="text-sm text-gray-500">Válido até 12/25</p>
          </div>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => setActiveTab('payment')}
        >
          Atualizar forma de pagamento
        </Button>
      </div>
      
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <Button
          variant="primary"
          onClick={() => setActiveTab('change-plan')}
        >
          Alterar plano
        </Button>
        <Button
          variant="outline"
          onClick={() => setActiveTab('cancel')}
        >
          Cancelar assinatura
        </Button>
      </div>
    </div>
  );
}

function ChangePlanTab({ setActiveTab }: TabProps) {
  const plans = [
    {
      id: 'explorer',
      name: 'Explorer',
      price: 29.90,
      features: [
        'Pré-venda com 1 dia de antecedência',
        'Desconto de 10% em ingressos selecionados',
        'Acesso a eventos exclusivos',
      ],
      current: mockSubscription.plan === 'Explorer',
    },
    {
      id: 'experience',
      name: 'Experience',
      price: 49.90,
      features: [
        'Pré-venda com 3 dias de antecedência',
        'Desconto de 15% em ingressos selecionados',
        'Acesso a eventos exclusivos',
        'Upgrade de assentos',
        'Lounge VIP em eventos selecionados',
      ],
      current: mockSubscription.plan === 'Experience',
      recommended: true,
    },
    {
      id: 'elite',
      name: 'Elite Access',
      price: 99.90,
      features: [
        'Pré-venda com 7 dias de antecedência',
        'Desconto de 25% em ingressos selecionados',
        'Acesso a todos os eventos exclusivos',
        'Upgrade de assentos garantido',
        'Lounge VIP em todos os eventos',
        'Meet & Greet em eventos selecionados',
        'Suporte prioritário 24/7',
      ],
      current: mockSubscription.plan === 'Elite Access',
    },
  ];
  
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-6">Alterar Plano</h2>
      
      <div className="space-y-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`border rounded-lg p-6 relative transition-all duration-200 ${
              plan.current
                ? 'border-primary bg-primary/5'
                : 'border-gray-200 hover:border-primary/30 hover:shadow-sm'
            }`}
          >
            {plan.recommended && !plan.current && (
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-3">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-secondary/10 text-secondary">
                  Recomendado
                </span>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
                <p className="mt-1 text-2xl font-bold text-gray-900">
                  {formatCurrency(plan.price)}
                  <span className="text-sm font-normal text-gray-500">/mês</span>
                </p>
                
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 shrink-0 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6 sm:mt-0">
                {plan.current ? (
                  <Badge variant="plan_active">Plano Atual</Badge>
                ) : (
                  <Button
                    variant={plan.recommended ? 'primary' : 'outline'}
                  >
                    Trocar para este plano
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-end">
        <Button
          variant="text"
          onClick={() => setActiveTab('overview')}
        >
          Voltar para visão geral
        </Button>
      </div>
    </div>
  );
}

function PaymentTab({ setActiveTab }: TabProps) {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-6">Atualizar Forma de Pagamento</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
        <div className="flex">
          <div className="shrink-0">
            <svg
              className="h-5 w-5 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              Atualizando o seu cartão de crédito, a próxima cobrança será feita no novo cartão.
            </p>
          </div>
        </div>
      </div>
      
      <form className="space-y-6">
        <div>
          <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
            Número do cartão
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="card-number"
              id="card-number"
              placeholder="1234 1234 1234 1234"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary/50 sm:text-sm"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="expiration" className="block text-sm font-medium text-gray-700">
              Data de expiração
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="expiration"
                id="expiration"
                placeholder="MM / AA"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary/50 sm:text-sm"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
              CVC
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="cvc"
                id="cvc"
                placeholder="123"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary/50 sm:text-sm"
              />
            </div>
          </div>
        </div>
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nome no cartão
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome como aparece no cartão"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary/50 sm:text-sm"
            />
          </div>
        </div>
        
        <div className="flex justify-end space-x-4">
          <Button
            variant="text"
            type="button"
            onClick={() => setActiveTab('overview')}
          >
            Cancelar
          </Button>
          <Button
            variant="primary"
            type="button"
          >
            Atualizar forma de pagamento
          </Button>
        </div>
      </form>
    </div>
  );
}

function CancelTab({ setActiveTab }: TabProps) {
  const [confirmCancel, setConfirmCancel] = useState(false);
  const [cancelReason, setCancelReason] = useState('');
  
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 mb-2">Cancelar Assinatura</h2>
      <p className="text-sm text-gray-500 mb-6">
        Sinto muito que você esteja considerando cancelar. Seus benefícios permanecerão ativos até o final do período pago.
      </p>
      
      {!confirmCancel ? (
        <div className="space-y-6">
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <div className="flex">
              <div className="shrink-0">
                <X className="h-5 w-5 text-red-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Ao cancelar sua assinatura:
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Você perderá acesso a todos os benefícios do Ingresse Club</li>
                    <li>O cancelamento será efetivado ao final do ciclo de cobrança atual</li>
                    <li>Você poderá se inscrever novamente a qualquer momento</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="cancel-reason" className="block text-sm font-medium text-gray-700">
              Por que você está cancelando?
            </label>
            <select
              id="cancel-reason"
              name="cancel-reason"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
            >
              <option value="">Selecione um motivo</option>
              <option value="too-expensive">Muito caro</option>
              <option value="not-using">Não estou usando os benefícios</option>
              <option value="missing-features">Faltam recursos que eu preciso</option>
              <option value="switching">Mudando para outro serviço</option>
              <option value="other">Outro motivo</option>
            </select>
          </div>
          
          <div className="flex justify-end space-x-4">
            <Button
              variant="text"
              onClick={() => setActiveTab('overview')}
            >
              Voltar
            </Button>
            <Button
              variant="danger"
              onClick={() => setConfirmCancel(true)}
              disabled={!cancelReason}
            >
              Continuar com o cancelamento
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <div className="flex">
              <div className="shrink-0">
                <svg
                  className="h-5 w-5 text-red-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Você tem certeza?
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>
                    Isso cancelará sua assinatura do plano {mockSubscription.plan}. Você terá acesso aos benefícios até {new Date(mockSubscription.nextPaymentDate).toLocaleDateString()}.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end space-x-4">
            <Button
              variant="text"
              onClick={() => setConfirmCancel(false)}
            >
              Voltar
            </Button>
            <Button
              variant="danger"
            >
              Confirmar cancelamento
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}