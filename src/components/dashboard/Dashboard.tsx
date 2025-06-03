import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ActivePlan from './ActivePlan';
import BenefitsList from './BenefitsList';
import UsageTimeline from './UsageTimeline';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <WelcomeMessage />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <ActivePlan />
        </div>
        
        <div className="lg:col-span-2">
          <BenefitsList />
        </div>
      </div>
      
      <div className="mt-8">
        <UsageTimeline />
      </div>
    </div>
  );
}