import {useContext, useState} from 'react'
import CarritoContext from '../context/CarritoContext'

export function useCarrito(){

  const {carrito,setCarrito,guardarEnStorage}=useContext(CarritoContext)


  const [alertaAddProducto,setAlertaAddProducto]=useState(false)

  const [alertaDeleteProducto,setAlertaDeleteProducto]=useState(false)

  
  const formateoCantidad=(num)=>{
    return `${num.toFixed(2)}`;
  }

  const addProCarrito =(producto,cantidad,sum)=> {

    //si desea reemplazar la cantidad de un registro 
    //envie el producto y la cantidad 

    //Si desea sumarle una cantidad 
    // a un registro  envie 
    //el producto  la cantidad y un true en ese orden

    let productoActual = {
      ...producto,
      id: producto.id,
      total:parseFloat(producto.precio),
      cantidad: cantidad?parseFloat(cantidad):1,
      precio: parseFloat(producto.precio),
    }

   if (carrito.length !== 0) {

     let productoEncontrado = false;

     carrito.forEach((productoEnCarro) => { 

       if (productoEnCarro.id === productoActual.id) {

        productoEncontrado = true;

         let totalActual =productoEnCarro.total + (productoEnCarro.precio*productoActual.cantidad),
         totalCantidad =sum?productoActual.cantidad+productoEnCarro.cantidad 
                           :cantidad?cantidad:productoEnCarro.cantidad + 1
        
         const cambioDelRegistro = {
           ...productoEnCarro,
           total:formateoCantidad(totalActual),
           cantidad: totalCantidad,
         }

         setCarrito(carrito.map( (registroEnCarro) => registroEnCarro.id === productoActual.id ? cambioDelRegistro 
                                                                                                : registroEnCarro ))
          guardarEnStorage && localStorage.setItem('carro',JSON.stringify(carrito))
         setAlertaAddProducto(true)
       }

     })

     if (!productoEncontrado) {
       setCarrito([...carrito, productoActual])
       guardarEnStorage && localStorage.setItem('carro',JSON.stringify(carrito))
       setAlertaAddProducto(true)
     }

   } else {
     setCarrito([...carrito, productoActual])
     guardarEnStorage && localStorage.setItem('carro',JSON.stringify(carrito))
     setAlertaAddProducto(true)
   }
 }

  const vaciarCarrito = () => setCarrito([])

  const eliminarProCarrito = (producto,cantidad) => {

    //Si desea eliminar una cantidad especifica del registro de un producto 
    //pase el producto seguido de la cantidad 
  
    let cantidadAEliminar=cantidad? cantidad: cantidad===0?producto.cantidad:1
    
    if (producto.cantidad > cantidadAEliminar) {

      carrito.forEach((productoEnCarro) => {

        if (productoEnCarro.id=== producto.id) {
          const cambioDelRegistro = {
            ...productoEnCarro,
            total:formateoCantidad(productoEnCarro.total-(producto.precio*cantidadAEliminar)),
            cantidad:producto.cantidad - cantidadAEliminar,
          }
          setCarrito(
            carrito.map((registroEnCarro) =>
              registroEnCarro.id === producto.id ? cambioDelRegistro : registroEnCarro
            )
          )
          guardarEnStorage && localStorage.setItem('carro',JSON.stringify(carrito))
          setAlertaDeleteProducto(true)
        }
      })
    } else {
      setCarrito(carrito.filter((registroEnCarro) => registroEnCarro.id !== producto.id))
       guardarEnStorage && localStorage.setItem('carro',JSON.stringify(carrito))
      setAlertaDeleteProducto(true)
    }
  }

  const cerrarAlertaAddProducto=()=>{
    setAlertaAddProducto(false)
  }

  const cerrarAlertaDeleteProducto=()=>{
    setAlertaDeleteProducto(false)
  }

  const nCantidad =  Object.values(carrito).reduce(
    (acc, { cantidad }) => acc + cantidad,
    0
  )

   const nPrecio =formateoCantidad (Object.values(carrito).reduce(
    (acc, { cantidad, precio }) => acc + cantidad * precio,
    0
  ))

    const enviarPedidoaWhatsapp=({cell})=>{

    if(carrito.length>0){
    const array = [];
    carrito.forEach((doc) => {
     array.push(
       JSON.stringify(
         doc.producto +
           " - " +
           doc.precio +
           "$ x " +
           doc.cantidad +
           " uni = " +
            doc.total +
           "$" +
           "%3A%0A"
       )
     )
   })

    window.open(
      `https://api.whatsapp.com/send?phone=${cell}&text=Hola+requiero+este+pedido%3A%0A%0A${array.toString()}%3A%0A%0ACantidad+de+Articulos%3A${nCantidad}+%2C%0ATotal%3A${nPrecio}$+%0A`,
      "_blank"
    ); 
  }
   vaciarCarrito();
  }


  return  {carrito,
           setCarrito,
           addProCarrito,
           eliminarProCarrito,
           vaciarCarrito,
           alertaAddProducto,
           cerrarAlertaAddProducto,
           nCantidad,
           nPrecio,
           alertaDeleteProducto,
           cerrarAlertaDeleteProducto,
           enviarPedidoaWhatsapp,
           formateoCantidad
          }

}

