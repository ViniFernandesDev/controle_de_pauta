import React from "react";
import styles from './Form.module.css'

const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
    <>
        <div className={styles.input}>
            <label>{label}</label>

            <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
                <option value="">Selecione uma opção</option>

            </select>
        </div>
    </>
  ));

export default Select

/*{itemBd.map((item) => (
                    <option value={item.nome} key={item.id}>
                        {item.nome}
                    </option>
                ))} */