import dayjs from 'dayjs'

export type metodoCrobro = 'mensual' | 'bimestral'

export interface KwhCounterEntidad {
  fechaCorte: dayjs.Dayjs | null
  modoCobro: metodoCrobro
  kwhCorte: number | string
  kwhActual: number | string
}
