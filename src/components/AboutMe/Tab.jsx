import React, { useContext } from 'react'

import { TabBarContext } from './AboutContext'
import { TabItem } from './styles'

const Tab = ({ tabTitle, children }) => {
  const contextTab = useContext(TabBarContext)
  const isActive = tabTitle === contextTab?.activeTab

  const handleActive = () => contextTab?.setTab(tabTitle)

  return (
    <TabItem isActive={isActive} onClick={handleActive}>
      {children}
    </TabItem>
  )
}

export default Tab
