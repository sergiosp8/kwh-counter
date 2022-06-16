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

import { ContainerApp, Input, ButtonDark } from './styledGenerals'
import MensajeError from './MensajeError'

export default function FormKwhCounter({
  actualizarKwhCounterEntidad
}: {
  actualizarKwhCounterEntidad: (kwhCounterEntidad: KwhCounterEntidad) => void
}) {
  const [fechaCorte, setFechaCorte] = useState<string | null>(null)
  const [modoCobro, setModoCobro] = useState<metodoCrobro>('mensual')
  const [kwhCorte, setKwhCorte] = useState<number | string>('')
  const [kwhActual, setKwhActual] = useState<number | string>('')
  const [mensajeError, setMensageError] = useState<string>('')

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
      setMensageError('')
    }, 3000)
  }

  const agregarMensajeError = (mensaje: string) => {
    setMensageError(mensaje)
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
    console.log('diasTranscurridos', diasTranscurridos)
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
        <ContainerApp>
          {mensajeError !== '' && <MensajeError mensaje={mensajeError} />}
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
            pattern="\d*"
          />
          <Input
            onChange={handleChangeInputText}
            type="number"
            name="kwhactual"
            value={kwhActual}
            placeholder="Lectura Actual"
            pattern="\d*"
          />
          <ButtonDark>Calcular</ButtonDark>
        </ContainerApp>
      </form>
    </>
  )
}
