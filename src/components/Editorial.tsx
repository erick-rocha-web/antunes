import { Img } from './Img'

/** As artes já trazem lettering próprio: nada de título por cima nem recorte. */
export function Editorial() {
  return (
    <section id="selecao" className="section editorial" aria-labelledby="editorial-title">
      <div className="container editorial__grid">
        <figure className="editorial__art editorial__art--main" data-reveal>
          <Img
            name="editorial-camisetas"
            alt="Arte da loja: pessoa de costas com camiseta branca ampla, estampa vertical nas costas, diante de um muro grafitado."
            sizes="(min-width: 900px) 38vw, 86vw"
          />
        </figure>

        <div className="editorial__copy" data-reveal>
          <p className="eyebrow">Seleção editorial</p>
          <h2 id="editorial-title" className="section-title">
            O detalhe muda o look
          </h2>
          <p>
            Uma estampa nas costas, um grafismo na lateral da bermuda, a fivela do cinto. Nas artes
            da loja, é a peça certa no lugar certo que resolve a combinação.
          </p>
          <p className="fine-print">
            Artes publicadas pela loja no Instagram. Consulte a equipe sobre as peças disponíveis
            hoje.
          </p>
        </div>

        <figure className="editorial__art editorial__art--side" data-reveal>
          <Img
            name="editorial-jorts"
            alt="Arte da loja: bermuda jeans cinza-escura com grafismo de raios brancos nas laterais, regata branca e cinto de fivela metálica."
            sizes="(min-width: 900px) 26vw, 62vw"
          />
        </figure>
      </div>
    </section>
  )
}
