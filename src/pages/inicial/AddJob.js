import { useForm } from "react-hook-form";

/* CUSTOM HOOK FETCH API */
import { useFetch } from "../../components/hooks/useFetch";

import InputHook from '../../components/form/InputHook';
import SelectHook from '../../components/form/SelectHook';
import TextArea from '../../components/form/TextArea';
import Submit from '../../components/form/Submit';

function AddJob() {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:5000/jobs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    /* FETCH CLIENTES */
    const urlClientes = "http://localhost:5000/clientes";
    const {data: clientes} = useFetch(urlClientes);

    /* FETCH CAMPANHAS */
    const urlCampanhas = "http://localhost:5000/campanhas";
    const {data: campanhas} = useFetch(urlCampanhas);

    /* FETCH RESPONSAVEL */
    const urlResponsavel = "http://localhost:5000/responsavel";
    const {data: responsavel} = useFetch(urlResponsavel);

    /* FETCH STATUS */
    const urlStatus = "http://localhost:5000/status";
    const {data: status} = useFetch(urlStatus);

    
    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <SelectHook label="Clientes" itemBd={clientes} {...register("Clientes")} required />

            <SelectHook label="Campanhas" itemBd={campanhas} {...register("Campanhas")} required />

            <SelectHook label="Responsável" itemBd={responsavel} {...register("Responsável")} required />

            <SelectHook label="Status" itemBd={status}  {...register("Status")} required />

            <InputHook label="Nome do Job" register={register} required />

            <InputHook label="Iniciar em" register={register} required />

            <InputHook label="Concluir em" register={register} required />

            <TextArea label="Descrição" placeholder="Descrição do Job" register={register} required />
            
            <Submit text="Cadastrar Job" />

        </form>
    )
}

export default AddJob
