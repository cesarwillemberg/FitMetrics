# FitMetrics — Calculadoras Diárias (TBM, Água, Creatina)

Aplicação web em React + TypeScript + Vite, com TailwindCSS e Sass, focada em estimar necessidades diárias de calorias/macros, água e creatina. Mobile‑first, componentes reutilizáveis e código organizado (SOLID/clean code) para facilitar evolução.

## Objetivo da aplicação
- **Educacional**: oferecer estimativas rápidas para planejamento pessoal de nutrição, hidratação e suplementação.
- **Escalável**: estrutura de páginas independentes (TBM, Água, Creatina) e design system simples (buttons, cards, radios, hero, stat cards, accordions) pronto para novas calculadoras.
- **Compartilhamento**: resultados podem ser copiados ou enviados via WhatsApp (ícones Font Awesome).

## Funcionalidades por calculadora
### TBM + Macros (`/tbm`)
- Fórmula Mifflin-St Jeor (sexo) + multiplicador de atividade.
- Ajustes por objetivo: manter, perder (–20%), ganhar (+400 iniciante / +200 intermediário).
- Macros configuráveis (g/kg para proteína, gordura; fibra/1000 kcal).
- Exemplos rápidos e FAQ; resultados com cards e copiar/WhatsApp.

### Água diária (`/agua`)
- Padrão OMS: 35 ml/kg; automático por idade (40/35/30/25 ml/kg); faixa sugerida 30–40 ml/kg; opção personalizada.
- Exemplos rápidos clicáveis para preencher o peso.
- FAQ com importância da água, fatores que aumentam a necessidade e riscos de excesso.

### Creatina diária (`/creatina`)
- Fórmula base: peso × 0,03 g (≈3–5 g/dia como manutenção).
- Fase opcional de saturação: 20–25 g/dia por 5–7 dias (fracionado), depois volta para manutenção.
- FAQ com benefícios, mitos/verdades e orientações de uso.

## Stack
- React 19 + TypeScript + Vite
- TailwindCSS + Sass
- React Router DOM 7
- Font Awesome CDN (ícones de copiar/WhatsApp)

## Rodando o projeto
```bash
npm install
npm run dev   # abre em http://localhost:5173
npm run build # gera dist
```

## Estrutura principal
- `src/components/` — design system (Button, Card, RadioGroup, Accordion, Hero, Header/Footer, etc.).
- `src/pages/` — páginas: `HomePage`, `TbmPage`, `WaterPage`, `CreatinePage`.
- `src/features/calculators/` — lógica, hooks e componentes específicos por calculadora (`tbm`, `water`, `creatine`).
- `src/styles/` — Tailwind + tokens Sass.

## Fórmulas usadas
- **TBM (Mifflin-St Jeor)**:  
  - Homem: `10×peso + 6.25×altura − 5×idade + 5`  
  - Mulher: `10×peso + 6.25×altura − 5×idade − 161`  
  TDEE = TBM × multiplicador de atividade.
- **Água**: padrão 35 ml/kg (faixa 30–40 ml/kg); automático por idade (40/35/30/25 ml/kg).
- **Creatina**: peso × 0,03 g (manutenção); saturação 20–25 g/dia por 5–7 dias (fracionar).

## Responsividade e UX
- Layout mobile-first com grids responsivos.
- Estados claros (erros, resultados) e rolagem suave para sessões relevantes.
- Cards com sombras suaves, bordas de destaque para resultados e exemplos.

## Aviso
As calculadoras fornecem estimativas e não substituem avaliação profissional. Consulte nutricionista/médico para recomendações personalizadas, especialmente em casos clínicos ou uso de suplementação.
