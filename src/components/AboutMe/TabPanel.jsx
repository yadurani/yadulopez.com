import { useContext } from 'react'
import { TabBarContext } from './AboutContext'

const TabPanel = ({ whenActive, children }) => {
  const contextTab = useContext(TabBarContext)
  const renderPanel = whenActive === contextTab?.activeTab ? children : null
  return renderPanel
}

export default TabPanel
