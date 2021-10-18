import styled, { keyframes } from 'styled-components'
import { Paper } from '@material-ui/core'
import { motion } from 'framer-motion'
import { colors } from 'src/app'
import { createLinearGradient } from 'src/app/lib'

const BackgroundLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 5rem 3rem;
  position: relative;
  overflow: hidden;
  flex: 1;
`

interface BackgroundGradientProps {
  palette: string[]
}

const backgroundAimation = keyframes`
  0% { 
    transform: translate(-50%, -50%) scale(2) rotate(0)
  }

  50% {
    transform: translate(-50%, -50%) scale(3, 2.25) rotate(180deg) 
  }

  100% {
    transform: translate(-50%, -50%) scale(2) rotate(360deg)
  }
`

const BackgroundGradient = styled(motion.div)<BackgroundGradientProps>`
  ${({ palette }) => createLinearGradient({ palette, alpha: 0.5 })}
  background-blend-mode: hue;
  width: 300vw;
  height: 500vh;
  position: absolute;
  left: 50%;
  top: 50%;
  animation: ${backgroundAimation} 60s ease-in-out infinite alternate;
`

const Content = styled(Paper)`
  background-color: ${colors.white};
  width: 100%;
  height: 100%;
  border-radius: 3.5rem;
`

const Styled = { BackgroundLayout, BackgroundGradient, Content }

export default Styled
