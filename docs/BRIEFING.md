# Registro da LP — o que a ficha decidiu e o que a execução fez

> Preenchido pelo agente **durante a execução**, a partir de `docs/FICHA-LP.md`. Não é um registro de entrevista: a entrevista aconteceu no chat web (`docs/PROMPT-FICHA-LP.md`) e a ficha é a fonte. Este arquivo existe para que, meses depois e sem a conversa, se saiba de onde veio cada coisa — e porque `docs/briefing-cliente/` fica fora do git.
>
> **Desvio desta execução:** não houve entrevista no chat. A ficha foi montada no editor a partir do briefing organizado, por pedido explícito de uma primeira versão publicada na Vercel. O que foi inferido está marcado e precisa de validação com o cliente.

## Origem

| Campo                     | Valor                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------- |
| Ficha de execução         | `docs/FICHA-LP.md`                                                                    |
| Data da ficha             | 2026-10-21                                                                            |
| Versão do padrão na ficha | 2.8.0                                                                                 |
| Validada em               | 21/10/2026 por `npm run ficha`                                                        |
| Material bruto do cliente | `docs/briefing-cliente/briefing_falanga_pneumatica_servicos.md` (fora do git)         |
| Briefing de campanha      | sim, parcial — `[PES] Serviços CE`, `[PES] Serviços PE` e `[PMAX] Falanga Pneumática` |
| Fora desta execução       | —                                                                                     |

## Campanha

| Campo                      | Valor                                                                                                              |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Palavra-chave principal    | `manutenção de compressores` — no H1 e no title                                                                    |
| Origem                     | lista informada                                                                                                    |
| Área atendida              | Ceará e Pernambuco, com atendimento em todo o Nordeste — no H1 (Fortaleza e Recife), nas provas do hero e num selo |
| Negativas de oferta        | nenhuma informada                                                                                                  |
| Claims proibidos           | `autorizada`, `autorizado` — a condição de autorizada não foi comprovada no material                               |
| Divergência de vocabulário | reconstrução (cliente) × reforma (campanha): o card usa "Reconstrução" com o chip "Reforma"                        |

### Famílias de palavra-chave

| Família             | Termos                                                                      | Bloco que responde                   | Status     |
| ------------------- | --------------------------------------------------------------------------- | ------------------------------------ | ---------- |
| manutenção          | manutenção de compressores; reforma de compressor; conserto de compressores | `linhas`, `processo`                 | coberta    |
| preventiva          | manutenção preventiva compressor                                            | `linhas`                             | coberta    |
| assistência         | assistencia tecnica compressores                                            | `linhas`, `processo`, `diferenciais` | coberta    |
| compressor parafuso | serviço em compressor parafuso                                              | `linhas`, `aplicacoes`               | coberta    |
| marca Atlas Copco   | manutenção atlas copco                                                      | `linhas` (texto)                     | coberta    |
| localização         | manutenção de compressor Fortaleza / Recife                                 | hero, selo, `diferenciais`           | coberta    |
| marca Schulz        | autorizada schulz; assistencia compressor schulz; reparo compressor schulz  | —                                    | **lacuna** |
| rede de ar          | rede de ar comprimido; projeto, tubulação e instalação de rede              | —                                    | **lacuna** |

### Comitê de compra

| Papel      | Argumento de compra                         | Bloco que responde                 | Status   |
| ---------- | ------------------------------------------- | ---------------------------------- | -------- |
| Manutenção | o compressor volta a operar rápido          | `linhas`, `processo`, `aplicacoes` | inferido |
| Engenharia | diagnóstico técnico e peças originais       | `processo`, `diferenciais`         | inferido |
| Compras    | contrato de manutenção e cobertura regional | `linhas`, `diferenciais`           | inferido |

### Conteúdo futuro

Nenhum grupo pausado informado.

## Composição

Derivada em: 21/10/2026 · comando aplicado: `npm run compose -- linhas processo aplicacoes diferenciais`

### Seções que entraram

| Fase       | Seção          | Fundo     | Respiro         | Veredicto na ficha | Famílias que responde                                      |
| ---------- | -------------- | --------- | --------------- | ------------------ | ---------------------------------------------------------- |
| oferta     | `linhas`       | branco    | `open`          | completo           | manutenção, preventiva, assistência, parafuso, Atlas Copco |
| apoio      | `processo`     | branco    | `panel-lead`    | completo (navy)    | manutenção, assistência                                    |
| prova      | `aplicacoes`   | cinza-100 | `centered-lead` | completo           | parafuso                                                   |
| autoridade | `diferenciais` | cinza-100 | `overlap`       | completo (navy)    | assistência, localização                                   |

### Blocos que ficaram fora

| Bloco            | Veredicto     | O que falta para entrar                                           |
| ---------------- | ------------- | ----------------------------------------------------------------- |
| `vitrine`        | insuficiente  | 4 frentes de serviço com 3 características: "linhas" vende melhor |
| `especificacoes` | não se aplica | serviço não se distingue por modelo, medida ou faixa técnica      |
| `identificar`    | não se aplica | cotação por código, medida, referência ou foto não confirmada     |
| `situacoes`      | insuficiente  | situações de compra reativa não descritas                         |
| `segmentos`      | insuficiente  | nenhum setor industrial, processo ou foto de segmento             |
| `clientes`       | insuficiente  | 4 a 8 logos autorizadas e 3 números com fonte identificável       |
| `perguntas`      | insuficiente  | lista de dúvidas reais do comercial                               |
| `escopo`         | não se aplica | não é consolidação de compras                                     |

## Entradas do núcleo

| #   | Entrada                 | Valor                                                                             | Origem                                          |
| --- | ----------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------- |
| 1   | MARCA                   | Falanga Pneumática                                                                | briefing                                        |
| 2   | MARCA_CURTA             | Falanga                                                                           | briefing (inferido)                             |
| 3   | PRODUTO_PRINCIPAL       | Manutenção de compressores                                                        | briefing (inferido)                             |
| 4   | CONTEXTO_DE_USO         | ar comprimido industrial                                                          | **inferido**                                    |
| 5   | PUBLICO                 | Manutenção, Engenharia, Compras                                                   | **inferido** — ausente no material              |
| 6   | HERO                    | compressores multimarcas · atendimento em todo o Nordeste · assistência 24 h      | briefing                                        |
| 7   | MARCAS_ATENDIDAS        | 18 marcas, só por extenso (sem logo)                                              | logos de terceiros: decisão do cliente pendente |
| 8   | SELOS_DE_CONFIANCA      | Atendimento em todo o Nordeste · Assistência técnica 24 horas · Peças originais   | briefing                                        |
| 9   | ENDERECO                | R. Mirian Rocha, 97 - Fortaleza - CE · Rua Tomaz Gonzaga, 74 - Zumbi, Recife - PE | briefing (sem CEP)                              |
| 10  | URL_FINAL + PRIVACIDADE | `https://lp-manuten-o-falanga.vercel.app` · sem política                          | **provisório** — URL final não informada        |
| 11  | SHORTCODES              | padrão do plugin                                                                  | default                                         |
| 12  | WHATSAPP                | vazio — sem botão flutuante                                                       | decisão do usuário (21/10/2026)                 |
| 13  | STACK + PUBLICACAO      | Astro · `main` → `wp-build` · prévia na Vercel                                    | default do padrão + Vercel                      |
| 14  | TOKENS_DE_COR + FONTE   | visual padrão da agência                                                          | default                                         |
| 15  | CAMPANHA                | `manutenção de compressores`                                                      | briefing                                        |

## Assets

| Asset          | Arquivo esperado        | Especificação                                                                                        | Status                                                         |
| -------------- | ----------------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Logo           | `src/assets/LOGO.png`   | logo oficial com o selo de 40 anos, 341×82, fundo transparente — baixada de falangapneumatica.com.br | entregue (baixa resolução: pedir vetor ou PNG 2×)              |
| Banner do hero | `src/assets/heroBg.png` | 1981×900, recortado do segundo mockup do cliente (21/10/2026) e estendido à direita                  | **provisório** — pedir o arquivo original do banner, sem texto |

| Asset                        | Arquivo esperado                                     | Especificação                                                    | Status                                                 |
| ---------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------ |
| Fotos da galeria de serviços | `src/assets/linhas/galeria-1.png` e `galeria-2.webp` | fotos do site do cliente, 450×451 e 680×682                      | entregue (baixa resolução: pedir originais)            |
| 4 fotos de aplicação         | `src/assets/aplicacoes/aplicacao-1.png` … `-4.png`   | 1: site do cliente (450×451); 2–4: recortadas do mockup (~340px) | entregue — **provisório**, pedir originais em 1200×900 |
| Cenário dos diferenciais     | `src/assets/diferenciais/cenario.jpg`                | 1600×900, sangra à direita do bloco navy                         | pendente                                               |
| Técnico recortado            | `src/assets/diferenciais/pessoa.png`                 | 1220×1000, corpo inteiro, fundo transparente                     | pendente                                               |

Imagens citadas no material e ainda não validadas para uso: `Design-sem-nome-46.png` (assistência técnica), `Design-sem-nome-30.png.webp` (contratos), `big-image.png`, `big-image-1.png`, `Falanga-Peneumatica-Locacao-de-Compressores.jpg-1.webp`.

## Conflitos com o padrão

| O que o material pedia | Regra do padrão | O que entrou no lugar |
| ---------------------- | --------------- | --------------------- |
| —                      | —               | —                     |

## Dados não aplicados

- E-mail `falanga@falangaservice.com.br` — e-mail não entra na LP.
- Imagem de locação de compressores — oferta de locação não confirmada para esta LP.
- Auditoria em ar comprimido — serviço sem descrição nem foto; guardado como excedente de `linhas`.
- Texto institucional longo sobre a importância do ar comprimido — já alimenta autoridade e diferenciais.

## Desvios e ajustes da execução

- **Ficha sem entrevista no chat.** Montada a partir do briefing organizado. Inferidos: a sequência de `processo`, as 4 `aplicacoes`, o público e o contexto de uso. Validar com o cliente e regerar a ficha se mudar.
- **`linhas` em vez da vitrine.** O briefing marcava "linhas" como não aplicável, mas o manifesto prevê o uso em LP de serviço (card escuro para o contrato) e o material sustenta 4 serviços com 3 características cada.
- **`cta.secondary`** preenchido como "Identifique seu compressor" (o padrão é "Identifique seu {{produto}}").
- **`src/data/sections/processo.ts`** com o tipo anotado em vez de `as const satisfies`: sem `when` em nenhuma etapa, o tipo literal não tem a propriedade e `ProcessSteps.astro` não tipa. Defeito da biblioteca a corrigir no starter.
- **`.prettierignore`** recebeu `ficha.json` (gerado) e `docs/PROMPT-FICHA-LP.md` (vem do starter): sem isso o `format:check` falha em toda LP v2.8.0.
- **`lp.manifest.json` → `library`** apontado para `../Projetos B2/LP-STARTER-B2/sections`, onde o starter está nesta máquina.

## Desvios do padrão — abertura (21/10/2026)

Header e Hero refeitos conforme os mockups que o cliente enviou em 21/10/2026. O segundo mockup substituiu o primeiro no hero. O caminho é o mesmo da LP Spinplus Manutenção (19/10/2026).

| O que o mockup pedia                                                            | Como entrou                                                                                        | Regra do padrão afetada                                                           |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Header branco com a logo dentro da barra                                        | barra branca, logo alinhada, sem a placa pendurada                                                 | 4.1.1 — assinatura A8 do `check-lp.mjs` repinada                                  |
| Menu A empresa · Serviços · Produtos · Contato                                  | **não entrou**; no lugar, a tagline em navy                                                        | regra 1 — uma rota, uma página, sem menu                                          |
| CTA "Fale com um especialista →" em pílula amarela                              | igual no desktop; "Cotação" no mobile                                                              | vocabulário de CTA (item 8) e botão de cantos retos                               |
| Amarelo da Falanga                                                              | token `brand-yellow` (#FDE001) só na abertura, sempre com texto navy                               | item 2 — o resto da página segue laranja e navy                                   |
| Manchete "Mais eficiência. Menos paradas na sua indústria." sem a palavra-chave | a linha de abertura "Manutenção de compressores" é o `<h1>`; a manchete é um parágrafo em destaque | regra 17 — a palavra-chave continua no H1 e no title, e visível na primeira dobra |
| Foto do técnico no compressor logo depois do texto                              | foto do fim da coluna 1 até a borda da tela, com a borda esquerda esmaecida                        | 4.1.2 — assinatura A8 repinada; grid e coluna de 300px mantidos                   |
| Sem chat no hero                                                                | chat **mantido** num card branco na margem direita, como na Spinplus                               | regra 4 — dois slots de shortcode                                                 |
| 4 pontos em grade 2×2                                                           | preventiva, corretiva, contratos e auditoria, com ícone amarelo                                    | entrada 6 — 3 pontos; `scripts/ficha.mjs` aceita 4 nesta LP                       |
| Um único CTA, sem botão secundário                                              | só "Solicite sua cotação →"; `hero-secondary` deixa de existir                                     | 4.1.2 — dois botões no hero                                                       |
| "Fortaleza e Recife • Atendimento em todo o Nordeste" abaixo do CTA             | linha de área atendida no hero                                                                     | —                                                                                 |

Também nesta rodada:

- O ícone `gear` passou a ser uma engrenagem de verdade (o da v2.8.0 desenha um sol), com o mesmo caminho da LP Spinplus.
- Entrou o ícone `tools` (chave inglesa e chave de fenda cruzadas), para "manutenção corretiva".
- O `check:lp` avisa que a logo (341×82) não tem a proporção 240×200 do slot. É a proporção da logo oficial, e o header foi ajustado para ela.

A foto começa 100px antes do fim da coluna 1, e o texto (no máximo 32rem) termina antes disso. A partir de ~1440px o técnico fica livre do card do chat. Entre 1024 e ~1400px o card cobre parte das costas dele, o mesmo limite do container de 1320px registrado na Spinplus.

O banner foi recortado do segundo mockup e estendido à direita com o próprio desfoque. A foto original do site (`big-image-1.png`) tem só 450×451. A foto mostra compressores Schulz SRP; o site do cliente tem a página "assistência técnica Schulz" e a Schulz aparece na arte de marcas atendidas. Isso pode resolver a lacuna da família Schulz, mas o claim "autorizada" continua proibido até o cliente confirmar.

## Desvios do padrão — serviços (21/10/2026)

A seção `linhas` foi refeita conforme o mockup de serviços que o cliente enviou em 21/10/2026, como **variante local** do componente. É o mesmo caminho da LP Spinplus Manutenção: o arquivo `src/components/sections/ProductLines.astro` deixou de ser a cópia da biblioteca.

**`npm run compose` desfaz a variante**, porque recopia o componente da biblioteca. Se a página precisar ser recomposta, reaplique a variante a partir do git.

| O que o mockup pedia                                                                                         | Como entrou                                                                                                                             | Regra do padrão afetada                                          |
| ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Cabeçalho à esquerda e duas fotos à direita, a primeira com o selo "Suporte técnico especializado"           | igual; as fotos são as do site do cliente (`galeria-1.png`, `galeria-2.webp`)                                                           | regra 15 — componente da biblioteca não se edita na LP           |
| Cards com ícone em quadrado amarelo, numeração e link "Falar com especialista →"                             | igual; um ícone por item (`icon`), com os ícones novos `worker` e `contract`                                                            | `scripts/ficha.mjs` aceita `icon` nos itens de `linhas` nesta LP |
| Cards sem foto e sem a lista de características                                                              | `photo`, `tag` e `features` seguem no arquivo de dados e na ficha, porque o contrato da biblioteca os exige, mas não aparecem na página | contrato de `linhas`                                             |
| Faixa "Atendimento multimarcas" com Schulz, Atlas Copco, Ingersoll Rand, Sullair, Kaeser e Chicago Pneumatic | nomes por extenso, sem logo                                                                                                             | entrada 7 — logo só com autorização                              |
| Faixa de CTA "Conte com a experiência da Falanga." com "Solicitar cotação"                                   | igual; o botão é `btn-slave-whats` com `data-cta="linhas-cotacao"`                                                                      | —                                                                |
| Logo da Falanga no canto da seção                                                                            | **não entrou** — a logo já está no header fixo                                                                                          | —                                                                |
| Azul royal nos títulos, links e card escuro                                                                  | tokens `brand-blue`, `brand-yellow-soft` e `brand-mist`                                                                                 | item 2 — tokens da agência                                       |

A Schulz entrou na lista de marcas da ficha e a família de palavras-chave Schulz passou a ser respondida por `linhas`. Isso tem base no material do cliente: o site tem a página "assistência técnica Schulz" e a Schulz aparece na arte de marcas atendidas. O claim "autorizada" continua proibido até o cliente confirmar a condição.

As fotos do site têm 450×451 e 680×682: servem na largura em que aparecem, mas ficam suaves em tela de alta densidade. Vale pedir os originais.

## Desvios do padrão — aplicações (21/10/2026)

A seção `aplicacoes` foi refeita conforme o mockup "Manutenção para todo o sistema de ar comprimido", que o cliente enviou em 21/10/2026. É uma **variante local** de `src/components/sections/ApplicationsGallery.astro`, e **`npm run compose` desfaz a variante**.

| O que o mockup pedia                                                                   | Como entrou                                                                                                                                | Regra do padrão afetada           |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- |
| 4 cards com foto, número em quadrado amarelo e rodapé "Falar com especialista"         | igual; o card inteiro continua sendo o CTA `aplicacoes-{id}`                                                                               | —                                 |
| Descrições de até 94 caracteres                                                        | limite de `item.description` em `aplicacoes` passa de 90 para 100 em `scripts/lib/contract.mjs`, que vale para a ficha e para o `check:lp` | contrato de `aplicacoes`          |
| Faixa azul "Seu sistema precisa de atenção especializada?" com "Solicitar atendimento" | igual; o botão é `btn-slave-whats` com `data-cta="aplicacoes-atendimento"`                                                                 | —                                 |
| Foto em 4:3                                                                            | moldura 16:10 com a foto ancorada no topo, para esconder o número do mockup embutido no rodapé das fotos 2–4                               | proporção do manifesto (1200×900) |

Fotos: a 1 é a do site do cliente (`big-image.png`, 450×451). As 2–4 (secador, filtros e planta) foram **recortadas do mockup**, com cerca de 340px de largura. Servem de provisório; vale pedir os originais. O `check:lp` avisa da resolução baixa.

## Estado da entrega

- [x] Primeira versão de pé (`npm run check:lp:rascunho` passa) em: 21/10/2026
- [ ] Todos os assets reais entregues
- [ ] `npm run verify` passa inteiro em: `____/____/______`
- [x] Padrão B2 versão: `2.8.0`
