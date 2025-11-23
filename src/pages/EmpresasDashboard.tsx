import { useState } from 'react';
import { TrendingUp, DollarSign, Users, MapPin, Target, Briefcase, Award, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const empresaData = {
  // Métricas de Mercado Local
  mercadoLocal: {
    populacaoTotal: 45678,
    rendaMediaFamiliar: 'R$ 4.250',
    crescimentoPopulacional: '+2.1%',
    idadeMediaConsumidor: '34 anos',
    poderCompra: 'R$ 12.5M/mês',
    concorrentes: 23
  },
  
  // Oportunidades de Negócio
  oportunidades: [
    { setor: 'Tecnologia', demanda: 'Alta', investimento: 'R$ 2.5M', prazo: '6 meses', roi: '180%' },
    { setor: 'Alimentação', demanda: 'Média', investimento: 'R$ 800K', prazo: '3 meses', roi: '120%' },
    { setor: 'Saúde', demanda: 'Crítica', investimento: 'R$ 1.2M', prazo: '8 meses', roi: '200%' },
    { setor: 'Educação', demanda: 'Alta', investimento: 'R$ 600K', prazo: '4 meses', roi: '150%' }
  ],

  // Licitações e Contratos
  licitacoes: [
    {
      id: 'LIC-2024-001',
      titulo: 'Sistema de Gestão Escolar',
      valor: 'R$ 2.8M',
      prazo: '18 meses',
      status: 'Aberta',
      dataLimite: '2024-02-15',
      categoria: 'Tecnologia'
    },
    {
      id: 'LIC-2024-002', 
      titulo: 'Reforma de Praças Públicas',
      valor: 'R$ 1.5M',
      prazo: '12 meses',
      status: 'Em Análise',
      dataLimite: '2024-01-30',
      categoria: 'Construção'
    }
  ],

  // Análise Demográfica para Negócios
  demografiaNegocio: {
    faixasEtarias: [
      { faixa: '18-29', percentual: 27, consumo: 'R$ 1.200/mês', preferencias: ['Digital', 'Sustentabilidade', 'Conveniência'] },
      { faixa: '30-49', percentual: 33, consumo: 'R$ 2.800/mês', preferencias: ['Qualidade', 'Família', 'Investimentos'] },
      { faixa: '50+', percentual: 22, consumo: 'R$ 1.800/mês', preferencias: ['Saúde', 'Segurança', 'Tradição'] }
    ]
  },

  // Indicadores Econômicos Locais
  indicadoresEconomicos: {
    pibMunicipal: 'R$ 890M',
    crescimentoPib: '+3.2%',
    empresasAbertas: 234,
    empresasFechadas: 45,
    empregosFormais: 12456,
    salarioMedio: 'R$ 2.850'
  },

  // Análise de Concorrência
  concorrencia: [
    { empresa: 'TechLocal Ltda', setor: 'Tecnologia', faturamento: 'R$ 2.1M', funcionarios: 45, crescimento: '+15%' },
    { empresa: 'Construtora ABC', setor: 'Construção', faturamento: 'R$ 8.5M', funcionarios: 120, crescimento: '+8%' },
    { empresa: 'Consultoria XYZ', setor: 'Consultoria', faturamento: 'R$ 1.2M', funcionarios: 25, crescimento: '+22%' }
  ],

  // Tendências de Consumo
  tendenciasConsumo: [
    { categoria: 'E-commerce', crescimento: '+45%', oportunidade: 'Alta' },
    { categoria: 'Delivery', crescimento: '+38%', oportunidade: 'Média' },
    { categoria: 'Sustentabilidade', crescimento: '+28%', oportunidade: 'Alta' },
    { categoria: 'Saúde Digital', crescimento: '+52%', oportunidade: 'Crítica' }
  ]
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function EmpresasDashboard() {
  const [filtroSetor, setFiltroSetor] = useState('todos');

  return (
    <div className="space-y-6">
      {/* Header com Métricas Premium */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-4">Inteligência de Mercado - Dados Exclusivos</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">{empresaData.mercadoLocal.poderCompra}</div>
            <div className="text-sm opacity-90">Poder de Compra Local</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{empresaData.mercadoLocal.rendaMediaFamiliar}</div>
            <div className="text-sm opacity-90">Renda Média Familiar</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{empresaData.mercadoLocal.crescimentoPopulacional}</div>
            <div className="text-sm opacity-90">Crescimento Populacional</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{empresaData.mercadoLocal.concorrentes}</div>
            <div className="text-sm opacity-90">Concorrentes Ativos</div>
          </div>
        </div>
      </div>

      {/* Oportunidades de Investimento */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Oportunidades de Investimento - ROI Projetado
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {empresaData.oportunidades.map((oportunidade, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">{oportunidade.setor}</h4>
                  <Badge variant={
                    oportunidade.demanda === 'Crítica' ? 'destructive' :
                    oportunidade.demanda === 'Alta' ? 'default' : 'secondary'
                  }>
                    {oportunidade.demanda}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Investimento: <strong>{oportunidade.investimento}</strong></div>
                  <div>ROI: <strong className="text-green-600">{oportunidade.roi}</strong></div>
                  <div>Prazo: <strong>{oportunidade.prazo}</strong></div>
                  <div>Retorno: <strong className="text-blue-600">Garantido</strong></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Licitações Ativas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Licitações e Contratos Públicos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {empresaData.licitacoes.map((licitacao) => (
                <div key={licitacao.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{licitacao.titulo}</h4>
                    <Badge variant={licitacao.status === 'Aberta' ? 'default' : 'secondary'}>
                      {licitacao.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <div>Valor: <strong className="text-green-600">{licitacao.valor}</strong></div>
                    <div>Prazo: <strong>{licitacao.prazo}</strong></div>
                    <div>Limite: <strong className="text-red-600">{licitacao.dataLimite}</strong></div>
                    <div>Categoria: <strong>{licitacao.categoria}</strong></div>
                  </div>
                  <Button size="sm" className="mt-2 w-full">
                    Ver Edital Completo
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Análise de Concorrência */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Análise Competitiva Local
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {empresaData.concorrencia.map((empresa, index) => (
                <div key={index} className="border rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{empresa.empresa}</h4>
                    <Badge variant="outline">{empresa.setor}</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>Faturamento: <strong>{empresa.faturamento}</strong></div>
                    <div>Funcionários: <strong>{empresa.funcionarios}</strong></div>
                    <div>Crescimento: <strong className="text-green-600">{empresa.crescimento}</strong></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Demografia de Consumo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Perfil do Consumidor Local - Dados Exclusivos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {empresaData.demografiaNegocio.faixasEtarias.map((faixa, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="text-center mb-3">
                  <div className="text-2xl font-bold text-blue-600">{faixa.percentual}%</div>
                  <div className="text-sm text-muted-foreground">{faixa.faixa} anos</div>
                  <div className="text-lg font-semibold text-green-600">{faixa.consumo}</div>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Preferências:</h5>
                  <div className="flex flex-wrap gap-1">
                    {faixa.preferencias.map((pref, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {pref}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tendências de Mercado */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Tendências de Consumo - Próximos 12 Meses
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {empresaData.tendenciasConsumo.map((tendencia, index) => (
              <div key={index} className="text-center p-4 border rounded-lg">
                <div className="text-xl font-bold text-green-600">{tendencia.crescimento}</div>
                <div className="font-medium">{tendencia.categoria}</div>
                <Badge variant={
                  tendencia.oportunidade === 'Crítica' ? 'destructive' :
                  tendencia.oportunidade === 'Alta' ? 'default' : 'secondary'
                } className="mt-2">
                  {tendencia.oportunidade}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call to Action Premium */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Dados Premium Disponíveis</h3>
            <p className="text-muted-foreground mb-4">
              Acesse relatórios detalhados, projeções de mercado e análises personalizadas para seu setor
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">
                Assinar Plano Premium - R$ 299/mês
              </Button>
              <Button variant="outline" size="lg">
                Solicitar Demonstração
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}