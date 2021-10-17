import { Button } from '@material-ui/core'
import { Save } from '@material-ui/icons'
import React, { useState } from 'react'
import { TextField } from 'src/common'
import Styled from './styles'

interface Props {}

const initValues = {
  title: '',
  content: '',
}

const initErrors = {
  ...initValues,
}

type Values = {
  [key in keyof typeof initValues]: string
}

type Errors = Values

const EditorForm: React.FC<Props> = (props) => {
  const [values, setValues] = useState<Values>(initValues)
  const [errors, setErrors] = useState<Errors>(initErrors)

  const handleSubmit = (e: any): void => {
    e.preventDefault()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <Styled.EditorForm onSubmit={handleSubmit}>
      <TextField
        label='Title'
        name='content'
        value={values.title}
        onChange={handleChange}
      />
      <TextField
        label='Content'
        name='content'
        value={values.content}
        onChange={handleChange}
        multiline
      />
      <Button
        type='submit'
        variant='contained'
        size='large'
        endIcon={<Save color='primary' />}
      >
        Submit
      </Button>
    </Styled.EditorForm>
  )
}

export default EditorForm
