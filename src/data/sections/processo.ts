/**
 * Dados da seção "Como funciona" (biblioteca B2, fase: apoio).
 *
 * As etapas seguem os elementos de atendimento que o material da Falanga descreve:
 * inspeção, diagnóstico, verificação do sistema, intervenção e contrato.
 *
 * Sem `when`: o cliente ainda não confirmou prazos que assuma publicamente
 * (docs/BRIEFING.md, pendências). Prazo inventado não entra.
 */
import type { IconName } from '@data/icons'

export interface ProcessStep {
  id: string
  icon: IconName
  title: string
  description: string
  /** Prazo ou marco da etapa, 2–4 palavras. Opcional. */
  when?: string
}

/**
 * Tipo anotado, e não `as const satisfies`: sem nenhum `when` nos itens, o tipo
 * literal não teria a propriedade e o componente deixaria de tipar.
 */
export interface Process {
  eyebrow: string
  title: string
  text: string
  microcopy: string
  steps: readonly ProcessStep[]
}

export const process: Process = {
  eyebrow: 'Como funciona',
  title: 'Do diagnóstico ao compressor em operação',
  text: 'Cada atendimento começa por uma inspeção completa do sistema e segue até o plano que reduz o tempo de inatividade da sua produção.',
  microcopy: 'Técnicos capacitados e certificados',
  steps: [
    {
      id: 'inspecao',
      icon: 'search',
      title: 'Inspeção completa',
      description: 'Inspeção do sistema de ar com ferramentas de diagnóstico avançadas.',
    },
    {
      id: 'diagnostico',
      icon: 'bolt',
      title: 'Diagnóstico técnico',
      description: 'Diagnósticos elétricos, mecânicos e do sistema de controle do compressor.',
    },
    {
      id: 'verificacao',
      icon: 'droplet',
      title: 'Verificação do sistema',
      description: 'Ventilação, refrigeração, tratamento de ar e condensados verificados.',
    },
    {
      id: 'intervencao',
      icon: 'wrench',
      title: 'Intervenção técnica',
      description: 'Manutenção preventiva, corretiva ou reconstrução com peças originais.',
    },
    {
      id: 'plano',
      icon: 'file',
      title: 'Plano de manutenção',
      description: 'Contrato preditivo ou preventivo, com ou sem peças sobressalentes.',
    },
  ],
}
