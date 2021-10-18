import { usePalette } from 'color-thief-react'
import React, { useEffect } from 'react'
import { compose, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { getImageUrl, getPalette } from 'src/app/lib'
import { BackgroundLayout } from 'src/layouts'
import { Header } from 'src/components'
import { RootState } from 'src/store/reducers'
import * as actions from 'src/store/actions/palette'
import Styled from './styles'
import { motion } from 'framer-motion'
import { animation } from './animation'

interface ReduxStateProps {
  palette: string[]
  open: boolean
}

interface ReduxDispatchProps {
  setPalette: (colors: string[]) => void
}

interface OwnProps {
  background: string
  children: React.ReactNode
  page?: 'home' | 'auth' | 'page'
}

type Props = ReduxStateProps & ReduxDispatchProps & OwnProps

const GeneralLayout: React.FC<Props> = ({
  children,
  background,
  palette,
  setPalette,
  page = 'page',
  open,
}) => {
  const backgroundImage = getImageUrl({
    id: background,
  })

  const { data } = usePalette(backgroundImage, 10, 'hex', {
    crossOrigin: 'crossorigin',
  })

  useEffect(() => {
    if (data) {
      const colors = getPalette(data)
      setPalette(colors)
    }
  }, [data])

  return (
    <BackgroundLayout palette={palette}>
      <Styled.AnimationContainer
        initial='close'
        animate={open ? 'open' : 'close'}
        variants={animation}
      >
        <Styled.GeneralLayout>
          <Styled.Background>
            <Styled.Image src={backgroundImage} />
          </Styled.Background>
          <Styled.ContentWrap page={page}>
            <Styled.ContentBackdrop />
            <Styled.Content>{children}</Styled.Content>
          </Styled.ContentWrap>
          <Header />
        </Styled.GeneralLayout>
      </Styled.AnimationContainer>
    </BackgroundLayout>
  )
}

const mapStateToProps = ({ palette, nav }: RootState): ReduxStateProps => ({
  palette: palette.colors,
  open: nav.open,
})

const mapDispatchToProps = (dispath: Dispatch): ReduxDispatchProps => ({
  setPalette: (colors) => dispath(actions.setPalette({ colors })),
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  GeneralLayout
)
