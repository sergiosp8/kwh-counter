import FormKwhCounter from './components/kwhcounter/FormKwhCounter'
import { KwhCounterEntidad } from '././components/kwhcounter/types'
import { useState } from 'react'

const INITAL_STATE: KwhCounterEntidad = {
  fechaCorte: null,
  modoCobro: 'mensual',
  kwhCorte: '',
  kwhActual: ''
}

function App() {
  const [kwhCounterEntidad, setKwhCounterEntidad] = useState<KwhCounterEntidad>(INITAL_STATE)

  return (
    <div className="App">
      <h1>Kwh Counter 💡👌</h1>
      <FormKwhCounter />
      {/* <p>Dias Trabscurridos : {diasTranscurridos}</p>
      <p>Kwh consumidos : {kwhConsumidos} kwh</p>
      <p>Kwh promedio diarios : {kwhPromedio} kwh</p>
      <p>Dias para terminar este periodo : {diasTerminoPeriodo} días</p> */}
    </div>
  )
}

export default App
