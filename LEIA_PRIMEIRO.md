# Antunes • pacote para Claude Code

Este pacote contém o prompt de implementação, dez imagens fornecidas pelo Erick e um recorte derivado da foto principal. Não contém um site já desenvolvido.

## Como usar

1. Extraia a pasta `ANTUNES_PACOTE_CLAUDE` dentro da raiz do projeto que o Claude vai trabalhar. Ela pode manter esse nome.
2. Diga ao Claude para ler `ANTUNES_PACOTE_CLAUDE/PROMPT_ANTUNES_CLAUDE_CODE.md` e examinar `ANTUNES_PACOTE_CLAUDE/assets/antunes/`.
3. Ele deve incorporar as imagens ao fluxo correto de assets do projeto. O prompt não deve ser copiado para uma pasta pública servida pelo site.
4. Peça a implementação completa, a revisão no navegador e a correção de problemas antes de apresentar a prévia à loja.

Mensagem para iniciar:

> Leia o arquivo ANTUNES_PACOTE_CLAUDE/PROMPT_ANTUNES_CLAUDE_CODE.md inteiro, examine as imagens em ANTUNES_PACOTE_CLAUDE/assets/antunes/ e implemente a proposta no projeto. Priorize a composição editorial, a cena de rolagem e o fluxo de salvar e consultar looks. Não pare no planejamento. Preserve a estrutura existente, teste no desktop e no celular e não publique automaticamente.

## Sobre as imagens

As dez capturas foram copiadas sem alteração. Fotos de fachada/interior contêm elementos do Google Maps; algumas artes contêm texto e interface do Instagram. Peça os arquivos originais e aprovação de uso antes da versão definitiva.

`look-cinza-recorte.png` foi criado por edição assistida por IA e possui transparência real. Serve como camada de composição para a prévia. Não é um recorte pixel a pixel garantido: detalhes das estampas e do vestuário podem diferir. A fotografia original deve ser usada na visualização detalhada e como referência para aprovação.

Não é necessário gerar vídeo para a proposta descrita. A animação usa fotografias em camadas, máscaras e transformação de posição/escala. Se o recorte não ficar convincente, o prompt prevê composição alternativa com a fotografia original.

## Origem e conferência

- Dados comerciais: informações e capturas fornecidas pelo usuário nesta conversa.
- Identidade visual: fachada e print do Instagram fornecidos.
- Referência de movimento: https://mansao-maromba-seven.vercel.app/ (inspeção visual de estados durante a rolagem).
- Documentação técnica consultada: https://gsap.com/docs/v3/Plugins/ScrollTrigger/ e https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/.
- Não foi confirmada a ausência de site próprio nem a disponibilidade da conta WhatsApp. Número transcrito do material: (61) 99329-9875.
- Não foram enviados contatos, nem publicado um site nesta tarefa.

## Arquivos

| Arquivo | Dimensões | Proveniência |
| --- | --- | --- |
| `fachada-maps.png` | 801 × 913 | Captura fornecida pelo usuário, sem edição |
| `interior-corredor.png` | 697 × 824 | Captura fornecida pelo usuário, sem edição |
| `interior-tenis.png` | 692 × 839 | Captura fornecida pelo usuário, sem edição |
| `interior-acessorios.png` | 717 × 838 | Captura fornecida pelo usuário, sem edição |
| `referencia-instagram.png` | 924 × 640 | Captura fornecida pelo usuário, sem edição |
| `look-cinza-original.png` | 611 × 803 | Captura fornecida pelo usuário, sem edição |
| `look-azul-original.png` | 624 × 843 | Captura fornecida pelo usuário, sem edição |
| `look-oliva-original.png` | 615 × 817 | Captura fornecida pelo usuário, sem edição |
| `editorial-camisetas.png` | 647 × 834 | Captura fornecida pelo usuário, sem edição |
| `editorial-jorts.png` | 653 × 837 | Captura fornecida pelo usuário, sem edição |
| `look-cinza-recorte.png` | 1094 × 1438 | Derivação assistida por IA, com transparência; conferir detalhes antes de uso definitivo |
