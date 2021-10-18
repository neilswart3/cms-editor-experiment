import { motion } from 'framer-motion'
import { createLinearGradient } from 'src/app/lib'
import styled, { keyframes } from 'styled-components'

const BackgroundLayout = styled.div`
  overflow: hidden;
  position: relative;
`

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 5rem 3rem;
  height: 100vh;
  width: 100%;
  perspective: 90vw;
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

const Styled = { BackgroundLayout, BackgroundGradient, ContentWrapper }

export default Styled
