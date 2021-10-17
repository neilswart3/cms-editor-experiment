import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { ThemeProvider } from '@material-ui/core'
import { darkTheme } from 'src/app'
import { TextField } from 'src/common'
import { RootState } from 'src/store/reducers'
import { editor, sidebar } from './animations'
import { EditorForm, EditorHeader, Fab } from './fragments'
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
          <ThemeProvider theme={(theme) => darkTheme(theme)}>
            <Styled.EditorContent>
              <EditorHeader />
              <EditorForm />
            </Styled.EditorContent>
          </ThemeProvider>
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
