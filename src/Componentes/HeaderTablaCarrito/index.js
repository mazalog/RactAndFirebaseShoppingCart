import { useCarrito } from '../../hooks/useCarrito'
import CloseIcon from "@material-ui/icons/Close";

import './style.css'
import { useModalCarrito } from '../../hooks/useModalCarrito';
export default function HeaderTablaCarrito() {
    const { nPrecio, nCantidad } = useCarrito()
    const { cerrarModalCarrito } = useModalCarrito()
    return (
        <div className="container_header_tabla">
            <h4>{parseFloat(nPrecio)}$ de  ({nCantidad}) articulos</h4>
            <div onClick={() => cerrarModalCarrito()} className="icono_cerrar"><CloseIcon size="lg" color="secondary" /></div>
        </div>
    )
}