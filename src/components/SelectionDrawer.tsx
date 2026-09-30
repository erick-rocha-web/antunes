import { looks } from '../data/looks'
import { buildWhatsAppUrl, selectionMessage } from '../lib/whatsapp'
import { ArrowIcon, CloseIcon } from './Icons'
import { Img } from './Img'
import { Modal } from './Modal'

interface SelectionDrawerProps {
  open: boolean
  savedIds: string[]
  onRemove: (id: string) => void
  onClear: () => void
  onClose: () => void
}

export function SelectionDrawer({ open, savedIds, onRemove, onClear, onClose }: SelectionDrawerProps) {
  // Na ordem em que foram salvas.
  const saved = savedIds.flatMap((id) => looks.filter((look) => look.id === id))

  return (
    <Modal open={open} onClose={onClose} className="drawer" labelledBy="drawer-title">
      <div className="drawer__inner">
        <header className="drawer__head">
          <div>
            <h2 id="drawer-title" className="drawer__title">
              Minha seleção
            </h2>
            <p className="fine-print">
              Inspirações para consultar a loja. Salvar aqui não reserva peças nem fecha um pedido.
            </p>
          </div>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Fechar seleção">
            <CloseIcon />
          </button>
        </header>

        {saved.length === 0 ? (
          <div className="drawer__empty">
            <p className="drawer__empty-title">Nada salvo por enquanto.</p>
            <p>Salve os looks que chamarem sua atenção e consulte todos de uma vez.</p>
            <a className="button button--primary" href="#looks" onClick={onClose}>
              Explorar os looks
            </a>
          </div>
        ) : (
          <>
            <ul className="drawer__list">
              {saved.map((look) => (
                <li key={look.id} className="drawer__item">
                  <Img name={look.image} alt="" sizes="72px" className="drawer__thumb" />
                  <div>
                    <p className="drawer__item-title">{look.title}</p>
                    <p className="fine-print">{look.summary}</p>
                  </div>
                  <button
                    type="button"
                    className="text-button"
                    onClick={() => onRemove(look.id)}
                    aria-label={`Remover ${look.title} da seleção`}
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
            <footer className="drawer__foot">
              <a
                className="button button--accent"
                href={buildWhatsAppUrl(selectionMessage(saved.map((look) => look.title)))}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar minha seleção
                <ArrowIcon direction="up-right" />
              </a>
              <p className="fine-print">
                Abre o WhatsApp da loja com os nomes das referências. Você decide se envia.
              </p>
              <button type="button" className="text-button" onClick={onClear}>
                Esvaziar seleção
              </button>
            </footer>
          </>
        )}
      </div>
    </Modal>
  )
}
