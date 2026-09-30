// Identidade e contatos. Tudo aqui depende de confirmação da loja
// (ver docs/PENDENCIAS_CLIENTE.md).
export const brand = {
  name: 'Antunes Moda Urbana',
  shortName: 'Antunes',
  descriptor: 'Moda Urbana',
  region: 'Distrito Federal',
  // Proposta criativa da prévia, não é slogan oficial.
  headline: ['Seu estilo', 'ocupa a rua.'],
  support: 'Looks, detalhes e referências para vestir do seu jeito.',
  instagramUrl: 'https://www.instagram.com/_elaantunes/',
  instagramHandle: '@_elaantunes',
  // WhatsApp informado pelo Erick: +55 61 9378-0960 (substitui o número do Maps).
  phoneDisplay: '(61) 9378-0960',
  whatsappNumber: '556193780960',
  previewNotice: 'Prévia conceitual para apresentação. Conteúdo sujeito à aprovação da loja.',
} as const

export const navLinks = [
  { href: '#looks', label: 'Looks' },
  { href: '#selecao', label: 'Seleção' },
  { href: '#loja', label: 'A loja' },
  { href: '#localizacao', label: 'Localização' },
] as const
