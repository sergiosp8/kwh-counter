import styled from 'styled-components'

export const Input = styled.input`
  color: white;
  padding: 0.3rem;
  border: none;
  border-radius: 0.2rem;
  background-color: rgb(209 213 219);
  background-color: rgb(17 24 39);
  color-scheme: dark;
`
export const ButtonDark = styled.button`
  color: white;
  padding: 0.3rem;
  background-color: rgb(28 25 23);
  border: none;
  padding: 0.5rem;
  border-radius: 0.4rem;

  &:hover {
    background-color: rgb(17 24 39);
  }
`
export const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: rgb(55 65 81);
  gap: 0.3rem;
  font-weight: 500;
  @media only screen and (max-width: 600px) {
    width: 350px;
    font-size: 0.8rem;
  }
`

export const ErrorContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  margin: 0.5rem;
  color: red;
  background-color: rgb(248 113 113);
  color: #7f1d1d;
  padding: 0.3rem;
  border-radius: 0.2rem;
`

export const SpanResaltar = styled.span`
  font-weight: bold;
`

export const LabelCenterContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
`
