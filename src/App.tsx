import React, { useState } from 'react'
import * as dayjs from 'dayjs'
import es from 'dayjs/locale/es'

dayjs.locale(es)

function App() {
  const [fechaCorte, setFechaCorte] = useState<dayjs.Dayjs | null>(null)
  const [kwhCorte, setKwhCorte] = useState(0)
  const [kwhActual, setKwhActual] = useState(0)
  const [mensual, setMensual] = useState(false)
  const [bimestral, setBimestral] = useState(false)
  const [isMensualActivo, setIsMensualActivo] = useState(true)
  const [isBimestralActivo, setIsBimestralActivo] = useState(true)
  const [diasTranscurridos, setDiasTranscurridos] = useState(0)
  const [kwhConsumidos, setKwhConsumidos] = useState('')
  const [kwhPromedio, setKwhPromedio] = useState('')
  const [diasTerminoPeriodo, setDiasTerminoPeriodo] = useState(0)

  const handleChangeInputDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const temp = dayjs(event.target.value)
    setFechaCorte(temp)
  }

  const handleChangeInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    if (name === 'kwhcorte') {
      setKwhCorte(parseInt(value))
    }
    if (name === 'kwhactual') {
      setKwhActual(parseInt(value))
    }
  }

  const handleChangeInputCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target
    if (name === 'mensual') {
      setMensual(checked)
      setIsMensualActivo(true)
      setIsBimestralActivo(!isBimestralActivo)
    }

    if (name === 'bimestral') {
      setBimestral(checked)
      setIsBimestralActivo(true)
      setIsMensualActivo(!isMensualActivo)
    }
  }

  const handleSubmitCalcular = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    let diasDelPeriodo = 0
    if (mensual) {
      diasDelPeriodo = 30
    }
    if (bimestral) {
      diasDelPeriodo = 60
    }

    const kwhConsumidosTemp = kwhActual - kwhCorte
    console.log(kwhConsumidosTemp)
    const tempDiasTrans = calcularDiasTranscurridosAlDiaDeHoy(fechaCorte as dayjs.Dayjs)
    setDiasTranscurridos(+tempDiasTrans)

    setKwhConsumidos(kwhConsumidosTemp.toString())

    const tempKwhPromedio = kwhConsumidosTemp / diasDelPeriodo
    setKwhPromedio(tempKwhPromedio.toFixed(2).toString())

    const tempDiasTerminoPeriodo = diasDelPeriodo - +tempDiasTrans
    setDiasTerminoPeriodo(+tempDiasTerminoPeriodo)
  }

  const calcularDiasTranscurridosAlDiaDeHoy = (fecha: dayjs.Dayjs): string => {
    const fechaActual = dayjs()
    const diasTranscurridos = fechaActual.diff(fecha.format('YYYY-MM-DD'), 'days')
    return diasTranscurridos.toString()
  }

  return (
    <div className="App">
      <h1>Kwh Counter 💡👌</h1>
      <form onSubmit={handleSubmitCalcular}>
        <label htmlFor="fechacorte">Fecha de corte : </label>
        <input onChange={handleChangeInputDate} type="date" name="fechacorte" />
        <label>
          Mensual :
          <input onChange={handleChangeInputCheckbox} type="checkbox" name="mensual" disabled={!isMensualActivo} />
        </label>

        <label>
          Bimestral :
          <input onChange={handleChangeInputCheckbox} type="checkbox" name="bimestral" disabled={!isBimestralActivo} />
        </label>
        <label htmlFor="kwhcorte">Kwh al corte : </label>
        <input onChange={handleChangeInputText} type="number" name="kwhcorte" value={kwhCorte} />
        <label htmlFor="kwhactual">Kwh actuales : </label>
        <input onChange={handleChangeInputText} type="number" name="kwhactual" value={kwhActual} />
        <button>Calcular</button>
      </form>
      <p>Dias Trabscurridos : {diasTranscurridos}</p>
      <p>Kwh consumidos : {kwhConsumidos} kwh</p>
      <p>Kwh promedio diarios : {kwhPromedio} kwh</p>
      <p>Dias para terminar este periodo : {diasTerminoPeriodo} días</p>
    </div>
  )
}

export default App
