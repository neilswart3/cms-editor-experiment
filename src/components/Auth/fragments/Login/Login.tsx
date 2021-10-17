import { Button, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { TextField } from 'src/common'
import Styled from './styles'

interface Props {}
const initValues = {
  email: '',
  password: '',
}

const initErrors = {
  ...initValues,
}

type Values = {
  [key in keyof typeof initValues]: string
}

type Errors = Values

const Login: React.FC<Props> = (props) => {
  const [values, setValues] = useState<Values>(initValues)
  const [errors, setErrors] = useState<Errors>(initErrors)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: any): void => {
    e.preventDefault()
  }

  return (
    <Styled.Login onSubmit={handleSubmit}>
      <Typography align='center' gutterBottom variant='h4'>
        Sign up to edit content
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
      <Button type='submit' variant='contained' size='large' color='primary'>
        Submit
      </Button>
    </Styled.Login>
  )
}

export default Login
