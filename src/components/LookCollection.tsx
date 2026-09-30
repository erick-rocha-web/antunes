import { useState } from 'react'
import { availableTags, looks, tagLabels, type Look, type LookTag } from '../data/looks'
import { BookmarkIcon } from './Icons'
import { Img } from './Img'

interface LookCollectionProps {
  savedIds: string[]
  onToggleSave: (id: string) => void
  onOpenLook: (look: Look) => void
}

type Filter = 'todos' | LookTag

const filters: { value: Filter; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  ...availableTags.map((tag) => ({ value: tag, label: tagLabels[tag] })),
]

export function LookCollection({ savedIds, onToggleSave, onOpenLook }: LookCollectionProps) {
  const [filter, setFilter] = useState<Filter>('todos')
  const visible = filter === 'todos' ? looks : looks.filter((look) => look.tags.includes(filter))

  return (
    <section id="looks" className="section looks" aria-labelledby="looks-title">
      <div className="container">
        <div className="looks__head">
          <div>
            <p className="eyebrow">Vitrine</p>
            <h2 id="looks-title" className="section-title">
              Encontre sua próxima referência
            </h2>
          </div>
          <p className="looks__note">Consulte modelos, tamanhos e disponibilidade com a loja.</p>
        </div>

        <div className="filters" role="group" aria-label="Filtrar looks">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              className="filters__item"
              aria-pressed={filter === item.value}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
          <p className="filters__count" aria-live="polite">
            {visible.length} {visible.length === 1 ? 'look' : 'looks'}
          </p>
        </div>

        <ul className="looks__grid">
          {visible.map((look, index) => {
            const saved = savedIds.includes(look.id)
            return (
              <li className="look-card" key={look.id}>
                <button
                  type="button"
                  className="look-card__open"
                  onClick={() => onOpenLook(look)}
                  aria-label={`Ver look: ${look.title}`}
                >
                  <Img
                    name={look.image}
                    alt={look.alt}
                    sizes={
                      index === 0
                        ? '(min-width: 900px) 40vw, 92vw'
                        : '(min-width: 900px) 30vw, 46vw'
                    }
                  />
                  <span className="look-card__cta" aria-hidden="true">
                    Ver look
                  </span>
                </button>
                <div className="look-card__meta">
                  <div>
                    <h3 className="look-card__title">{look.title}</h3>
                    <p className="look-card__summary">{look.summary}</p>
                  </div>
                  <button
                    type="button"
                    className="save-button"
                    aria-pressed={saved}
                    aria-label={`Salvar referência: ${look.title}`}
                    onClick={() => onToggleSave(look.id)}
                  >
                    <BookmarkIcon filled={saved} />
                    <span>{saved ? 'Salva' : 'Salvar referência'}</span>
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
