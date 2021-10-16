import React from 'react'
import { compose, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Close, Edit } from '@material-ui/icons'
import { RootState } from 'src/store/reducers'
import * as actions from 'src/store/actions/editor'
import Styled from './styles'

interface ReduxStateProps {
  open: boolean
}

interface ReduxDispatchProps {
  setEditorOpen: (open: boolean) => void
}

type Props = ReduxStateProps & ReduxDispatchProps

const Fab: React.FC<Props> = ({ open, setEditorOpen }: Props) => {
  const handleClick = () => {
    setEditorOpen(!open)
  }

  return (
    <Styled.Fab
      open={open}
      color='secondary'
      onClick={handleClick}
      aria-label={`${open ? 'close' : 'open'} editor`}
    >
      {open ? <Close /> : <Edit />}
    </Styled.Fab>
  )
}

const mapStateToProps = ({ editor }: RootState): ReduxStateProps => ({
  open: editor.open,
})

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => ({
  setEditorOpen: (open: boolean) => dispatch(actions.editorOpen({ open })),
})

export default compose<React.ElementType>(
  connect(mapStateToProps, mapDispatchToProps)
)(Fab)
