```yaml
ficha: 1
padrao: 2.8.0
cliente: Falanga Pneumática
produto: Manutenção de compressores
data: 2026-10-21

site:
  brand: Falanga Pneumática
  brandShort: Falanga
  product: Manutenção de compressores
  context: ar comprimido industrial
  url: https://lp-manuten-o-falanga.vercel.app
  address: R. Mirian Rocha, 97 - Fortaleza - CE · Rua Tomaz Gonzaga, 74 - Zumbi, Recife - PE
  privacyUrl: ''
  whatsapp: ''
  shortcodes:
    chat: '[atendimento_chat id="default"]'
    form: '[atendimento_form id="default-form"]'

campanha:
  mainKeyword: manutenção de compressores
  negatives: []
  forbidden: [autorizada, autorizado]
  areaAtendida: Ceará e Pernambuco, com atendimento em todo o Nordeste
  onde: selo
  familias:
    - nome: manutencao
      termos:
        [
          manutenção de compressores,
          manutenção em compressor de ar,
          reforma de compressor,
          conserto de compressores,
        ]
      responde: linhas
    - nome: preventiva
      termos: [manutenção preventiva compressor, manutenção preventiva compressor schulz]
      responde: linhas
    - nome: assistencia
      termos: [assistencia compressores, assistencia tecnica compressores]
      responde: linhas
    - nome: parafuso
      termos: [serviço em compressor parafuso, assistencia tecnica schulz em fortaleza parafuso]
      responde: linhas
    - nome: marca-atlas-copco
      termos: [manutenção atlas copco]
      responde: linhas
    - nome: marca-schulz
      termos:
        [
          autorizada schulz,
          assistencia compressor schulz,
          reparo compressor schulz,
          manutenção em compressor schulz,
        ]
      responde: null
    - nome: localizacao
      termos:
        [
          Manutenção de compressor Fortaleza,
          Manutenção de compressor Recife,
          Assistência Schulz Fortaleza,
          Assistência Schulz Recife,
        ]
      responde: null
    - nome: rede-de-ar
      termos:
        [
          rede de ar comprimido,
          projeto de rede de ar comprimido,
          tubulacao de rede de ar,
          instalacao de rede de ar,
        ]
      responde: null

publico: [Manutenção, Engenharia, Compras]

marcas:
  usarLogos: false
  nomes:
    - Sullair
    - Worthington
    - Parker Domnick Hunter
    - Fargon
    - HB
    - Atlas Copco
    - Chicago Pneumatic
    - Ingersoll Rand
    - Kaeser
    - Alup
    - CompAir
    - Gardner Denver
    - Metalplan
    - Fiac
    - Fini
    - Vanair
    - Pressure
    - Puma Compressores
  autorizacao: não solicitada — a página cita as marcas só por extenso

tokens:
  padrao: true

conteudo:
  title: Manutenção de compressores em Fortaleza e Recife | Falanga Pneumática
  description: 'Manutenção de compressores multimarcas em Fortaleza e Recife: Atlas Copco, Ingersoll Rand, Kaeser, Sullair e outras. Assistência técnica 24 horas.'
  hero:
    title: Manutenção de compressores
    headline: [Mais eficiência.]
    highlight: [Menos paradas, na sua indústria.]
    text: Manutenção multimarcas e suporte especializado para manter seu sistema de ar comprimido em operação.
    area: [Fortaleza e Recife, Atendimento em todo o Nordeste]
    banner: Técnico da Falanga em manutenção de compressor de parafuso aberto, numa sala com outros compressores
    points:
      - icon: gear
        line1: Manutenção
        line2: preventiva
      - icon: tools
        line1: Manutenção
        line2: corretiva
      - icon: file
        line1: Contratos de
        line2: manutenção
      - icon: search
        line1: Auditoria em
        line2: ar comprimido
  quote:
    eyebrow: Solicite sua cotação
    title: Fale com quem entende de manutenção de compressores.
    text: Nossa equipe avalia o seu compressor e indica o serviço certo para reduzir o tempo de inatividade. Preencha o formulário ou fale direto conosco pelo WhatsApp.
    trust:
      - icon: pin
        label: Atendimento em todo o Nordeste
      - icon: clock
        label: Assistência técnica 24 horas
      - icon: shield
        label: Peças originais

blocos:
  linhas:
    veredicto: completo
    responde: [manutencao, preventiva, assistencia, parafuso, marca-atlas-copco]
    papeis: [Manutenção, Compras]
    eyebrow: Serviços
    title: Serviços de manutenção em compressores
    text: Manutenção e assistência técnica para compressores Atlas Copco, Ingersoll Rand, Kaeser, Sullair, Chicago Pneumatic e outras marcas.
    items:
      - id: preventiva-corretiva
        tag: Manutenção
        title: Manutenção preventiva e corretiva
        description: Manutenção planejada em intervalos regulares e correção de falhas no sistema de ar.
        features: [Inspeção de vazamentos, Limpeza de filtros, Inspeção de componentes]
        photo: Técnico em manutenção preventiva de compressor de ar
        dark: false
      - id: assistencia-tecnica
        tag: Assistência
        title: Assistência técnica especializada
        description: Atendimento técnico para compressores e secadores de ar, disponível 24 horas.
        features: [Compressores e secadores, Disponível 24 horas, Técnicos certificados]
        photo: Técnico em atendimento a compressor de ar industrial
        dark: false
      - id: reconstrucao
        tag: Reforma
        title: Reconstrução de unidades compressoras
        description: Reconstrução de compressores de parafuso com foco em performance e durabilidade.
        features: [Compressores de parafuso, Peças originais, Performance e durabilidade]
        photo: Unidade compressora de parafuso em reconstrução
        dark: false
      - id: contratos
        tag: Contratos
        title: Contratos de manutenção
        description: Programas preditivos e preventivos, com ou sem peças sobressalentes.
        features: [Programas preditivos, Programas preventivos, Com ou sem peças]
        photo: Sala de compressores de ar industrial
        dark: true

  vitrine:
    veredicto: insuficiente
    falta: a oferta são 4 frentes de serviço com 3 características cada, que "linhas" vende melhor; a vitrine pediria 6 itens com descrição em todos

  especificacoes:
    veredicto: nao-se-aplica
    falta: serviço não se distingue por modelo, medida ou faixa técnica

  identificar:
    veredicto: nao-se-aplica
    falta: o material não confirma cotação por código, medida, referência ou foto

  situacoes:
    veredicto: insuficiente
    falta: o cliente não descreveu as situações de compra reativa em que é procurado

  processo:
    veredicto: completo
    responde: [manutencao, assistencia]
    papeis: [Manutenção, Engenharia]
    eyebrow: Como funciona
    title: Do diagnóstico ao compressor em operação
    microcopy: Técnicos capacitados e certificados
    text: Cada atendimento começa por uma inspeção completa do sistema e segue até o plano que reduz o tempo de inatividade da sua produção.
    steps:
      - id: inspecao
        icon: search
        title: Inspeção completa
        description: Inspeção do sistema de ar com ferramentas de diagnóstico avançadas.
      - id: diagnostico
        icon: bolt
        title: Diagnóstico técnico
        description: Diagnósticos elétricos, mecânicos e do sistema de controle do compressor.
      - id: verificacao
        icon: droplet
        title: Verificação do sistema
        description: Ventilação, refrigeração, tratamento de ar e condensados verificados.
      - id: intervencao
        icon: wrench
        title: Intervenção técnica
        description: Manutenção preventiva, corretiva ou reconstrução com peças originais.
      - id: plano
        icon: file
        title: Plano de manutenção
        description: Contrato preditivo ou preventivo, com ou sem peças sobressalentes.

  aplicacoes:
    veredicto: completo
    responde: [parafuso]
    papeis: [Manutenção, Engenharia]
    eyebrow: Aplicações
    title: Manutenção para todo o sistema de ar comprimido
    text: Atendimento técnico do compressor ao tratamento do ar, para manter o sistema de ar comprimido da sua planta em operação.
    items:
      - id: compressores-parafuso
        label: Compressores de parafuso
        description: Manutenção e reconstrução de unidades compressoras de parafuso.
        photo: Compressor de parafuso industrial em operação
      - id: secadores
        label: Secadores de ar
        description: Assistência técnica e manutenção de secadores de ar comprimido.
        photo: Secador de ar comprimido industrial
      - id: tratamento
        label: Tratamento de ar
        description: Limpeza de filtros e verificação do tratamento de ar e condensados.
        photo: Filtros e drenos do tratamento de ar comprimido
      - id: sistemas
        label: Sistemas de ar
        description: Inspeção de vazamentos e manutenção planejada do sistema de ar.
        photo: Tubulação de ar comprimido em planta industrial

  segmentos:
    veredicto: insuficiente
    falta: nenhum setor industrial, processo ou foto de segmento foi informado

  clientes:
    veredicto: insuficiente
    falta: faltam 4 a 8 logos autorizadas e 3 números com fonte identificável

  diferenciais:
    veredicto: completo
    responde: [assistencia, localizacao]
    papeis: [Compras, Engenharia]
    eyebrow: Por que a Falanga
    titleLines: [Reduza o tempo, de inatividade.]
    text: A Falanga Pneumática atende compressores multimarcas com técnicos capacitados e certificados, diagnóstico avançado e peças originais, para reduzir o tempo de inatividade da sua produção em todo o Nordeste.
    scene: Sala de compressores de ar industrial
    person: Técnico da Falanga Pneumática
    reasons:
      - icon: pin
        title: Cobertura no Nordeste
        description: Atendimento em toda a região Nordeste.
      - icon: clock
        title: Assistência 24 horas
        description: Disponibilidade contínua para assistência técnica.
      - icon: users
        title: Equipe especializada
        description: Técnicos capacitados e certificados.
      - icon: search
        title: Diagnóstico avançado
        description: Inspeção com ferramentas de diagnóstico avançadas.
      - icon: shield
        title: Peças originais
        description: Uso de peças originais na reconstrução.

  perguntas:
    veredicto: insuficiente
    falta: o comercial não enviou a lista de dúvidas reais

  escopo:
    veredicto: nao-se-aplica
    falta: a oferta não é consolidação de compras de itens diferentes

assets:
  pendentes: [linhas, aplicacoes, diferenciais]

conflitos: []

naoAplicado:
  - e-mail falanga@falangaservice.com.br (e-mail não entra na LP pelo padrão)
  - imagem de locação de compressores (oferta de locação não confirmada para esta LP)
  - auditoria em ar comprimido (serviço sem descrição nem foto; guardado como excedente)
  - texto institucional longo sobre a importância do ar comprimido (já alimenta autoridade e diferenciais)
```

# Ficha de execução — Falanga Pneumática / Manutenção de compressores

> Montada no editor a partir de `docs/briefing-cliente/briefing_falanga_pneumatica_servicos.md`
> (briefing organizado de 21/10/2026), por pedido explícito de uma primeira versão
> antes da entrevista completa no chat. Os pontos marcados como **inferido** abaixo
> precisam ser validados com o cliente e, se mudarem, a ficha é regerada.

## O que foi decidido

LP de serviço para as campanhas `[PES] Serviços CE`, `[PES] Serviços PE` e `[PMAX] Falanga Pneumática`, com a palavra-chave `manutenção de compressores` no H1 e no title. Como duas das três campanhas são divididas por estado, o H1 cita Fortaleza e Recife; o atendimento em todo o Nordeste aparece nas provas do hero e num selo da cotação.

A oferta abre com os quatro serviços que o material descreve melhor, em `linhas`: preventiva e corretiva, assistência técnica, reconstrução de unidades e contratos de manutenção (o manifesto de `linhas` prevê o uso em LP de serviço, com o card escuro para o contrato). O apoio mostra o caminho do atendimento em `processo`, a prova mostra as quatro partes do sistema de ar atendidas em `aplicacoes` e a autoridade fecha com os cinco diferenciais.

Marcas de terceiros entram **só por extenso**. A condição de "autorizada" não foi comprovada: `autorizada` e `autorizado` estão proibidos na página. A marca Schulz não está na lista multimarcas do material e não aparece na página.

## Viabilidade por fase

| Fase       | Bloco            | Veredicto     | Responde                                                   | Papéis                 | O que falta                                                  |
| ---------- | ---------------- | ------------- | ---------------------------------------------------------- | ---------------------- | ------------------------------------------------------------ |
| Oferta     | `linhas`         | completo      | manutenção, preventiva, assistência, parafuso, Atlas Copco | Manutenção, Compras    | fotos (pendentes)                                            |
| Oferta     | `vitrine`        | insuficiente  | —                                                          | —                      | 4 frentes com 3 características: "linhas" vende melhor       |
| Oferta     | `especificacoes` | não se aplica | —                                                          | —                      | serviço não se distingue por medida                          |
| Apoio      | `processo`       | completo      | manutenção, assistência                                    | Manutenção, Engenharia | sequência **inferida** dos elementos do material; sem prazos |
| Apoio      | `identificar`    | não se aplica | —                                                          | —                      | cotação por código/foto não confirmada                       |
| Apoio      | `situacoes`      | insuficiente  | —                                                          | —                      | situações de compra reativa não descritas                    |
| Prova      | `aplicacoes`     | completo      | parafuso                                                   | Manutenção, Engenharia | 4 aplicações **inferidas** do material; fotos pendentes      |
| Prova      | `segmentos`      | insuficiente  | —                                                          | —                      | nenhum setor informado                                       |
| Prova      | `clientes`       | insuficiente  | —                                                          | —                      | logos autorizadas e números com fonte                        |
| Autoridade | `diferenciais`   | completo      | assistência, localização                                   | Compras, Engenharia    | cenário e pessoa recortada (pendentes)                       |
| Autoridade | `perguntas`      | insuficiente  | —                                                          | —                      | lista real de dúvidas do comercial                           |
| Autoridade | `escopo`         | não se aplica | —                                                          | —                      | não é consolidação de compras                                |

Famílias sem bloco que as responda: **marca Schulz** (atendimento à marca não confirmado) e **rede de ar comprimido** (projeto e instalação de rede não confirmados). São cliques que a página não atende; resolver com o cliente ou negativar na campanha.

## Núcleo

| #   | Entrada            | Valor                               | Origem                                   |
| --- | ------------------ | ----------------------------------- | ---------------------------------------- |
| 1   | MARCA              | Falanga Pneumática                  | briefing                                 |
| 2   | MARCA_CURTA        | Falanga                             | briefing (inferido)                      |
| 3   | PRODUTO_PRINCIPAL  | Manutenção de compressores          | briefing (inferido)                      |
| 4   | CONTEXTO_DE_USO    | ar comprimido industrial            | **inferido**                             |
| 5   | PUBLICO            | Manutenção, Engenharia, Compras     | **inferido** — ausente no material       |
| 6   | HERO               | multimarcas, Nordeste, 24 horas     | briefing                                 |
| 7   | MARCAS_ATENDIDAS   | 18 marcas, só por extenso           | briefing; uso de logo não decidido       |
| 8   | SELOS_DE_CONFIANCA | Nordeste, 24 horas, peças originais | briefing                                 |
| 9   | ENDERECO           | Fortaleza/CE e Recife/PE (sem CEP)  | briefing                                 |
| 10  | URL + PRIVACIDADE  | URL da Vercel; sem política         | **provisório** — URL final não informada |
| 11  | SHORTCODES         | padrão do plugin                    | default                                  |
| 12  | WHATSAPP           | sem botão flutuante                 | decisão do usuário (21/10)               |
| 13  | STACK + PUBLICACAO | padrão da agência + Vercel          | default                                  |
| 14  | TOKENS + FONTE     | visual padrão                       | default                                  |
| 15  | CAMPANHA           | `manutenção de compressores`        | briefing                                 |

## Pendências

| O que falta                                           | Quem resolve               | Especificação                                                                                      |
| ----------------------------------------------------- | -------------------------- | -------------------------------------------------------------------------------------------------- |
| Logo em alta resolução                                | cliente                    | a de `src/assets/LOGO.png` (341×82) veio do site; pedir vetor ou PNG 2× com fundo transparente     |
| Banner do hero original                               | designer                   | o atual foi recortado do mockup; pedir o arquivo sem texto, 1981×900, compressor no primeiro terço |
| 3 fotos de serviço recortadas                         | cliente                    | `src/assets/linhas/linha-1..3.png`, PNG 800×600, fundo transparente                                |
| Foto da sala de compressores (card de contratos)      | cliente                    | `src/assets/linhas/marcas.png`, 1280×800                                                           |
| 4 fotos de aplicação                                  | cliente ou banco de imagem | `src/assets/aplicacoes/aplicacao-1..4.png`, 1200×900 (4:3), equipamento em operação                |
| Cenário + técnico recortado                           | designer                   | `src/assets/diferenciais/cenario.jpg` 1600×900 e `pessoa.png` 1220×1000 com fundo transparente     |
| Validar a sequência de `processo` e as 4 `aplicacoes` | cliente                    | foram inferidas do material; confirmar ou corrigir                                                 |
| Público que pede cotação                              | cliente                    | cargos reais (hoje inferido)                                                                       |
| URL final e política de privacidade                   | cliente                    | domínio de publicação e link da política                                                           |
| WhatsApp comercial                                    | cliente                    | número com DDI e DDD, só dígitos                                                                   |
| Atendimento à marca Schulz                            | cliente                    | confirma? Se não, negativar os termos Schulz na campanha                                           |
| Projeto e instalação de rede de ar                    | cliente                    | confirma? Se não, negativar os termos de rede na campanha                                          |

Imagens citadas no material, ainda não validadas para uso: `Design-sem-nome-46.png` (assistência técnica), `Design-sem-nome-30.png.webp` (contratos), `big-image.png`, `big-image-1.png`, `Falanga-Peneumatica-Locacao-de-Compressores.jpg-1.webp`.

## Conflitos com o padrão

Nenhum conflito explícito no material.

## Itens excedentes

| Bloco    | Itens que entraram                                                   | Itens guardados                                     |
| -------- | -------------------------------------------------------------------- | --------------------------------------------------- |
| `linhas` | Preventiva e corretiva; Assistência técnica; Reconstrução; Contratos | Auditoria em ar comprimido — sem descrição nem foto |

## Conteúdo futuro (grupos pausados)

Nenhum grupo pausado informado.

## Dados não usados pelo padrão

E-mail `falanga@falangaservice.com.br`; imagem de locação de compressores; nomes de campanha sem orçamento, CPC, anúncios, sitelinks ou termos de pesquisa reais.
