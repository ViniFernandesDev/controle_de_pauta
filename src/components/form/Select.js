import styles from './Form.module.css'

function Select ({text,name,itemBd,handleOnChange,value}) {
    return (
        <div className={styles.input}>
            <label htmlFor={name}>{text}</label>
            <select  name={name} id={name} onChange={handleOnChange} >
                <option value="todos">Selecione uma opção:</option>

                {itemBd.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.nome}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select

/*

*/