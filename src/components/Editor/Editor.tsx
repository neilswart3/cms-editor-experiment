import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { ThemeProvider } from '@material-ui/core'
import { darkTheme } from 'src/app'
import { RootState } from 'src/store/reducers'
import { editor, sidebar } from './animations'
import { AuthFab, EditorForm, EditorHeader, Fab } from './fragments'
import Styled from './styles'

interface ReduxStateProps {
  open: boolean
  isSignedIn: boolean
}

type Props = ReduxStateProps

const Editor: React.FC<Props> = ({ open, isSignedIn }) => {
  return (
    <>
      {isSignedIn && (
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
      )}
      <AuthFab />
    </>
  )
}

const mapStateToProps = ({ editor, auth }: RootState): ReduxStateProps => ({
  open: editor.open,
  isSignedIn: !!auth.data.accessToken,
})

export default compose<React.ElementType>(connect(mapStateToProps))(Editor)
