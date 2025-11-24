# Sof.IA - Engajamento Cidadão Inteligente

**Sof.IA** é uma solução de engajamento cidadão que conecta moradores, gestão pública e negócios locais por meio de um fluxo inteligente via WhatsApp e um dashboard web de monitoramento.

Ela traduz informações complexas em orientações simples e acionáveis, permitindo que qualquer pessoa entenda leis, registre demandas do bairro, acompanhe processos e participe das decisões que impactam sua rotina.

Através da interação em linguagem natural, a Sof.IA coleta dados estruturados sobre denúncias, necessidades e interesses da população — como problemas de infraestrutura, solicitações de serviços, abertura de negócios e questões sociais. Esses dados são organizados em um painel analítico por cidade e bairro, exibindo insights como volume de ocorrências, temas mais discutidos, engajamento por faixa etária e tendências emergentes.

A solução não apenas facilita a comunicação entre cidadãos e gestores, mas transforma interação em inteligência acionável. Com isso, cidades podem priorizar demandas reais, reduzir retrabalho, acompanhar resolução de problemas e planejar ações de forma mais eficiente.

**Sof.IA não substitui canais existentes — ela os moderniza.** Ela aproxima quem vive a cidade de quem a administra, permitindo que pessoas sejam ouvidas com menos burocracia e mais resultado.

## Equipe de Desenvolvimento

- **Giovanna Carvalho de Moraes** - [giovannamilena50@gmail.com](mailto:giovannamilena50@gmail.com)
- **Matheus Costa** - [matheushenri26@outlook.com](mailto:matheushenri26@outlook.com)
- **Jesus Felipe Candian Silva** - [felipecandian95@gmail.com](mailto:felipecandian95@gmail.com)
- **Pedro Henrique Santiago Siqueira** - [pedro.santiagosiqueira@gmail.com](mailto:pedro.santiagosiqueira@gmail.com)

## Arquitetura do Sistema

```
┌─────────────────┐    WhatsApp     ┌─────────────────┐    HTTP/REST    ┌─────────────────┐
│   Cidadãos      │ ──────────────► │   n8n + OpenAI  │ ──────────────► │   Backend       │
│   (WhatsApp)    │                 │   (Automação)   │                 │   (Spring Boot) │
└─────────────────┘                 └─────────────────┘                 │   Port: 8080    │
                                                                         └─────────────────┘
┌─────────────────┐    HTTP/REST                                                │
│   Dashboard     │ ──────────────────────────────────────────────────────────┘
│   (React/Vite)  │                                                              │
│   Port: 5173    │                                                              ▼
└─────────────────┘                                                      ┌─────────────────┐
                                                                          │   Database      │
                                                                          │   (H2/PostgreSQL)│
                                                                          └─────────────────┘
```

##  Como executar o projeto

### Pré-requisitos
- Node.js 18+ 
- Java 17+
- npm ou yarn

### 1. Executar o Backend (Spring Boot)

```bash
# Navegar para o diretório do backend
cd c:\Users\Giovanna\IdeaProjects\Sofia\sofia

# Executar o backend
.\mvnw.cmd spring-boot:run
```

O backend estará disponível em: `http://localhost:8080`

**Endpoints principais:**
- Health Check: `GET /actuator/health`
- Métricas: `GET /metrics/dashboard`
- H2 Console: `http://localhost:8080/h2-console`

### 2. Executar o Frontend (React/Vite)

```bash
# Navegar para o diretório do frontend
cd "C:\Users\{user}\OneDrive\Área de Trabalho\city-pulse-dashboard"

# Instalar dependências
npm install

# Executar o frontend
npm run dev
```

O frontend estará disponível em: `http://localhost:5173`

### 3. Scripts Automatizados

```bash
# Testar integração completa
test-integration.bat

# Deploy completo (frontend + backend)
deploy-full-stack.bat
```

## Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca para interfaces
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI
- **React Router** - Roteamento
- **Recharts** - Gráficos e visualizações

### Backend
- **Spring Boot 3.4** - Framework Java
- **Spring Security** - Autenticação e autorização
- **Spring Data JPA** - Persistência de dados
- **H2 Database** - Banco em memória (desenvolvimento)
- **PostgreSQL** - Banco de produção
- **Flyway** - Migração de banco

## Funcionalidades

### Dashboard Principal
- Métricas em tempo real
- Visualização de interações por localização
- Análise demográfica por faixa etária
- Indicadores de performance municipal

### Gestão de Demandas
- **Interações via WhatsApp** - Integração com n8n e OpenAI API
- **Mapa de ocorrências** - Visualização geográfica das demandas
- **Upload e visualização de fotos** - Evidências visuais dos problemas
- **Categorização automática** - IA classifica demandas por tipo e urgência

### Consultas Governamentais
- **Chat com IA Sofia** - Assistente virtual para esclarecimentos
- **Esclarecimentos sobre leis municipais** - Interpretação de regulamentações
- **Análise de regulamentações** - Suporte a decisões administrativas
- **Linguagem natural** - Traduz informações complexas em orientações simples

### Métricas e Analytics
- Questões urgentes identificadas por IA
- Análise de tendências temporais
- Métricas de engajamento cidadão
- Relatórios exportáveis

##  Configuração

### Variáveis de Ambiente (Frontend)

```env
# .env.local
VITE_API_URL=http://localhost:8080
VITE_APP_NAME=City Pulse Dashboard
```

### Configuração do Backend

```properties
# application.properties
spring.datasource.url=jdbc:h2:mem:sofia_db
spring.h2.console.enabled=true
server.port=8080
```

## Deploy em Produção

Consulte o arquivo `DEPLOY.md` para instruções completas de deploy.

**Plataformas recomendadas:**
- Frontend: Vercel, Netlify
- Backend: Railway, Render, Heroku
- Banco: Supabase, PlanetScale

## Testes

```bash
# Frontend
npm run test

# Backend
.\mvnw.cmd test

# Integração completa
test-integration.bat
```

## Estrutura do Projeto

```
city-pulse-dashboard/
├── src/
│   ├── components/     # Componentes React
│   ├── pages/         # Páginas da aplicação
│   ├── hooks/         # Custom hooks
│   ├── services/      # Serviços de API
│   ├── contexts/      # Contextos React
│   └── lib/          # Utilitários
├── public/           # Assets estáticos
└── dist/            # Build de produção
```

## Contribuição

Este projeto segue as práticas de **Conventional Commits** para padronização das mensagens de commit:

### Formato dos Commits
```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé(s) opcional(is)]
```

### Tipos de Commit
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Alterações na documentação
- `style`: Formatação, ponto e vírgula, etc
- `refactor`: Refatoração de código
- `test`: Adição ou correção de testes
- `chore`: Tarefas de build, configurações, etc

### Exemplos
```bash
feat(dashboard): adicionar métricas em tempo real
fix(api): corrigir endpoint de autenticação
docs(readme): atualizar instruções de instalação
style(components): formatar código com prettier
```

### Como Contribuir
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feat/nova-funcionalidade`)
3. Commit suas mudanças seguindo o padrão (`git commit -m 'feat: adicionar nova funcionalidade'`)
4. Push para a branch (`git push origin feat/nova-funcionalidade`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para detalhes.

```
MIT License

Copyright (c) 2024 Equipe Sof.IA

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

**Sof.IA** - Transformando interação cidadã em inteligência acionável 🚀
