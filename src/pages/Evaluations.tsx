import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, TrendingUp, Building2, Users, Target } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const categories = [
  { 
    name: 'Segurança', 
    rating: 4.2, 
    reviews: 234, 
    trend: '+0.3',
    businessImpact: 'Alto',
    opportunities: ['Sistemas de segurança', 'Monitoramento', 'Iluminação']
  },
  { 
    name: 'Mobilidade', 
    rating: 3.8, 
    reviews: 189, 
    trend: '-0.1',
    businessImpact: 'Médio',
    opportunities: ['Transporte público', 'Aplicativos', 'Bicicletas']
  },
  { 
    name: 'Saúde', 
    rating: 4.5, 
    reviews: 312, 
    trend: '+0.2',
    businessImpact: 'Alto',
    opportunities: ['Telemedicina', 'Equipamentos', 'Farmacêuticas']
  },
  { 
    name: 'Educação', 
    rating: 4.7, 
    reviews: 267, 
    trend: '+0.4',
    businessImpact: 'Médio',
    opportunities: ['Tecnologia educacional', 'Cursos', 'Material didático']
  },
  { 
    name: 'Infraestrutura', 
    rating: 3.5, 
    reviews: 198, 
    trend: '+0.1',
    businessImpact: 'Alto',
    opportunities: ['Construção civil', 'Engenharia', 'Materiais']
  },
  { 
    name: 'Limpeza', 
    rating: 4.1, 
    reviews: 245, 
    trend: '+0.2',
    businessImpact: 'Baixo',
    opportunities: ['Equipamentos', 'Produtos', 'Serviços']
  },
];

const recentComments = [
  {
    author: 'Maria Silva',
    date: '2025-03-20',
    category: 'Segurança',
    rating: 5,
    comment: 'Melhorou muito com a instalação de câmeras de segurança.'
  },
  {
    author: 'João Santos',
    date: '2025-03-19',
    category: 'Mobilidade',
    rating: 3,
    comment: 'Ainda precisamos de mais linhas de ônibus no horário de pico.'
  },
  {
    author: 'Ana Costa',
    date: '2025-03-18',
    category: 'Saúde',
    rating: 5,
    comment: 'Atendimento rápido e eficiente no posto de saúde.'
  },
];

export default function Evaluations() {
  const { profile } = useAuth();
  
  const overallRating = (categories.reduce((acc, cat) => acc + cat.rating, 0) / categories.length).toFixed(1);
  const totalReviews = categories.reduce((acc, cat) => acc + cat.reviews, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Avaliações</h1>
        <p className="text-muted-foreground">
          {profile?.role === 'city' ? 'Avaliação geral da cidade' : `Avaliação do bairro ${profile?.neighborhood_name}`}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">{overallRating}</div>
            <div className="flex justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star <= Math.round(parseFloat(overallRating))
                      ? 'fill-warning text-warning'
                      : 'text-muted'
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Satisfação Geral</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{totalReviews}</div>
            <div className="flex items-center justify-center gap-1 mb-2">
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">Avaliações Totais</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">67%</div>
            <div className="flex items-center justify-center gap-1 mb-2">
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">Tendência Positiva</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">18</div>
            <div className="flex items-center justify-center gap-1 mb-2">
              <Target className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">Oportunidades</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Oportunidades de Negócio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categories
                .sort((a, b) => parseFloat(b.trend.replace('+', '')) - parseFloat(a.trend.replace('+', '')))
                .slice(0, 3)
                .map((category) => (
                <div key={category.name} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{category.name}</h4>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm px-2 py-1 rounded ${
                        category.trend.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {category.trend}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        category.businessImpact === 'Alto' ? 'bg-red-100 text-red-700' :
                        category.businessImpact === 'Médio' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {category.businessImpact}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {category.opportunities.map((opp, idx) => (
                      <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                        {opp}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance por Categoria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categories.map((category) => (
                <div key={category.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-foreground w-24">{category.name}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-warning text-warning" />
                        <span className="text-sm font-semibold">{category.rating}</span>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      category.trend.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {category.trend}
                    </span>
                  </div>
                  <Progress value={(category.rating / 5) * 100} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Insights Recentes</CardTitle>
            <Button variant="outline" size="sm">
              Ver Relatório Completo
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentComments.map((comment, index) => (
              <div key={index} className="p-4 rounded-lg border space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">{comment.category}</span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-3 w-3 ${
                          star <= comment.rating
                            ? 'fill-warning text-warning'
                            : 'text-muted'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-foreground">{comment.comment}</p>
                <div className="text-xs text-muted-foreground">
                  {new Date(comment.date).toLocaleDateString('pt-BR')}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
