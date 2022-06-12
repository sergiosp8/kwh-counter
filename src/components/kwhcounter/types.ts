import dayjs from 'dayjs'

export type metodoCrobro = 'mensual' | 'bimestral'

export interface KwhCounterEntidad {
  fechaCorte: dayjs.Dayjs | null
  modoCobro: metodoCrobro
  kwhConsumido: string
  kwhPromedio: string
  diasTranscurridos: string
  diasParaTerminarPeriodo: string
}
