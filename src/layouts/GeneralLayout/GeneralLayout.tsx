import React from 'react'
import { Editor, Header } from 'src/components'
import Styled from './styles'

interface Props {
  children: React.ReactNode
}

const GeneralLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <Styled.GeneralLayout>
      <Styled.PageContent>
        <Header />
        {children}
      </Styled.PageContent>
      <Editor />
    </Styled.GeneralLayout>
  )
}

export default GeneralLayout
