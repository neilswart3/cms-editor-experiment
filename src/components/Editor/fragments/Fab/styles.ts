import React from 'react'
import styled from 'styled-components'
import { Fab as MuiFab } from '@material-ui/core'
import { variants } from './animation'
import { motion } from 'framer-motion'

interface FabProps {
  open: boolean
  component: React.ReactNode
}

const Fab = styled(MuiFab).attrs(({ open }: FabProps) => ({
  initial: 'closed',
  variants: variants,
  animate: open ? 'open' : 'closed',
  component: motion.div,
}))<FabProps>`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 100;

  ${({ open }) => `
    box-shadow: ${
      open
        ? 'none'
        : '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)'
    };
    transition: box-shadow 0.5s ease ${open ? 0 : 1.5}s;
  `}
`

const Styled = { Fab }

export default Styled
