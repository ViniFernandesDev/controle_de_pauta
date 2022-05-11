import styles from './Form.module.css'

function Submit ({type,name,value}) {
    return (
        <div className={styles.input}>
            <input
            type={type} 
            name={name} 
            value={value}
            ></input>
        </div>
    )
}

export default Submit