export default function Input({ label, textarea, type }) {
    return (
        <p>
            <label>{label}</label>
            {textarea ? <textarea /> : <input type={type} />}
        </p>
    )
}