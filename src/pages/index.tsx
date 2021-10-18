import type { NextPage } from 'next'
import { Typography } from '@material-ui/core'
import { HomeLayout } from 'src/layouts'
import { compose, Dispatch } from 'redux'
import { Page, Pages } from 'src/store/actions/pages/types'
import * as actions from 'src/store/actions/pages'
import { connect } from 'react-redux'
import { RootState } from 'src/store/reducers'
import { useEffect, useState } from 'react'
import { Alert, AlertTitle, Skeleton } from '@material-ui/lab'

interface ReduxStateProps {
  data: Pages
  loading: boolean
  error: string | null
  image: string
}

interface ReduxDispatchProps {
  getPages: () => void
}

type Props = ReduxStateProps & ReduxDispatchProps

const Home: NextPage<Props> = ({ data, loading, error, getPages, image }) => {
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
    <HomeLayout background={sections.image ? sections.image.src : image}>
      {error && (
        <Alert severity='error'>
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      )}
      {loading ? (
        <>
          <Typography variant='h3' component='h1' gutterBottom>
            <Skeleton
              animation='wave'
              height={10}
              style={{ marginBottom: 6 }}
            />
          </Typography>
          <Typography variant='body1'>
            <Skeleton animation='wave' height={40} width='80%' />
            <Skeleton animation='wave' height={15} width='80%' />
            <Skeleton animation='wave' height={15} width='80%' />
            <Skeleton animation='wave' height={15} width='80%' />
          </Typography>
        </>
      ) : (
        <>
          {sections.title && (
            <Typography variant='h3' component='h1' gutterBottom>
              {sections.title}
            </Typography>
          )}
          {sections.content && (
            <Typography variant='body1'>{sections.content}</Typography>
          )}
        </>
      )}
    </HomeLayout>
  )
}

const mapStateToProps = ({ pages, image }: RootState): ReduxStateProps => ({
  data: pages.data,
  loading: pages.loading,
  error: pages.error,
  image: image.src,
})

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => ({
  getPages: () => dispatch(actions.pagesRequest()),
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(Home)
