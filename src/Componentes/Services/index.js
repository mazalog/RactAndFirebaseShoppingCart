import { Grid } from '@material-ui/core'
import './style.css'
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

export default function Services() {
    return (
        <div className="container-services">
            <Grid container>
                <Grid item xs={12} sm={3}>
                    <div className="service">
                        <h6>Delivery</h6>
                        <AirportShuttleIcon fontSize="large" />
                        <p>Incluimos Delivery Gratuito en la zona Libertador de Caracas</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <div className="service">
                        <h6>Categorías</h6>
                        <FastfoodIcon fontSize="large" />
                        <p>Variedad de productos y servicios podrás conseguir en nuestra Minitienda Online</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <div className="service">
                        <h6>Métodos de pago</h6>
                        <StorefrontIcon fontSize="large"></StorefrontIcon>
                        <p>Zelle, Paypal, Pago Móvil, Transferencias</p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3}>

                    <div className="service">
                        <h6>Seguridad</h6>
                        <VerifiedUserIcon fontSize="large" />
                        <p>Toda tus compras cuentan con respaldo de seguridad virutal</p>
                    </div>
                </Grid>
            </Grid>
        </div>

    )
}