import React from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {

  const [user, setUser] = React.useState(null)

  const store = {
    userStore: [user, setUser]
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}