import React, { useState } from 'react'
import { Tab, Tabs } from '@material-ui/core'
import { TabPanel } from 'src/common'
import Styled from './styles'
import { Login, Register } from './fragments'

const Auth: React.FC = () => {
  const [tab, setTab] = useState<number>(0)

  const handleTabChange = (_e: React.ChangeEvent<{}>, newTab: number): void => {
    setTab(newTab)
  }

  return (
    <Styled.Auth>
      <Tabs
        value={tab}
        onChange={handleTabChange}
        indicatorColor='primary'
        textColor='primary'
        centered
        variant='fullWidth'
      >
        <Tab label='Sign In' />
        <Tab label='Register' />
      </Tabs>
      <TabPanel value={tab} index={0}>
        <Login />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <Register />
      </TabPanel>
    </Styled.Auth>
  )
}

export default Auth
