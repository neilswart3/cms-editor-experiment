import React from 'react'
import { ListItemText } from '@material-ui/core'
import Styled from './styles'
import { useRouter } from 'next/dist/client/router'

interface Props {
  slug: string
  name: string
  closeNav: () => void
}

const NavItem: React.FC<Props> = ({ name, slug, closeNav }) => {
  const router = useRouter()

  const handleClick = (): void => {
    router.push(`/${slug}`)
    closeNav()
  }

  return (
    <Styled.NavItem button onClick={handleClick}>
      <ListItemText
        primary={name}
        primaryTypographyProps={{ variant: 'h4', color: 'primary' }}
      />
    </Styled.NavItem>
  )
}

export default NavItem
