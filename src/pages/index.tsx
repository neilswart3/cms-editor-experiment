import type { NextPage } from 'next'
import { getImagePalette } from 'src/app/lib'
import { BackgroundLayout, HomeLayout } from 'src/layouts'

const background = {
  name: 'Taj Mahal',
  image: 'https://source.unsplash.com/iWMfiInivp4/1600x900',
}

const palette = getImagePalette(background.image)

const Home: NextPage = () => {
  return (
    <BackgroundLayout palette={palette}>
      <HomeLayout background={background}>
        <div>liptsomsdaf dsf jsdabfasdbfashf</div>
      </HomeLayout>
    </BackgroundLayout>
  )
}

export default Home
