import { Img } from './Img'

export function StoreEditorial() {
  return (
    <section id="loja" className="section store" aria-labelledby="store-title">
      <div className="container store__grid">
        <div className="store__copy" data-reveal>
          <p className="eyebrow">A loja</p>
          <h2 id="store-title" className="section-title">
            Da tela para o Riacho Fundo
          </h2>
          <p>
            Conheça a Antunes no Riacho Fundo e veja as peças de perto. A loja atende com compras
            presenciais, retirada e entrega. Consulte a equipe para combinar a melhor opção.
          </p>
          <a className="text-link text-link--strong" href="#localizacao">
            Ver endereço
          </a>
        </div>

        <figure className="store__photo store__photo--wide" data-reveal>
          <Img
            name="interior-tenis"
            alt="Interior da loja: corredor central com bancos, araras de roupas à esquerda e parede de tênis à direita, com a entrada ao fundo."
            sizes="(min-width: 900px) 52vw, 92vw"
          />
        </figure>

        <figure className="store__photo store__photo--front" data-reveal>
          <Img
            name="fachada-maps"
            alt="Fachada da loja com o letreiro Antunes Moda Urbana em laranja sobre painel grafite."
            sizes="(min-width: 900px) 26vw, 56vw"
          />
        </figure>

        <figure className="store__photo store__photo--detail" data-reveal>
          <Img
            name="interior-acessorios"
            alt="Vitrine iluminada com óculos e acessórios, ao lado de uma parede de tênis."
            sizes="(min-width: 900px) 22vw, 40vw"
          />
          <figcaption className="fine-print">Fotos: capturas do Google Maps.</figcaption>
        </figure>
      </div>
    </section>
  )
}
