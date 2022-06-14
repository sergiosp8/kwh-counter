import React from 'react'
import { ContainerApp, SpanResaltar, LabelCenterContainer } from './styledGenerals'
import { BiCalendar, BiCaretRightSquare } from 'react-icons/bi'

interface Props {
  diasTranscurridos: string
  kwhConsumidos: string
  kwhPromedio: string
  diasTerminoPeriodo: string
}
const CardKwhCounter: React.FC<Props> = ({ diasTranscurridos, diasTerminoPeriodo, kwhConsumidos, kwhPromedio }) => {
  return (
    <ContainerApp>
      <div>
        <LabelCenterContainer>
          <BiCalendar color="#86efac" />
          <SpanResaltar>Dias Trabscurridos</SpanResaltar> : {diasTranscurridos}
        </LabelCenterContainer>
        <LabelCenterContainer>
          <BiCaretRightSquare color="#86efac" />
          <SpanResaltar>Kwh consumidos</SpanResaltar> : {kwhConsumidos} kwh
        </LabelCenterContainer>
        <LabelCenterContainer>
          <BiCaretRightSquare color="#86efac" />
          <SpanResaltar color="#86efac">Kwh promedio diarios</SpanResaltar> : {kwhPromedio} kwh
        </LabelCenterContainer>
        <LabelCenterContainer>
          <BiCalendar color="#86efac" />
          <SpanResaltar>Dias para terminar este periodo</SpanResaltar> : {diasTerminoPeriodo} días
        </LabelCenterContainer>
      </div>
    </ContainerApp>
  )
}

export default CardKwhCounter
