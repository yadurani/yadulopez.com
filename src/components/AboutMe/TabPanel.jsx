import { useContext } from 'react'
import PropTypes from 'prop-types'

import { TabBarContext } from './AboutContext'

const TabPanel = ({ whenActive, children }) => {
  const contextTab = useContext(TabBarContext)
  const renderPanel = whenActive === contextTab?.activeTab ? children : null

  return renderPanel
}

TabPanel.propTypes = {
  whenActive: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default TabPanel
