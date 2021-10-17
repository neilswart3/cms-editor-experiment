import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { compose, Dispatch } from 'redux'
import { Button, MenuItem, Select } from '@material-ui/core'
import { Save } from '@material-ui/icons'
import { Page } from 'src/store/actions/pages/types'
import * as pagesActions from 'src/store/actions/pages'
import * as imageActions from 'src/store/actions/image'
import { RootState } from 'src/store/reducers'
import { TextField } from 'src/common'
import Styled from './styles'
import { backgrounds } from 'src/app/lib'

const initValues = {
  title: '',
  content: '',
}

const initErrors = {
  ...initValues,
}

type Image = {
  src: string
  name: string
}

interface ReduxStateProps {
  page: Page
}

interface ReduxDispatchProps {
  updatePage: (data: { page: string; values: Page }) => void
  updateImage: (image: Image) => void
}

type Props = ReduxStateProps & ReduxDispatchProps

type Values = {
  [key in keyof typeof initValues]: string
}

type Errors = Values

const EditorForm: React.FC<Props> = ({ page, updatePage, updateImage }) => {
  const [values, setValues] = useState<Values>(initValues)
  const [image, setImage] = useState<Image>({ ...backgrounds[0] })
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

  const handleImageChange = (e: any) => {
    const { value } = e.target

    const [filteredImg] = backgrounds.filter((img) => value === img.src)

    setImage(filteredImg)
    updateImage(filteredImg)
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
      <Select
        variant='outlined'
        defaultValue={image.src}
        value={image.src}
        onChange={handleImageChange}
      >
        {backgrounds.map((img) => {
          console.log('img:', img)

          return (
            <MenuItem value={img.src} key={img.src}>
              {img.name}
            </MenuItem>
          )
        })}
      </Select>
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
    dispatch(pagesActions.pagesUpdateRequest({ page, values })),
  updateImage: ({ src, name }) =>
    dispatch(imageActions.setImage({ src, name })),
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(EditorForm)
