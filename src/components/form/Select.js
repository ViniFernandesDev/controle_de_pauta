import styles from './Form.module.css'

function Select ({name, itemBd, onChange, label,}) {
    return (

        <div className={styles.input}>
            <label>{label}</label>

            <select defaultValue={'DEFAULT'} name={name} onChange={onChange} required>
                <option value="DEFAULT" disabled>Selecione uma opção</option>
                
                {itemBd && Object.keys(itemBd.data).map((item, e) => {
                    return (
                        <option value={itemBd.data[item].id} key={itemBd.data[item].id}>
                        {itemBd.data[item].name}
                        </option>
                    )
                })}
            </select>
        </div>

    )
}

export default Select

/*

*/