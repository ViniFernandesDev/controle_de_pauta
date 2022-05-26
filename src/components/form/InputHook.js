import styles from './Form.module.css'

const InputHook = ({ label, register, required }) => (

    <div className={styles.input}>
        <label>{label}</label>
        <input {...register(label, { required })} />
    </div>

);

export default InputHook