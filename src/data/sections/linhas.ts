/**
 * Dados da seção "Linhas de produto" (biblioteca B2, fase: oferta).
 *
 * LP de serviço: cada card é uma frente de manutenção da Falanga e o card escuro
 * fecha o grid com o atendimento recorrente — os contratos de manutenção.
 *
 * Variante local do mockup do cliente (21/10/2026, docs/BRIEFING.md): cabeçalho com
 * duas fotos, cards com ícone, faixa de marcas e faixa de CTA. `tag`, `features` e
 * `photo` dos itens seguem aqui porque o contrato da biblioteca os exige, mas a
 * variante não os exibe — a foto de cada item aponta para uma das fotos da galeria.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

import galeria1 from '@assets/linhas/galeria-1.png'
import galeria2 from '@assets/linhas/galeria-2.webp'

export interface ProductLine {
  id: string
  tag: string
  icon: IconName
  title: string
  description: string
  photo: Photo
  features: readonly [string, string, string]
  /** Exatamente um card escuro por grid. Informe sempre (true/false). */
  dark: boolean
}

const tecnico: Photo = {
  src: galeria1,
  alt: 'Técnico da Falanga na manutenção de um compressor de parafuso Schulz SRP 4015',
}
const compressores: Photo = {
  src: galeria2,
  alt: 'Compressores de parafuso Schulz SRP 4030 sobre paletes no galpão da Falanga',
}

export const productLines = {
  eyebrow: 'Serviços especializados',
  title: 'Mais confiabilidade para o seu sistema de ar comprimido.',
  text: 'Manutenção, assistência técnica e soluções multimarcas para manter sua operação produtiva.',
  area: 'Atendimento em todo o Nordeste',
  gallery: [tecnico, compressores],
  /** Selo sobre a primeira foto da galeria. */
  badge: { icon: 'wrench', label: 'Suporte técnico especializado' },
  brands: {
    label: 'Atendimento multimarcas',
    names: ['Schulz', 'Atlas Copco', 'Ingersoll Rand', 'Sullair', 'Kaeser', 'Chicago Pneumatic'],
  },
  closing: {
    title: 'Conte com a experiência da Falanga.',
    text: 'Solicite uma avaliação para o seu sistema de ar comprimido.',
    cta: 'Solicitar cotação',
  },
  items: [
    {
      id: 'preventiva-corretiva',
      tag: 'Manutenção',
      icon: 'tools',
      title: 'Manutenção preventiva e corretiva',
      description: 'Inspeções e correção de falhas para reduzir paradas e preservar o desempenho.',
      photo: tecnico,
      features: ['Inspeção de vazamentos', 'Limpeza de filtros', 'Inspeção de componentes'],
      dark: false,
    },
    {
      id: 'assistencia-tecnica',
      tag: 'Assistência',
      icon: 'worker',
      title: 'Assistência técnica especializada',
      description: 'Suporte para compressores e secadores, com diagnóstico e atendimento técnico.',
      photo: tecnico,
      features: ['Compressores e secadores', 'Disponível 24 horas', 'Técnicos certificados'],
      dark: false,
    },
    {
      id: 'reconstrucao',
      tag: 'Reforma',
      icon: 'gear',
      title: 'Reconstrução de unidades compressoras',
      description: 'Recupere a eficiência e a confiabilidade dos compressores de parafuso.',
      photo: compressores,
      features: ['Compressores de parafuso', 'Peças originais', 'Performance e durabilidade'],
      dark: false,
    },
    {
      id: 'contratos',
      tag: 'Contratos',
      icon: 'contract',
      title: 'Contratos de manutenção',
      description: 'Planos preventivos e preditivos, com ou sem fornecimento de peças.',
      photo: compressores,
      features: ['Programas preditivos', 'Programas preventivos', 'Com ou sem peças'],
      dark: true,
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  area: string
  gallery: readonly [Photo, Photo]
  badge: { icon: IconName; label: string }
  brands: { label: string; names: readonly string[] }
  closing: { title: string; text: string; cta: string }
  items:
    | readonly [ProductLine, ProductLine, ProductLine]
    | readonly [ProductLine, ProductLine, ProductLine, ProductLine]
}
