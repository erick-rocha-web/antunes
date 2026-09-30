// Gera versões responsivas em WebP a partir dos originais em assets/antunes/.
// Os originais nunca são alterados. Saída: src/assets/img/ + manifest.json.
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const sourceDir = path.join(root, 'assets', 'antunes')
const outDir = path.join(root, 'src', 'assets', 'img')

// Larguras-alvo por imagem. A largura original sempre entra como maior variante.
// referencia-instagram.png fica de fora: é referência interna, não vai ao site.
const targets = {
  'look-cinza-recorte': [420, 720],
  'look-cinza-original': [360],
  'look-azul-original': [360],
  'look-oliva-original': [360],
  'editorial-camisetas': [360],
  'editorial-jorts': [360],
  'fachada-maps': [420],
  'interior-corredor': [360],
  'interior-tenis': [360],
  'interior-acessorios': [360],
}

await mkdir(outDir, { recursive: true })
const manifest = {}

for (const [name, widths] of Object.entries(targets)) {
  const input = path.join(sourceDir, `${name}.png`)
  const meta = await sharp(input).metadata()
  const all = [...widths.filter((w) => w < meta.width), meta.width]
  for (const width of all) {
    await sharp(input)
      .resize({ width })
      .webp({ quality: 82, alphaQuality: 90 })
      .toFile(path.join(outDir, `${name}-${width}.webp`))
  }
  manifest[name] = { width: meta.width, height: meta.height, variants: all }
  console.log(`${name}: ${all.join(', ')}`)
}

await writeFile(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n')
