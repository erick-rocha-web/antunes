import { useEffect, useRef, type MouseEvent, type ReactNode } from 'react'

interface ModalProps {
  open: boolean
  onClose: () => void
  className: string
  labelledBy: string
  children: ReactNode
}

/**
 * <dialog> nativo: prende o foco, fecha com Escape, deixa o fundo inerte e
 * devolve o foco a quem abriu. A rolagem do fundo só trava enquanto aberto.
 */
export function Modal({ open, onClose, className, labelledBy, children }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  useEffect(() => {
    if (!open) return
    document.documentElement.classList.add('is-locked')
    return () => document.documentElement.classList.remove('is-locked')
  }, [open])

  const onBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === ref.current) onClose()
  }

  return (
    <dialog ref={ref} className={`modal ${className}`} aria-labelledby={labelledBy} onClose={onClose} onClick={onBackdrop}>
      {children}
    </dialog>
  )
}
