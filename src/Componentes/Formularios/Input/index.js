import './style.css'

export default function Input({ name, onChange }) {
    return (
        <>
            <input name={name} onChange={onChange} required />
        </>
    )
}