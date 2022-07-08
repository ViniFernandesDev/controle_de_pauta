import styles from './Form.module.css'

function Select ({name, itemBd, onChange, label}) {
    return (

        <div className={styles.input}>
            <label>{label}</label>

            <select name={name} onChange={onChange} required>
                <option value="">Selecione uma opção</option>
                {itemBd && itemBd.map((item) => (
                    <option value={item.id} key={item.id}>
                        {item.nome}
                    </option>
                ))}
            </select>
        </div>

    )
}

export default Select

/*

*/