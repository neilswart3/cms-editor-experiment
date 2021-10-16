import React from 'react'
import { Editor, Header, Navigation } from 'src/components'
import Styled from './styles'

interface Props {
  children: React.ReactNode
}

const GeneralLayout: React.FC<Props> = ({ children }) => {
  return (
    <Styled.GeneralLayout>
      <Styled.PageContent
        animate='active'
        variants={{
          active: { transform: 'none' },
          inActive: {
            transform: 'translate3d(100px, 0px, -600px) rotateY(30deg)',
          },
        }}
      >
        <Header />
        {children}
      </Styled.PageContent>
      <Navigation />
      <Editor />
    </Styled.GeneralLayout>
  )
}

export default GeneralLayout
