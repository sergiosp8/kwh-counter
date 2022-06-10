// import React, { useState } from 'react'

import dayjs from 'dayjs'
import React, { useState } from 'react'
import InputDateKhwCounter from './InputDateKhwCounter'
import CheckBoxKwhCounter from './CheckBoxKwhCounter'
import { metodoCrobro } from './types'

export default function FormKwhCounter() {
  const [fechaCorte, setFechaCorte] = useState<dayjs.Dayjs | null>(null)
  const [modoCobro, setModoCobro] = useState<metodoCrobro>('mensual')
  const [kwhCorte, setKwhCorte] = useState<number | string>('')
  const [kwhActual, setKwhActual] = useState<number | string>('')

  const handleChangeInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    if (name === 'kwhcorte') {
      setKwhCorte(value ? parseInt(value) : '')
    }
    if (name === 'kwhactual') {
      setKwhActual(value ? parseInt(value) : '')
    }
  }

  // const handleSubmitCalcular = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()

  //   let diasDelPeriodo = 0
  //   if (mensual) {
  //     diasDelPeriodo = 30
  //   }
  //   if (bimestral) {
  //     diasDelPeriodo = 60
  //   }

  //   const kwhConsumidosTemp = kwhActual - kwhCorte
  //   const tempDiasTrans = diasTranscurridosAlDiaDeHoy(fechaCorte as dayjs.Dayjs)
  //   setDiasTranscurridos(+tempDiasTrans)

  //   setKwhConsumidos(kwhConsumidosTemp.toString())

  //   const tempKwhPromedio = kwhConsumidosTemp / diasDelPeriodo
  //   setKwhPromedio(tempKwhPromedio.toFixed(2).toString())

  //   const tempDiasTerminoPeriodo = diasDelPeriodo - +tempDiasTrans
  //   setDiasTerminoPeriodo(+tempDiasTerminoPeriodo)
  // }

  return (
    <>
      <form>
        <label htmlFor="fechacorte">Selecciona fecha de Corte : </label>
        <InputDateKhwCounter setFechaCorte={setFechaCorte} />
        <CheckBoxKwhCounter setModoCobro={setModoCobro} defaultModoCobro={modoCobro} />
        <input
          onChange={handleChangeInputText}
          type="number"
          name="kwhcorte"
          value={kwhCorte}
          placeholder="Ultima Lectura"
        />
        <input
          onChange={handleChangeInputText}
          type="number"
          name="kwhactual"
          value={kwhActual}
          placeholder="Lectura Actual"
        />
        <button>Calcular</button>
      </form>
    </>
  )
}
