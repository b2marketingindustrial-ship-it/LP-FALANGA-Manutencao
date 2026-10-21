/**
 * Dados da seção "Linhas de produto" (biblioteca B2, fase: oferta).
 *
 * LP de serviço: cada card é uma frente de manutenção da Falanga e o card escuro
 * fecha o grid com o atendimento recorrente — os contratos de manutenção.
 */
import type { Photo } from '@data/types'

import linha1 from '@assets/linhas/linha-1.png'
import linha2 from '@assets/linhas/linha-2.png'
import linha3 from '@assets/linhas/linha-3.png'
import marcasPhoto from '@assets/linhas/marcas.png'

export interface ProductLine {
  id: string
  tag: string
  title: string
  description: string
  photo: Photo
  features: readonly [string, string, string]
  /** Exatamente um card escuro por grid. Informe sempre (true/false). */
  dark: boolean
}

export const productLines = {
  eyebrow: 'Serviços',
  title: 'Serviços de manutenção em compressores',
  text: 'Manutenção e assistência técnica para compressores Atlas Copco, Ingersoll Rand, Kaeser, Sullair, Chicago Pneumatic e outras marcas.',
  items: [
    {
      id: 'preventiva-corretiva',
      tag: 'Manutenção',
      title: 'Manutenção preventiva e corretiva',
      description:
        'Manutenção planejada em intervalos regulares e correção de falhas no sistema de ar.',
      photo: { src: linha1, alt: 'Técnico em manutenção preventiva de compressor de ar' },
      features: ['Inspeção de vazamentos', 'Limpeza de filtros', 'Inspeção de componentes'],
      dark: false,
    },
    {
      id: 'assistencia-tecnica',
      tag: 'Assistência',
      title: 'Assistência técnica especializada',
      description: 'Atendimento técnico para compressores e secadores de ar, disponível 24 horas.',
      photo: { src: linha2, alt: 'Técnico em atendimento a compressor de ar industrial' },
      features: ['Compressores e secadores', 'Disponível 24 horas', 'Técnicos certificados'],
      dark: false,
    },
    {
      id: 'reconstrucao',
      tag: 'Reforma',
      title: 'Reconstrução de unidades compressoras',
      description:
        'Reconstrução de compressores de parafuso com foco em performance e durabilidade.',
      photo: { src: linha3, alt: 'Unidade compressora de parafuso em reconstrução' },
      features: ['Compressores de parafuso', 'Peças originais', 'Performance e durabilidade'],
      dark: false,
    },
    {
      id: 'contratos',
      tag: 'Contratos',
      title: 'Contratos de manutenção',
      description: 'Programas preditivos e preventivos, com ou sem peças sobressalentes.',
      photo: { src: marcasPhoto, alt: 'Sala de compressores de ar industrial' },
      features: ['Programas preditivos', 'Programas preventivos', 'Com ou sem peças'],
      dark: true,
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  items:
    | readonly [ProductLine, ProductLine, ProductLine]
    | readonly [ProductLine, ProductLine, ProductLine, ProductLine]
}
