import { createContext, useState } from 'react'

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

export default TabBar