import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose, Dispatch } from 'redux'
import * as actions from 'src/store/actions/auth'
import { User } from 'src/store/actions/auth/types'
import { RootState } from 'src/store/reducers'
import Styled from './styles'

interface ReduxStateProps {
  user: User
}

interface ReduxDispatchProps {
  rehydrate: (data: User) => void
}

interface OwnProps {
  children: React.ReactNode
  className?: string
}

type Props = ReduxStateProps & ReduxDispatchProps & OwnProps

const PageLayout: React.FC<Props> = (props) => {
  const { children, className = 'PageLayout', rehydrate, user } = props

  useEffect(() => {
    if (window) {
      const data = JSON.parse(window.localStorage.getItem('tbcmsAC') || '{}')

      if (!user.accessToken && Object.values(data).length > 0) {
        rehydrate(data)
      }
    }
  }, [])

  return (
    <Styled.PageLayout square className={className} elevation={8}>
      {children}
    </Styled.PageLayout>
  )
}

const mapStateToProps = ({ auth }: RootState): ReduxStateProps => ({
  user: auth.data,
})

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => ({
  rehydrate: (data) => dispatch(actions.authSuccess({ data })),
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(PageLayout)
