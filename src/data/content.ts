/**
 * COPY DA ESTRUTURA FIXA.
 *
 * Só o que aparece em Header, Hero, Cotação e Footer — as quatro peças presentes
 * em toda LP do padrão. O copy das seções do meio vive em
 * `src/data/sections/<slug>.ts`, um arquivo por seção escolhida da biblioteca.
 *
 * Transcrito da ficha de execução (`docs/FICHA-LP.md`), campo `conteudo`.
 */
import type { IconName } from './icons'
import type { Photo } from './types'
import { site } from './site'

import heroBg from '@assets/heroBg.png'

/* ------------------------------------------------------------------ tipos */

export interface HeroPoint {
  icon: IconName
  line1: string
  line2: string
}

export interface TrustItem {
  icon: IconName
  label: string
}

/* ----------------------------------------------------------- vocabulário */

/** Vocabulário fixo de CTA (PROMPT-PADRAO-LP, item 8). Não variar. */
export const cta = {
  primary: 'Solicite sua cotação',
  primaryShort: 'Cotação',
  secondary: 'Identifique seu compressor',
  card: 'Falar com especialista',
  whatsapp: 'Chamar no WhatsApp',
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  tagline: site.product,
  /** Rótulo do CTA do header no desktop, do mockup do cliente (21/10/2026). */
  cta: 'Fale com um especialista',
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: 'Assistência técnica multimarcas',
  /** H1 inteiro: é o que o check:lp confere contra a palavra-chave da campanha. */
  title: 'Manutenção de compressores em Fortaleza e Recife.',
  /** Trecho final do H1 que vai em amarelo, em linha própria. Tem de estar em `title`. */
  highlight: 'Fortaleza e Recife.',
  text: 'Suporte especializado para manter sua produção em movimento. Atendimento em todo o Nordeste.',
  /** Link de rolagem até os serviços, no lugar do botão secundário (mockup do cliente). */
  secondary: { label: 'Conheça nossos serviços', target: '#linhas' },
  banner: {
    src: heroBg,
    alt: 'Compressor de parafuso em sala de ar comprimido industrial, com tubulação e reservatório',
  },
  points: [
    { icon: 'gear', line1: 'Manutenção', line2: 'preventiva' },
    { icon: 'wrench', line1: 'Manutenção', line2: 'corretiva' },
    { icon: 'box', line1: 'Peças', line2: 'originais' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  highlight: string
  text: string
  secondary: { label: string; target: `#${string}` }
  banner: Photo
  points: readonly [HeroPoint, HeroPoint, HeroPoint]
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Solicite sua cotação',
  title: 'Fale com quem entende de manutenção de compressores.',
  text: 'Nossa equipe avalia o seu compressor e indica o serviço certo para reduzir o tempo de inatividade. Preencha o formulário ou fale direto conosco pelo WhatsApp.',
  trust: [
    { icon: 'pin', label: 'Atendimento em todo o Nordeste' },
    { icon: 'clock', label: 'Assistência técnica 24 horas' },
    { icon: 'shield', label: 'Peças originais' },
  ],
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: `Seus dados são usados apenas para responder à sua solicitação de cotação, conforme a LGPD.`,
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
