# Direção visual · “Seu estilo ocupa a rua”

Proposta criativa para a prévia. A frase não é slogan oficial da loja.

## Decisões

- **Marca na interface:** Antunes Moda Urbana (fachada e Instagram). “Ela Antunes” é o nome no Maps. A logo não foi redesenhada: o cabeçalho usa o nome em texto.
- **Paleta:** laranja `#FF5A1F` (ponto de partida, não é código oficial), grafite `#151515`, branco quente `#F3F1EB`. Texto secundário em `#5A5854` (mais escuro que `#6D6B67`, para passar AA em 14 px). Texto pequeno sobre laranja é sempre grafite (contraste ≈ 5,9:1).
- **Tipografia:** Barlow Condensed (títulos, 600–800) e Inter Variable (texto). Ambas OFL, servidas localmente via `@fontsource`.
- **Ritmo da página:** abertura clara → cena grafite → vitrine clara → editorial grafite → loja clara → localização laranja → rodapé grafite.
- **Formas:** cantos de 2 px, fios de 1 px, uma etiqueta laranja inspirada em etiqueta de roupa. Sem sombras, cápsulas ou glassmorphism.

## Cena de abertura

`src/components/HeroStory.tsx` · uma timeline GSAP com ScrollTrigger (`pin`, `scrub: 0.6`, `end: +=190%`).

| Trecho | O que acontece |
| --- | --- |
| Início | Título entra por máscara de linha; recorte do look cinza sobre o campo laranja; detalhe do jeans pequeno ao fundo |
| Primeiro | Tipografia recua (escala 0,92); recorte avança e cresce 6%; detalhe cresce |
| Intermediário | Camada grafite sobe; recorte vai para a metade esquerda; look azul abre por máscara (`clip-path`) |
| Final | Grafite sai por cima; look oliva abre pela esquerda; detalhe volta alinhado à base; azul recua; chamada para a vitrine |

- Só roda com `(min-width: 1024px) and (min-height: 560px) and (prefers-reduced-motion: no-preference)`.
- Fora disso (celular, tablet, movimento reduzido ou JS ausente) o mesmo conteúdo aparece como sequência editorial vertical, sem pin nem scrub. A classe `.hero--scene` só é adicionada pelo GSAP, então o layout estático é o padrão.
- Só `transform`, `opacity` e `clip-path`. Nenhuma deformação: escalas são uniformes.
