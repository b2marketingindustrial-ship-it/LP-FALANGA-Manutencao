/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * 4 cards-botão com foto 4:3 e cabeçalho centrado. O card inteiro é o CTA.
 * As quatro partes do sistema de ar vêm do que o material diz que a Falanga atende.
 */
import type { Photo } from '@data/types'

import app1 from '@assets/aplicacoes/aplicacao-1.png'
import app2 from '@assets/aplicacoes/aplicacao-2.png'
import app3 from '@assets/aplicacoes/aplicacao-3.png'
import app4 from '@assets/aplicacoes/aplicacao-4.png'

export interface Application {
  id: string
  label: string
  description: string
  photo: Photo
}

export const applications = {
  eyebrow: 'Aplicações',
  title: 'Manutenção para todo o sistema de ar comprimido',
  text: 'Atendimento técnico do compressor ao tratamento do ar, para manter o sistema de ar comprimido da sua planta em operação.',
  items: [
    {
      id: 'compressores-parafuso',
      label: 'Compressores de parafuso',
      description: 'Manutenção e reconstrução de unidades compressoras de parafuso.',
      photo: { src: app1, alt: 'Compressor de parafuso industrial em operação' },
    },
    {
      id: 'secadores',
      label: 'Secadores de ar',
      description: 'Assistência técnica e manutenção de secadores de ar comprimido.',
      photo: { src: app2, alt: 'Secador de ar comprimido industrial' },
    },
    {
      id: 'tratamento',
      label: 'Tratamento de ar',
      description: 'Limpeza de filtros e verificação do tratamento de ar e condensados.',
      photo: { src: app3, alt: 'Filtros e drenos do tratamento de ar comprimido' },
    },
    {
      id: 'sistemas',
      label: 'Sistemas de ar',
      description: 'Inspeção de vazamentos e manutenção planejada do sistema de ar.',
      photo: { src: app4, alt: 'Tubulação de ar comprimido em planta industrial' },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly [Application, Application, Application, Application]
}
