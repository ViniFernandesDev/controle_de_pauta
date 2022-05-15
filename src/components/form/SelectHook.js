import React from "react";
import styles from './Form.module.css'

const Select = React.forwardRef(({ onChange, register, onBlur, label, required }, ref) => (

        <div className={styles.input}>
            <label>{label}</label>

            <select name={label} {...register(label)} ref={ref} onChange={onChange} onBlur={onBlur} required={required}>
                <option value="">Selecione uma opção</option>
                <option value="opcao1">Opção 1</option>
                <option value="opcao2">Opção 2</option>
                <option value="opcao3">Opção 3</option>
                  
            </select>
        </div>

  ));

export default Select

/*{itemBd.map((item) => (
                    <option value={item.nome} key={item.id}>
                        {item.nome}
                    </option>
                ))} */