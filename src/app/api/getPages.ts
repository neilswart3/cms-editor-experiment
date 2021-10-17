import { collection, getDocs } from 'firebase/firestore'
import { firebase } from '..'

const getPages = async () => {
  const data = await getDocs(collection(firebase.db, 'pages'))
    .then((docs) => {
      let pages = {}
      docs.forEach((doc) => {
        pages = {
          ...pages,
          [doc.id]: { ...doc.data().data },
        }
      })

      return { pages }
    })
    .catch((error) => {
      const errorCode = error.code

      return { error: errorCode }
    })

  return data
}

export default getPages
