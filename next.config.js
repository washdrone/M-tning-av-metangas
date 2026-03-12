/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure consistent URL format (no trailing slash)
  trailingSlash: false,

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

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
