/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Bloco navy em largura total com a frase de autoridade e uma foto à direita, e 5
 * cards sobrepostos à base do bloco. São 5 exatos: o grid é `lg:grid-cols-5`.
 *
 * Variante local do mockup do cliente (21/10/2026, docs/BRIEFING.md): a foto de
 * cenário já traz o técnico, então não há pessoa recortada. O CTA tem rótulo próprio
 * (`cta`) e a área atendida aparece abaixo dele (`area`).
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.jpg'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Por que a ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada): a primeira em branco, a segunda em amarelo. */
  titleLines: ['Reduza o tempo', 'de inatividade.'],
  text: 'Assistência técnica multimarcas com equipe especializada, diagnóstico avançado e peças originais para manter sua produção em operação.',
  cta: 'Solicitar cotação',
  area: 'Atendimento em todo o Nordeste',
  scene: {
    src: cenario,
    alt: 'Técnico da Falanga em manutenção de um compressor de parafuso SRP 4015, com outros compressores ao fundo',
  },
  reasons: [
    {
      icon: 'map-pin',
      title: 'Cobertura no Nordeste',
      description: 'Atendimento em toda a região Nordeste.',
    },
    {
      icon: 'clock',
      title: 'Assistência 24 horas',
      description: 'Suporte técnico para os imprevistos da sua operação.',
    },
    {
      icon: 'users',
      title: 'Equipe especializada',
      description: 'Técnicos capacitados e certificados.',
    },
    {
      icon: 'search',
      title: 'Diagnóstico avançado',
      description: 'Avaliação elétrica, mecânica e de controle.',
    },
    {
      icon: 'shield-check',
      title: 'Peças originais',
      description: 'Componentes para manutenção e reconstrução.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly [string, string]
  text: string
  cta: string
  area: string
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
