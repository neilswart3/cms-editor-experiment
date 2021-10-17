import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { connect } from 'react-redux'
import { compose, Dispatch } from 'redux'
import { ExitToApp, Person } from '@material-ui/icons'
import * as actions from 'src/store/actions/auth'
import { RootState } from 'src/store/reducers'
import Styled from './styles'

interface ReduxStateProps {
  isSignedIn: boolean
}

interface ReduxDispatchProps {
  signOut: () => void
}

type Props = ReduxStateProps & ReduxDispatchProps

const AuthFab: React.FC<Props> = ({ isSignedIn, signOut }) => {
  const router = useRouter()

  const handleClick = (): void => {
    if (isSignedIn) {
      signOut()
      window.localStorage.removeItem('tbcmsAC')
    } else {
      router.push('/auth')
    }
  }

  return (
    <Styled.AuthFab size='medium' color='primary' onClick={handleClick}>
      {isSignedIn ? (
        <ExitToApp color='secondary' />
      ) : (
        <Person color='secondary' />
      )}
    </Styled.AuthFab>
  )
}

const mapStateToProps = ({ auth }: RootState): ReduxStateProps => ({
  isSignedIn: !!auth.data.accessToken,
})

const mapDispatchProps = (dispatch: Dispatch): ReduxDispatchProps => ({
  signOut: () =>
    dispatch(
      actions.authSuccess({
        data: {
          accessToken: '',
          email: '',
          uid: '',
        },
      })
    ),
})

export default compose(connect(mapStateToProps, mapDispatchProps))(AuthFab)
