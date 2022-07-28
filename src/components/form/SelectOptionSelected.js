import styles from './Form.module.css'

function SelectOptionSelected ({name, itemBd, onChange, label, itemOptionDefault}) {

    return (

        <div className={styles.input}>
            <label>{label}</label>

            <select name={name} onChange={onChange} required>
                <option value="">Selecione uma opção</option>
                
                {itemBd && Object.keys(itemBd.data).map((item, e) => {
                    return (
                        <option selected={itemBd.data[item].id === itemOptionDefault ? true : false} value={itemBd.data[item].id} key={itemBd.data[item].id}>
                        {itemBd.data[item].name}
                        </option>
                    )
                })}
            </select>
        </div>

    )
}

export default SelectOptionSelected
