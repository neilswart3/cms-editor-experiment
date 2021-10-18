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
  max-height: 100vh;
  overflow-x: hidden;
`

const EditorContent = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  align-content: start;
  grid-gap: 2rem;
  height: 100%;
  padding: 1rem 0;
  min-width: 300px;
`

const Background = styled(motion.div)<EditorProps>`
  background-color: ${colors.orange};
  height: 100vh;

  ${({ open }) => `
    width: ${open ? 300 : 0}px;
    transition: width 0.25s ease ${open ? 0 : 0.75}s;
  `};
`

const Styled = { Editor, Background, EditorContent }

export default Styled
