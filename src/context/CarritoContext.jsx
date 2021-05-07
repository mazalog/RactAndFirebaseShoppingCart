import React,{useEffect, useState} from 'react'

const Context=React.createContext({})

export function CarritoContextProvider({children}){
    const [carrito,setCarrito]=useState([])
    const [modalCarrito,setModalCarrito]=useState(false)

    let guardarEnStorage=false

    useEffect(()=>{
        const CarroEnStorage = localStorage.getItem('carro')
        if (CarroEnStorage) {
            setCarrito(JSON.parse(CarroEnStorage))
        }
        if(!guardarEnStorage) {
            localStorage.removeItem('carro')
        }
    },[guardarEnStorage])

    return(
    <Context.Provider value={{carrito,modalCarrito,setCarrito,setModalCarrito,guardarEnStorage}}>
       {children}
    </Context.Provider>
    )
}

export default Context