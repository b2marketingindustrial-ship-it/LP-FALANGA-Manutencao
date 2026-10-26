/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * 4 cards-botão com foto e cabeçalho centrado. O card inteiro é o CTA.
 * As quatro partes do sistema de ar vêm do que o material diz que a Falanga atende.
 *
 * Variante local do mockup do cliente (21/10/2026, docs/BRIEFING.md). A faixa de CTA que
 * fechava a seção saiu em 26/10/2026, como nas outras LPs da Falanga. A foto 1 é a do site do cliente; as fotos 2–4 foram
 * recortadas do mockup, provisórias até os originais chegarem.
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
  title: 'Manutenção para todo o sistema de ar comprimido.',
  text: 'Do compressor ao tratamento do ar, atendimento técnico para cada parte do sistema.',
  items: [
    {
      id: 'compressores-parafuso',
      label: 'Compressores de parafuso',
      description:
        'Manutenção e reconstrução de unidades compressoras para recuperar desempenho e confiabilidade.',
      photo: {
        src: app1,
        alt: 'Técnico da Falanga em manutenção de um compressor de parafuso Schulz SRP 4015',
      },
    },
    {
      id: 'secadores',
      label: 'Secadores de ar',
      description:
        'Assistência técnica e manutenção para preservar a eficiência da secagem do ar comprimido.',
      photo: { src: app2, alt: 'Secador de ar comprimido industrial em sala de máquinas' },
    },
    {
      id: 'tratamento',
      label: 'Tratamento de ar',
      description:
        'Verificação de filtros, drenos e condensados para manter a qualidade do ar da sua operação.',
      photo: { src: app3, alt: 'Filtros de linha de ar comprimido com manômetros e drenos' },
    },
    {
      id: 'sistemas',
      label: 'Sistemas de ar',
      description:
        'Inspeção de vazamentos e manutenção planejada para cuidar de todo o sistema de ar comprimido.',
      photo: {
        src: app4,
        alt: 'Reservatório e compressores em planta industrial com tubulação de ar',
      },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items: readonly [Application, Application, Application, Application]
}
