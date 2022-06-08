import React, { useState } from 'react'
import './App.css'

function App() {
  const [fechaCorte, setFechaCorte] = useState<Date | null>(null)
  const [kwhcorte, setKwhCorte] = useState(0)
  const [kwhActual, setKwhActual] = useState(0)
  const [mensual, setMensual] = useState(false)
  const [bimestral, setBimestral] = useState(false)
  const [isMensualActivo, setIsMensualActivo] = useState(true)
  const [isBimestralActivo, setIsBimestralActivo] = useState(true)

  const handleChangeInputDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tempDate = new Date(event.target.value + 'T00:00:00')
    setFechaCorte(tempDate)
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

  return (
    <div className="App">
      <h1>Kwh Counter 💡👌</h1>
      <form action="">
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
        <input onChange={handleChangeInputText} type="number" name="kwhcorte" value={kwhcorte} />
        <label htmlFor="kwhactual">Kwh actuales : </label>
        <input onChange={handleChangeInputText} type="number" name="kwhactual" value={kwhActual} />
        <button>Calcular</button>
      </form>
      <p>Dias Trabscurridos : 15</p>
      <p>Kwh consumidos : 580 kwh</p>
      <p>Kwh promedio diarios : 18.57 kwh</p>
    </div>
  )
}

export default App
