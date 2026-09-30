# Validação · 30/09/2026

Ambiente: Chrome (extensão Claude in Chrome), Vite dev server, Windows 11.

## Automático

- `npm run typecheck`: sem erros.
- `npm test`: 7 testes (seleção sem duplicar, leitura tolerante do armazenamento, links do WhatsApp com número limpo e codificação única, mensagem só com os itens selecionados).
- `npm run build`: ok. JS 121 kB gzip (React + GSAP), CSS 5,7 kB gzip.

## No navegador

| Verificação | Resultado |
| --- | --- |
| Cena fixada em 1536×686 e 1024×660 (início, meio, fim) | ok, ajustados o detalhe final e a posição do recorte por largura |
| Layout estático desktop (altura < 560 px, mesmo caminho do movimento reduzido) | ok, todo o conteúdo visível |
| 768×664, 390×664, 360×664 | ok, sem overflow horizontal (`scrollWidth` = largura útil) |
| Links do cabeçalho saindo do meio da cena | ok, as 4 seções param a 68 px (altura do cabeçalho) |
| Filtros: Sobreposições 1, Camisetas 2, Jeans 2; favoritos mantidos ao trocar | ok |
| Salvar duas vezes o mesmo look | alterna, não duplica |
| Detalhe do look: abre, foco no botão fechar, Escape fecha, foco volta ao cartão, fundo travado só com o painel aberto | ok |
| Minha seleção: remover, esvaziar, estado vazio com “Explorar os looks” | ok |
| Recarregar mantém a seleção | ok |
| `localStorage.setItem` bloqueado | interface segue funcionando, contador atualiza |
| URL de consulta | `https://wa.me/556193780960?text=…` com os nomes selecionados. Nenhuma mensagem enviada |
| Imagens quebradas / erros de console | nenhum |

## Não verificado

- Emulação real de `prefers-reduced-motion` (o caminho estático foi conferido forçando a altura < 560 px, que usa o mesmo CSS).
- Aparelhos físicos iOS/Android, teclado virtual e safe areas reais.
- LCP e CLS medidos com Lighthouse. Nenhuma meta é declarada como atingida.
- Destino do link “Como chegar” no Google Maps (a busca usa nome e endereço completos, codificados).
- Com a aba em segundo plano, a entrada do título ficou parada no meio. Foi acrescentada uma garantia: em 1,5 s o título é finalizado de qualquer forma.
- As animações foram conferidas com a aba em segundo plano, onde o navegador desacelera o `requestAnimationFrame`. A fluidez precisa ser vista numa aba em primeiro plano.
