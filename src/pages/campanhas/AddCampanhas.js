import React from "react";
import { useForm } from "react-hook-form";

import InputHook from '../../components/form/InputHook';
import Select from '../../components/form/Select';
import Submit from '../../components/form/Submit';

function AddCampanhas() {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.table(data);
    console.log(errors)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <Select label="Cliente" register={register} required />

            <InputHook label="Nome da campanha" register={register} required />
            
            <>Descrição</>

            <Submit text="Cadastrar Campanha" />

        </form>

        
    )
}

export default AddCampanhas
