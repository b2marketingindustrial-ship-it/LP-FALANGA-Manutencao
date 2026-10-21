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
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: 'Ar comprimido industrial',
  title: 'Manutenção de compressores em Fortaleza e Recife',
  text: 'Assistência técnica multimarcas para compressores e secadores de ar, com unidades no Ceará e em Pernambuco e atendimento em todo o Nordeste.',
  banner: {
    src: heroBg,
    alt: 'Compressor de ar industrial em manutenção',
  },
  points: [
    { icon: 'gear', line1: 'Compressores', line2: 'multimarcas' },
    { icon: 'pin', line1: 'Atendimento em', line2: 'todo o Nordeste' },
    { icon: 'clock', line1: 'Assistência técnica', line2: '24 horas' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
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
