import Image from 'next/image'

const images: Record<string, { src: string; alt: string }> = {
  '/branscher/deponier': { src: '/images/branscher/deponier.webp', alt: 'Drönare över en deponicell med gasbrunnar och ett arbetslag vid områdets kant.' },
  '/branscher/biogas': { src: '/images/branscher/biogas.webp', alt: 'Drönarpilot vid en biogasanläggning med rötkammare och rörinstallationer.' },
  '/branscher/reningsverk': { src: '/images/branscher/reningsverk.webp', alt: 'Översikt ovanifrån över reningsbassänger, gångbroar och en drönare.' },
  '/branscher/olja-gas': { src: '/images/branscher/olja-gas.webp', alt: 'Arbetslag går igenom material på en surfplatta vid en industriell rörinstallation.' },
  '/branscher/gruva': { src: '/images/branscher/gruva.webp', alt: 'Översikt över ett dagbrott med terrasser, transportvägar och upplag.' },
  '/branscher/hamnar': { src: '/images/branscher/hamnar.webp', alt: 'Drönarpilot vid en kaj med lastningsarmar och rörledningar.' },
}

export function IndustryImage({ path, card = false, inline = false, priority = false }: { path: string; card?: boolean; inline?: boolean; priority?: boolean }) {
  const image = images[path]
  if (!image) return null
  return <div className={inline ? 'overflow-hidden rounded-2xl' : card ? 'mb-4 overflow-hidden rounded-xl' : 'container-wide pb-10 sm:pb-16'}>
    <Image
      src={image.src}
      alt={image.alt}
      width={1672}
      height={941}
      priority={priority}
      sizes={inline ? '(max-width: 1023px) 100vw, 50vw' : card ? '(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw' : '(max-width: 1279px) 100vw, 1200px'}
      className={`h-auto w-full ${card ? '' : 'rounded-2xl'}`}
    />
  </div>
}
