import { Divider, Grid } from '@material-ui/core'
import { useEffect, useState } from 'react'
import Spinner from '../../../Componentes/Spinner'
import { consultarOrden } from '../../../firebase/client'
import '../style.css'

export default function OrdenPage({ params }) {


    const formateoCantidad = (num) => {
        return `${num.toFixed(2)}`;

    }
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [orden, setOrden] = useState({})

    useEffect(() => {
        consultarOrden({ id: params.orden }).then((res) => {
            console.log(res.data())
            setOrden(res.data())
            setLoading(false)
        })
            .catch((err) => {
                console.log(err)
                setError(true)
                setLoading(false)
            })
    }, [])

    const fechaFormateada = (fecha) => {
        var dia = fecha.getDate(),
            mes = fecha.getMonth(),
            año = fecha.getFullYear();
        var meses = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Otubre",
            "Noviembre",
            "Diciembre",
        ];
        var pdia = dia,
            pmes = meses[mes],
            paño = año;
        return pdia + " de " + pmes + " del " + paño;
    }

    return (
        <>
            <div className="containerPage">
                <div className="container-title">
                    <h6>Finalizar Pedido</h6>
                </div>{
                    loading ? <div className="cargando"><Spinner /></div> : (<>{
                        error ? <><div className="container-error"><h6 style={{ textAlign: 'center' }}>Ups, ocurrio un error</h6></div></> : (<>

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={4} >
                                    <div className="container-pedido">
                                        <div className="bg-pedido">
                                            <div className="box-pedido">
                                                <h6>Gracias. Recibimos tu pedido</h6>
                                                <p className="subtitle">Orden Numero: </p>
                                                <p>{params.orden}</p>
                                                <Divider />
                                                <p className="subtitle">Fecha: </p>
                                                {
                                                    fechaFormateada(orden.createdAt.toDate())
                                                }
                                                <Divider />
                                                <p className="subtitle">Email: </p>
                                                <p>{orden.email}</p>
                                                <Divider />
                                                <p className="subtitle">Total: </p>
                                                ${formateoCantidad(orden.precioTotal)}
                                                <Divider />
                                                <p className="subtitle">Forma de Pago: </p>
                                                {orden.metodoPago}
                                                <Divider />
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={8}>
                                    <div className="container-detalles">
                                        <h6>Detalles del pedido</h6>
                                        <div className="detalles">
                                            <table className="tabla-detalles">
                                                <thead>
                                                    <tr></tr>
                                                    <tr></tr>
                                                    <tr></tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        orden.pedido.map(doc =>
                                                            <tr key={doc.producto}>
                                                                <td className="aliIzquierda">{doc.producto}</td>
                                                                <td>X {doc.cantidad}</td>
                                                                <td className="aliDerecha">${formateoCantidad(doc.total)}</td>
                                                            </tr>
                                                        )
                                                    }

                                                    <div></div>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <td className="title-th  aliIzquierda" >Metodo de pago:</td>
                                                        <td></td>
                                                        <th className="aliDerecha" >{orden.metodoPago}</th>
                                                    </tr>
                                                    <tr>
                                                        <td className="title-th aliIzquierda" >Total:</td>
                                                        <td></td>
                                                        <th className="aliDerecha">${formateoCantidad(orden.precioTotal)}</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                        <h6>Detalles del cliente</h6>
                                        <div className="detalles">
                                            <table className="tabla-detalles">
                                                <thead>
                                                    <td></td>
                                                    <td></td>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="title-th  aliIzquierda">Email:</td>
                                                        <td className="aliDerecha">{orden.email}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="title-th aliIzquierda">Telefono:</td>
                                                        <td className="aliDerecha">{orden.telefono}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="title-th aliIzquierda" >Direccion de Facturacion:</td>
                                                        <td className="aliDerecha">{orden.direccion}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </>)
                    }</>
                    )
                }

            </div>
        </>
    )
}