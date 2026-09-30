import type { AssetName } from './assets'

export type LookTag = 'sobreposicoes' | 'camisetas' | 'jeans'

export interface Look {
  /** ID estável: é o que fica salvo no navegador. */
  id: string
  /** Descrição editorial da foto. Não é nome oficial de produto nem SKU. */
  title: string
  image: AssetName
  alt: string
  tags: LookTag[]
  /** Uma linha para os cartões e legendas. */
  summary: string
  /** Só o que é visível na fotografia. */
  description: string
  source: string
  /** Referência visual: sem preço, tamanho ou disponibilidade confirmados. */
  kind: 'referencia-visual'
}

export const tagLabels: Record<LookTag, string> = {
  sobreposicoes: 'Sobreposições',
  camisetas: 'Camisetas',
  jeans: 'Jeans',
}

export const looks: Look[] = [
  {
    id: 'sobreposicao-cinza',
    title: 'Sobreposição em cinza',
    image: 'look-cinza-original',
    alt: 'Pessoa na rua com camisa cinza de manga curta aberta sobre regata branca, boné preto e jeans escuro, ajustando a aba do boné.',
    tags: ['sobreposicoes', 'jeans'],
    summary: 'Camisa aberta sobre regata, boné e jeans escuro.',
    description:
      'Camisa cinza de manga curta usada aberta sobre regata branca, com boné preto, cinto de fivela metálica e jeans escuro de corte amplo. Tons neutros, com o contraste concentrado nos acessórios.',
    source: 'Captura fornecida (look-cinza-original.png)',
    kind: 'referencia-visual',
  },
  {
    id: 'oversized-azul',
    title: 'Oversized em azul',
    image: 'look-azul-original',
    alt: 'Pessoa caminhando na rua com camiseta azul-marinho ampla de estampa grande, boné de cinco painéis e óculos escuros.',
    tags: ['camisetas'],
    summary: 'Camiseta ampla com estampa grande e boné.',
    description:
      'Camiseta azul-marinho de modelagem ampla, com estampa grande no peito e nas mangas, combinada com boné de cinco painéis e óculos escuros. A estampa é o centro do look.',
    source: 'Captura fornecida (look-azul-original.png)',
    kind: 'referencia-visual',
  },
  {
    id: 'oliva-jeans',
    title: 'Oliva + jeans',
    image: 'look-oliva-original',
    alt: 'Pessoa em frente a um muro grafitado com camiseta oliva estampada e jeans preto amplo com grafismo branco na perna.',
    tags: ['camisetas', 'jeans'],
    summary: 'Camiseta oliva e jeans amplo com grafismo.',
    description:
      'Camiseta oliva com estampa tom sobre tom e jeans preto de perna larga com grafismo branco na lateral. Pulseiras e tênis preto fecham a combinação.',
    source: 'Captura fornecida (look-oliva-original.png)',
    kind: 'referencia-visual',
  },
]

export const lookIds = looks.map((look) => look.id)

export function getLook(id: string): Look | undefined {
  return looks.find((look) => look.id === id)
}

/** Só filtros com itens reais associados. */
export const availableTags = (Object.keys(tagLabels) as LookTag[]).filter((tag) =>
  looks.some((look) => look.tags.includes(tag)),
)
