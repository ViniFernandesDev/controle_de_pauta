import styles from './Form.module.css'

function Select ({text,name,options,handleOnChange,value}) {
    return (
        <div className={styles.input}>
            <label htmlFor={name}>{text}</label>
            <select  name={name} id={name} >
                <option>Selecione uma opção:</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.nome}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select