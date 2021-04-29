import { Divider, Grid } from '@material-ui/core'
import '../style.css'

export default function OrdenPage() {
    return (
        <>
            <div className="containerPage">
                <div className="container-title">
                    <h6>Finalizar Pedido</h6>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4} >
                        <div className="container-pedido">
                            <div className="bg-pedido">
                                <div className="box-pedido">
                                    <h6>Gracias. Recibimos tu pedido</h6>
                                    <p className="subtitle">Orden Numero: </p>
                                    <Divider />
                                    <p className="subtitle">Fecha: </p>
                                    <Divider />
                                    <p className="subtitle">Email: </p>
                                    <Divider />
                                    <p className="subtitle">Total: </p>
                                    <Divider />
                                    <p className="subtitle">Forma de Pago: </p>
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
                                        <tr>
                                            <td>producto</td>
                                            <td>cantidad</td>
                                            <td className="aliDerecha">total</td>
                                        </tr>
                                        <div></div>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td className="title-th" >Metodo de pago:</td>
                                            <td></td>
                                            <th className="aliDerecha" >Efectivo</th>
                                        </tr>
                                        <tr>
                                            <td className="title-th" >Total:</td>
                                            <td></td>
                                            <th className="aliDerecha">Cantidad</th>
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
                                            <td className="title-th">Email:</td>
                                            <td className="aliDerecha">@</td>
                                        </tr>
                                        <tr>
                                            <td className="title-th">Telefono:</td>
                                            <td className="aliDerecha">03232</td>
                                        </tr>
                                        <tr>
                                            <td className="title-th" >Direccion de Facturacion:</td>
                                            <td className="aliDerecha">Direccion</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}