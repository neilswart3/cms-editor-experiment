import React from 'react'
import Styled from './styles'

interface Props {
  children: React.ReactNode
  value: number
  index: number
}

const TabPanel: React.FC<Props> = ({ children, value, index }) => {
  return (
    <Styled.TabPanel
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
    >
      {value === index && children}
    </Styled.TabPanel>
  )
}

export default TabPanel
