import React,{useState} from 'react'

const Context=React.createContext({})

export function CarritoContextProvider({children}){
    const [carrito,setCarrito]=useState([])
    const [modalCarrito,setModalCarrito]=useState(false)

    return(
    <Context.Provider value={{carrito,modalCarrito,setCarrito,setModalCarrito}}>
       {children}
    </Context.Provider>
    )
}

export default Context