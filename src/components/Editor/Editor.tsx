import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Drawer } from '@material-ui/core'
import { RootState } from 'src/store/reducers'
import { Fab } from './fragments'
import Styled from './styles'

const sidebar = {
  open: () => ({
    clipPath: `circle(100vh at calc(100% - 2.75rem) calc(100% - 2.75rem))`,
    transition: {
      type: 'spring',
      stiffness: 80,
      restDelta: 2,
      delay: 0.25,
    },
  }),
  closed: {
    clipPath: 'circle(1.5rem at calc(100% - 2.75rem) calc(100% - 2.75rem))',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

interface ReduxStateProps {
  open: boolean
}

type Props = ReduxStateProps

const Editor: React.FC<Props> = ({ open }) => {
  return (
    <Styled.Editor initial={false} animate={open ? 'open' : 'closed'}>
      <Styled.Background open={open} variants={sidebar} />
      <Fab />
    </Styled.Editor>
  )
}

const mapStateToProps = ({ editor }: RootState): ReduxStateProps => ({
  open: editor.open,
})

export default compose<React.ElementType>(connect(mapStateToProps))(Editor)
