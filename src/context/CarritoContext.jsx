import React,{useEffect, useState,useMemo} from 'react'

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
    
    const values = useMemo(() => (
        {
            carrito,
            setCarrito,
            modalCarrito,
            setModalCarrito,
            guardarEnStorage
        }),
        [carrito,modalCarrito,guardarEnStorage]);

    return(
    <Context.Provider value={{values}}>
       {children}
    </Context.Provider>
    )
}

export default Context