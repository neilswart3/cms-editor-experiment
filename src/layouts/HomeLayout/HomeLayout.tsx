import React from 'react'
import { getImagePalette } from 'src/app/lib'
import Styled from './styles'

type Background = {
  image: string
  name: string
}

interface Props {
  background: Background
  children: React.ReactNode
}

const HomeLayout: React.FC<Props> = ({ children, background }) => {
  return (
    <Styled.HomeLayout>
      <Styled.Background>
        <Styled.Image image={background.image} />
      </Styled.Background>
      <Styled.ContentWrap>
        <Styled.ContentBackdrop />
        <Styled.Content>{children}</Styled.Content>
      </Styled.ContentWrap>
    </Styled.HomeLayout>
  )
}

export default HomeLayout
