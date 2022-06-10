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
