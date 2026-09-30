import { brand } from '../data/brand'

/** Único ponto que monta links do WhatsApp. A mensagem é codificada uma vez só. */
export function buildWhatsAppUrl(message: string, phone: string = brand.whatsappNumber): string {
  const digits = phone.replace(/\D/g, '')
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}

export const generalMessage =
  'Olá! Vi a apresentação da Antunes e gostaria de saber mais sobre as peças.'

export function lookMessage(title: string): string {
  return `Olá! Vi o look “${title}” na apresentação da Antunes. Vocês podem me informar as peças, os tamanhos disponíveis e os valores?`
}

export function selectionMessage(titles: string[]): string {
  if (titles.length === 0) return generalMessage
  const list = titles.map((title) => `• ${title}`).join('\n')
  return `Olá! Gostei destas referências na apresentação da Antunes:\n${list}\nVocês podem me informar os modelos disponíveis, tamanhos e valores?`
}
