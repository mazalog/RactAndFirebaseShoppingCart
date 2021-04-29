import './style.css'
import Grid from '@material-ui/core/Grid'
import { useCarrito } from '../../hooks/useCarrito'
import { Divider } from '@material-ui/core'
import Input from '../../Componentes/Formularios/Input'
import TextTarea from '../../Componentes/Formularios/Textarea'
import { useState } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { agregaOrden } from '../../firebase/client'

export default function FinalizarPedidoPage() {

    const { carrito, nPrecio, formateoCantidad, nCantidad } = useCarrito()

    const [radio, setRadio] = useState('')
    const valoresIniciales = {
        nombreApellido: ''
        , telefono: '',
        correo: '',
        direccion: '',
        nota: '',
        metodoPago: '',
        fecha: new Date(),
        carrito: carrito
    }
    const [valores, setValores] = useState(valoresIniciales)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    const handleInputChange = (e) => {
        setValores({ ...valores, [e.target.name]: e.target.value })
        setErrors({})
    }

    const handleRadioChange = (e) => {
        setRadio(e.target.value)
        setErrors({})
    }

    const onSubmit = () => {

        if (valores.nombreApellido === '') return setErrors({ ...errors, nombreApellido: true })
        if (valores.telefono === '') return setErrors({ ...errors, telefono: true })
        if (valores.correo === '') return setErrors({ ...errors, correo: true })
        if (valores.direccion === '') return setErrors({ ...errors, direccion: true })
        if (radio === '') return setErrors({ ...errors, radio: true })
        if (carrito.length === 0) return setErrors({ ...errors, carritoErr: true })
        setLoading(true)
        agregaOrden({
            cliente: valores.nombreApellido,
            email: valores.correo,
            telefono: valores.telefono,
            direccion: valores.direccion,
            nota: valores.nota,
            metodoPago: radio,
            pedido: carrito,
            precioTotal: nPrecio,
            cantidadTotal: nCantidad
        }).then((res) => {
            console.log(res.id)
            setLoading(false)
            window.location = `/FinalizarPedido/orden/${res.id}`
        }).catch((err) => {
            console.log(err)
            setLoading(false)
        })

    }

    return (
        <>
            <div className="containerPage">
                <div className="container-title">
                    <h6>Finalizar Pedido</h6>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={8}>
                        <div className="container-inputs">
                            <p className="label-input">NOMBRE Y APELLIDO *</p>
                            <Input type="text" onChange={handleInputChange} name="nombreApellido" />
                            {
                                errors.nombreApellido ? <span className="span-error">Escribir nombre y apellido</span> : <></>
                            }
                            <p className="label-input">TELEFONO *</p>
                            <Input type="number" onChange={handleInputChange} name="telefono" />
                            {
                                errors.telefono ? <span className="span-error">Escribir numero telefonico</span> : <></>
                            }
                            <p className="label-input">CORREO ELECTRONICO *</p>
                            <Input type="email" onChange={handleInputChange} name="correo" />
                            {
                                errors.correo ? <span className="span-error">Escribir correo electronico</span> : <></>
                            }
                            <p className="label-input">DIRECCION DE CALLE *</p>
                            <Input type="text" onChange={handleInputChange} name="direccion" />
                            {
                                errors.direccion ? <span className="span-error">Escribir direccion</span> : <></>
                            }
                            <p className="label-textarea"> NOTA DEL PEDIDO(OPCIONAL) </p>
                            <TextTarea onChange={handleInputChange} name="nota" />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} >
                        <div className="container-pedido">
                            <div className="bg-pedido">
                                <div className="box-pedido">
                                    <h6>Tu pedido</h6>
                                    <div className="container-list">
                                        {
                                            carrito.map(doc =>
                                                <div className="list" key={doc.url}>
                                                    <p>{doc.producto} X {doc.cantidad} = {formateoCantidad(doc.precio * doc.cantidad)}</p>
                                                    <Divider />
                                                </div>
                                            )
                                        }
                                        <p className="total-title">Total:</p>
                                        <p className="total">${formateoCantidad(nPrecio)}</p>
                                        {
                                            errors.carritoErr ? <span className="span-error">El carrito esta vacio</span> : <></>
                                        }
                                        <Divider />
                                    </div>
                                    <div className="container-btn">
                                        <div className="container-radius">
                                            <FormControl component="fieldset">
                                                <RadioGroup name="metodoPago" onChange={handleInputChange} >
                                                    <FormControlLabel value="Transferencia" control={<Radio color="default" onChange={handleRadioChange} />} label="Transferencia Bancaria, Pago movil, Zelle" />
                                                    {
                                                        radio === 'Transferencia' ? <><span className="span-radio"> Realiza tu pago directamente en cualquiera de nuestras entidades bancarias. Puedes cancelar en Dolares (USD) o en Bolívares (Bs) al respectivo cambio del día. Al realizar pedido y la transferencia, envíanos el comprobante a opandre123@gmail.com o al +584241917939</span></> : <></>
                                                    }
                                                    <FormControlLabel value="Efectivo" control={<Radio color="default" onChange={handleRadioChange} />} label="Pago en efectivo" />
                                                    {
                                                        radio === 'Efectivo' ? <><span className="span-radio"> Paga por Punto de Venta o Cash al momento de la entrega o por nuestra tienda.</span> </> : <></>
                                                    }
                                                    <FormControlLabel value="Paypal" disabled control={<Radio color="default" />} label="Paypal" />
                                                </RadioGroup>
                                            </FormControl>
                                            {
                                                errors.radio ? <span className="span-error">Seleccionar un metodo de pago</span> : <></>
                                            }
                                        </div>
                                        <span className="span">Una vez realizado su pedido revisar su correo electronico y reportar
                                        el pago via whatsapp
                                        </span>
                                        {
                                            loading ? <div style={{ marginTop: '15px' }}><h6 className="btn-realizar-pedido-disabled">Realizar Pedido</h6></div> : <h6 onClick={onSubmit} className="btn-realizar-pedido">Realizar Pedido</h6>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}