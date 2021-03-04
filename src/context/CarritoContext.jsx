import React,{useState} from 'react'

const Context=React.createContext({})

export function CarritoContextProvider({children}){
    const [carrito,setCarrito]=useState([])
    return(
    <Context.Provider value={{carrito,setCarrito}}>
       {children}
    </Context.Provider>
    )
}

export default Context