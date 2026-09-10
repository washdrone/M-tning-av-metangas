export const HELP_WITH_MEASUREMENT = 'Jag behöver hjälp att välja mätning'
export const assignmentTypes = [
  HELP_WITH_MEASUREMENT,
  'Metanmätning',
  'Metanmätning – deponi',
  'Emissionsmätning – biogas',
  'Emissionsmätning – reningsverk',
  'Gasmätning – industri (LDAR)',
  'LDAR-inspektion – raffinaderi',
  'OGI-kamerainspektion',
  'Växthusgasmätning',
  'CSRD / Scope 1 – utsläppsdata',
  'Annat',
] as const
export const interestTypes: Record<string, string> = {
  metan: 'Metanmätning', deponi: 'Metanmätning – deponi',
  biogas: 'Emissionsmätning – biogas', ldar: 'Gasmätning – industri (LDAR)',
  rapportering: 'CSRD / Scope 1 – utsläppsdata',
}
