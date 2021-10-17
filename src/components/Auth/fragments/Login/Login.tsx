import React, { useEffect, useState } from 'react'
import { Button, CircularProgress, Typography } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import Case from 'case'
import { TextField } from 'src/common'
import { User } from 'src/store/actions/auth/types'
import * as actions from 'src/store/actions/auth'
import Styled from './styles'
import { RootState } from 'src/store/reducers'
import { compose, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { useRouter } from 'next/dist/client/router'

interface ReduxStateProps {
  user: User
  loading: boolean
  error: string | null
}

interface ReduxDispatchProps {
  signIn: (data: any) => void
}

type Props = ReduxStateProps & ReduxDispatchProps

const initValues = {
  email: '',
  password: '',
}

type Values = {
  [key in keyof typeof initValues]: string
}

const Login: React.FC<Props> = ({ signIn, user, loading, error }) => {
  const [values, setValues] = useState<Values>(initValues)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: any): void => {
    e.preventDefault()

    signIn(values)

    if (!error) {
      setValues(initValues)
    }
  }

  useEffect(() => {
    if (!!user.accessToken) {
      router.push('/')
    }
  }, [user])

  return (
    <Styled.Login onSubmit={handleSubmit}>
      <Typography align='center' gutterBottom variant='h4'>
        Log in to edit content
      </Typography>
      <TextField
        label='Email'
        name='email'
        type='email'
        value={values.email}
        onChange={handleChange}
      />
      <TextField
        label='Password'
        name='password'
        type='password'
        value={values.password}
        onChange={handleChange}
      />
      <Button
        disabled={loading}
        type='submit'
        variant='contained'
        size='large'
        color='primary'
      >
        {loading ? <CircularProgress size={26} /> : 'Submit'}
      </Button>

      {error && (
        <Alert severity='error'>
          <AlertTitle>Error</AlertTitle>
          {Case.capital(error)}
        </Alert>
      )}
    </Styled.Login>
  )
}

const mapStateToProps = ({ auth }: RootState): ReduxStateProps => ({
  user: auth.data,
  loading: auth.loading,
  error: auth.error,
})

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => ({
  signIn: (data) => dispatch(actions.authRequest({ ...data, form: 'login' })),
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(Login)
