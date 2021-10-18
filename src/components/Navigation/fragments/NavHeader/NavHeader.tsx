import { Close } from '@material-ui/icons'
import React from 'react'
import { connect } from 'react-redux'
import { compose, Dispatch } from 'redux'
import { Logo, MenuFab } from 'src/common'
import * as actions from 'src/store/actions/nav'
import Styled from './styles'

interface ReduxDispatchProps {
  setOpen: () => void
}

type Props = ReduxDispatchProps

const NavHeader: React.FC<Props> = ({ setOpen }) => {
  return (
    <Styled.NavHeader position='static'>
      <MenuFab onClick={setOpen}>
        <Close color='primary' />
      </MenuFab>
      <Logo dark />
    </Styled.NavHeader>
  )
}

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => ({
  setOpen: () => dispatch(actions.navOpen({ open: false })),
})
export default compose(connect(null, mapDispatchToProps))(NavHeader)
