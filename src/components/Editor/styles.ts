import styled from 'styled-components'
import { Drawer } from '@material-ui/core'
import { motion } from 'framer-motion'

const Editor = styled(motion.div)``

interface BackgroundProps {
  open: boolean
}

const Background = styled(motion.div)<BackgroundProps>`
  background-color: red;
  height: 100vh;

  ${({ open }) => `
    width: ${open ? 300 : 0}px;
    transition: width 0.25s ease ${open ? 0 : 0.75}s;
  `}
`

const Styled = { Editor, Background }

export default Styled
