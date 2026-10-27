/**
 * Dados da seção "Linhas de produto" (biblioteca B2, fase: oferta).
 *
 * LP de serviço: cada card é uma frente de manutenção da Falanga e o card escuro
 * fecha o grid com o atendimento recorrente — os contratos de manutenção.
 *
 * Variante local do mockup do cliente (21/10/2026, docs/BRIEFING.md), dividida em três
 * seções em 26/10/2026: marcas, abertura com duas fotos e cards com caixa de imagem.
 * `icon`, `features` e `photo` dos itens seguem aqui porque o contrato da biblioteca os
 * exige, mas a variante não os exibe — a foto de cada item aponta para uma das fotos da
 * galeria. A caixa de imagem do card usa `cardPhoto`; sem ela, mostra o espaço reservado.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

import galeria1 from '@assets/linhas/galeria-1.png'
import galeria2 from '@assets/linhas/galeria-2.webp'
import cardContratos from '@assets/linhas/card-contratos.webp'

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
  /** Foto da caixa de imagem do card. Só o card de contratos tem a sua (27/10/2026); as outras ainda não chegaram. */
  cardPhoto?: Photo
}

export interface Highlight {
  icon: IconName
  label: string
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
  /** Sem a linha de área atendida desde 26/10/2026: o Nordeste fica no hero e nos diferenciais. */
  text: 'Da manutenção preventiva à reconstrução, serviços multimarcas para compressores e secadores.',
  gallery: [tecnico, compressores],
  /** O que entra na manutenção, na coluna de texto da abertura (26/10/2026). */
  highlights: [
    { icon: 'layers', label: 'Compressores e secadores' },
    { icon: 'droplet', label: 'Limpeza de filtros' },
    { icon: 'search', label: 'Inspeção de componentes' },
  ],
  /** Selo sobre a primeira foto da galeria. */
  badge: { icon: 'wrench', label: 'Suporte técnico especializado' },
  brands: {
    label: 'Atendimento multimarcas',
    names: ['Schulz', 'Atlas Copco', 'Ingersoll Rand', 'Sullair', 'Kaeser', 'Chicago Pneumatic'],
  },
  items: [
    {
      id: 'preventiva-corretiva',
      tag: 'Manutenção',
      icon: 'tools',
      title: 'Preventiva e corretiva',
      description: 'Inspeções e correção de falhas para reduzir paradas e preservar o desempenho.',
      photo: tecnico,
      features: ['Inspeção de vazamentos', 'Limpeza de filtros', 'Inspeção de componentes'],
      dark: false,
    },
    {
      id: 'assistencia-tecnica',
      tag: 'Assistência',
      icon: 'worker',
      title: 'Assistência técnica',
      description: 'Suporte para compressores e secadores, com diagnóstico e atendimento técnico.',
      photo: tecnico,
      features: ['Compressores e secadores', 'Disponível 24 horas', 'Técnicos certificados'],
      dark: false,
    },
    {
      id: 'reconstrucao',
      tag: 'Reforma',
      icon: 'gear',
      title: 'Reconstrução de unidades',
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
      /** Enviada pelo usuário em 27/10/2026. */
      cardPhoto: {
        src: cardContratos,
        alt: 'Compressores de diversas marcas e tipos reunidos no piso de um galpão industrial',
      },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  gallery: readonly [Photo, Photo]
  highlights: readonly [Highlight, Highlight, Highlight]
  badge: { icon: IconName; label: string }
  brands: { label: string; names: readonly string[] }
  items:
    | readonly [ProductLine, ProductLine, ProductLine]
    | readonly [ProductLine, ProductLine, ProductLine, ProductLine]
}
