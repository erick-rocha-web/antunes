import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const MOTION_OK = '(prefers-reduced-motion: no-preference)'
/** A cena fixada só existe em telas largas e com movimento permitido. */
export const SCENE_QUERY = `(min-width: 1024px) and (min-height: 560px) and ${MOTION_OK}`
export const STATIC_MOTION_QUERY = `(max-width: 1023.98px) and ${MOTION_OK}`

/**
 * Revelação curta ao entrar na tela. Chamar dentro de um gsap.matchMedia/context
 * para que o estado inicial seja desfeito na limpeza. Sem JS, nada fica oculto.
 */
export function revealOnScroll(targets: Element[]) {
  if (targets.length === 0) return
  gsap.set(targets, { autoAlpha: 0, y: 24 })
  ScrollTrigger.batch(targets, {
    start: 'top 90%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.08, overwrite: true }),
  })
}

export { gsap, ScrollTrigger }
