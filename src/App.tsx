import FormKwhCounter from './components/kwhcounter/FormKwhCounter'
import { KwhCounterEntidad } from '././components/kwhcounter/types'
import { useState } from 'react'
import CardKwhCounter from './components/kwhcounter/CardKwhCounter'

const INITAL_STATE: KwhCounterEntidad = {
  fechaCorte: null,
  modoCobro: 'mensual',
  kwhCorte: 0,
  kwhActual: 0
}

function App() {
  const [kwhCounterEntidad, setKwhCounterEntidad] = useState<KwhCounterEntidad>(INITAL_STATE)

  const actualizarKwhCounterEntidad = (kwhCounterEntidad: KwhCounterEntidad) => {
    setKwhCounterEntidad(kwhCounterEntidad)
  }

  return (
    <div className="App">
      <h1>Kwh Counter 💡👌</h1>
      {JSON.stringify(kwhCounterEntidad)}
      <FormKwhCounter actualizarKwhCounterEntidad={actualizarKwhCounterEntidad} />
      {kwhCounterEntidad.fechaCorte && <CardKwhCounter />}
      {/* <p>Dias Trabscurridos : {diasTranscurridos}</p>
      <p>Kwh consumidos : {kwhConsumidos} kwh</p>
      <p>Kwh promedio diarios : {kwhPromedio} kwh</p>
      <p>Dias para terminar este periodo : {diasTerminoPeriodo} días</p> */}
    </div>
  )
}

export default App
