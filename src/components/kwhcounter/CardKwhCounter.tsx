interface Props {
  diasTranscurridos: string
  kwhConsumidos: string
  kwhPromedio: string
  diasTerminoPeriodo: string
}
export default function CardKwhCounter(props: Props) {
  return (
    <>
      <p>Dias Trabscurridos : {}</p>
      <p>Kwh consumidos : {} kwh</p>
      <p>Kwh promedio diarios : {} kwh</p>
      <p>Dias para terminar este periodo : {} días</p>
    </>
  )
}
