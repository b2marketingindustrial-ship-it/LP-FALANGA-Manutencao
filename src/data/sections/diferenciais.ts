/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Bloco navy em largura total com a frase de autoridade e uma foto à direita, e 5
 * cards sobrepostos à base do bloco. São 5 exatos: o grid é `lg:grid-cols-5`.
 *
 * Variante local do mockup do cliente (21/10/2026, docs/BRIEFING.md): a foto de
 * cenário já traz o técnico, então não há pessoa recortada. O CTA tem rótulo próprio
 * (`cta`). A linha de área atendida abaixo do CTA saiu em 26/10/2026, como na LP de peças,
 * e o texto foi reescrito para não repetir os cards. Em 27/10/2026 a seção ganhou o tom
 * institucional da LP de parafuso.
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
  /** Cada item é uma linha do H2 (quebra forçada): as duas primeiras em branco, a última em amarelo. */
  /** Cada item é uma linha do H2 (quebra forçada): as duas primeiras em branco, a última em amarelo.
   *  Tom institucional, como na LP de parafuso (pedido do usuário, 27/10/2026); os 40 anos
   *  vêm do selo da logo do cliente. */
  titleLines: ['Há 40 anos cuidando', 'do ar comprimido das', 'indústrias do Nordeste.'],
  /** Cada `\n` é uma quebra forçada a partir de 1280px; abaixo disso o texto corre normal. */
  text: 'A Falanga acompanha a sua indústria da compra à manutenção\ndo compressor, com confiabilidade e qualidade em cada etapa.',
  cta: 'Solicitar cotação',
  scene: {
    src: cenario,
    alt: 'Técnico da Falanga em manutenção de um compressor de parafuso SRP 4015, com outros compressores ao fundo',
  },
  /**
   * Revistos em 27/10/2026 para falar da empresa, não do serviço: saíram "Cobertura no
   * Nordeste" (título), "Assistência 24 horas" (hero) e "Diagnóstico avançado" (cards de
   * serviço). Sem "autorizada Schulz" até o cliente confirmar (docs/BRIEFING.md).
   */
  reasons: [
    {
      icon: 'badge-check',
      title: 'Desde 1981',
      description: 'Mais de quatro décadas atendendo a indústria.',
    },
    {
      icon: 'layers',
      title: 'Um só fornecedor',
      description: 'Compressor, peças e manutenção na mesma parceria.',
    },
    {
      icon: 'tools',
      title: 'Rede de ar comprimido',
      description: 'Projeto e execução da rede da sua planta.',
    },
    {
      icon: 'users',
      title: 'Equipe própria',
      description: 'Técnicos capacitados e certificados.',
    },
    {
      icon: 'shield-check',
      title: 'Peças originais',
      description: 'Componentes para manutenção e reconstrução.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly [string, string, string]
  text: string
  cta: string
  scene: Photo
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
