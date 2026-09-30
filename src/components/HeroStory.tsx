import { useLayoutEffect, useRef } from 'react'
import { brand } from '../data/brand'
import { getLook } from '../data/looks'
import { MOTION_OK, SCENE_QUERY, STATIC_MOTION_QUERY, gsap, revealOnScroll } from '../lib/motion'
import { ArrowIcon } from './Icons'
import { Img } from './Img'

const azul = getLook('oversized-azul')!
const oliva = getLook('oliva-jeans')!

/**
 * Abertura. Sem JS (ou com movimento reduzido) é uma sequência editorial
 * vertical. Em telas largas o GSAP adiciona `hero--scene`, que empilha as
 * camadas num palco fixado e as move com a rolagem.
 */
export function HeroStory() {
  const root = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const el = root.current
    if (!el) return
    const q = gsap.utils.selector(el)
    const mm = gsap.matchMedia()

    mm.add(MOTION_OK, () => {
      const intro = gsap.from(q('.hero__line > span'), { yPercent: 105, duration: 0.7, ease: 'power3.out', stagger: 0.09 })
      // Se o navegador pausar os quadros (aba em segundo plano), o título não fica escondido.
      const guard = window.setTimeout(() => intro.progress(1), 1500)
      return () => window.clearTimeout(guard)
    })

    mm.add(STATIC_MOTION_QUERY, () => {
      revealOnScroll(q('.hero__panel, .hero__detail, .hero__outro'))
    })

    mm.add(SCENE_QUERY, () => {
      el.classList.add('hero--scene')
      const detail = q('.hero__detail')[0] as HTMLElement
      const outro = q('.hero__outro')[0] as HTMLElement
      const oliva = q('.hero__panel--oliva')[0] as HTMLElement
      const cutout = q('.hero__cutout')[0] as HTMLElement

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: q('.hero__stage')[0],
          start: 'top top',
          end: '+=190%',
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      // Primeiro trecho: a tipografia recua, o recorte avança, o detalhe ganha espaço.
      tl.to(q('.hero__copy'), { scale: 0.92, yPercent: -3, transformOrigin: '0% 50%', duration: 1 }, 0)
        .to(q('.hero__cutout'), { x: '-5vw', scale: 1.06, transformOrigin: '50% 100%', duration: 1 }, 0)
        .to(q('.hero__detail'), { scale: 1.45, transformOrigin: '0% 0%', duration: 1 }, 0)
        .to(q('.hero__field'), { xPercent: 8, duration: 1 }, 0)

        // Trecho intermediário: camada grafite sobe, o look azul abre por máscara.
        .fromTo(q('.hero__bg-dark'), { yPercent: 100 }, { yPercent: 0, duration: 0.8 }, 1)
        .to(q('.hero__copy'), { autoAlpha: 0, duration: 0.35 }, 1)
        .to(q('.hero__detail'), { autoAlpha: 0, duration: 0.35 }, 1)
        // Centraliza o recorte na metade esquerda do palco, qualquer que seja a largura.
        .to(cutout, { x: () => el.offsetWidth * 0.25 - (cutout.offsetLeft + cutout.offsetWidth / 2), scale: 1, duration: 1 }, 1)
        .fromTo(
          q('.hero__panel--azul'),
          { clipPath: 'inset(100% 0% 0% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.8 },
          1.15,
        )
        .fromTo(q('.hero__panel--azul img'), { scale: 1.14 }, { scale: 1, duration: 0.8 }, 1.15)

        // Trecho final: a cena se abre no claro, com o look oliva e o detalhe de jeans.
        .to(q('.hero__bg-dark'), { yPercent: -100, duration: 0.8 }, 2.1)
        .to(q('.hero__field'), { xPercent: 110, duration: 0.8 }, 2.1)
        .to(q('.hero__cutout'), { x: '-105vw', duration: 0.9 }, 2.1)
        .to(q('.hero__panel--azul figcaption'), { autoAlpha: 0, duration: 0.3 }, 2.1)
        .to(q('.hero__panel--azul'), { x: '11vw', scale: 0.6, transformOrigin: '100% 100%', duration: 0.9 }, 2.1)
        .fromTo(
          q('.hero__panel--oliva'),
          { clipPath: 'inset(0% 100% 0% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.8 },
          2.2,
        )
        .fromTo(q('.hero__panel--oliva img'), { scale: 1.14 }, { scale: 1, duration: 0.8 }, 2.2)
        // O detalhe volta alinhado à base do painel oliva e à coluna do texto final.
        .set(
          detail,
          {
            x: () => outro.offsetLeft - detail.offsetLeft,
            y: () => oliva.offsetTop + oliva.offsetHeight - detail.offsetTop - detail.offsetHeight * 1.45,
          },
          2.2,
        )
        .to(detail, { autoAlpha: 1, duration: 0.4 }, 2.5)
        .fromTo(q('.hero__outro'), { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 2.5)
        // Pequena folga para ler o quadro final antes de soltar o pin.
        .to({}, { duration: 0.3 })

      return () => el.classList.remove('hero--scene')
    })

    return () => mm.revert()
  }, [])

  return (
    <section id="topo" className="hero" ref={root}>
      <div className="hero__stage">
        <div className="hero__bg-dark" aria-hidden="true" />
        <div className="hero__field" aria-hidden="true" />

        <div className="hero__copy">
          <p className="eyebrow">
            {brand.name} · {brand.region}
          </p>
          <h1 className="hero__title">
            {brand.headline.map((line) => (
              <span className="hero__line" key={line}>
                <span>{line}</span>
              </span>
            ))}
          </h1>
          <p className="hero__support">{brand.support}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#looks">
              Explorar os looks
              <ArrowIcon direction="down" />
            </a>
            <a className="text-link" href="#loja">
              Conhecer a loja
            </a>
          </div>
        </div>

        <div className="hero__cutout">
          <Img
            name="look-cinza-recorte"
            alt="Look em destaque: camisa cinza aberta sobre regata branca, boné preto e jeans escuro."
            sizes="(min-width: 1024px) 42vw, (min-width: 700px) 46vw, 86vw"
            priority
          />
        </div>

        <figure className="hero__panel hero__panel--azul">
          <div className="hero__panel-media">
            <Img name={azul.image} alt={azul.alt} sizes="(min-width: 700px) 36vw, 88vw" eager />
          </div>
          <figcaption>
            <span className="tag">Look</span>
            <strong>{azul.title}</strong>
            <span>{azul.summary}</span>
          </figcaption>
        </figure>

        <figure className="hero__panel hero__panel--oliva">
          <div className="hero__panel-media">
            <Img name={oliva.image} alt={oliva.alt} sizes="(min-width: 700px) 36vw, 62vw" eager />
          </div>
          <figcaption>
            <span className="tag">Look</span>
            <strong>{oliva.title}</strong>
            <span>{oliva.summary}</span>
          </figcaption>
        </figure>

        <figure className="hero__detail">
          <div className="hero__detail-media">
            <Img
              name="look-oliva-original"
              alt="Detalhe do grafismo branco na perna de um jeans preto."
              sizes="(min-width: 700px) 30vw, 60vw"
              eager
            />
          </div>
          <figcaption>Detalhe · jeans</figcaption>
        </figure>

        <div className="hero__outro">
          <p className="eyebrow">Três referências para começar</p>
          <p className="hero__outro-title">Agora monte a sua seleção.</p>
          <a className="text-link text-link--strong" href="#looks">
            Ver a seleção de looks
            <ArrowIcon direction="down" />
          </a>
        </div>
      </div>
    </section>
  )
}
