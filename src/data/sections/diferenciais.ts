/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Bloco navy em largura total com a frase de autoridade e a pessoa recortada, e 5
 * cards sobrepostos à base do bloco. São 5 exatos: o grid é `lg:grid-cols-5`.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.jpg'
import pessoa from '@assets/diferenciais/pessoa.png'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Por que a ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada). 3–6 palavras no total. */
  titleLines: ['Reduza o tempo', 'de inatividade.'],
  text: 'A Falanga Pneumática atende compressores multimarcas com técnicos capacitados e certificados, diagnóstico avançado e peças originais, para reduzir o tempo de inatividade da sua produção em todo o Nordeste.',
  scene: {
    src: cenario,
    alt: 'Sala de compressores de ar industrial',
  },
  person: {
    src: pessoa,
    alt: `Técnico da ${site.brand}`,
  },
  reasons: [
    {
      icon: 'pin',
      title: 'Cobertura no Nordeste',
      description: 'Atendimento em toda a região Nordeste.',
    },
    {
      icon: 'clock',
      title: 'Assistência 24 horas',
      description: 'Disponibilidade contínua para assistência técnica.',
    },
    {
      icon: 'users',
      title: 'Equipe especializada',
      description: 'Técnicos capacitados e certificados.',
    },
    {
      icon: 'search',
      title: 'Diagnóstico avançado',
      description: 'Inspeção com ferramentas de diagnóstico avançadas.',
    },
    {
      icon: 'shield',
      title: 'Peças originais',
      description: 'Uso de peças originais na reconstrução.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  scene: Photo
  person: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
