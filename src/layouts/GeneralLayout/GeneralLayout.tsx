import React from 'react'
import { Header } from 'src/components'
import Styled from './styles'

interface Props {
  children: React.ReactNode
}

const GeneralLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <Styled.GeneralLayout>
      <Header />
      {children}
    </Styled.GeneralLayout>
  )
}

export default GeneralLayout
