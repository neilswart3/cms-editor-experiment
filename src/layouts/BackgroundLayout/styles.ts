import { Paper } from '@material-ui/core'
import { motion } from 'framer-motion'
import { colors } from 'src/app'
import { createLinearGradient } from 'src/app/lib'
import styled, { keyframes } from 'styled-components'

const BackgroundLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 5rem 3rem;
  position: relative;
  overflow: hidden;
`

interface BackgroundGradientProps {
  palette: string[]
}

const backgroundAimation = keyframes`
  0% { 
    transform: scale(2) rotate(0)
  }

  50% {
    transform: scale(3, 2.25) rotate(180deg) 
  }

  100% {
    transform: scale(2) rotate(360deg)
  }
`

const BackgroundGradient = styled(motion.div)<BackgroundGradientProps>`
  ${({ palette }) => createLinearGradient({ palette, alpha: 0.5 })}
  background-blend-mode: hue;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
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
