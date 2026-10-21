/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Variante local do mockup do cliente (21/10/2026, docs/BRIEFING.md): os 5 motivos em
 * cards de 3 colunas, fechados por um card azul de CTA. Sem foto de cenário nem pessoa
 * recortada — o mockup não as usa. São 5 motivos exatos, como no contrato da biblioteca.
 */
import type { IconName } from '@data/icons'
import { site } from '@data/site'

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Diferenciais ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada a partir do desktop). */
  titleLines: [`Por que escolher a ${site.brandShort}`, 'para cuidar dos seus compressores?'],
  text: 'Da inspeção à manutenção, atenção técnica em cada detalhe do seu sistema de ar comprimido.',
  reasons: [
    {
      icon: 'clipboard-check',
      title: 'Inspeção completa',
      description:
        'Verificação de vazamentos, filtros e componentes para identificar desgastes e reduzir paradas.',
    },
    {
      icon: 'wrench',
      title: 'Diagnóstico preciso',
      description:
        'Análise elétrica, mecânica e de controle para identificar a causa das falhas e orientar a manutenção.',
    },
    {
      icon: 'chart',
      title: 'Avaliação personalizada',
      description:
        'Identificação de ineficiências com recomendações adaptadas às necessidades da sua instalação.',
    },
    {
      icon: 'calendar',
      title: 'Manutenção planejada',
      description:
        'Programas de serviço com cobertura de peças e serviços conforme as necessidades da operação.',
    },
    {
      icon: 'droplet',
      title: 'Troca de consumíveis',
      description:
        'Substituição de lubrificantes e componentes conforme as recomendações do fabricante.',
    },
  ],
  /** Card azul que fecha a grade: o CTA da seção (`diferenciais-cta`). */
  closing: {
    title: `Conte com a experiência da ${site.brandShort}.`,
    text: 'Converse com nossa equipe sobre a manutenção dos seus compressores.',
  },
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
  closing: { title: string; text: string }
}
