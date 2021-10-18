import React from 'react'
import Styled from './styles'

interface Props {
  onClick: () => void
  children: NonNullable<React.ReactNode>
  className?: string
}

const MenuFab: React.FC<Props> = ({
  onClick,
  children,
  className = 'MenuFab',
}) => {
  return (
    <Styled.MenuFab
      className={className}
      color='secondary'
      size='medium'
      onClick={onClick}
    >
      {children}
    </Styled.MenuFab>
  )
}

export default MenuFab
