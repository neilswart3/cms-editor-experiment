import { NextPage } from 'next'
import { backgrounds } from 'src/app/lib'
import Auth from 'src/components/Auth'
import { GeneralLayout } from 'src/layouts'

const AuthPage: NextPage = () => {
  return (
    <GeneralLayout page='auth' background={backgrounds[1]}>
      <Auth />
    </GeneralLayout>
  )
}

export default AuthPage
