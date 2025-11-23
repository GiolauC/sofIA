import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Plus, Heart, MapPin, Calendar, Users, TrendingUp, Share2, Eye, Clock, Target } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useAuth } from '@/contexts/AuthContext';

const mockDemands = [
  {
    id: 'WPP-001',
    title: 'Preservação do Centro Histórico',
    description: 'Movimento cidadão via WhatsApp para proteção e revitalização do patrimônio histórico. Mais de 500 mensagens de apoio.',
    neighborhood: 'Centro',
    city: 'São Paulo',
    category: 'Movimento Social',
    status: 'trending',
    whatsappLikes: 1247,
    whatsappShares: 89,
    impactoPotencial: 'Alto',
    custoEstimado: 'R$ 2.5M',
    prazoExecucao: '18 meses',
    detalhes: {
      populacaoAfetada: '15.000 pessoas',
      beneficiosEconomicos: 'Aumento de 30% no turismo local',
      sustentabilidade: 'Uso de materiais eco-friendly',
      parceriasNecessarias: ['Secretaria de Cultura', 'IPHAN', 'Empresas locais']
    },
    date: '2025-01-20',
    image: true,
    source: 'whatsapp',
    movement: 'Movimento Preserva Centro'
  },
  {
    id: 'WPP-002',
    title: 'Mais Segurança no Jardim das Flores',
    description: 'Demanda popular via WhatsApp por mais policiamento e iluminação. Grupo de moradores organizados.',
    neighborhood: 'Jardim das Flores',
    city: 'São Paulo',
    category: 'Segurança',
    status: 'debate',
    whatsappLikes: 892,
    whatsappShares: 67,
    impactoPotencial: 'Médio',
    custoEstimado: 'R$ 800K',
    prazoExecucao: '8 meses',
    detalhes: {
      populacaoAfetada: '8.500 pessoas',
      beneficiosEconomicos: 'Redução de 40% nos crimes noturnos',
      sustentabilidade: 'Melhoria na qualidade de vida',
      parceriasNecessarias: ['Polícia Militar', 'Guarda Municipal', 'Associação de Moradores']
    },
    date: '2025-01-18',
    image: true,
    source: 'whatsapp',
    movement: 'Coletivo Jardim Seguro'
  },
  {
    id: 'PL-123/2025',
    title: 'Iluminação LED nas Ruas',
    description: 'Projeto oficial para substituição de toda iluminação pública por LED.',
    neighborhood: 'Vila Nova',
    city: 'São Paulo',
    category: 'Infraestrutura',
    status: 'analise',
    whatsappLikes: 456,
    whatsappShares: 23,
    impactoPotencial: 'Médio',
    custoEstimado: 'R$ 1.2M',
    prazoExecucao: '12 meses',
    detalhes: {
      populacaoAfetada: '12.000 pessoas',
      beneficiosEconomicos: 'Economia de 25% na conta de energia',
      sustentabilidade: 'Redução de 60% no consumo energético',
      parceriasNecessarias: ['Companhia Elétrica', 'Empresas de LED']
    },
    date: '2025-01-15',
    image: false,
    source: 'oficial'
  },
  {
    id: 'WPP-003',
    title: 'Campanha Árvores para Todos',
    description: 'Movimento ambiental via WhatsApp para plantio de árvores nativas. Engajamento crescente.',
    neighborhood: 'Parque Industrial',
    city: 'São Paulo',
    category: 'Meio Ambiente',
    status: 'trending',
    whatsappLikes: 678,
    whatsappShares: 45,
    impactoPotencial: 'Alto',
    custoEstimado: 'R$ 500K',
    prazoExecucao: '6 meses',
    detalhes: {
      populacaoAfetada: '25.000 pessoas',
      beneficiosEconomicos: 'Criação de 150 empregos verdes',
      sustentabilidade: 'Plantio de 5.000 árvores nativas',
      parceriasNecessarias: ['Secretaria do Meio Ambiente', 'ONGs ambientais']
    },
    date: '2025-01-22',
    image: true,
    source: 'whatsapp',
    movement: 'Verde Urbano SP'
  },
  {
    id: 'WPP-004',
    title: 'Transporte Público Acessível',
    description: 'Mobilização via WhatsApp por ônibus adaptados e pontos acessíveis para pessoas com deficiência.',
    neighborhood: 'Vila Esperança',
    city: 'São Paulo',
    category: 'Movimento Social',
    status: 'debate',
    whatsappLikes: 534,
    whatsappShares: 31,
    impactoPotencial: 'Alto',
    custoEstimado: 'R$ 1.8M',
    prazoExecucao: '24 meses',
    detalhes: {
      populacaoAfetada: '3.200 pessoas',
      beneficiosEconomicos: 'Inclusão social e produtiva',
      sustentabilidade: 'Acessibilidade universal',
      parceriasNecessarias: ['Secretaria de Transporte', 'Associações PCD']
    },
    date: '2025-01-19',
    image: false,
    source: 'whatsapp',
    movement: 'Acessibilidade Já'
  },
  {
    id: 'PL-124/2025',
    title: 'Coleta Seletiva Porta a Porta',
    description: 'Expansão oficial do programa de coleta seletiva para todos os bairros.',
    neighborhood: 'Centro',
    city: 'São Paulo',
    category: 'Limpeza',
    status: 'aprovado',
    whatsappLikes: 234,
    whatsappShares: 12,
    impactoPotencial: 'Baixo',
    custoEstimado: 'R$ 300K',
    prazoExecucao: '4 meses',
    detalhes: {
      populacaoAfetada: '45.000 pessoas',
      beneficiosEconomicos: 'Redução de 15% nos custos de limpeza',
      sustentabilidade: 'Reciclagem de 80% dos resíduos',
      parceriasNecessarias: ['Cooperativas de Reciclagem', 'Empresas de Coleta']
    },
    date: '2025-01-10',
    image: false,
    source: 'oficial'
  }
];

const statusLabels = {
  novo: 'Novo',
  trending: 'Em Alta',
  analise: 'Em Análise',
  debate: 'Em Debate',
  aprovado: 'Aprovado',
  resolvido: 'Resolvido',
};

const statusColors = {
  novo: 'bg-blue-100 text-blue-700',
  trending: 'bg-red-100 text-red-700',
  analise: 'bg-yellow-100 text-yellow-700',
  debate: 'bg-orange-100 text-orange-700',
  aprovado: 'bg-green-100 text-green-700',
  resolvido: 'bg-gray-100 text-gray-700',
};

export default function Demands() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sourceFilter, setSourceFilter] = useState('all');
  const { profile } = useAuth();

  const getEngagementScore = (demand: any) => {
    return demand.whatsappLikes + (demand.whatsappShares * 3);
  };

  const filteredDemands = mockDemands
    .filter((demand) => {
      const matchesSearch = demand.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           demand.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'all' || demand.status === statusFilter;
      const matchesCategory = categoryFilter === 'all' || demand.category === categoryFilter;
      const matchesSource = sourceFilter === 'all' || demand.source === sourceFilter;
      const matchesRole = profile?.role === 'city' || demand.neighborhood === profile?.neighborhood_name;
      
      return matchesSearch && matchesStatus && matchesCategory && matchesSource && matchesRole;
    })
    .sort((a, b) => getEngagementScore(b) - getEngagementScore(a));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Demandas</h1>
          <p className="text-muted-foreground">Gerencie e acompanhe as demandas da comunidade</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Eye className="h-4 w-4" />
            Análise Detalhada
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Nova Demanda
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por lei, tema ou palavra-chave..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Status</SelectItem>
                <SelectItem value="novo">Novo</SelectItem>
                <SelectItem value="trending">Em Alta</SelectItem>
                <SelectItem value="analise">Em Análise</SelectItem>
                <SelectItem value="debate">Em Debate</SelectItem>
                <SelectItem value="aprovado">Aprovado</SelectItem>
                <SelectItem value="resolvido">Resolvido</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="Movimento Social">Movimento Social</SelectItem>
                <SelectItem value="Infraestrutura">Infraestrutura</SelectItem>
                <SelectItem value="Segurança">Segurança</SelectItem>
                <SelectItem value="Meio Ambiente">Meio Ambiente</SelectItem>
                <SelectItem value="Limpeza">Limpeza</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sourceFilter} onValueChange={setSourceFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Origem" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as Origens</SelectItem>
                <SelectItem value="whatsapp">WhatsApp</SelectItem>
                <SelectItem value="oficial">Oficial</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {filteredDemands.map((demand) => (
          <Dialog key={demand.id}>
            <DialogTrigger asChild>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    {demand.image && (
                      <div className="w-full md:w-32 h-32 rounded-lg bg-muted flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">Foto</span>
                      </div>
                    )}
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-primary">{demand.id}</span>
                            <Badge className={statusColors[demand.status as keyof typeof statusColors]}>
                              {statusLabels[demand.status as keyof typeof statusLabels]}
                            </Badge>
                            {demand.source === 'whatsapp' && (
                              <Badge variant="outline" className="bg-green-50 text-green-700">
                                WhatsApp
                              </Badge>
                            )}
                            {demand.movement && (
                              <Badge variant="outline" className="bg-purple-50 text-purple-700">
                                <Users className="h-3 w-3 mr-1" />
                                {demand.movement}
                              </Badge>
                            )}
                          </div>
                          <h3 className="text-lg font-semibold text-foreground">{demand.title}</h3>
                          <p className="text-sm text-muted-foreground">{demand.description}</p>
                        </div>
                        
                        <div className="flex flex-col gap-2 shrink-0 min-w-[120px]">
                          <div className="text-right">
                            <div className="text-lg font-semibold text-primary">
                              {getEngagementScore(demand)}
                            </div>
                            <div className="text-xs text-muted-foreground">Engajamento</div>
                          </div>
                          <div className="grid grid-cols-2 gap-1 text-xs">
                            <div className="flex items-center gap-1 text-red-600">
                              <Heart className="h-3 w-3" />
                              {demand.whatsappLikes}
                            </div>
                            <div className="flex items-center gap-1 text-green-600">
                              <Share2 className="h-3 w-3" />
                              {demand.whatsappShares}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{demand.city} → {demand.neighborhood}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(demand.date).toLocaleDateString('pt-BR')}</span>
                          </div>
                          <Badge variant="outline">{demand.category}</Badge>
                          {demand.status === 'trending' && (
                            <div className="flex items-center gap-1 text-red-600">
                              <TrendingUp className="h-4 w-4" />
                              <span className="font-medium">Tendência</span>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                          <span>Impacto: <strong>{demand.impactoPotencial}</strong></span>
                          <span><strong>{demand.custoEstimado}</strong></span>
                          <span>Prazo: <strong>{demand.prazoExecucao}</strong></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>{demand.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg border">
                    <div className="text-2xl font-semibold text-primary mb-1">
                      {getEngagementScore(demand)}
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">Score de Engajamento</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Curtidas:</span>
                        <span>{demand.whatsappLikes}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Compartilhamentos:</span>
                        <span>{demand.whatsappShares}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border">
                    <div className="text-2xl font-semibold text-green-600 mb-1">
                      {demand.custoEstimado}
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">Investimento</div>
                    <div className="space-y-1 text-sm">
                      <div>Impacto: <strong>{demand.impactoPotencial}</strong></div>
                      <div>Prazo: <strong>{demand.prazoExecucao}</strong></div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border">
                    <div className="text-2xl font-semibold text-blue-600 mb-1">
                      {demand.detalhes?.populacaoAfetada}
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">População Beneficiada</div>
                    <div className="text-sm">
                      <div>{demand.neighborhood}</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Benefícios Econômicos</h4>
                      <p className="text-sm text-muted-foreground">{demand.detalhes?.beneficiosEconomicos}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Sustentabilidade</h4>
                      <p className="text-sm text-muted-foreground">{demand.detalhes?.sustentabilidade}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Parcerias Necessárias</h4>
                    <div className="space-y-1">
                      {demand.detalhes?.parceriasNecessarias.map((parceria, index) => (
                        <div key={index} className="text-sm p-2 bg-gray-50 rounded">
                          {parceria}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
