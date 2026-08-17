export type ProductStatus = 'recommended' | 'research';

export interface NotebookProduct {
  slug: string;
  brand: string;
  model: string;
  badge: string;
  tone: 'blue' | 'violet' | 'cyan' | 'orange';
  summary: string;
  specs: string[];
  ideal: string;
  attention: string;
  price: number;
  priceDisplay: string;
  sold: string;
  affiliateLink: string;
  commission: number;
  seller: string;
  sellerUrl: string;
  officialStore: boolean;
  status: ProductStatus;
  categories: string[];
}

export const products: NotebookProduct[] = [
  {
    slug: 'vaio-fe16',
    brand: 'VAIO',
    model: 'FE16',
    badge: 'Melhor equilíbrio',
    tone: 'blue',
    summary: 'Tela grande, memória confortável e Windows pronto para trabalho e estudo.',
    specs: ['Ryzen 5 5625U', '12 GB de RAM', 'SSD de 512 GB', 'Tela 16″ IPS WUXGA'],
    ideal: 'Trabalho, faculdade, programação, muitas abas e uso diário.',
    attention: 'É maior que um notebook de 15,6″; considere isso se você transporta todo dia.',
    price: 3869.1,
    priceDisplay: 'R$ 3.869,10',
    sold: '+5 mil vendidos',
    affiliateLink: 'https://meli.la/2Byh1uN',
    commission: 5,
    seller: 'VAIO',
    sellerUrl: 'https://www.mercadolivre.com.br/loja/vaio#from=share_eshop',
    officialStore: true,
    status: 'recommended',
    categories: ['faculdade', 'trabalho', 'programacao', 'custo-beneficio'],
  },
  {
    slug: 'lenovo-ideapad-slim-3i',
    brand: 'Lenovo',
    model: 'IdeaPad Slim 3i',
    badge: 'Mais desempenho',
    tone: 'violet',
    summary: 'Processador forte para quem quer agilidade e não precisa de placa de vídeo dedicada.',
    specs: ['Core i5-13420H', '8 GB DDR5 soldados', 'SSD de 512 GB', 'Windows 11'],
    ideal: 'Planilhas, programação, estudo e produtividade intensa.',
    attention: 'A memória de 8 GB é soldada; avalie se essa capacidade será suficiente no longo prazo.',
    price: 3899,
    priceDisplay: 'R$ 3.899,00',
    sold: '10 mil vendidos',
    affiliateLink: 'https://meli.la/2oZsw7o',
    commission: 5,
    seller: 'Vikings',
    sellerUrl: 'https://www.mercadolivre.com.br/loja/vikings#from=share_eshop',
    officialStore: true,
    status: 'recommended',
    categories: ['faculdade', 'trabalho', 'programacao', 'desempenho'],
  },
  {
    slug: 'samsung-galaxy-book4',
    brand: 'Samsung',
    model: 'Galaxy Book4',
    badge: 'Mais portátil',
    tone: 'cyan',
    summary: 'Construção leve e configuração equilibrada para levar na mochila.',
    specs: ['Core i5-1335U', '8 GB de RAM', 'SSD de 512 GB', 'Tela 15,6″ Full HD'],
    ideal: 'Faculdade, escritório, reuniões e deslocamentos frequentes.',
    attention: 'Prioriza mobilidade e autonomia; não é uma opção para jogos pesados.',
    price: 4334.15,
    priceDisplay: 'R$ 4.334,15',
    sold: '+10 mil vendidos',
    affiliateLink: 'https://meli.la/1E8Rucj',
    commission: 5,
    seller: 'Mercado Livre',
    sellerUrl: 'https://www.mercadolivre.com.br/loja/mercado-livre#from=share_eshop',
    officialStore: true,
    status: 'recommended',
    categories: ['faculdade', 'trabalho', 'mobilidade'],
  },
  {
    slug: 'acer-nitro-v15',
    brand: 'Acer',
    model: 'Nitro V15',
    badge: 'Para jogos e GPU',
    tone: 'orange',
    summary: 'A única escolha da lista com placa de vídeo dedicada para jogos e tarefas gráficas.',
    specs: ['Core i5-13420H', '16 GB DDR5', 'GeForce RTX 4050', 'Tela 15,6″ 165 Hz'],
    ideal: 'Jogos, edição de vídeo, 3D e aplicações aceleradas por GPU.',
    attention: 'É mais pesado, consome mais energia e costuma fazer mais ruído que modelos de produtividade.',
    price: 7114.5,
    priceDisplay: 'R$ 7.114,50',
    sold: '+1 mil vendidos',
    affiliateLink: 'https://meli.la/2AbWA7q',
    commission: 5,
    seller: 'A confirmar',
    sellerUrl: 'https://www.mercadolivre.com.br/loja/vaio#from=share_eshop',
    officialStore: true,
    status: 'recommended',
    categories: ['jogos', 'edicao', 'desempenho'],
  },
  {
    slug: 'asus-vivobook-go-15',
    brand: 'ASUS',
    model: 'Vivobook Go 15',
    badge: 'Em análise',
    tone: 'blue',
    summary: 'Modelo ainda não aprovado para recomendação.',
    specs: ['AMD Athlon informado', 'SSD de 128 GB', 'Windows 11', 'Tela 15,6″'],
    ideal: 'Uso básico, sujeito à confirmação do modelo exato.',
    attention: 'Processador e RAM precisam ser confirmados; armazenamento e volume vendido são inferiores aos demais.',
    price: 3039.05,
    priceDisplay: 'R$ 3.039,05',
    sold: '50 vendidos',
    affiliateLink: 'https://meli.la/2NTDZUW',
    commission: 5,
    seller: 'ASUS',
    sellerUrl: 'https://www.mercadolivre.com.br/loja/asus#from=share_eshop',
    officialStore: true,
    status: 'research',
    categories: ['basico'],
  },
];

export const recommendedProducts = products.filter(({ status }) => status === 'recommended');
export const productsByCategory = (category: string) =>
  recommendedProducts.filter(({ categories }) => categories.includes(category));

