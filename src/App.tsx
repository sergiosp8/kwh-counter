import FormKwhCounter from './components/kwhcounter/FormKwhCounter'
import { KwhCounterEntidad } from '././components/kwhcounter/types'
import { useState } from 'react'
import CardKwhCounter from './components/kwhcounter/CardKwhCounter'
import './App.css'

const INITAL_STATE: KwhCounterEntidad = {
  fechaCorte: null,
  modoCobro: 'mensual',
  kwhConsumido: '',
  kwhPromedio: '',
  diasTranscurridos: '',
  diasParaTerminarPeriodo: ''
}

function App() {
  const [kwhCounterEntidad, setKwhCounterEntidad] = useState<KwhCounterEntidad>(INITAL_STATE)
  const { kwhConsumido, kwhPromedio, diasParaTerminarPeriodo, diasTranscurridos } = kwhCounterEntidad

  const actualizarKwhCounterEntidad = (kwhCounterEntidad: KwhCounterEntidad) => {
    setKwhCounterEntidad(kwhCounterEntidad)
  }

  return (
    <div className="container">
      <h1>Kwh Counter 💡👌</h1>
      <FormKwhCounter actualizarKwhCounterEntidad={actualizarKwhCounterEntidad} />
      {kwhCounterEntidad.fechaCorte && (
        <CardKwhCounter
          kwhConsumidos={kwhConsumido}
          kwhPromedio={kwhPromedio}
          diasTerminoPeriodo={diasParaTerminarPeriodo}
          diasTranscurridos={diasTranscurridos}
        />
      )}
    </div>
  )
}

export default App
