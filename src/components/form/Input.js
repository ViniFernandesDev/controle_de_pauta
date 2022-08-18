import styles from './Form.module.css'

function Input ({type,text,name, onChange, value}) {
    return (
        <div className={styles.input}>
            <label htmlFor={name}>{text}</label>
            <input 
            type={type} 
            name={name} 
            id={name} 
            onChange={onChange}
            value={value}
             required />
        </div>
    )
}

export default Input