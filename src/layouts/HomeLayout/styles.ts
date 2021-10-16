import styled from 'styled-components'
import { rgba } from 'polished'
import { colors } from 'src/app'
import { PageLayout } from '../fragments'

const HomeLayout = styled(PageLayout)`
  position: relative;
  overflow: hidden;
`

const Background = styled.div`
  z-index: 0;
`

const ContentWrap = styled.div`
  position: relative;
  height: 100%;
  z-index: 10;
  width: 40%;
  z-index: 0;
`

const Content = styled.div`
  position: absolute;
  padding: 6rem 3rem 4rem;
  z-index: 10;
`

const ContentBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${rgba(colors.white, 0.1)};
  backdrop-filter: blur(15px);
`

interface ImageProps {
  image: string
}

const Image = styled.div<ImageProps>`
  background: url(${({ image }) => image}) no-repeat center left/cover;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 102%;
  height: 102%;
`

const Styled = {
  HomeLayout,
  Background,
  Content,
  ContentWrap,
  ContentBackdrop,
  Image,
}

export default Styled
