import './index.css'
import IconWhatsapp from '../IconWhatsapp'
import IconInstagram from '../IconInstagram'

export default function Social() {
    return (
        <div className="portada" >
            <div className="container-social">
                <div className="container-img">
                    <img className="img-social" src="/logomzhogar.png" loading="lazy" />
                </div>
            </div>
            <div className="social-icons">
                <div className="icon" onClick={() => window.open('https://api.whatsapp.com/send?phone=584241917939&text=Hola+escribo+desde+mzhogar')}> <IconWhatsapp /></div>
                <div className="icon" onClick={() => window.open('https://instagram.com/mazadesign_')}><IconInstagram /></div>
            </div>
        </div>
    )
}