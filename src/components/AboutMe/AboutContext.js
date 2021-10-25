import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const TabBarContext = createContext()

const TabBar = ({ tab, children }) =>  {
  const [activeTab, setTab] = useState(tab)
  const initialTab = { activeTab, setTab }

  return ( 
    <TabBarContext.Provider value={initialTab}>
      {children}
    </TabBarContext.Provider>
  )
}

TabBar.propTypes = {
  tab: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default TabBar