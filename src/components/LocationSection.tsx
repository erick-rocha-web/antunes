import { brand } from '../data/brand'
import { directionsUrl, faq, riachoFundo } from '../data/locations'
import { buildWhatsAppUrl, generalMessage } from '../lib/whatsapp'
import { ArrowIcon } from './Icons'

export function LocationSection() {
  return (
    <section id="localizacao" className="section location" aria-labelledby="location-title">
      <div className="container location__grid">
        <div className="location__main">
          <p className="eyebrow">Localização</p>
          <h2 id="location-title" className="section-title">
            {riachoFundo.district}, Brasília
          </h2>
          <address className="location__address">
            {riachoFundo.addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <p className="location__services">{riachoFundo.services}</p>
          <div className="location__actions">
            <a className="button button--primary" href={directionsUrl} target="_blank" rel="noopener noreferrer">
              Como chegar
              <ArrowIcon direction="up-right" />
            </a>
            <a className="text-link" href={brand.instagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram {brand.instagramHandle}
            </a>
            <a
              className="text-link"
              href={buildWhatsAppUrl(generalMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp {brand.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="location__faq">
          <h3 className="location__faq-title">Dúvidas</h3>
          {faq.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
