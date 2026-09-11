import Image, { type StaticImageData } from 'next/image'
import deponier from '../../public/images/branscher/deponier.webp'
import biogas from '../../public/images/branscher/biogas.webp'
import reningsverk from '../../public/images/branscher/reningsverk.webp'
import oljaGas from '../../public/images/branscher/olja-gas.webp'
import gruva from '../../public/images/branscher/gruva.webp'
import hamnar from '../../public/images/branscher/hamnar.webp'

const images: Record<string, { src: StaticImageData; alt: string }> = {
  '/branscher/deponier': { src: deponier, alt: 'Drönare över en deponicell med gasbrunnar och ett arbetslag vid områdets kant.' },
  '/branscher/biogas': { src: biogas, alt: 'Drönarpilot vid en biogasanläggning med rötkammare och rörinstallationer.' },
  '/branscher/reningsverk': { src: reningsverk, alt: 'Översikt ovanifrån över reningsbassänger, gångbroar och en drönare.' },
  '/branscher/olja-gas': { src: oljaGas, alt: 'Arbetslag går igenom material på en surfplatta vid en industriell rörinstallation.' },
  '/branscher/gruva': { src: gruva, alt: 'Översikt över ett dagbrott med terrasser, transportvägar och upplag.' },
  '/branscher/hamnar': { src: hamnar, alt: 'Drönarpilot vid en kaj med lastningsarmar och rörledningar.' },
}

export function IndustryImage({ path, card = false, inline = false, priority = false, sizes }: { path: string; card?: boolean; inline?: boolean; priority?: boolean; sizes?: string }) {
  const image = images[path]
  if (!image) return null
  return <div className={inline ? 'overflow-hidden rounded-2xl' : card ? 'mb-4 overflow-hidden rounded-xl' : 'container-wide pb-10 sm:pb-16'}>
    <Image
      src={image.src}
      alt={image.alt}
      width={1672}
      height={941}
      priority={priority}
      sizes={sizes ?? (inline
        ? '(min-width: 1280px) 584px, (min-width: 1024px) calc(50vw - 56px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 40px)'
        : card
          ? '(min-width: 1280px) 340px, (min-width: 1024px) calc(33.333vw - 88px), (min-width: 640px) calc(50vw - 86px), calc(100vw - 90px)'
          : '(min-width: 1280px) 1216px, (min-width: 1024px) calc(100vw - 64px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 40px)')}
      className={`h-auto w-full ${card ? '' : 'rounded-2xl'}`}
    />
  </div>
}
