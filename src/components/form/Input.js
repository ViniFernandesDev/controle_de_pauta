import styles from './Form.module.css'

function Input ({type,text,name, onChange}) {
    return (
        <div className={styles.input}>
            <label htmlFor={name}>{text}</label>
            <input 
            type={type} 
            name={name} 
            id={name} 
            onChange={onChange}
            />
        </div>
    )
}

export default Input