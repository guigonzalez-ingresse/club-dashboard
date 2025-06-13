import { Benefit, Notification, UserSubscription, UsageHistoryItem } from '../types';
import { CalendarClock, Ticket, Music, Film, Coffee, Crown, Gift } from 'lucide-react';

export const mockUser = {
  name: 'João Silva',
  email: 'joao.silva@email.com',
  avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
};

export const mockSubscription: UserSubscription = {
  plan: 'Experience',
  status: 'active',
  startDate: '2023-10-15',
  nextPaymentDate: '2023-11-15',
  price: 49.90,
};

export const mockBenefits: Benefit[] = [
  {
    id: '2',
    name: 'Desconto em ingressos',
    description: '15% de desconto em ingressos para eventos parceiros',
    status: 'available',
    icon: 'Ticket',
    usableNow: true,
  },
  {
    id: '1',
    name: 'Pré-venda exclusiva',
    description: 'Acesso antecipado à venda de ingressos para shows e eventos selecionados',
    status: 'coming_soon',
    icon: 'CalendarClock',
    usableNow: false,
  },
  {
    id: '3',
    name: 'Festival de Verão 2024',
    description: 'Acesso exclusivo ao Festival de Verão 2024',
    status: 'coming_soon',
    icon: 'Music',
    usableNow: false,
  },
  {
    id: '4',
    name: 'Sessões de cinema premium',
    description: 'Ingressos para estreias selecionadas com 30% de desconto',
    status: 'coming_soon',
    icon: 'Film',
    usableNow: false,
  },
  {
    id: '5',
    name: 'Lounge VIP',
    description: 'Acesso ao lounge VIP em eventos selecionados',
    status: 'coming_soon',
    icon: 'Coffee',
    usableNow: false,
  },
  {
    id: '6',
    name: 'Upgrade de assentos',
    description: 'Possibilidade de upgrade para melhores assentos em eventos selecionados',
    status: 'coming_soon',
    icon: 'Crown',
    usableNow: false,
  },
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Novo benefício disponível',
    message: 'Acesso antecipado ao Festival XYZ já está disponível para seu plano',
    date: '2023-10-20T14:30:00',
    read: false,
  },
  {
    id: '2',
    title: 'Renovação automática',
    message: 'Sua assinatura será renovada em 7 dias',
    date: '2023-10-18T09:15:00',
    read: true,
  },
  {
    id: '3',
    title: 'Desconto especial',
    message: 'Aproveite 20% de desconto extra em ingressos para o show da banda ABC',
    date: '2023-10-15T16:45:00',
    read: true,
  },
];

export const mockUsageHistory: UsageHistoryItem[] = [
  {
    id: '1',
    benefitName: 'Desconto em ingressos',
    date: '2023-10-12T20:00:00',
    type: 'benefit_used',
  },
  {
    id: '2',
    benefitName: 'Desconto em ingressos',
    date: '2023-10-05T14:30:00',
    type: 'benefit_used',
  },
  {
    id: '3',
    benefitName: 'Plano Experience',
    date: '2023-10-01T10:00:00',
    type: 'plan_renewed',
  },
  {
    id: '4',
    benefitName: 'Plano Explorer para Experience',
    date: '2023-09-15T11:20:00',
    type: 'plan_upgraded',
  },
];

export const getBenefitIcon = (iconName: string) => {
  switch (iconName) {
    case 'CalendarClock':
      return CalendarClock;
    case 'Ticket':
      return Ticket;
    case 'Music':
      return Music;
    case 'Film':
      return Film;
    case 'Coffee':
      return Coffee;
    case 'Crown':
      return Crown;
    default:
      return Gift;
  }
};