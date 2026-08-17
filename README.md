# Vale o Notebook

Landing page estática de curadoria de notebooks, com recomendações objetivas por perfil de uso e links para anúncios do Mercado Livre.

## Stack

- Astro
- TypeScript
- CSS
- Build estático

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## MVP atual

- Landing page responsiva
- Catálogo centralizado com quatro notebooks selecionados e um produto em análise
- Páginas para faculdade, programação, orçamento e decisão de compra
- Comparativo por perfil de uso
- Pontos fortes e limitações de cada modelo
- Links externos com marcação `sponsored`
- Aviso de afiliados e variação de preço
- Metadata por página, sitemap e robots.txt
- Eventos `affiliate_click` preparados para integração com analytics
- Sem backend, autenticação ou banco de dados

## Configuração de produção

Defina a URL pública na hospedagem para gerar canonical e sitemap corretamente:

```bash
PUBLIC_SITE_URL=https://seu-dominio.com.br
```

## Próximas etapas

1. Confirmar os links de afiliado e vendedores
2. Adicionar imagens próprias ou autorizadas dos produtos
3. Configurar domínio e hospedagem
4. Conectar os eventos de clique a um provedor de analytics
