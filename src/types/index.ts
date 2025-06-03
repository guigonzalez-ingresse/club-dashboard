export type Plan = 'Explorer' | 'Experience' | 'Elite Access';

export type BenefitStatus = 'available' | 'coming_soon' | 'used';

export interface Benefit {
  id: string;
  name: string;
  description: string;
  status: BenefitStatus;
  icon: string;
  usableNow: boolean;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
}

export interface UsageHistoryItem {
  id: string;
  benefitName: string;
  date: string;
  type: 'benefit_used' | 'plan_renewed' | 'plan_upgraded';
}

export interface UserSubscription {
  plan: Plan;
  status: 'active' | 'cancelled' | 'pending';
  startDate: string;
  nextPaymentDate: string;
  price: number;
}