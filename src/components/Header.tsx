import { useEffect, useRef, useState } from 'react'
import { brand, navLinks } from '../data/brand'
import { BookmarkIcon, CloseIcon, MenuIcon } from './Icons'

interface HeaderProps {
  savedCount: number
  onOpenSelection: () => void
}

export function Header({ savedCount, onOpenSelection }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    // Ao passar para o layout largo, o menu compacto deixa de existir.
    const wide = window.matchMedia('(min-width: 900px)')
    const onWide = () => wide.matches && setMenuOpen(false)
    document.addEventListener('keydown', onKey)
    wide.addEventListener('change', onWide)
    return () => {
      document.removeEventListener('keydown', onKey)
      wide.removeEventListener('change', onWide)
    }
  }, [menuOpen])

  const countLabel =
    savedCount === 0
      ? 'Minha seleção, nenhuma referência salva'
      : `Minha seleção, ${savedCount} ${savedCount === 1 ? 'referência salva' : 'referências salvas'}`

  return (
    <header className="header">
      <div className="header__bar">
        <a className="brandmark" href="#topo" aria-label={`${brand.name}, início`}>
          <span className="brandmark__name">{brand.shortName}</span>
          <span className="brandmark__descriptor">{brand.descriptor}</span>
        </a>

        <nav className="header__nav" aria-label="Seções">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button type="button" className="selection-button" onClick={onOpenSelection} aria-label={countLabel}>
            <BookmarkIcon filled={savedCount > 0} />
            <span className="selection-button__text">Minha seleção</span>
            <span className="selection-button__count" aria-hidden="true">
              {savedCount}
            </span>
          </button>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="menu-compacto"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <nav id="menu-compacto" className="header__menu" aria-label="Seções" hidden={!menuOpen}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
