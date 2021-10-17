import type { NextPage } from 'next'
import { Typography } from '@material-ui/core'
import { HomeLayout } from 'src/layouts'
import { backgrounds } from 'src/app/lib'
import { compose, Dispatch } from 'redux'
import { Page, Pages } from 'src/store/actions/pages/types'
import * as actions from 'src/store/actions/pages'
import { connect } from 'react-redux'
import { RootState } from 'src/store/reducers'
import { useEffect, useState } from 'react'

const background = backgrounds[0]

interface ReduxStateProps {
  data: Pages
  loading: boolean
  error: string | null
}

interface ReduxDispatchProps {
  getPages: () => void
}

type Props = ReduxStateProps & ReduxDispatchProps

const Home: NextPage<Props> = ({ data, loading, error, getPages }) => {
  const [sections, setSections] = useState<Page>({})

  useEffect(() => {
    if (Object.values(data).length === 0) {
      getPages()
    }

    if (Object.keys(data).length > 0 && data.landing) {
      setSections(data.landing)
    }
  }, [data])

  return (
    <HomeLayout background={background}>
      {sections.title && (
        <Typography variant='h3' component='h1' gutterBottom>
          {sections.title.content}
        </Typography>
      )}
      {sections.content && (
        <Typography variant='body1'>{sections.content.content}</Typography>
      )}
    </HomeLayout>
  )
}

const mapStateToProps = ({ pages }: RootState): ReduxStateProps => ({
  data: pages.data,
  loading: pages.loading,
  error: pages.error,
})

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => ({
  getPages: () => dispatch(actions.pagesRequest()),
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(Home)
