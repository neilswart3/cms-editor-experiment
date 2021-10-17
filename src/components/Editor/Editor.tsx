import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { RootState } from 'src/store/reducers'
import { editor, sidebar } from './animations'
import { Fab } from './fragments'
import Styled from './styles'

interface ReduxStateProps {
  open: boolean
}

type Props = ReduxStateProps

const Editor: React.FC<Props> = ({ open }) => {
  return (
    <>
      <Styled.Editor
        initial='closed'
        animate={open ? 'open' : 'closed'}
        variants={editor}
      >
        <Styled.Background open={open} variants={sidebar}>
          <Styled.EditorContent>Editor content</Styled.EditorContent>
        </Styled.Background>
      </Styled.Editor>
      <Fab />
    </>
  )
}

const mapStateToProps = ({ editor }: RootState): ReduxStateProps => ({
  open: editor.open,
})

export default compose<React.ElementType>(connect(mapStateToProps))(Editor)
