// Unidade confirmada pelo material enviado. Ceilândia aparece no Instagram,
// mas sem endereço nem contato: fica como pendência, fora da interface.
export const riachoFundo = {
  name: 'Antunes Moda Urbana',
  district: 'Riacho Fundo',
  addressLines: ['Riacho Fundo CLS 04, Bloco B, Lote 03, Lojas 02/04', 'Riacho Fundo, Brasília - DF', 'CEP 71820-512'],
  services: 'Compras presenciais, retirada e entrega.',
} as const

const routeQuery = `${riachoFundo.name}, ${riachoFundo.addressLines.join(', ')}`

/** Busca por nome + endereço completos. Sem place ID inventado. */
export const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(routeQuery)}`

export const faq = [
  {
    question: 'Posso comprar pela página?',
    answer:
      'Nesta apresentação você explora os looks e consulta a loja para confirmar as peças e combinar a compra.',
  },
  {
    question: 'Tem retirada e entrega?',
    answer:
      'A loja informa retirada e entrega. Consulte a equipe para confirmar área atendida, prazo e condições.',
  },
  {
    question: 'Como confirmar um tamanho ou uma peça?',
    answer:
      'Salve as referências que gostou e envie sua seleção à loja. A equipe confirma modelos, tamanhos e disponibilidade.',
  },
] as const
