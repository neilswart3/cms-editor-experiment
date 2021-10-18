import React from 'react'
import Styled from './styles'

interface Props {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  multiline?: boolean
  type?: string
}

const TextField: React.FC<Props> = (props) => {
  const {
    label,
    name,
    value,
    onChange,
    multiline = false,
    type = 'text',
  } = props

  return (
    <Styled.TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      multiline={multiline}
      type={type}
      variant='outlined'
      color='secondary'
      fullWidth
      minRows={10}
    />
  )
}

export default TextField
