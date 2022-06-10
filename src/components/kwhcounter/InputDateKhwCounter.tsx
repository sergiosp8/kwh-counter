import dayjs from 'dayjs'
import React from 'react'
import { fechaMayorQueHoy, obtenerFecha } from '../../utilidades'

export default function InputDateKhwCounter({ setFechaCorte }: { setFechaCorte: (fecha: dayjs.Dayjs | null) => void }) {
  const handleChangeInputDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const temp = obtenerFecha(event.target.value)
    !fechaMayorQueHoy(temp) ? setFechaCorte(temp) : setFechaCorte(null)
  }

  return (
    <>
      <input onChange={handleChangeInputDate} type="date" name="fechacorte" />
    </>
  )
}
