import styles from './Form.module.css'

const Input = ({ label, register, required }) => (

    <div className={styles.input}>
        <label>{label}</label>
        <input {...register(label)} required={required} />
    </div>

);

export default Input