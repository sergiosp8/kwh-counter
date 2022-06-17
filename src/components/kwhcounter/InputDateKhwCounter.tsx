import React from 'react'
import { Input } from './styledGenerals'

interface Props {
  setFechaCorte: (fecha: string) => void
}

export default function InputDateKhwCounter({ setFechaCorte }: Props) {
  const [fechaCorte, setFechaCorteState] = React.useState<string>('')
  const handleChangeInputDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const temp = event.target.value
    setFechaCorteState(temp)
    setFechaCorte(temp)
  }

  return (
    <>
      <Input onChange={handleChangeInputDate} type="date" name="fechacorte" value={fechaCorte} />
    </>
  )
}
