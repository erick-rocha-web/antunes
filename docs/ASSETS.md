# Assets

Originais recebidos ficam intactos em `assets/antunes/` (fora da pasta servida).
`npm run images` gera WebP responsivos em `src/assets/img/` com `manifest.json` (largura, altura, variantes). O Vite empacota só o que o código referencia.

| Original | Uso no site | Variantes | Observação |
| --- | --- | --- | --- |
| `look-cinza-recorte.png` | Recorte da abertura | 420, 720, 1094 | Derivação por IA com transparência. Só como camada de composição |
| `look-cinza-original.png` | Vitrine (destaque), detalhe do look, seleção | 360, 611 | Foto original usada no detalhe, como pede a regra do recorte |
| `look-azul-original.png` | Cena (painel), vitrine | 360, 624 | |
| `look-oliva-original.png` | Cena (painel + recorte de detalhe do jeans por enquadramento CSS), vitrine | 360, 615 | O “detalhe” é a mesma foto enquadrada, sem edição do arquivo |
| `editorial-camisetas.png` | Editorial | 360, 647 | Lettering da arte preservado, sem título por cima. Contém seta do carrossel do Instagram |
| `editorial-jorts.png` | Editorial | 360, 653 | Idem |
| `interior-tenis.png` | A loja (foto ampla, recorte 4:3) | 360, 692 | Captura do Maps |
| `fachada-maps.png` | A loja | 420, 801 | Exibida inteira para manter o crédito “Google Maps” |
| `interior-acessorios.png` | A loja (detalhe 3:4) | 360, 717 | Captura do Maps |
| `interior-corredor.png` | Não usado | 360, 697 | Gerado para uma futura galeria |
| `referencia-instagram.png` | Não usado no site | — | Só referência de identidade |

Nenhuma imagem de banco, nenhum hotlink de Instagram ou Google. As fotos são pequenas (≈ 600–800 px), então nenhum bloco as amplia muito além da largura original.
