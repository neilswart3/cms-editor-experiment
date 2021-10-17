import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { compose, Dispatch } from 'redux'
import { Button } from '@material-ui/core'
import { Save } from '@material-ui/icons'
import { Page } from 'src/store/actions/pages/types'
import * as actions from 'src/store/actions/pages'
import { RootState } from 'src/store/reducers'
import { TextField } from 'src/common'
import Styled from './styles'

const initValues = {
  title: '',
  content: '',
}

const initErrors = {
  ...initValues,
}

interface ReduxStateProps {
  page: Page
}

interface ReduxDispatchProps {
  updatePage: (data: { page: string; values: Page }) => void
}

type Props = ReduxStateProps & ReduxDispatchProps

type Values = {
  [key in keyof typeof initValues]: string
}

type Errors = Values

const EditorForm: React.FC<Props> = ({ page, updatePage }) => {
  const [values, setValues] = useState<Values>(initValues)
  const [errors, setErrors] = useState<Errors>(initErrors)

  const handleSubmit = (e: any): void => {
    e.preventDefault()

    updatePage({ page: 'landing', values })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  useEffect(() => {
    if (Object.keys(page).length > 0) {
      setValues({ ...page } as Values)
    }
  }, [page])

  return (
    <Styled.EditorForm onSubmit={handleSubmit}>
      <TextField
        label='Title'
        name='title'
        value={values.title}
        onChange={handleChange}
      />
      <TextField
        label='Content'
        name='content'
        value={values.content}
        onChange={handleChange}
        multiline
      />
      <Button
        type='submit'
        variant='contained'
        size='large'
        endIcon={<Save color='primary' />}
      >
        Submit
      </Button>
    </Styled.EditorForm>
  )
}

const mapStateToProps = ({ pages }: RootState): ReduxStateProps => ({
  page: pages?.data?.landing || {},
})

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => ({
  updatePage: ({ page, values }) =>
    dispatch(actions.pagesUpdateRequest({ page, values })),
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(EditorForm)
