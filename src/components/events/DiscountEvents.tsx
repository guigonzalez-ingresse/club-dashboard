import React, { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Clock, Tag, ExternalLink, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Card from '../common/Card';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { formatCurrency } from '../../utils/formatters';

interface Event {
  id: string;
  title: string;
  artist: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  couponCode: string;
  category: 'show' | 'teatro' | 'festival' | 'stand-up';
  availableTickets: number;
}

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Rock in Rio 2024',
    artist: 'Vários Artistas',
    date: '2024-09-15',
    time: '16:00',
    venue: 'Cidade do Rock',
    location: 'Rio de Janeiro, RJ',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 350.00,
    discountedPrice: 297.50,
    discountPercentage: 15,
    couponCode: 'CLUB15',
    category: 'festival',
    availableTickets: 250
  },
  {
    id: '2',
    title: 'Marília Mendonça - Tributo',
    artist: 'Maiara & Maraisa',
    date: '2024-08-20',
    time: '21:00',
    venue: 'Allianz Parque',
    location: 'São Paulo, SP',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 180.00,
    discountedPrice: 153.00,
    discountPercentage: 15,
    couponCode: 'CLUB15',
    category: 'show',
    availableTickets: 89
  },
  {
    id: '3',
    title: 'O Rei Leão - Musical',
    artist: 'Elenco Nacional',
    date: '2024-07-30',
    time: '20:00',
    venue: 'Teatro Renault',
    location: 'São Paulo, SP',
    image: 'https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 120.00,
    discountedPrice: 102.00,
    discountPercentage: 15,
    couponCode: 'CLUB15',
    category: 'teatro',
    availableTickets: 45
  },
  {
    id: '4',
    title: 'Whindersson Nunes',
    artist: 'Stand-up Comedy',
    date: '2024-08-10',
    time: '19:30',
    venue: 'Teatro Bradesco',
    location: 'São Paulo, SP',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 80.00,
    discountedPrice: 68.00,
    discountPercentage: 15,
    couponCode: 'CLUB15',
    category: 'stand-up',
    availableTickets: 120
  },
  {
    id: '5',
    title: 'Anitta - Girl From Rio Tour',
    artist: 'Anitta',
    date: '2024-09-05',
    time: '22:00',
    venue: 'Jeunesse Arena',
    location: 'Rio de Janeiro, RJ',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 220.00,
    discountedPrice: 187.00,
    discountPercentage: 15,
    couponCode: 'CLUB15',
    category: 'show',
    availableTickets: 180
  },
  {
    id: '6',
    title: 'Festival de Inverno Bonito',
    artist: 'Vários Artistas',
    date: '2024-07-25',
    time: '18:00',
    venue: 'Centro de Convenções',
    location: 'Bonito, MS',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800',
    originalPrice: 150.00,
    discountedPrice: 127.50,
    discountPercentage: 15,
    couponCode: 'CLUB15',
    category: 'festival',
    availableTickets: 300
  }
];

export default function DiscountEvents() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'Todos' },
    { value: 'show', label: 'Shows' },
    { value: 'teatro', label: 'Teatro' },
    { value: 'festival', label: 'Festivais' },
    { value: 'stand-up', label: 'Stand-up' }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? mockEvents 
    : mockEvents.filter(event => event.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'show':
        return 'bg-purple-100 text-purple-800';
      case 'teatro':
        return 'bg-red-100 text-red-800';
      case 'festival':
        return 'bg-green-100 text-green-800';
      case 'stand-up':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleBuyTicket = (event: Event) => {
    // Simular redirecionamento para a Ingresse
    const ingresseUrl = `https://www.ingresse.com/evento/${event.id}?coupon=${event.couponCode}`;
    window.open(ingresseUrl, '_blank');
  };

  return (
    <div>
      <div className="mb-8">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 mb-4"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Voltar para o Dashboard
        </button>
        
        <div className="flex items-center mb-4">
          <Tag className="h-6 w-6 text-primary mr-2" />
          <h1 className="text-2xl font-bold text-gray-900">Eventos com Desconto</h1>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <Info className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-blue-800 mb-1">
                Desconto já aplicado!
              </h3>
              <p className="text-sm text-blue-700">
                Os preços mostrados abaixo já incluem seu desconto de 15% como membro do Ingresse Club. 
                Ao clicar em "Comprar na Ingresse", você será redirecionado com o cupom já aplicado.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.value
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de Eventos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3">
                <Badge variant="available">
                  -{event.discountPercentage}%
                </Badge>
              </div>
              <div className="absolute top-3 right-3">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                  {event.category === 'stand-up' ? 'Stand-up' : event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                {event.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{event.artist}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(event.date).toLocaleDateString('pt-BR')}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  {event.time}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  {event.venue}, {event.location}
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-gray-500 line-through">
                      De: {formatCurrency(event.originalPrice)}
                    </p>
                    <p className="text-lg font-bold text-primary">
                      Por: {formatCurrency(event.discountedPrice)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Cupom:</p>
                    <p className="text-sm font-mono font-bold text-secondary">
                      {event.couponCode}
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-1">
                    {event.availableTickets} ingressos disponíveis
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((event.availableTickets / 300) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
                
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => handleBuyTicket(event)}
                  icon={<ExternalLink className="h-4 w-4" />}
                >
                  Comprar na Ingresse
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <Tag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Nenhum evento encontrado
          </h3>
          <p className="text-gray-500">
            Não há eventos disponíveis para a categoria selecionada.
          </p>
        </div>
      )}
    </div>
  );
}