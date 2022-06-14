import React, { useEffect, useRef, useState } from 'react'
import { metodoCrobro } from './types'

interface checkBoxProps {
  setModoCobro: (modoCobro: metodoCrobro) => void
  defaultModoCobro: metodoCrobro
}

function CheckBoxKwhCounter({ setModoCobro, defaultModoCobro }: checkBoxProps) {
  const [isMensualActivo, setIsMensualActivo] = useState(false)
  const [isBimestralActivo, setIsBimestralActivo] = useState(false)
  const checkBoxMensual = useRef<HTMLInputElement | null>(null)
  const checkBoxBimetral = useRef<HTMLInputElement | null>(null)

  const handleChangeInputCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target
    toggleCheckbox(name, checked)
  }

  const toggleCheckbox = (name: string, checked: boolean) => {
    if (name === 'mensual') {
      setIsBimestralActivo(checked)
      setModoCobro('mensual')
    } else if (name === 'bimestral') {
      setIsMensualActivo(checked)
      setModoCobro('bimestral')
    }
  }

  useEffect(() => {
    if (defaultModoCobro === 'mensual') {
      if (checkBoxMensual.current) {
        checkBoxMensual.current.checked = true
        setIsBimestralActivo(true)
      }
    } else if (defaultModoCobro === 'bimestral') {
      if (checkBoxBimetral.current) {
        checkBoxBimetral.current.checked = true
        setIsMensualActivo(true)
      }
    }
  }, [])

  return (
    <div>
      <label>
        Mesnual
        <input
          ref={checkBoxMensual}
          onChange={handleChangeInputCheckbox}
          type="checkbox"
          name="mensual"
          disabled={isMensualActivo}
        />
      </label>
      <label>
        Bimestral
        <input
          ref={checkBoxBimetral}
          onChange={handleChangeInputCheckbox}
          type="checkbox"
          name="bimestral"
          disabled={isBimestralActivo}
        />
      </label>
    </div>
  )
}
export default CheckBoxKwhCounter
