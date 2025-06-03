import React from 'react';
import { BenefitStatus } from '../../types';

type BadgeVariant = BenefitStatus | 'plan_active';

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
}

export default function Badge({ variant, children }: BadgeProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'coming_soon':
        return 'bg-blue-100 text-blue-800';
      case 'used':
        return 'bg-gray-100 text-gray-600';
      case 'plan_active':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getVariantClasses()}`}>
      {children}
    </span>
  );
}