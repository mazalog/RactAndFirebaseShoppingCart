import './style.css'
export default function InputEdit({ value, onChange, name }) {
    return (
        <>
            <input maxLength="2" min="0" onChange={onChange} defaultValue={value} className="edit" type="text" name={name} />
        </>
    )
}