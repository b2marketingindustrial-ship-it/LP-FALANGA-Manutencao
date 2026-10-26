/**
 * Logos do carrossel de marcas — primitivo opcional.
 *
 * Marcas de compressores atendidas pela manutenção multimarcas da Falanga. Logos da LP
 * de peças (enviadas pelo cliente em 24/10/2026), só as das marcas desta ficha: a Kaeser
 * ainda não tem logo e fica só por extenso na copy até ela chegar (26/10/2026).
 */
import type { ImageMetadata } from 'astro'

import atlasCopco from '@assets/brands/atlas-copco.png'
import chicagoPneumatic from '@assets/brands/chicago-pneumatic.png'
import ingersollRand from '@assets/brands/ingersoll-rand.png'
import schulz from '@assets/brands/schulz.png'
import sullair from '@assets/brands/sullair.png'

export interface Brand {
  name: string
  src: ImageMetadata
}

export const brands: readonly Brand[] = [
  { name: 'Schulz', src: schulz },
  { name: 'Atlas Copco', src: atlasCopco },
  { name: 'Sullair', src: sullair },
  { name: 'Ingersoll Rand', src: ingersollRand },
  { name: 'Chicago Pneumatic', src: chicagoPneumatic },
]
