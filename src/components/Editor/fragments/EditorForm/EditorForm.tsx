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

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  return (
    <Styled.EditorForm onSubmit={handleSubmit}>
      <TextField
        label='Text Field'
        value=''
        onChange={() => console.log('change')}
      />
      <TextField
        label='Text Field'
        value=''
        onChange={() => console.log('change')}
      />
    </Styled.EditorForm>
  )
}

export default EditorForm
