import React from 'react'

interface Props {
  diasTranscurridos: string
  kwhConsumidos: string
  kwhPromedio: string
  diasTerminoPeriodo: string
}
const CardKwhCounter: React.FC<Props> = ({ diasTranscurridos, diasTerminoPeriodo, kwhConsumidos, kwhPromedio }) => {
  return (
    <>
      <p>Dias Trabscurridos : {diasTranscurridos}</p>
      <p>Kwh consumidos : {kwhConsumidos} kwh</p>
      <p>Kwh promedio diarios : {kwhPromedio} kwh</p>
      <p>Dias para terminar este periodo : {diasTerminoPeriodo} días</p>
    </>
  )
}

export default CardKwhCounter
