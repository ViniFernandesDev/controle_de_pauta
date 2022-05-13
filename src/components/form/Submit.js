import styles from './Form.module.css'

function Submit ({text}) {
    return (
        <div className={styles.input}>
            <button>{text}</button>
        </div>
    )
}

export default Submit