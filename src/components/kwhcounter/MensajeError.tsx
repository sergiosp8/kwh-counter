import { ErrorContainer } from './styledGenerals'
import { BiErrorAlt } from 'react-icons/bi'

interface Props {
  mensaje: string
}

function MensajeError({ mensaje }: Props) {
  return (
    <ErrorContainer>
      <BiErrorAlt color="white" />
      <p>{mensaje}</p>
    </ErrorContainer>
  )
}

export default MensajeError
