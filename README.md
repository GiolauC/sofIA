# City Pulse Dashboard

Dashboard municipal para gestão de demandas dos cidadãos via WhatsApp, análise de métricas e consultas governamentais com IA.

##  Arquitetura do Sistema

```
┌─────────────────┐    HTTP/REST    ┌─────────────────┐
│   Frontend      │ ──────────────► │   Backend       │
│   (React/Vite)  │                 │   (Spring Boot) │
│   Port: 5173    │                 │   Port: 8080    │
└─────────────────┘                 └─────────────────┘
                                            │
                                            ▼
                                    ┌─────────────────┐
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
- Interações via WhatsApp
- Mapa de ocorrências
- Upload e visualização de fotos
- Categorização automática

### Consultas Governamentais
- Chat com IA Sofia
- Esclarecimentos sobre leis municipais
- Análise de regulamentações
- Suporte a decisões administrativas

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

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request
