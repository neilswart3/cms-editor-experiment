import { usePalette } from 'color-thief-react'
import React, { useEffect } from 'react'
import { compose, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { getImageUrl, getPalette } from 'src/app/lib'
import { BackgroundLayout, EditorLayout } from 'src/layouts'
import { Editor, Header } from 'src/components'
import { RootState } from 'src/store/reducers'
import * as actions from 'src/store/actions/palette'
import Styled from './styles'

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

const GeneralLayout: React.FC<Props> = ({
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
      <Styled.GeneralLayout>
        <Styled.Background>
          <Styled.Image src={backgroundImage} />
        </Styled.Background>
        <Styled.ContentWrap>
          <Styled.ContentBackdrop />
          <Styled.Content>{children}</Styled.Content>
        </Styled.ContentWrap>
        <Header />
      </Styled.GeneralLayout>
    </BackgroundLayout>
  )
}

const mapStateToProps = ({ palette }: RootState): ReduxStateProps => ({
  palette: palette.colors,
})

const mapDispatchToProps = (dispath: Dispatch): ReduxDispatchProps => ({
  setPalette: (colors) => dispath(actions.setPalette({ colors })),
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  GeneralLayout
)