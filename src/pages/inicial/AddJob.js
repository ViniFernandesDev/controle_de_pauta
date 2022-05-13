import React from "react";
import { useForm } from "react-hook-form";

import SelectHook from '../../components/form/SelectHook';
import Submit from '../../components/form/Submit';

import styles from '../../components/form/Form.module.css'

function AddJob() {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.table(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <SelectHook label="Clientes" {...register("Clientes")} />

            <SelectHook label="Campanhas" {...register("Campanhas")} />

            <SelectHook label="Requisitante" {...register("Requisitante")} />

            <SelectHook label="Responsável" {...register("Status")} />

            <SelectHook label="Status" {...register("Status")} />

            <div className={styles.input}>
                <label>Nome do Job</label>
                <input type="text" placeholder="Qual o nome do Job" {...register("Nome do Job", {required: true})} />
            </div>

            <div className={styles.input}>
                <label>Iniciar em</label>
                <input type="text" {...register("Iniciar em")} />
            </div>

            <div className={styles.input}>
                <label>Concluir em</label>
                <input type="text" {...register("Concluir em")} />
            </div>
            
            <Submit text="Cadastrar Job" />

        </form>

        
    )
}

export default AddJob
