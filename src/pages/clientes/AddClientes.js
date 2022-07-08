import React from "react";
import { useForm } from "react-hook-form";

import InputHook from '../../components/form/InputHook';
import Submit from '../../components/form/Submit';

function AddClientes() {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.table(data);
    console.log(errors)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <InputHook label="Nome do cliente" register={register} required />
            
            <InputHook label="CNPJ" register={register} required />

            <InputHook label="Razão Social" register={register} required />

            <InputHook label="Website" register={register} required />

            <InputHook label="E-mail" register={register} required />

            <InputHook label="Contato responsável" register={register} required />

            <InputHook label="Whatsapp" register={register} required />

            <>Descrição</>
            
            <Submit text="Cadastrar Cliente" />

        </form>

        
    )
}

export default AddClientes
