import './style.css'

export default function TextTarea({ name, onChange }) {
    return (
        <>
            <textarea name={name} onChange={onChange} required />
        </>
    )
}