import React from 'react'
import Styled from './styles'

interface Props {
  children: React.ReactNode
  onSubmit: (e: any) => void
  className?: string
}

const Form: React.FC<Props> = ({ children, onSubmit, className = 'Form' }) => {
  return (
    <Styled.Form component='form' onSubmit={onSubmit} className={className}>
      {children}
    </Styled.Form>
  )
}

export default Form
