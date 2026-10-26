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
  /**
   * H1 da página, exibido como a linha de abertura acima da manchete (mockup do cliente,
   * 21/10/2026). É o que o check:lp confere contra a palavra-chave da campanha.
   */
  title: 'Manutenção de compressores',
  /** Manchete visual, uma linha por item: primeiro em branco, depois em amarelo. */
  headline: ['Mais eficiência.'],
  highlight: ['Menos paradas', 'na sua indústria.'],
  text: 'Manutenção multimarcas e suporte especializado para manter seu sistema de ar comprimido em operação.',
  /** Linha de área atendida abaixo do CTA, separada por ponto. */
  area: ['Unidades em Fortaleza e Recife', 'Atendimento em todo o Nordeste'],
  banner: {
    src: heroBg,
    alt: 'Técnico da Falanga em manutenção de compressor de parafuso aberto, numa sala com outros compressores',
  },
  points: [
    { icon: 'gear', line1: 'Manutenção', line2: 'preventiva' },
    { icon: 'tools', line1: 'Manutenção', line2: 'corretiva' },
    { icon: 'file', line1: 'Contratos de', line2: 'manutenção' },
    { icon: 'search', line1: 'Auditoria em', line2: 'ar comprimido' },
  ],
} as const satisfies {
  title: string
  headline: readonly string[]
  highlight: readonly string[]
  text: string
  area: readonly string[]
  banner: Photo
  points: readonly [HeroPoint, HeroPoint, HeroPoint, HeroPoint]
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Solicite sua cotação',
  title: 'Fale com quem entende de manutenção de compressores.',
  text: 'Nossa equipe avalia o seu compressor e indica o serviço certo. Preencha o formulário ou fale conosco pelo WhatsApp.',
  trust: [
    { icon: 'pin', label: 'Atendimento em todo o Nordeste' },
    { icon: 'clock', label: 'Assistência técnica 24 horas' },
    { icon: 'shield', label: 'Peças originais' },
  ],
  /**
   * Cabeçalho do card do formulário (mockup do cliente, 21/10/2026). O `eyebrow` acima
   * vai no card, e não mais na coluna de texto, para não aparecer duas vezes lado a lado.
   */
  form: {
    title: 'Como podemos ajudar?',
    text: 'Preencha os dados e conte o que seu compressor precisa.',
  },
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: `Seus dados serão utilizados apenas para responder à sua solicitação.`,
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
  form: { title: string; text: string }
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
