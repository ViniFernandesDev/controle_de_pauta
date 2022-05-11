import styles from './Form.module.css'

function Input ({type,text,name}) {
    return (
        <div className={styles.input}>
            <label htmlFor={name}>{text}</label>
            <input 
            type={type} 
            name={name} 
            id={name} 
            />
        </div>
    )
}

export default Input