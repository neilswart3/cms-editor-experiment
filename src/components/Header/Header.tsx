import React from 'react'
import { Menu } from '@material-ui/icons'
import { compose, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Logo } from 'src/common'
import Styled from './styles'
import * as actions from 'src/store/actions/nav'
import { RootState } from 'src/store/reducers'

interface ReduxStateProps {
  open: boolean
}

interface ReduxDispatchProps {
  setOpen: () => void
}

type Props = ReduxStateProps & ReduxDispatchProps

const Header: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <Styled.Header position='absolute' color='transparent' elevation={0}>
      <Styled.HeaderInner>
        <Logo />
        <Styled.Fab onClick={setOpen}>
          <Menu color='primary' />
        </Styled.Fab>
      </Styled.HeaderInner>
    </Styled.Header>
  )
}

const mapStateToProps = ({ nav }: RootState): ReduxStateProps => ({
  open: nav.open,
})

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => ({
  setOpen: () => dispatch(actions.navOpen({ open: true })),
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(Header)
