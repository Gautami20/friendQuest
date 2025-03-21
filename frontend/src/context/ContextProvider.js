import {createContext, useContext} from 'react'

const initialState={
    currentUser:null
}

const Context=createContext(initialState)

export const useValue=()=>{
    return useContext(Context)
}
const ContextProvider = ({children}) => {
  return (
    <div>ContextProvider</div>
    // <Context.Provider value={}> {children} </Context.Provider>
  )
}

export default ContextProvider
