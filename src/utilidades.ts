import { metodoCrobro } from './components/kwhcounter/types'
import dayjs from 'dayjs'
import es from 'dayjs/locale/es'

dayjs.locale(es)

export const diasTranscurridosAlDiaDeHoy = (fecha: string): string => {
  const fechaActual = dayjs(fecha)
  const fechaHoy = dayjs()
  const diasTranscurridos = fechaHoy.diff(fechaActual, 'days')
  return diasTranscurridos.toString()
}

export const obtenerFecha = (fecha: string): dayjs.Dayjs => {
  return dayjs(fecha)
}

export const fechaMayorQueHoy = (fecha: string): boolean => {
  const fechaActual = dayjs(fecha)
  const fechaHoy = dayjs()
  return fechaHoy.isAfter(fechaActual)
}

export const KwmConusidos = (kwhcorte: number, kwhactual: number): string => {
  const kwmConusidos = kwhactual - kwhcorte
  return kwmConusidos.toString()
}

export const kwhPromedioDiario = (kwhconsumidos: number, diasTranscurridos: number): string => {
  const kwhPromedio = kwhconsumidos / diasTranscurridos
  return kwhPromedio.toFixed(2).toString()
}

export const diasRestantesEntreDosFechas = (fechaInicio: string, fechaFin: string): string => {
  const fInicio = dayjs(fechaInicio)
  const fFin = dayjs(fechaFin)
  const diasRestantes = fFin.diff(fInicio, 'days')
  return diasRestantes.toString()
}

export const diasTranscurridosDelPeriodo = (fechaInicio: string, metodoCrobro: metodoCrobro): string => {
  const fInicio = dayjs(fechaInicio)
  const fechaFinPeriodo = fInicio.add(metodoCrobro === 'mensual' ? 30 : 60, 'days')
  const diasTranscurridos = fechaFinPeriodo.diff(dayjs(), 'days')
  return diasTranscurridos.toString()
}
