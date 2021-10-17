import { getAuth, signInWithEmailAndPassword } from '@firebase/auth'
import { AuthRequestPayload } from 'src/store/actions/auth/types'

const signInUser = async ({ email, password }: AuthRequestPayload) => {
  const auth = getAuth()
  const data = await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential

      return { user: user.user }
    })
    .catch((error) => {
      const errorCode = error.code

      return { error: errorCode }
    })

  return data
}

export default signInUser
