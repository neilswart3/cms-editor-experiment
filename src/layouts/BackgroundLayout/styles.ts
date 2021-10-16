import { Paper } from '@mui/material'
import { colors } from 'src/app'
import { createLinearGradient } from 'src/app/lib'
import styled from 'styled-components'

interface BackgroundLayoutProps {
  palette: string[]
}

const BackgroundLayout = styled.div<BackgroundLayoutProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 5rem 3rem;
  position: relative;

  &::before {
    content: '';
    ${({ palette }) => createLinearGradient({ palette, alpha: 1 })}
    mix-blend-mode: exclusion;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
`

const Content = styled(Paper)`
  background-color: ${colors.white};
  width: 100%;
  height: 100%;
  border-radius: 3.5rem;
`

const Styled = { BackgroundLayout, Content }

export default Styled
