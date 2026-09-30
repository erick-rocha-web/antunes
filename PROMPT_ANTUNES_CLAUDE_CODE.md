# Prompt de implementação • Antunes Moda Urbana

Leia este documento inteiro, examine os arquivos do projeto e as imagens fornecidas e IMPLEMENTE a experiência. Quero código funcionando, acabamento visual e verificação no navegador. Uma resposta apenas com planejamento não conclui a tarefa.

## A missão

Você é responsável pela direção de arte, pelo desenvolvimento e pelo motion design de uma demonstração comercial para a Antunes Moda Urbana, identificada no Google Maps como Ela Antunes, no Distrito Federal.

O resultado deve transmitir a personalidade de uma marca de streetwear: fotografia de rua, roupas amplas, tipografia forte, composição editorial e movimento com propósito. Quero uma experiência que impressione na primeira visita e permita explorar os looks de verdade. A qualidade virá da composição, das fotografias e das interações completas.

Esta é uma prévia conceitual solicitada pelo desenvolvedor Erick, da Rabik, para apresentar à loja. Ainda não é o site oficial aprovado pela empresa. Não presumir que a Antunes já é cliente da Rabik. Não prometer resultados de vendas, posicionamento no Google ou integração com estoque.

Referência de experiência: https://mansao-maromba-seven.vercel.app/

Se tiver acesso a um navegador, interaja com a rolagem da referência para entender o palco visual, o elemento protagonista, as mudanças de escala e a entrada de conteúdo. Aproveite esses princípios de encenação. Crie uma composição própria para moda, sem reutilizar código, textos, imagens, identidade, produto ou símbolos da referência. A demonstração deve funcionar mesmo se a referência estiver inacessível.

## O que fazer no repositório

- Leia as instruções aplicáveis do projeto, o package.json e os componentes existentes antes de editar.
- Se já existir uma aplicação, aproveite sua estrutura. Evite migrar o framework ou reinstalar tudo para seguir uma preferência pessoal.
- Se a pasta estiver vazia, React + TypeScript + Vite é uma opção adequada. Use GSAP e ScrollTrigger para a cena principal. Não instale duas bibliotecas para resolver a mesma animação.
- Trabalhe na implementação local. Não faça push, não publique e não envie mensagens a terceiros sem uma instrução específica para isso.
- Preserve arquivos e alterações que não pertencem à tarefa. Não execute comandos destrutivos para limpar o repositório.
- O arquivo deste prompt deve ficar fora da pasta pública do site. As imagens devem entrar no fluxo de assets do framework, e não carregar caminhos do computador do usuário.
- Não pare para pedir textos, preços ou imagens que estão ausentes. Use as alternativas definidas neste documento e registre o que falta em `docs/PENDENCIAS_CLIENTE.md`.

## Identidade observada nos materiais

O nome visual presente na fachada e no Instagram é **ANTUNES MODA URBANA**. O nome do Maps é **Ela Antunes**. Adote Antunes Moda Urbana como marca na interface e deixe essa escolha registrada para confirmação.

As referências mostram laranja vivo, preto/grafite, um símbolo angular, camisetas oversized, peças jeans, bonés, tênis e acessórios. Não interprete o nome “Ela” como uma loja exclusivamente feminina. Há indicação de moda masculina e feminina, mas a maior parte das fotos recebidas retrata looks masculinos.

O Instagram informado nos materiais é https://www.instagram.com/_elaantunes/ e a bio aponta para https://linktr.ee/_elaantunes. O print mostra atividade e um público expressivo, mas contagens de seguidores e publicações são um retrato daquele momento. Não transforme esses números em contadores animados ou alegações de alcance.

O campo de website vazio no Maps, isoladamente, não prova que a empresa não tenha site. Não escreva isso na apresentação ou no site sem confirmação.

## Direção de arte: “Seu estilo ocupa a rua”

Esta frase é uma proposta criativa para a prévia, não um slogan oficial já adotado pela loja.

Imagine uma campanha de streetwear que ganhou uma vitrine interativa. Fotografia grande, recortes bem posicionados, títulos condensados, linhas finas, áreas de respiro e pequenos detalhes inspirados em etiquetas de roupa. A composição deve ter ritmo: abertura marcante, vitrine clara, editorial fotográfico e visita à loja.

### Paleta e tipografia

- Laranja de destaque: ponto de partida `#FF5A1F`; ajustar pela logo e pelas fotos reais, sem afirmar que seja o código oficial da marca.
- Grafite: `#151515`.
- Branco quente: `#F3F1EB`.
- Cinza secundário: `#6D6B67`, com contraste verificado antes de usar em texto pequeno.
- Use áreas claras em uma parte substancial da página. O resultado não deve ser um corredor preto interminável.
- Prefira texto grafite sobre o laranja para chamadas pequenas; verifique contraste antes de usar branco sobre laranja.
- Uma família de título condensada e uma família de leitura. Sugestão: Barlow Condensed nos títulos e Inter no corpo, se estiverem disponíveis com licença adequada. Hospede os arquivos localmente quando possível, preservando a licença.
- Não use fonte de grafite em parágrafos. Se a marca original tiver essa linguagem, restrinja ao próprio logo ou a um detalhe pontual.

### Escala e acabamento

- Container de conteúdo de aproximadamente 1240–1360 px, com margens de 24–40 px no desktop e 18–24 px no celular.
- Título principal grande, com composição controlada: aproximadamente 84–156 px no desktop e 48–72 px no celular, ajustados ao espaço disponível. Nenhuma palavra pode vazar da tela.
- Títulos das demais seções entre 32 e 64 px; texto corrente entre 16 e 18 px. A página inteira não deve competir com a hero.
- Botões compactos, com área de toque mínima de 44 px; cantos retos ou discretamente arredondados. Evite transformar todos os elementos em cápsulas.
- Use fios, margens e alinhamentos para organizar. Poucos elementos devem precisar de sombra ou caixa.
- Dê às fotos enquadramentos diferentes conforme a função. Não repita a mesma proporção em uma grade de seis cards idênticos.

### Evitar nesta proposta

Hero genérica com texto de um lado e imagem em um card arredondado do outro; gradiente roxo; glassmorphism; partículas aleatórias; cursor personalizado; preloader demorado; números “01, 02, 03” em todas as seções; carrossel automático; estrelas e selos inventados; botões de WhatsApp repetidos em cada bloco; frase sobre “elevar sua experiência ao próximo nível”; textos cheios de travessões; depoimentos fictícios; ícones enormes para preencher espaço.

## Assets disponíveis e como aproveitá-los

O pacote de imagens acompanha esta especificação. Use nomes sem espaços no projeto. Preserve os originais recebidos e registre as derivações.

| Arquivo no pacote | Origem enviada | Função recomendada |
| --- | --- | --- |
| `assets/antunes/fachada-maps.png` | `image(20260930-162613).png` | Fachada e referência de identidade; seção de localização |
| `assets/antunes/interior-corredor.png` | `image(20260930-162630).png` | Ambiente, araras e acessórios |
| `assets/antunes/interior-tenis.png` | `image(20260930-162650).png` | Estrutura e parede de tênis |
| `assets/antunes/interior-acessorios.png` | `image(20260930-162705).png` | Detalhes do espaço e acessórios |
| `assets/antunes/referencia-instagram.png` | `image(20260930-163206).png` | Referência de marca e dados, sem exibir como foto da vitrine |
| `assets/antunes/look-cinza-original.png` | `image(20260930-163240).png` | Look principal: camisa cinza aberta, regata branca, boné e jeans escuro |
| `assets/antunes/look-azul-original.png` | `image(20260930-163254).png` | Look de camiseta ampla azul e boné, em fotografia de rua |
| `assets/antunes/look-oliva-original.png` | `image(20260930-163309).png` | Camiseta oliva e bermuda jeans com estampa, com fundo urbano |
| `assets/antunes/editorial-camisetas.png` | `image(20260930-163325).png` | Arte editorial já contém lettering; não colocar outro título em cima |
| `assets/antunes/editorial-jorts.png` | `image(20260930-163401).png` | Arte editorial de jorts, com texto já incorporado |
| `assets/antunes/look-cinza-recorte.png` | Derivação assistida por IA do look cinza | Camada visual opcional da hero, com fundo transparente |

Inspecione as imagens de verdade antes de posicioná-las. Não escolha pela ordem do arquivo. Se os nomes originais estiverem presentes no lugar dos nomes acima, faça a correspondência pela tabela e pelo conteúdo visual.

### Regras de uso das imagens

- Priorize as fotos reais que o usuário forneceu. Não preencha a loja com modelos, roupas ou ambientes de banco de imagens apresentados como se fossem da Antunes.
- O recorte assistido por IA é um recurso de composição para a prévia. Ele pode apresentar pequenas diferenças em detalhes e estampas. Use a foto original na visualização detalhada do look e peça aprovação ou recorte fiel do original antes da publicação definitiva.
- Não gere novas marcas, estampas, rostos ou partes do corpo para completar enquadramentos. A imagem principal termina na altura das pernas: respeite o corte, não simule uma fotografia de corpo inteiro.
- Use o recorte apoiado no limite inferior do palco, sem deixar o término reto das pernas flutuando no meio do fundo.
- Se o recorte não estiver presente ou não ficar bom, use a foto original em um painel editorial bem composto. Não bloqueie a implementação por esse asset opcional.
- As fotos enviadas são relativamente pequenas. Use composições que respeitem a resolução, sem esticar uma captura de aproximadamente 600 px para preencher toda uma tela 4K.
- Capturas do Maps e do Instagram podem conter interface e créditos. Preserve atribuições; peça os arquivos originais para o acabamento definitivo. Não trate remoção de marca d’água como parte do projeto.
- Não use screenshot do perfil do Instagram como uma seção do site. O perfil serve para orientar identidade e contexto.
- Não faça hotlink de URLs temporárias do Instagram ou do Google. Sirva os arquivos locais otimizados.
- Não recorte ou redesenhe a logo por IA. Se não houver um arquivo de logo adequado, use provisoriamente o nome Antunes Moda Urbana em texto bem composto e anote a necessidade do arquivo oficial.
- Gere versões responsivas em formatos adequados, preservando transparência onde necessária. Defina largura, altura e ponto focal por imagem. Não altere o arquivo original.
- O fato de uma foto ser pública não confirma permissão para usá-la em um portfólio de terceiros. Registre a aprovação de uso como pendência antes de publicar a marca em um case da Rabik.

## Estrutura da experiência

Construa os blocos a seguir como uma narrativa contínua, com funções e composições diferentes. Não transforme cada tópico em uma seção com o mesmo card e o mesmo botão.

### Cabeçalho

Marca à esquerda. Navegação simples: **Looks**, **Seleção**, **A loja** e **Localização**. À direita, **Minha seleção**, com quantidade de referências salvas. A quantidade deriva do estado real da interface.

Use um cabeçalho discreto com aproximadamente 64–76 px. Garanta contraste sobre as imagens; uma faixa sólida ou translúcida simples é suficiente. No celular, menu compacto e acesso evidente à seleção. O menu deve fechar ao navegar e funcionar por teclado.

### Abertura e cena de rolagem

Esta é a assinatura do projeto. Não substitua por um fade-in de um banner estático.

**Composição inicial:** fundo branco quente; campo laranja com geometria simples; tipografia condensada em preto; recorte principal à direita ou atravessando parte do plano tipográfico; uma pequena fotografia editorial no plano de fundo, sem poluir. O modelo deve ser protagonista e a leitura da mensagem deve permanecer clara.

Copy inicial sugerida:

- Identificação pequena: `ANTUNES MODA URBANA · DISTRITO FEDERAL`.
- Título: `SEU ESTILO` / `OCUPA A RUA.`
- Apoio: `Looks, detalhes e referências para vestir do seu jeito.`
- Ação principal: **Explorar os looks**.
- Ação secundária discreta: **Conhecer a loja**.

Não criar um botão “Comprar agora” quando não existe checkout. A primeira ação deve conduzir ao conteúdo do próprio site.

**Storyboard no desktop:**

| Trecho da rolagem | Composição e movimento | O que permanece utilizável |
| --- | --- | --- |
| Início | Look cinza domina o quadro; título entra com deslocamento curto e máscara de linha | Navegação e acesso direto aos looks |
| Primeiro trecho | Tipografia recua discretamente; recorte muda de posição e escala; uma fotografia de detalhe ganha espaço | Sem esconder a mensagem antes que possa ser lida |
| Trecho intermediário | Look azul entra em painel fotográfico por uma máscara; fundo passa para grafite em uma camada própria | Identificação textual do look; sem movimento contínuo autônomo |
| Trecho final | Look oliva aparece junto a um detalhe de jeans; a composição se abre e conduz à vitrine clara | Link para explorar a seleção e rolagem livre para sair |

Esses trechos são especificação interna. Não mostrar percentuais, etapas numeradas ou uma barra de “carregamento” para o visitante.

Use uma única cena principal com pin no desktop. Como ponto de partida, uma distância adicional de rolagem próxima de 1,6–2,2 alturas de viewport é suficiente; ajuste ao conteúdo, sem obrigar o visitante a rolar várias telas vazias. Não aplique ao mesmo tempo uma altura manual enorme e um pin-spacing que duplique a distância.

Faça os movimentos responderem à rolagem com suavidade controlada. Deslocamentos, escala e máscaras devem criar profundidade sem torcer o corpo dos modelos. Nunca aplique deformação ao produto ou às pessoas. Sem rotação 360° inventada a partir de uma foto.

**Celular:** redesenhe a composição. Título, uma foto forte e uma ação visível. Prefira sequência editorial vertical com transições leves; não fixe o visitante em uma longa cena horizontal. Fotos e textos não podem depender de hover. A primeira dobra não deve virar só uma palavra gigante cortada.

**Movimento reduzido:** entregue a mesma história em composição estática, sem pin, parallax ou scrub. Nenhuma informação essencial pode desaparecer.

### Vitrine: “Encontre sua próxima referência”

Aqui o site começa a oferecer utilidade. Monte uma seleção de looks baseada nas fotos recebidas, com interface de explorar e salvar.

- Comece com três looks: **Sobreposição em cinza**, **Oversized em azul** e **Oliva + jeans**. São descrições editoriais das fotos, não nomes oficiais de produtos ou SKUs.
- Use filtros simples como **Todos**, **Sobreposições**, **Camisetas** e **Jeans**, apenas quando houver itens reais associados. Um look pode pertencer a mais de uma categoria. Não invente vinte produtos para preencher uma grade.
- Distribua as fotos com uma peça de maior destaque e outras composições complementares. Evite uma grade monótona, mas mantenha ordem de leitura e clique previsíveis.
- Cada item tem fotografia original, nome descritivo, ação **Ver look** e controle **Salvar referência**.
- Mostre algo curto como `Consulte modelos, tamanhos e disponibilidade com a loja.` Não exiba preços de exemplo, descontos, estoque ou tamanhos como se estivessem confirmados.
- Filtrar precisa alterar os resultados realmente. A seleção salva não deve sumir ao trocar o filtro.
- Não adicione campo de busca se existirem somente três referências; esse recurso não ajudaria.

### Detalhe do look

Ao escolher **Ver look**, abra um dialog/drawer acessível com:

- Foto original em tamanho confortável, sem ampliação que deixe o tecido irreconhecível.
- Nome descritivo do look.
- Texto curto sobre o que está visível na fotografia: sobreposição, combinação de tons, camiseta ampla, peça jeans etc. Não afirmar composição do tecido, originalidade da marca ou disponibilidade sem dados.
- Botão **Salvar referência** ou **Remover da seleção**, conforme o estado.
- Um link secundário **Consultar este look**, levando ao WhatsApp com a referência preenchida. A ação é uma consulta, não uma compra confirmada.

Feche com Escape, com botão visível e com comportamento consistente no toque. Gerencie foco ao abrir e devolva-o ao elemento que abriu o painel. Trave o fundo somente enquanto o dialog estiver aberto e restaure a rolagem ao fechar. Não deixe menus ou dialogs invisíveis receberem foco.

### Minha seleção

Esta interação é parte central da proposta comercial: o visitante reúne referências dentro do site antes de falar com a loja.

- Exibir miniaturas, nomes e ação de remover.
- Estado vazio bem resolvido com **Explorar os looks**.
- Persistir somente IDs das referências no navegador, se possível. Sem cadastro, telefone, e-mail ou dados pessoais. Tratar falha ou bloqueio de localStorage sem quebrar a página.
- Não duplicar uma referência ao clicar várias vezes.
- Mostrar claramente que a seleção reúne inspirações para consulta, sem reservar estoque nem fechar um pedido.
- Uma ação **Consultar minha seleção** monta uma mensagem com os nomes das referências escolhidas.
- Não representar esse painel como carrinho: sem subtotal fictício, frete inventado, Pix, pagamento ou botão “Finalizar compra”.

### Editorial: “O detalhe muda o look”

Uma composição visual mais livre com os materiais de camisetas e jorts. Preserve os textos incorporados nas próprias artes e não prometa que sejam lançamentos da semana atual.

Use assimetria, espaço negativo e recortes de enquadramento que não removam créditos. Se a captura tiver interface demais ou baixa qualidade, limite a uma peça editorial menor; prefira qualidade a usar todas as imagens.

Essa seção pode revelar imagens com deslocamento de até aproximadamente 24 px e mudança discreta de escala. Não precisa de outro pin.

### A loja: “Da tela para o Riacho Fundo”

Use fachada e interiores para conectar o estilo à loja física. Uma foto ampla e duas fotos menores podem funcionar melhor que três cards com ícones.

Texto base seguro: `Conheça a Antunes no Riacho Fundo e veja as peças de perto. A loja atende com compras presenciais, retirada e entrega. Consulte a equipe para combinar a melhor opção.`

Não inventar história de fundação, anos de mercado, missão institucional, fabricação própria, número de clientes ou depoimento do dono. Não transformar o resumo automático do Google em uma fala real de um cliente.

Se houver uma galeria ampliável, garantir navegação por teclado, fechamento visível e descrições úteis. Os dados de avaliação podem ficar fora da primeira versão; o visual e as fotos já sustentam a apresentação. Se forem utilizados, mostrar exatamente o retrato fornecido, `4,8 em 156 avaliações no Google`, com registro da origem e atualização pendente.

### Localização e informações práticas

Endereço confirmado pelo material enviado:

**Riacho Fundo CLS 04, Bloco B, Lote 03, Lojas 02/04, Riacho Fundo, Brasília - DF, CEP 71820-512.**

Apresentar endereço legível, botão **Como chegar**, Instagram e contato. O link de rotas deve apontar para uma busca com nome e endereço completos, com a query codificada. Conferir o destino quando houver navegador disponível. Não inventar um place ID.

Não carregar um iframe pesado de mapa automaticamente. Uma seção bem composta com endereço e link externo atende à prévia.

O print do Instagram também menciona Ceilândia. Como não temos endereço e contato dessa unidade, não criar um cartão completo fictício. No máximo, registrar essa segunda unidade como pendência interna. Priorize a unidade de Riacho Fundo na demonstração.

O print do Maps mostra fechamento às 19h30 no dia consultado, mas não fornece a grade semanal. Não exibir uma tabela inventada de horários nem um indicador dinâmico “aberto agora”.

### Dúvidas e rodapé

Se um FAQ ajudar a composição, mantenha três perguntas objetivas:

- **Posso comprar pela página?** `Nesta apresentação você explora os looks e consulta a loja para confirmar as peças e combinar a compra.`
- **Tem retirada e entrega?** `A loja informa retirada e entrega. Consulte a equipe para confirmar área atendida, prazo e condições.`
- **Como confirmar um tamanho ou uma peça?** `Salve as referências que gostou e envie sua seleção à loja. A equipe confirma modelos, tamanhos e disponibilidade.`

O rodapé fecha a identidade com marca, Instagram, localização e contato. Na prévia, incluir discretamente `Prévia conceitual para apresentação. Conteúdo sujeito à aprovação da loja.` Evite espalhar avisos de desenvolvimento por todas as seções.

Não adicionar texto da Rabik fingindo que a Antunes endossou o projeto. Crédito de criação e publicação como case dependem de aprovação.

## Contatos e mensagens: implementar corretamente

Telefone informado no Maps pelo usuário: **(61) 99329-9875**.

Número para construir o link: **5561993299875**.

Esse número foi transcrito dos materiais; não houve confirmação independente de que a conta está ativa no WhatsApp. Registre essa checagem como pendência de publicação. Nunca diga que testou uma conversa se só montou o URL.

Base: `https://wa.me/5561993299875`.

Centralize a criação do link e use `encodeURIComponent` na mensagem. Não adicionar espaços, sinal de mais ou pontuação ao número. Não codificar a mensagem duas vezes.

Exemplos de texto, sem envio automático:

**Contato geral:**
`Olá! Vi a apresentação da Antunes e gostaria de saber mais sobre as peças.`

**Consulta de look:**
`Olá! Vi o look “Sobreposição em cinza” na apresentação da Antunes. Vocês podem me informar as peças, os tamanhos disponíveis e os valores?`

**Seleção:**
`Olá! Gostei destas referências na apresentação da Antunes:\n• Sobreposição em cinza\n• Oliva + jeans\nVocês podem me informar os modelos disponíveis, tamanhos e valores?`

Um clique deve abrir o link real com a mensagem preenchida. Não implementar um botão que apenas manda copiar texto. O usuário decide se envia a mensagem. Os CTAs da loja usam o contato da Antunes, nunca o WhatsApp ou o Pix da Rabik.

## Modelo de dados e limites de escopo

Centralize dados em arquivos pequenos, tipados e fáceis de editar. Uma estrutura possível:

```text
src/
  data/brand.ts
  data/looks.ts
  data/locations.ts
  data/assets.ts
  components/HeroStory.*
  components/LookCollection.*
  components/LookDialog.*
  components/SelectionDrawer.*
  components/StoreEditorial.*
  lib/whatsapp.ts
  styles/tokens.css
docs/
  DIRECAO_VISUAL.md
  ASSETS.md
  PENDENCIAS_CLIENTE.md
  VALIDACAO.md
```

Adapte os nomes à estrutura real do framework. Não criar uma arquitetura enorme para uma demonstração.

Cada look precisa de ID estável, título descritivo, imagem original, alt, tags, descrição e origem do asset. Identifique internamente que é uma referência visual, sem preço e sem disponibilidade confirmados. A ausência desses dados precisa funcionar por desenho, sem exibir `undefined`, `R$ 0,00`, `null` ou cartões vazios.

Separe conteúdo, tema e interação para que seja possível reutilizar a estrutura em outro projeto. Isso não autoriza reutilizar a identidade, as fotos ou os depoimentos da Antunes para representar outra loja.

Nesta fase: sem login, banco de dados, painel administrativo, checkout, integração de pagamento, sincronização de Instagram ou inventário. Não instalar infraestrutura para funcionalidades que não foram solicitadas. Uma versão com gestão de catálogo e venda online terá escopo e orçamento próprios.

## Engenharia do movimento

Use a documentação atual da biblioteca, principalmente:

- https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/

Centralize a animação principal em uma timeline. Faça a configuração variar por breakpoint e pela preferência de movimento do sistema. Limpe contextos, listeners e instâncias ao desmontar componentes ou trocar de layout.

No React, use integração apropriada com o ciclo de vida para não duplicar timelines. Em SSR, não acessar `window` ou `document` na avaliação do módulo. Não animar um elemento por CSS e GSAP simultaneamente na mesma propriedade.

Prefira `transform` e `opacity`. Máscaras podem entrar em poucos painéis, com fallback quando forem pesadas. Não animar layout inteiro, dezenas de filtros blur ou sombras enormes a cada frame. Evite `will-change` permanente em toda a página.

Mantenha a rolagem nativa. Não acrescentar uma segunda biblioteca de smooth scroll por padrão. Não interceptar wheel/touch para segurar o visitante na apresentação.

Atualize as medidas depois de imagens e fontes relevantes estarem prontas, sem criar um ciclo de refresh a cada renderização. Preserve a posição ao abrir e fechar a seleção. Tenha cuidado com ancestors transformados interferindo no pin.

Entradas secundárias devem ser curtas: aproximadamente 160–320 ms em microinterações e até 500–700 ms em revelações fotográficas. Movimento contínuo automático é desnecessário. Qualquer faixa animada por mais de alguns segundos precisa poder parar, ou deve ficar estática.

O site deve continuar legível se o JavaScript de animação falhar. Conteúdo essencial não pode começar permanentemente com `opacity: 0` esperando uma biblioteca.

## Celular, acessibilidade e desempenho

- Testar pelo menos 390×844, 768×1024 e 1440×900. Conferir também ausência de overflow em 360 px.
- Não reduzir o desktop proporcionalmente. Reorganize imagem, título e controles para o celular.
- Considerar safe areas, barra do navegador e teclado virtual. Uma barra fixa não pode cobrir links ou o final do conteúdo.
- Não usar autoplay com som, efeitos de flash, rolagem horizontal global ou informação acessível apenas por hover.
- Usar HTML semântico, um H1, títulos em ordem coerente, links para navegação e botões para ações.
- Controles de filtros com nome acessível e estado selecionado. Favoritos com estado perceptível por leitor de tela. Atualizações de quantidade sem anúncios repetitivos.
- Estado de foco visível, contraste adequado, fechamento e retorno de foco nos dialogs. Dar nome acessível aos botões de ícone.
- Descrições das fotos devem explicar o conteúdo útil sem inventar identidade das pessoas.
- Imagem principal com dimensões reservadas e prioridade apropriada; imagens inferiores carregadas sob demanda. Não lazy-load da imagem que determina a primeira dobra.
- Usar `srcset`/`sizes` ou o mecanismo do framework. Não carregar todas as fotos em PNG original no primeiro acesso.
- Não incluir vídeo, WebGL, Three.js, sequências de centenas de frames ou bibliotecas de partículas para este efeito. As fotos e o recorte fornecidos são suficientes.
- Metas de qualidade: LCP próximo de até 2,5 s e CLS até 0,1 em condições adequadas de teste. Tratar como metas e medir quando possível; não declarar aprovação sem evidência.
- Sem analytics, rastreadores e formulário de dados pessoais por padrão. Sem banner de cookies decorativo quando não existe uso que o justifique.

## Prévia e publicação futura

A prévia deve receber `noindex` e não anunciar um domínio definitivo inexistente. Não criar dados estruturados com preço, estoque, avaliação de produto ou propriedade da marca que não foram aprovados.

`noindex` não torna um site privado. Se for necessário restringir acesso à demonstração, isso exige controle de acesso real. Não use essa palavra como sinônimo de privacidade.

Não publicar automaticamente. Deixar documentados: aprovação das imagens, identidade, contato, dados da unidade, domínio e hospedagem adequada ao uso comercial. Não prometer plano gratuito de hospedagem sem verificar as condições do provedor escolhido.

## Como executar e validar

1. Faça um inventário curto da aplicação e dos assets. Registre as decisões visuais essenciais em um documento enxuto. Avance para a implementação na mesma tarefa.
2. Resolva primeiro a composição estática da abertura, da vitrine e do celular. A qualidade não pode depender de uma animação esconder um layout fraco.
3. Implemente o fluxo completo: explorar → ver look → salvar → abrir seleção → remover → consultar pelo link preenchido.
4. Acrescente a cena de rolagem e as transições, preservando as versões estática e reduzida.
5. Abra a aplicação em um navegador, quando a ferramenta estiver disponível, e confira o resultado visual nos tamanhos definidos. Corrija problemas de corte, contraste, sobreposição e espaços excessivos antes de concluir.
6. Execute build, checagem de tipos e verificações relevantes disponíveis no projeto. Acrescente testes focados apenas onde protegem comportamento real, como composição da mensagem, persistência e seleção sem duplicações. Não criar dezenas de testes que só repetem constantes.

Verificações funcionais obrigatórias:

- Links da navegação levam ao trecho correto, inclusive saindo da cena fixada.
- Filtros funcionam e não apagam favoritos.
- Abrir e fechar dialog funciona com toque, teclado e Escape.
- Salvar, remover e esvaziar a seleção funciona sem duplicações.
- Recarregar mantém a seleção quando o armazenamento está disponível; a interface funciona mesmo se ele falhar.
- O link de consulta usa o número correto e a mensagem contém somente as referências realmente selecionadas.
- Testar links não significa enviar mensagens. Não enviar nada ao WhatsApp da loja.
- Sem erros de console, imagens quebradas ou botões que não fazem nada.
- Preferência de movimento reduzido preserva todos os conteúdos.
- A página não fica vazia se a animação não inicializar.

Ao revisar a direção de arte, pergunte:

- A primeira tela parece uma campanha dessa marca ou um template de agência recolorido?
- O laranja vem da identidade da Antunes e as fotos têm protagonismo?
- Há diferença clara entre hero, vitrine, editorial e loja física?
- O visitante consegue fazer algo útil dentro do site antes de chegar ao WhatsApp?
- O celular recebeu uma composição própria?
- Existem controles demais, fontes gigantes em todas as seções ou decoração competindo com os looks?

Se o resultado ainda for genérico, refaça a composição que falhou. Apenas mudar a cor ou adicionar mais animações não resolve.

## Entrega final esperada

Entregue a implementação funcional, o comando para rodar, os arquivos de dados para trocar conteúdo e uma relação objetiva do que foi validado. Inclua capturas do resultado no desktop e no celular se conseguir produzi-las. Se alguma verificação não foi possível, diga qual, sem inventar resultados.

Em `docs/PENDENCIAS_CLIENTE.md`, registrar somente pendências concretas:

- Aprovação da identidade Antunes Moda Urbana e do slogan proposto.
- Logo oficial e arquivos originais das fotografias, com aprovação de uso.
- Revisão do recorte assistido por IA ou substituição por recorte fiel aprovado.
- Confirmação do WhatsApp, endereço e horários completos de Riacho Fundo.
- Dados de Ceilândia, se essa unidade entrar no site.
- Lista real de peças, tamanhos, valores e disponibilidade, caso queiram evoluir para catálogo comercial.
- Condições de entrega, retirada, pagamento e troca antes de exibi-las em detalhe.
- Necessidade real de painel, estoque ou checkout, tratada como uma etapa separada.

Priorize uma cena principal muito bem feita e um fluxo útil, com acabamento consistente no restante. Quero um projeto que a loja consiga avaliar com clareza e que demonstre a capacidade da Rabik em design e desenvolvimento, sem fingir que serviços, dados ou integrações já existem.
