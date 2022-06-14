import { metodoCrobro } from './components/kwhcounter/types'
import * as dayjs from 'dayjs'
import es from 'dayjs/locale/es'

dayjs.locale(es)

export const diasTranscurridosAlDiaDeHoy = (fecha: dayjs.Dayjs): string => {
  const fechaActual = dayjs()
  const diasTranscurridos = fechaActual.diff(fecha.format('YYYY-MM-DD'), 'days')
  return diasTranscurridos.toString()
}

export const obtenerFecha = (fecha: string): dayjs.Dayjs => {
  return dayjs(fecha)
}

export const fechaMayorQueHoy = (fecha: dayjs.Dayjs): boolean => {
  const fechaActual = dayjs()
  return fecha.isAfter(fechaActual)
}

export const KwmConusidos = (kwhcorte: number, kwhactual: number): string => {
  const kwmConusidos = kwhactual - kwhcorte
  return kwmConusidos.toString()
}

export const kwhPromedioDiario = (kwhconsumidos: number, diasTranscurridos: number): string => {
  const kwhPromedio = kwhconsumidos / diasTranscurridos
  return kwhPromedio.toFixed(2).toString()
}

export const diasRestantesEntreDosFechas = (fechaInicio: dayjs.Dayjs, fechaFin: dayjs.Dayjs): string => {
  const diasRestantes = fechaFin.diff(fechaInicio, 'days')
  return diasRestantes.toString()
}

export const diasTranscurridosDelPeriodo = (fechaInicio: dayjs.Dayjs, metodoCrobro: metodoCrobro): string => {
  const fechaFinPeriodo = fechaInicio.add(metodoCrobro === 'mensual' ? 30 : 60, 'days')
  const diasTranscurridos = fechaFinPeriodo.diff(dayjs(), 'days')
  return diasTranscurridos.toString()
}
