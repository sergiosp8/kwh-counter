import dayjs from 'dayjs'
import React, { useState } from 'react'
import InputDateKhwCounter from './InputDateKhwCounter'
import CheckBoxKwhCounter from './CheckBoxKwhCounter'
import { KwhCounterEntidad, metodoCrobro } from './types'
import {
  diasTranscurridosAlDiaDeHoy,
  diasTranscurridosDelPeriodo,
  KwmConusidos,
  kwhPromedioDiario
} from '../../utilidades'
import styled from 'styled-components'

const Input = styled.input`
  color: white;
  padding: 0.3rem;
  border: none;
  border-radius: 0.2rem;
  background-color: rgb(209 213 219);
  background-color: rgb(17 24 39);
  color-scheme: dark;
`

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: rgb(55 65 81);
  gap: 0.3rem;
`

const ButtonDark = styled.button`
  color: white;
  padding: 0.3rem;
  background-color: rgb(28 25 23);
  border: none;
  padding: 0.5rem;
  border-radius: 0.4rem;

  &:hover {
    background-color: rgb(17 24 39);
  }
`

export default function FormKwhCounter({
  actualizarKwhCounterEntidad
}: {
  actualizarKwhCounterEntidad: (kwhCounterEntidad: KwhCounterEntidad) => void
}) {
  const [fechaCorte, setFechaCorte] = useState<dayjs.Dayjs | null>(null)
  const [modoCobro, setModoCobro] = useState<metodoCrobro>('mensual')
  const [kwhCorte, setKwhCorte] = useState<number | string>('')
  const [kwhActual, setKwhActual] = useState<number | string>('')
  const [mensageError, setMensageError] = useState<string[]>([])

  const handleChangeInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    if (name === 'kwhcorte') {
      setKwhCorte(value ? parseInt(value) : '')
    }
    if (name === 'kwhactual') {
      setKwhActual(value ? parseInt(value) : '')
    }
  }

  const limpiarMesnsajesError = () => {
    setTimeout(() => {
      setMensageError([])
    }, 3000)
  }

  const agregarMensajeError = (mensaje: string) => {
    setMensageError([...mensageError, mensaje])
    limpiarMesnsajesError()
  }

  const handleSubmitCalcular = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (fechaCorte === null) {
      const tempString = 'Fecha de corte no definida'
      agregarMensajeError(tempString)
      return
    }
    if (kwhCorte === '' || kwhActual === '') {
      const tempString = 'Ingrese los kwhs'
      agregarMensajeError(tempString)
      return
    }

    const diasTranscurridos = diasTranscurridosAlDiaDeHoy(fechaCorte)
    const diasParaTerrminarPeriodo = diasTranscurridosDelPeriodo(fechaCorte, modoCobro)
    const kwhConsumido = KwmConusidos(+kwhCorte, +kwhActual)
    const kwhPromedio = kwhPromedioDiario(+kwhConsumido, +diasTranscurridos)

    actualizarKwhCounterEntidad({
      fechaCorte,
      modoCobro,
      diasTranscurridos,
      diasParaTerminarPeriodo: diasParaTerrminarPeriodo,
      kwhConsumido,
      kwhPromedio
    })
  }

  return (
    <>
      <form onSubmit={handleSubmitCalcular}>
        <ContainerForm>
          <div>
            <label htmlFor="fechacorte">Selecciona fecha de Corte : </label>
            <InputDateKhwCounter setFechaCorte={setFechaCorte} />
          </div>
          <CheckBoxKwhCounter setModoCobro={setModoCobro} defaultModoCobro={modoCobro} />
          <Input
            onChange={handleChangeInputText}
            type="number"
            name="kwhcorte"
            value={kwhCorte}
            placeholder="Ultima Lectura"
          />
          <Input
            onChange={handleChangeInputText}
            type="number"
            name="kwhactual"
            value={kwhActual}
            placeholder="Lectura Actual"
          />
          <ButtonDark>Calcular</ButtonDark>
        </ContainerForm>
      </form>
      {JSON.stringify(mensageError)}
    </>
  )
}
