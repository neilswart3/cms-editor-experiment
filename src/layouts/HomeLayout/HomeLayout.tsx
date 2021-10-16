import { usePalette } from 'color-thief-react'
import React, { useEffect } from 'react'
import { compose, Dispatch } from 'redux'
import { getImageUrl, getPalette } from 'src/app/lib'
import { Header } from 'src/components'
import { RootState } from 'src/store/reducers'
import * as actions from 'src/store/actions/palette'
import { BackgroundLayout } from '..'
import Styled from './styles'
import { connect } from 'react-redux'

interface ReduxStateProps {
  palette: string[]
}

interface ReduxDispatchProps {
  setPalette: (colors: string[]) => void
}

interface OwnProps {
  background: string
  children: React.ReactNode
}

type Props = ReduxStateProps & ReduxDispatchProps & OwnProps

const HomeLayout: React.FC<Props> = ({
  children,
  background,
  palette,
  setPalette,
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
      <Styled.HomeLayout>
        <Styled.Background>
          <Styled.Image src={backgroundImage} />
        </Styled.Background>
        <Styled.ContentWrap>
          <Styled.ContentBackdrop />
          <Styled.Content>{children}</Styled.Content>
        </Styled.ContentWrap>
        <Header />
      </Styled.HomeLayout>
    </BackgroundLayout>
  )
}

const mapStateToProps = ({ palette }: RootState): ReduxStateProps => ({
  palette: palette.colors,
})

const mapDispatchToProps = (dispath: Dispatch): ReduxDispatchProps => ({
  setPalette: (colors) => dispath(actions.setPalette({ colors })),
})

export default compose<React.ElementType<OwnProps>>(
  connect(mapStateToProps, mapDispatchToProps)
)(HomeLayout)
