import manifest from '../assets/img/manifest.json'

// Arquivos gerados por `npm run images` a partir de assets/antunes/.
const urls = import.meta.glob<string>('../assets/img/*.webp', {
  eager: true,
  import: 'default',
  query: '?url',
})

export type AssetName = keyof typeof manifest

export interface ImageAsset {
  src: string
  srcSet: string
  width: number
  height: number
}

export function image(name: AssetName): ImageAsset {
  const { width, height, variants } = manifest[name]
  const url = (w: number) => urls[`../assets/img/${name}-${w}.webp`]
  return {
    src: url(width),
    srcSet: variants.map((w) => `${url(w)} ${w}w`).join(', '),
    width,
    height,
  }
}
