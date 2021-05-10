import './style.css'

export default function AdminPage() {
    return (
        <div className="container">
            <div className="customCard justify-c">
                <h4 className="text-c">MzAdmin</h4>
                <form className="customForm ">
                    <input placeholder="E-mail" name="name" className="m-t" />
                    <input placeholder="Contraseña" name="password" className="m-t" />
                    <button className="button">Iniciar</button>
                </form>
            </div>
        </div>
    )
}