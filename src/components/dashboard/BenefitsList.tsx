import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockBenefits, getBenefitIcon } from '../../utils/mockData';
import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function BenefitsList() {
  const [expandedBenefit, setExpandedBenefit] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const toggleBenefit = (id: string) => {
    if (expandedBenefit === id) {
      setExpandedBenefit(null);
    } else {
      setExpandedBenefit(id);
    }
  };
  
  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'available':
        return 'Disponível';
      case 'coming_soon':
        return 'Em breve';
      case 'used':
        return 'Utilizado';
      default:
        return status;
    }
  };

  const handleUseBenefit = (benefitId: string) => {
    // Se for o benefício de desconto em ingressos, navegar para a página de eventos
    if (benefitId === '2') {
      navigate('/discount-events');
    } else {
      // Para outros benefícios, implementar lógica específica
      console.log('Usando benefício:', benefitId);
    }
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Seus Benefícios</h2>
        <Button variant="text" size="sm">Ver todos</Button>
      </div>
      
      <div className="space-y-4">
        {mockBenefits.map((benefit) => {
          const IconComponent = getBenefitIcon(benefit.icon);
          const isExpanded = expandedBenefit === benefit.id;
          
          return (
            <Card 
              key={benefit.id} 
              className="transition-all duration-300"
              hover
              onClick={() => toggleBenefit(benefit.id)}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <div className="ml-4 flex-1">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-medium text-gray-900">{benefit.name}</h3>
                    <Badge variant={benefit.status}>
                      {getStatusLabel(benefit.status)}
                    </Badge>
                  </div>
                  
                  {isExpanded && (
                    <p className="mt-2 text-sm text-gray-600 animate-fadeIn">
                      {benefit.description}
                    </p>
                  )}
                  
                  {isExpanded && benefit.status === 'available' && benefit.usableNow && (
                    <div className="mt-4 animate-fadeIn">
                      <Button 
                        variant="primary" 
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUseBenefit(benefit.id);
                        }}
                      >
                        Usar agora
                      </Button>
                    </div>
                  )}
                </div>
                
                <div className="ml-2">
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}