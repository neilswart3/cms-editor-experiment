import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { Editor, Navigation } from 'src/components'
import Styled from './styles'

interface Props {
  children: React.ReactNode
}

const EditorLayout: React.FC<Props> = ({ children }) => {
  const { asPath } = useRouter()
  const isAuth = asPath === '/auth'

  return (
    <Styled.EditorLayout>
      {!isAuth && <Editor />}
      {children}
      <Navigation />
    </Styled.EditorLayout>
  )
}

export default EditorLayout
