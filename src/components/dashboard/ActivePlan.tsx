import React from 'react';
import { formatCurrency } from '../../utils/formatters';
import { mockSubscription } from '../../utils/mockData';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { Calendar, CreditCard, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ActivePlan() {
  const navigate = useNavigate();
  
  const handleManageSubscription = () => {
    navigate('/manage-subscription');
  };
  
  const getPlanIcon = () => {
    switch (mockSubscription.plan) {
      case 'Explorer':
        return <Star className="h-10 w-10 text-yellow-500" />;
      case 'Experience':
        return <Star className="h-10 w-10 text-primary" />;
      case 'Elite Access':
        return <Star className="h-10 w-10 text-secondary" />;
      default:
        return <Star className="h-10 w-10 text-gray-500" />;
    }
  };
  
  const getPlanColor = () => {
    switch (mockSubscription.plan) {
      case 'Explorer':
        return 'from-yellow-500 to-amber-600';
      case 'Experience':
        return 'from-primary to-primary/80';
      case 'Elite Access':
        return 'from-secondary to-secondary/80';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };
  
  return (
    <Card className="overflow-hidden">
      <div className={`absolute top-0 left-0 w-full h-24 bg-gradient-to-r ${getPlanColor()} opacity-90`}></div>
      <div className="relative pt-6">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-white rounded-full shadow-md mr-4">
            {getPlanIcon()}
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Plano {mockSubscription.plan}</h2>
            <Badge variant="plan_active">Ativo</Badge>
          </div>
        </div>
      </div>
      
      <div className="mt-6 space-y-4">
        <div className="flex items-center text-gray-700">
          <Calendar className="h-5 w-5 mr-2 text-gray-500" />
          <span>Próximo vencimento: </span>
          <span className="ml-1 font-medium">{new Date(mockSubscription.nextPaymentDate).toLocaleDateString()}</span>
        </div>
        
        <div className="flex items-center text-gray-700">
          <CreditCard className="h-5 w-5 mr-2 text-gray-500" />
          <span>Valor mensal: </span>
          <span className="ml-1 font-medium">{formatCurrency(mockSubscription.price)}</span>
        </div>
        
        <div className="mt-6">
          <Button 
            variant="outline" 
            fullWidth 
            onClick={handleManageSubscription}
          >
            Gerenciar assinatura
          </Button>
        </div>
      </div>
    </Card>
  );
}