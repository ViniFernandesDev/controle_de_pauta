import styles from './Form.module.css'

const Input = ({ label, register, required }) => (
    <>
        <label>{label}</label>
        <input {...register(label, { required })} />
    </>
);

export default Input