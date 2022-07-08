import styles from './Form.module.css'

const InputHook = ({ name, label, register, required }) => (

    <div className={styles.input}>
        <label>{label}</label>
        <input name={name} {...register(label, { required })} />
    </div>

);

export default InputHook