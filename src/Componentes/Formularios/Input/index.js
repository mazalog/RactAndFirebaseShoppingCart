import './style.css'

export default function Input({ name, onChange, type }) {
    return (
        <>
            <input name={name} type={type} onChange={onChange} className="inputUpe" required />
        </>
    )
}