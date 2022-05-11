import styles from './Form.module.css'

function TextArea ({name,placeholder, value}) {
    return (
        <div className={styles.input}>
            <label htmlFor={name}></label>
            <textarea 
                name={name} 
                id={name} 
                placeholder={placeholder} 
                value={value}
            >

            </textarea>
        </div>
    )
}

export default TextArea