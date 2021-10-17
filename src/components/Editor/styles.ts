import styled from 'styled-components'
import { motion } from 'framer-motion'
import { colors } from 'src/app'

interface EditorProps {
  open: boolean
}

const Editor = styled(motion.div)`
  position: relative;
  height: 100vh;
  z-index: 10;
`

const EditorContent = styled.div`
  height: 100%;
`

const Background = styled(motion.div)<EditorProps>`
  background-color: ${colors.orange};
  height: 100vh;

  ${({ open }) => `
    width: ${open ? 300 : 0}px;
    transition: width 0.25s ease ${open ? 0 : 0.75}s;
  `}
`

const Styled = { Editor, Background, EditorContent }

export default Styled
