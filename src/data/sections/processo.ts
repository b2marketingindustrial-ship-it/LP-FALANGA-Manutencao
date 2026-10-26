/**
 * Dados da seção "Como funciona" (biblioteca B2, fase: apoio).
 *
 * As etapas seguem os elementos de atendimento que o material da Falanga descreve:
 * inspeção, diagnóstico, verificação do sistema, intervenção e contrato.
 *
 * Sem `when`: o cliente ainda não confirmou prazos que assuma publicamente
 * (docs/BRIEFING.md, pendências). Prazo inventado não entra.
 *
 * Copy do mockup do cliente (21/10/2026): o fim do título vai em amarelo
 * (`highlight`), e o CTA da seção tem rótulo próprio (`cta`).
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
  /** Trecho final de `title` que vai em amarelo, em linha própria. */
  highlight: string
  text: string
  microcopy: string
  /** Rótulo do botão da seção. */
  cta: string
  steps: readonly ProcessStep[]
}

export const process: Process = {
  eyebrow: 'Como funciona',
  title: 'Do diagnóstico ao compressor em operação.',
  highlight: 'compressor em operação.',
  text: 'Um processo completo para identificar falhas, recuperar o desempenho e planejar a manutenção do seu sistema.',
  microcopy: 'Equipe técnica especializada',
  cta: 'Solicitar cotação',
  steps: [
    {
      id: 'inspecao',
      icon: 'search',
      title: 'Inspeção completa',
      description: 'Avaliação do sistema de ar comprimido com ferramentas de diagnóstico.',
    },
    {
      id: 'diagnostico',
      icon: 'pulse',
      title: 'Diagnóstico técnico',
      description: 'Análise elétrica, mecânica e do sistema de controle do compressor.',
    },
    {
      id: 'verificacao',
      icon: 'droplet',
      title: 'Verificação do sistema',
      description: 'Checagem de ventilação, refrigeração, tratamento de ar e condensados.',
    },
    {
      id: 'intervencao',
      icon: 'wrench',
      title: 'Intervenção técnica',
      description: 'Manutenção preventiva, corretiva ou reconstrução da unidade compressora.',
    },
    {
      id: 'plano',
      icon: 'clipboard',
      title: 'Plano de manutenção',
      description: 'Plano preventivo ou preditivo, com ou sem fornecimento de peças.',
    },
  ],
}
