import "./style.css"
import { useLocation } from 'wouter'
import { animateScroll as scroll } from 'react-scroll'


export default function FinalizaCompraYa() {
    const [, navigate] = useLocation()

    const handleClick = () => {
        scroll.scrollToTop()
        navigate('/FinalizarPedido')
    }
    return (
        <>
            <div className="container_finalizar">
                <div className="finalizar" onClick={handleClick}>
                    <h6>Finalizar Compra</h6>
                </div>
            </div>
        </>
    )
}