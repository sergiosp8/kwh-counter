import React from 'react'
import styled from 'styled-components'

const CardKwhDescripcion = styled.div`
  background-color: rgb(55 65 81);
  width: 400px;
  padding: 1.5rem;
  border-radius: 0.5rem;
`

const SpanResaltar = styled.span`
  font-weight: bold;
`

interface Props {
  diasTranscurridos: string
  kwhConsumidos: string
  kwhPromedio: string
  diasTerminoPeriodo: string
}
const CardKwhCounter: React.FC<Props> = ({ diasTranscurridos, diasTerminoPeriodo, kwhConsumidos, kwhPromedio }) => {
  return (
    <CardKwhDescripcion>
      <p>
        <SpanResaltar>Dias Trabscurridos</SpanResaltar> : {diasTranscurridos}
      </p>
      <p>
        <SpanResaltar>Kwh consumidos</SpanResaltar> : {kwhConsumidos} kwh
      </p>
      <p>
        <SpanResaltar>Kwh promedio diarios</SpanResaltar> : {kwhPromedio} kwh
      </p>
      <p>
        <SpanResaltar>Dias para terminar este periodo</SpanResaltar> : {diasTerminoPeriodo} días
      </p>
    </CardKwhDescripcion>
  )
}

export default CardKwhCounter
