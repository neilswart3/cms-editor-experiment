import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth'
import { AuthRequestPayload } from 'src/store/actions/auth/types'

const createUser = async ({ email, password }: AuthRequestPayload) => {
  const auth = getAuth()
  const data = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user

      return { user }
    })
    .catch((error) => {
      const errorCode = error.code

      return { error: errorCode }
    })

  return data
}

export default createUser
