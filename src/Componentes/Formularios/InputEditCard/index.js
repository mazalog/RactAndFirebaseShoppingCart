import './style.css'
export default function InputEdit({ value, onChange, name }) {
    return (
        <>
            <input placeholder="Ingresa Cantidad"
                maxLength="2"
                onChange={onChange}
                defaultValue={value}
                className="editCard"
                type="text"
                name={name} />
        </>
    )
}