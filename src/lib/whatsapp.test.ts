import { describe, expect, it } from 'vitest'
import { buildWhatsAppUrl, lookMessage, selectionMessage } from './whatsapp'

describe('links do WhatsApp', () => {
  it('usa o número da loja sem pontuação e codifica a mensagem uma vez', () => {
    const url = buildWhatsAppUrl('Olá! Tudo bem?')
    expect(url).toBe('https://wa.me/556193780960?text=Ol%C3%A1!%20Tudo%20bem%3F')
    expect(decodeURIComponent(url.split('?text=')[1])).toBe('Olá! Tudo bem?')
  })

  it('limpa espaços, sinal de mais e pontuação do número', () => {
    expect(buildWhatsAppUrl('oi', '+55 61 9378-0960')).toBe('https://wa.me/556193780960?text=oi')
  })

  it('cita o look consultado', () => {
    expect(lookMessage('Sobreposição em cinza')).toContain('“Sobreposição em cinza”')
  })

  it('lista somente as referências selecionadas', () => {
    const message = selectionMessage(['Sobreposição em cinza', 'Oliva + jeans'])
    expect(message).toContain('• Sobreposição em cinza\n• Oliva + jeans\n')
    expect(message).not.toContain('Oversized em azul')
    const decoded = decodeURIComponent(buildWhatsAppUrl(message).split('?text=')[1])
    expect(decoded).toBe(message)
  })
})
