import React from 'react'
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

interface Props {
  setFechaCorte: (fecha: string | null) => void
}

export default function InputDateKhwCounter({ setFechaCorte }: Props) {
  const [fechaCorte, setFechaCorteState] = React.useState<string>('')
  const handleChangeInputDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const temp = event.target.value
    setFechaCorte(temp)
    setFechaCorteState(temp)
  }

  return (
    <>
      <InputDate onChange={handleChangeInputDate} type="date" name="fechacorte" value={fechaCorte} />
    </>
  )
}
