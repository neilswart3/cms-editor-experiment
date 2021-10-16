import React from 'react'
import Styled from './styles'

interface Props {
  children: React.ReactNode
  className?: string
}

const PageLayout: React.FC<Props> = ({
  children,
  className = 'PageLayout',
}) => {
  return (
    <Styled.PageLayout className={className} elevation={8}>
      {children}
    </Styled.PageLayout>
  )
}

export default PageLayout
