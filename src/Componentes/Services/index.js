import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import './style.css'


export default function Services() {
    return (
        <div className="container_services">

            <div className="service">
                <h6>Delivery</h6>
                <div className="icono_service"><AirportShuttleIcon fontSize="large" /></div>

                <p>Incluimos Delivery Gratuito en la zona Libertador de Caracas</p>
            </div>

            <div className="service">
                <h6>Categorías</h6>
                <div className="icono_service"><FastfoodIcon fontSize="large" /></div>
                <p>Variedad de productos y servicios podrás conseguir en nuestra Minitienda Online</p>
            </div>

            <div className="service">
                <h6>Métodos de pago</h6>
                <div className="icono_service"><StorefrontIcon fontSize="large" /></div>
                <p>Zelle, Paypal, Pago Móvil, Transferencias</p>
            </div>


            <div className="service">
                <h6>Seguridad</h6>
                <div className="icono_service"><VerifiedUserIcon fontSize="large" /></div>
                <p>Toda tus compras cuentan con respaldo de seguridad virutal</p>
            </div>
        </div>
    )
}