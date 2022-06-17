export type metodoCrobro = 'mensual' | 'bimestral'

export interface KwhCounterEntidad {
  fechaCorte: string
  modoCobro: metodoCrobro
  kwhCorte: string
  kwhConsumido: string
  kwhPromedio: string
  diasTranscurridos: string
  diasParaTerminarPeriodo: string
}
