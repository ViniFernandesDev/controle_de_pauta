import React from "react";
import { useForm } from "react-hook-form";

import InputHook from '../../components/form/InputHook';
import SelectHook from '../../components/form/SelectHook';
import Submit from '../../components/form/Submit';

function AddJob() {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.table(data);
    console.log(errors)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <SelectHook label="Clientes" register={register} required />

            <SelectHook label="Campanhas" register={register} required />

            <SelectHook label="Responsável" register={register} required />

            <SelectHook label="Status" register={register} required />

            <InputHook label="Nome do Job" register={register} required />

            <InputHook label="Iniciar em" register={register} required />

            <InputHook label="Concluir em" register={register} required />
            
            <Submit text="Cadastrar Job" />

        </form>

        
    )
}

export default AddJob
