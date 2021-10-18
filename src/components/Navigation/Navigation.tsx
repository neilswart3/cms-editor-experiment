import React from 'react'
import { compose, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { RootState } from 'src/store/reducers'
import { NavContent, NavHeader, NavItem } from './fragments'
import * as actions from 'src/store/actions/nav'
import Styled from './styles'
import navItems from 'src/app/lib/navItems'

interface ReduxStateProps {
  open: boolean
  palette: string[]
}

interface ReduxDispatchProps {
  closeNav: () => void
}

type Props = ReduxStateProps & ReduxDispatchProps

const Navigation: React.FC<Props> = ({ open, closeNav, palette }) => {
  const backgroundColor =
    palette[Math.floor(Math.random() * palette.length - 1)]

  return (
    <Styled.Navigation anchor='right' open={open}>
      <Styled.NavigationInner bgColor={backgroundColor}>
        <NavHeader />
        <NavContent>
          {navItems.map(({ slug, name }) => (
            <NavItem key={name} closeNav={closeNav} slug={slug} name={name} />
          ))}
        </NavContent>
      </Styled.NavigationInner>
    </Styled.Navigation>
  )
}
const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => ({
  closeNav: () => dispatch(actions.navOpen({ open: false })),
})

const mapStateToProps = ({ nav, palette }: RootState): ReduxStateProps => ({
  open: nav.open,
  palette: palette.colors,
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(Navigation)
