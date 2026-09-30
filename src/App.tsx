import { useEffect, useLayoutEffect, useState } from 'react'
import { Editorial } from './components/Editorial'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroStory } from './components/HeroStory'
import { LocationSection } from './components/LocationSection'
import { LookCollection } from './components/LookCollection'
import { LookDialog } from './components/LookDialog'
import { SelectionDrawer } from './components/SelectionDrawer'
import { StoreEditorial } from './components/StoreEditorial'
import type { Look } from './data/looks'
import { useSelection } from './hooks/useSelection'
import { MOTION_OK, ScrollTrigger, gsap, revealOnScroll } from './lib/motion'

export default function App() {
  const selection = useSelection()
  const [dialogLook, setDialogLook] = useState<Look | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add(MOTION_OK, () => {
      revealOnScroll(gsap.utils.toArray<Element>('[data-reveal]'))
    })
    return () => mm.revert()
  }, [])

  // Recalcula as medidas uma vez, quando fontes e imagens estiverem prontas.
  useEffect(() => {
    let active = true
    const refresh = () => active && ScrollTrigger.refresh()
    document.fonts?.ready.then(refresh)
    if (document.readyState !== 'complete') window.addEventListener('load', refresh, { once: true })
    return () => {
      active = false
      window.removeEventListener('load', refresh)
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#looks">
        Pular para os looks
      </a>
      <Header savedCount={selection.ids.length} onOpenSelection={() => setDrawerOpen(true)} />
      <main>
        <HeroStory />
        <LookCollection
          savedIds={selection.ids}
          onToggleSave={selection.toggle}
          onOpenLook={(look) => {
            setDialogLook(look)
            setDialogOpen(true)
          }}
        />
        <Editorial />
        <StoreEditorial />
        <LocationSection />
      </main>
      <Footer />

      <LookDialog
        look={dialogLook}
        open={dialogOpen}
        saved={dialogLook ? selection.ids.includes(dialogLook.id) : false}
        onToggleSave={selection.toggle}
        onClose={() => setDialogOpen(false)}
      />
      <SelectionDrawer
        open={drawerOpen}
        savedIds={selection.ids}
        onRemove={selection.remove}
        onClear={selection.clear}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  )
}
