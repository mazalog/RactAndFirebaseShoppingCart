import {useContext, useState} from 'react'
import CarritoContext from '../context/CarritoContext'

export function useCarrito(){

  const {carrito,setCarrito}=useContext(CarritoContext)

  const [alertaAddProducto,setAlertaAddProducto]=useState(false)

  const [alertaDeleteProducto,setAlertaDeleteProducto]=useState(false)

  const addProCarrito =(producto)=> {

    let productoActual = {
      producto: producto.producto,
      total: producto.precio,
      cantidad: 1,
      precio: producto.precio,
      imagen: producto.url
    }

   if (carrito.length !== 0) {

     var seguir = true;

     carrito.forEach((carro) => {

       if (carro.producto === producto.producto) {

         seguir = false;

         let totalActual = parseFloat(carro.total) + parseFloat(producto.precio);
         let totalCantidad = parseFloat(carro.cantidad) + 1;
         const dato = {
           producto: producto.producto,
           total: totalActual,
           cantidad: totalCantidad,
           precio: producto.precio,
           imagen: producto.imagen,
         };
         setCarrito(carrito.map( (carro) => carro.producto === producto.producto ? dato : carro ))
         setAlertaAddProducto(true)
       }

     })

     if (seguir) {
       setCarrito([...carrito, productoActual])
       setAlertaAddProducto(true)

     }

   } else {
     setCarrito([...carrito, productoActual])
     setAlertaAddProducto(true)
   }
 }

  const vaciarCarrito = () => setCarrito([])

  const eliminarProCarrito = (producto) => {

    if (producto.cantidad > 1) {

      carrito.forEach((carro) => {
        if (carro.producto === producto.producto) {
          const dato = {
            producto: producto.producto,
            total: producto.total - carro.precio,
            cantidad: producto.cantidad - 1,
            precio: carro.precio,
            imagen: carro.imagen,
          };
          setCarrito(
            carrito.map((carr) =>
              carr.producto === producto.producto ? dato : carr
            )
          )
          setAlertaDeleteProducto(true)
        }
      });
    } else {
      setCarrito(carrito.filter((carro) => carro.producto !== producto.producto))
      setAlertaDeleteProducto(true)
    }
  }

  const cerrarAlertaAddProducto=()=>{
    setAlertaAddProducto(false)
  }

  const cerrarAlertaDeleteProducto=()=>{
    setAlertaDeleteProducto(false)
  }

  const formateoCantidad=(num)=>{
    return `${num.toFixed(2)}`;

  }

  const nCantidad = Object.values(carrito).reduce(
    (acc, { cantidad }) => acc + cantidad,
    0
  );

   const nPrecio = Object.values(carrito).reduce(
    (acc, { cantidad, precio }) => acc + cantidad * precio,
    0
  );

  

  const pagar=()=>{

    const array = [];
    carrito.forEach((doc) => {
     array.push(
       JSON.stringify(
         doc.producto +
           " - " +
           doc.cu +
           "$ x " +
           doc.cantidad +
           " uni = " +
           formateoCantidad(doc.precio) +
           "$" +
           "%3A%0A"
       )
     );
   });
   const nCantidad = Object.values(carrito).reduce(
     (acc, { cantidad }) => acc + cantidad,
     0
   );
   var nPrecio = Object.values(carrito).reduce(
     (acc, { cantidad, precio }) => acc + cantidad * precio,
     0
   );

   nPrecio = formateoCantidad(nPrecio);

   window.open(
     `https://api.whatsapp.com/send?phone=584123396643&text=Hola+requiero+este+pedido%3A%0A%0A${array.toString()}%3A%0A%0ACantidad+de+Articulos%3A${nCantidad}+%2C%0ATotal%3A${nPrecio}$+%0A`,
     "_blank"
   );
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
           pagar
          }

}

