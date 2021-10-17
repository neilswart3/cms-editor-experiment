import type { NextPage } from 'next'
import { Typography } from '@material-ui/core'
import { HomeLayout } from 'src/layouts'
import { backgrounds } from 'src/app/lib'

const background = backgrounds[0]

const Home: NextPage = () => {
  return (
    <HomeLayout background={background}>
      <Typography variant='h3' component='h1' gutterBottom>
        fsdaf asdf sadfsadf sdaf
      </Typography>
      <Typography variant='body1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id leo
        aliquam, mollis nunc vel, vulputate nulla. Duis tellus ante, lacinia
        quis orci a, laoreet vehicula orci. Quisque posuere sapien sed fermentum
        efficitur. In gravida rhoncus sapien a feugiat. Donec viverra lacinia
        efficitur. Ut et neque vitae orci malesuada vulputate. Nulla facilisi.
        Morbi finibus justo a urna laoreet, sit amet ullamcorper risus
        fringilla. Sed ut lorem non ex bibendum sodales ac id orci. Aenean
        efficitur molestie pharetra. Sed eu sem eget augue vehicula aliquam a
        eget purus. Ut molestie porttitor auctor. Cras sed mi maximus, venenatis
        sem ut, suscipit lectus. Mauris egestas felis id neque dignissim
        fermentum.
      </Typography>
    </HomeLayout>
  )
}

export default Home
