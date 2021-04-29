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

export default function FinalizarPedidoPage() {

    const { carrito, nPrecio, formateoCantidad } = useCarrito()

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

    const [data, setData] = useState(valoresIniciales)
    const [radio, setRadio] = useState('')

    const handleInputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleRadioChange = (e) => {
        setRadio(e.target.value)
    }

    const onSubmit = () => {
        console.log(data)
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
                            <Input onChange={handleInputChange} name="nombreApellido" />
                            <p className="label-input">TELEFONO *</p>
                            <Input onChange={handleInputChange} name="telefono" />
                            <p className="label-input">CORREO ELECTRONICO *</p>
                            <Input onChange={handleInputChange} name="correo" />
                            <p className="label-input">DIRECCION DE CALLE *</p>
                            <Input onChange={handleInputChange} name="direccion" />
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
                                                    <p>{doc.producto} X {doc.cantidad} = {doc.precio * doc.cantidad}</p>
                                                    <Divider />
                                                </div>
                                            )
                                        }
                                        <p className="total-title">Total:</p>
                                        <p className="total">${formateoCantidad(nPrecio)}</p>
                                        <Divider />
                                    </div>
                                    <div className="container-btn">
                                        <div className="container-radius">
                                            <FormControl component="fieldset">
                                                <RadioGroup name="metodoPago" onChange={handleInputChange} >
                                                    <FormControlLabel value="transferencia" control={<Radio color="default" onChange={handleRadioChange} />} label="Transferencia Bancaria, Pago movil, Zelle" />
                                                    {
                                                        radio === 'transferencia' ? <><span className="span-radio"> Realiza tu pago directamente en cualquiera de nuestras entidades bancarias. Puedes cancelar en Dolares (USD) o en Bolívares (Bs) al respectivo cambio del día. Al realizar pedido y la transferencia, envíanos el comprobante a opandre123@gmail.com o al +584241917939</span></> : <></>
                                                    }
                                                    <FormControlLabel value="efectivo" control={<Radio color="default" onChange={handleRadioChange} />} label="Pago en efectivo" />
                                                    {
                                                        radio === 'efectivo' ? <><span className="span-radio"> Paga por Punto de Venta o Cash al momento de la entrega o por nuestra tienda.</span> </> : <></>
                                                    }
                                                    <FormControlLabel value="Paypal" disabled control={<Radio color="default" />} label="Paypal" />
                                                </RadioGroup>
                                            </FormControl>
                                        </div>
                                        <span className="span">Una vez realizado su pedido revisar su correo electronico y reportar
                                        el pago via whatsapp
                                        </span>
                                        <h6 onClick={onSubmit} className="btn-realizar-pedido">Realizar Pedido</h6>
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