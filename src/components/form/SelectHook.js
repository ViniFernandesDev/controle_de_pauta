import React from "react";
import styles from './Form.module.css'

const Select = React.forwardRef(({ itemBd, onChange, onBlur, label, required }, ref) => (

        <div className={styles.input}>
            <label>{label}</label>

            <select name={label} ref={ref} onChange={onChange} onBlur={onBlur} required={required}>
                <option value="">Selecione uma opção</option>
                {itemBd && itemBd.map((item) => (
                    <option value={item.nome} key={item.id}>
                        {item.nome}
                    </option>
                ))}
            </select>
        </div>

  ));

export default Select
