import React from 'react'
import { compose, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { RootState } from 'src/store/reducers'
import * as actions from 'src/store/actions/nav'
import Styled from './styles'
import MenuFab from 'src/common/MenuFab'
import { Close } from '@material-ui/icons'

interface ReduxStateProps {
  open: boolean
}

interface ReduxDispatchProps {
  setOpen: () => void
}

type Props = ReduxStateProps & ReduxDispatchProps

const Navigation: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <Styled.Navigation anchor='right' open={open}>
      <MenuFab onClick={setOpen}>
        <Close color='primary' />
      </MenuFab>
      Navigation component
    </Styled.Navigation>
  )
}

const mapStateToProps = ({ nav }: RootState): ReduxStateProps => ({
  open: nav.open,
})

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => ({
  setOpen: () => dispatch(actions.navOpen({ open: false })),
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(Navigation)
