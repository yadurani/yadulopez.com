import { createContext } from 'react'

export const ContextApp = createContext()

const App = ({ children, initialValues }) => {
  return (
    <ContextApp.Provider value={initialValues}>
      {children}
    </ContextApp.Provider>
  )
}

export default App