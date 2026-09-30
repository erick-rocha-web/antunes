import type { CSSProperties } from 'react'
import { image, type AssetName } from '../data/assets'

interface ImgProps {
  name: AssetName
  alt: string
  sizes: string
  /** Imagem da primeira dobra: carrega sem lazy e com prioridade alta. */
  priority?: boolean
  /** Carrega sem lazy, mas sem disputar prioridade (camadas da cena de abertura). */
  eager?: boolean
  className?: string
  style?: CSSProperties
}

export function Img({ name, alt, sizes, priority = false, eager = false, className, style }: ImgProps) {
  const asset = image(name)
  return (
    <img
      src={asset.src}
      srcSet={asset.srcSet}
      sizes={sizes}
      width={asset.width}
      height={asset.height}
      alt={alt}
      loading={priority || eager ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      className={className}
      style={style}
    />
  )
}
