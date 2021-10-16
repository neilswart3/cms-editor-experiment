import styled from 'styled-components'
import { Drawer } from '@mui/material'
import { motion } from 'framer-motion'
import { purple } from '@mui/material/colors'

const Editor = styled(motion.div)``

interface BackgroundProps {
  open: boolean
}

const Background = styled(motion.div)<BackgroundProps>`
  background-color: ${purple[500]};
  height: 100vh;

  ${({ open }) => `
    width: ${open ? 300 : 0}px;
    transition: width 0.25s ease ${open ? 0 : 0.75}s;
  `}
`

const Styled = { Editor, Background }

export default Styled
