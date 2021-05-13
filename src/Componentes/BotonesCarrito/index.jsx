import React from 'react'
import {useCarrito} from '../../hooks/useCarrito'
import { useModalCarrito } from '../../hooks/useModalCarrito'
import { useLocation} from 'wouter'
import {animateScroll as scroll} from 'react-scroll'
import './style.css'



export default function BotonesCarrito() {

  const {carrito,enviarPedidoaWhatsapp}=useCarrito()
  const {cerrarModalCarrito}=useModalCarrito()
  const [,navigate]=useLocation()


  const finalizarCompra=()=>{
    if(carrito.length!==0){
    cerrarModalCarrito()
    scroll.scrollToTop()
    navigate('/FinalizarPedido')
    }
  }
  
  return (
  <>
      <div className="contenedor_botones_carrito">
         <button onClick={()=>enviarPedidoaWhatsapp({cell:'04125768850'})} className="boton_accion_carrito bg-whatsapp">Enviar pedido a whatsapp</button>
         <button onClick={()=>finalizarCompra()} className="boton_accion_carrito">Finalizar compra</button>
      </div>
  </>
  )
}
