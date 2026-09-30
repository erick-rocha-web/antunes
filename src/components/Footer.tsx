import { brand } from '../data/brand'
import { directionsUrl, riachoFundo } from '../data/locations'
import { buildWhatsAppUrl, generalMessage } from '../lib/whatsapp'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <p className="footer__brand">
          <span>{brand.shortName}</span> {brand.descriptor}
        </p>
        <ul className="footer__links">
          <li>
            <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
              {riachoFundo.district}, Brasília - DF
            </a>
          </li>
          <li>
            <a href={buildWhatsAppUrl(generalMessage)} target="_blank" rel="noopener noreferrer">
              {brand.phoneDisplay}
            </a>
          </li>
        </ul>
        <p className="footer__notice">{brand.previewNotice}</p>
      </div>
    </footer>
  )
}
