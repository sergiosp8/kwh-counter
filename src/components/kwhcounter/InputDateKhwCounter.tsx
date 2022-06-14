import dayjs from 'dayjs'
import React from 'react'
import { fechaMayorQueHoy, obtenerFecha } from '../../utilidades'
import styled from 'styled-components'

const InputDate = styled.input`
  color: white;
  padding: 0.3rem;
  border: none;
  border-radius: 0.2rem;
  background-color: rgb(209 213 219);
  background-color: rgb(17 24 39);
  color-scheme: dark;
`

export default function InputDateKhwCounter({ setFechaCorte }: { setFechaCorte: (fecha: dayjs.Dayjs | null) => void }) {
  const handleChangeInputDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const temp = obtenerFecha(event.target.value)
    !fechaMayorQueHoy(temp) ? setFechaCorte(temp) : setFechaCorte(null)
  }

  return (
    <>
      <InputDate onChange={handleChangeInputDate} type="date" name="fechacorte" />
    </>
  )
}
