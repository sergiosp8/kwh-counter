export type metodoCrobro = 'mensual' | 'bimestral'

export interface KwhCounterEntidad {
  fechaCorte: string | null
  modoCobro: metodoCrobro
  kwhConsumido: string
  kwhPromedio: string
  diasTranscurridos: string
  diasParaTerminarPeriodo: string
}
