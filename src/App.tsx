import FormKwhCounter from './components/kwhcounter/FormKwhCounter'
import { KwhCounterEntidad } from '././components/kwhcounter/types'
import CardKwhCounter from './components/kwhcounter/CardKwhCounter'
import './App.css'
import useLocalStorage from './hooks/useLocalStorage'

const INITAL_STATE: KwhCounterEntidad = {
  fechaCorte: '',
  modoCobro: 'mensual',
  kwhCorte: '',
  kwhConsumido: '',
  kwhPromedio: '',
  diasTranscurridos: '',
  diasParaTerminarPeriodo: ''
}

function App() {
  const [kwhCounterEntidad, setKwhCounterEntidad] = useLocalStorage<KwhCounterEntidad>('kwhApp', INITAL_STATE)
  const { kwhConsumido, kwhPromedio, diasParaTerminarPeriodo, diasTranscurridos } = kwhCounterEntidad

  const actualizarKwhCounterEntidad = (kwhCounterEntidad: KwhCounterEntidad) => {
    setKwhCounterEntidad(kwhCounterEntidad)
  }

  return (
    <div className="container">
      <h1>Kwh Counter 💡👌</h1>
      <FormKwhCounter actualizarKwhCounterEntidad={actualizarKwhCounterEntidad} kwhCounterEntidad={kwhCounterEntidad} />
      {kwhCounterEntidad.fechaCorte !== '' && (
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
