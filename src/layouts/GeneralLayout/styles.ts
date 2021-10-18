import styled from 'styled-components'
import { rgba } from 'polished'
import { colors } from 'src/app'
import { PageLayout } from '../fragments'
import { motion } from 'framer-motion'

const GeneralLayout = styled(PageLayout)`
  position: relative;
  overflow: hidden;
`
const AnimationContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  perspective: 1000px;
  max-width: 1700px;
`

const Background = styled.div`
  z-index: 0;
`

const HeaderWrap = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`

interface ContentWrapProps {
  page: 'home' | 'page' | 'auth'
}

const contentWidth = {
  home: '40%',
  page: '60%',
  auth: '50%',
}

const ContentWrap = styled.div<ContentWrapProps>`
  position: relative;
  height: 100%;
  z-index: 10;
  width: ${({ page }) => contentWidth[page]};
  z-index: 0;
`

const Content = styled.div`
  position: absolute;
  padding: 6rem 3rem 4rem;
  z-index: 10;
  width: 100%;
  height: 100%;
`

const ContentBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${rgba(colors.white, 0.4)};
  backdrop-filter: blur(20px);
`

const Image = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 102%;
  height: 102%;
  object-fit: cover;
`

const Styled = {
  GeneralLayout,
  AnimationContainer,
  Background,
  HeaderWrap,
  Content,
  ContentWrap,
  ContentBackdrop,
  Image,
}

export default Styled
