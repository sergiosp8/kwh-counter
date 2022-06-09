function App() {
  const [diasTranscurridos, setDiasTranscurridos] = useState(0)
  const [kwhConsumidos, setKwhConsumidos] = useState('')
  const [kwhPromedio, setKwhPromedio] = useState('')
  const [diasTerminoPeriodo, setDiasTerminoPeriodo] = useState(0)

  return (
    <div className="App">
      <h1>Kwh Counter 💡👌</h1>

      <p>Dias Trabscurridos : {diasTranscurridos}</p>
      <p>Kwh consumidos : {kwhConsumidos} kwh</p>
      <p>Kwh promedio diarios : {kwhPromedio} kwh</p>
      <p>Dias para terminar este periodo : {diasTerminoPeriodo} días</p>
    </div>
  )
}

export default App
