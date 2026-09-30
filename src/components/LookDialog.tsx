import { tagLabels, type Look } from '../data/looks'
import { buildWhatsAppUrl, lookMessage } from '../lib/whatsapp'
import { ArrowIcon, BookmarkIcon, CloseIcon } from './Icons'
import { Img } from './Img'
import { Modal } from './Modal'

interface LookDialogProps {
  /** Último look escolhido; permanece montado enquanto o painel fecha. */
  look: Look | null
  open: boolean
  saved: boolean
  onToggleSave: (id: string) => void
  onClose: () => void
}

export function LookDialog({ look, open, saved, onToggleSave, onClose }: LookDialogProps) {
  return (
    <Modal open={open} onClose={onClose} className="look-dialog" labelledBy="look-dialog-title">
      {look && (
        <div className="look-dialog__inner">
          <button type="button" className="icon-button modal__close" onClick={onClose} aria-label="Fechar look">
            <CloseIcon />
          </button>
          <div className="look-dialog__media">
            <Img name={look.image} alt={look.alt} sizes="(min-width: 800px) 480px, 92vw" />
          </div>
          <div className="look-dialog__body">
            <p className="eyebrow">{look.tags.map((tag) => tagLabels[tag]).join(' · ')}</p>
            <h2 id="look-dialog-title" className="look-dialog__title">
              {look.title}
            </h2>
            <p>{look.description}</p>
            <p className="fine-print">
              Referência visual. Peças, tamanhos e disponibilidade são confirmados pela loja.
            </p>
            <div className="look-dialog__actions">
              <button type="button" className="button button--primary" onClick={() => onToggleSave(look.id)}>
                <BookmarkIcon filled={saved} />
                {saved ? 'Remover da seleção' : 'Salvar referência'}
              </button>
              <a
                className="text-link"
                href={buildWhatsAppUrl(lookMessage(look.title))}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar este look
                <ArrowIcon direction="up-right" />
              </a>
            </div>
          </div>
        </div>
      )}
    </Modal>
  )
}
