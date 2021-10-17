import { doc, updateDoc } from 'firebase/firestore'
import { Page } from 'src/store/actions/pages/types'
import { firebase } from '..'

type Args = {
  page: string
  values: Page
}

const updatePage = async ({ page, values }: Args) => {
  const pageRef = doc(firebase.db, 'pages', page)

  const data = await updateDoc(pageRef, { data: { ...values } })
    .then(() => {
      return { pages: { [page]: values } }
    })
    .catch((error) => {
      const errorCode = error.code

      return { error: errorCode }
    })

  return data
}

export default updatePage
