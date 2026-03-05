/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Gamla /matning URLs → nya struktur
      { source: '/matning', destination: '/tjanster', permanent: true },
      { source: '/matning/deponi', destination: '/branscher/deponier', permanent: true },
      { source: '/matning/biogas', destination: '/branscher/biogas', permanent: true },
      { source: '/matning/reningsverk', destination: '/branscher/reningsverk', permanent: true },
      { source: '/matning/industri', destination: '/branscher/olja-gas', permanent: true },
      { source: '/matning/leveranser', destination: '/tjanster/leveranser', permanent: true },
      { source: '/matning/metodik', destination: '/tjanster/metodik', permanent: true },
      { source: '/matning/faq', destination: '/faq', permanent: true },
      { source: '/matning/case', destination: '/case', permanent: true },
      { source: '/matning/kontakt', destination: '/kontakt', permanent: true },
    ]
  },
}

module.exports = nextConfig
