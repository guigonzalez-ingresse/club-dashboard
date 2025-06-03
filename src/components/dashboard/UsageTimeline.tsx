import React from 'react';
import { mockUsageHistory } from '../../utils/mockData';
import Card from '../common/Card';
import Button from '../common/Button';
import { Calendar, ArrowUp, CheckCircle } from 'lucide-react';

export default function UsageTimeline() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'benefit_used':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'plan_renewed':
        return <Calendar className="h-5 w-5 text-blue-500" />;
      case 'plan_upgraded':
        return <ArrowUp className="h-5 w-5 text-purple-500" />;
      default:
        return <Calendar className="h-5 w-5 text-gray-500" />;
    }
  };
  
  const getDescription = (item: typeof mockUsageHistory[0]) => {
    switch (item.type) {
      case 'benefit_used':
        return `Benefício utilizado: ${item.benefitName}`;
      case 'plan_renewed':
        return `Renovação de plano: ${item.benefitName}`;
      case 'plan_upgraded':
        return `Upgrade de plano: ${item.benefitName}`;
      default:
        return item.benefitName;
    }
  };
  
  return (
    <Card>
      <h2 className="text-xl font-bold text-gray-900 mb-6">Histórico de Uso</h2>
      
      <div className="flow-root">
        <ul className="-mb-8">
          {mockUsageHistory.map((item, index) => (
            <li key={item.id}>
              <div className="relative pb-8">
                {index !== mockUsageHistory.length - 1 ? (
                  <span
                    className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex items-start space-x-3">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center ring-8 ring-white">
                      {getIcon(item.type)}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <p className="text-sm text-gray-900 font-medium">
                        {getDescription(item)}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        {new Date(item.date).toLocaleDateString()} às {new Date(item.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-4 text-center">
        <Button variant="text" size="sm">
          Ver histórico completo
        </Button>
      </div>
    </Card>
  );
}