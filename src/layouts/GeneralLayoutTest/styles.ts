import styled from 'styled-components'
import { motion } from 'framer-motion'

const GeneralLayoutTest = styled.div`
  /* background-color: #333;
  display: flex;
  min-height: 100vh;
  perspective: 1500px; */
`

const PageContent = styled(motion.div)`
  /* position: relative;
  min-height: 100vh;
  flex: 1;
  background-color: #fff;
  perspective: 40px;
  transform-style: preserve-3d; */
`

const Styled = { GeneralLayoutTest, PageContent }

export default Styled
