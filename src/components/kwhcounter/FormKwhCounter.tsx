import React, { useEffect, useState } from 'react'
import CheckBoxKwhCounter from './CheckBoxKwhCounter'
import { KwhCounterEntidad, metodoCrobro } from './types'
import {
  diasTranscurridosAlDiaDeHoy,
  diasTranscurridosDelPeriodo,
  KwmConusidos,
  kwhPromedioDiario,
  fechaMayorQueHoy,
  obtenerFecha
} from '../../utilidades'

import { ContainerApp, Input, ButtonDark } from './styledGenerals'
import MensajeError from './MensajeError'

interface FormKwhCounterProps {
  kwhCounterEntidad: KwhCounterEntidad
  actualizarKwhCounterEntidad: (kwhCounterEntidad: KwhCounterEntidad) => void
}

export default function FormKwhCounter({ kwhCounterEntidad, actualizarKwhCounterEntidad }: FormKwhCounterProps) {
  const [fechaCorte, setFechaCorte] = useState<string>('')
  const [modoCobro, setModoCobro] = useState<metodoCrobro>('mensual')
  const [kwhCorte, setKwhCorte] = useState<string>('')
  const [kwhActual, setKwhActual] = useState<string>('')
  const [mensajeError, setMensageError] = useState<string>('')

  const handleChangeInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    if (name === 'kwhcorte') {
      setKwhCorte(value || '')
    }
    if (name === 'kwhactual') {
      setKwhActual(value || '')
    }
    if (name === 'fechacorte') {
      const tempFecha = obtenerFecha(value)
      setFechaCorte(tempFecha || '')
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
    if (fechaCorte === '') {
      const tempString = 'Fecha de corte no definida'
      agregarMensajeError(tempString)
      return
    }
    if (fechaMayorQueHoy(fechaCorte)) {
      const tempString = 'La fecha de corte no puede ser mayor a la fecha actual'
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
      kwhPromedio,
      kwhCorte
    })
  }

  useEffect(() => {
    setFechaCorte(kwhCounterEntidad.fechaCorte)
    setKwhCorte(kwhCounterEntidad.kwhCorte)
    setModoCobro(kwhCounterEntidad.modoCobro)
  }, [])

  return (
    <>
      <form onSubmit={handleSubmitCalcular}>
        <ContainerApp>
          {mensajeError !== '' && <MensajeError mensaje={mensajeError} />}
          <div>
            <label htmlFor="fechacorte">Selecciona fecha de Corte : </label>
            <Input onChange={handleChangeInputText} type="date" name="fechacorte" value={fechaCorte.toString()} />
          </div>
          <CheckBoxKwhCounter setModoCobro={setModoCobro} defaultModoCobro={kwhCounterEntidad.modoCobro} />
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
