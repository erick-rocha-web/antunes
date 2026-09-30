# Antunes Moda Urbana · prévia conceitual

Demonstração para apresentar à loja. Não é o site oficial e não está publicada.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + build em dist/
npm test
npm run images     # regenera os WebP a partir de assets/antunes/
```

## Onde trocar conteúdo

- `src/data/brand.ts`: nome, frase, Instagram, telefone/WhatsApp, aviso de prévia.
- `src/data/looks.ts`: looks (id estável, título, foto, alt, tags, descrição).
- `src/data/locations.ts`: endereço, link de rotas, FAQ.
- `src/lib/whatsapp.ts`: único ponto que monta links e mensagens.
- `src/styles/tokens.css`: cores, fontes, medidas.

Documentação em `docs/` (direção visual, assets, pendências, validação).
