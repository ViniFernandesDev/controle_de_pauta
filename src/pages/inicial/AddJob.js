import { useState } from "react";

/* CUSTOM HOOK FETCH API */
import { useFetch } from "../../components/hooks/useFetch";

import Input from '../../components/form/Input';
import Select from '../../components/form/Select';
import TextArea from '../../components/form/TextArea';
import Submit from '../../components/form/Submit';

function AddJob() {    

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

    
    const [formValues, setFormValues] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const res = await fetch("http://localhost:5000/jobs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues),
        });

        console.log(formValues);

    }

    function handleChange(e) {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }
    
    return (

        <form id="formAdd" onSubmit={handleSubmit}>

            <Select name="clientes" label="Clientes" itemBd={clientes} onChange={handleChange}/>

            <Select name="campanhas" label="Campanhas" itemBd={campanhas} onChange={handleChange}/>

            <Select name="responsavel" label="Responsável" itemBd={responsavel} onChange={handleChange}/>

            <Select name="status" label="Status" itemBd={status} onChange={handleChange}/>

            <Input name="nome" text="Nome do Job" onChange={handleChange}/>

            <Input name="inicio" text="Iniciar em" onChange={handleChange}/>

            <Input name="fim" text="Concluir em" onChange={handleChange}/>

            <TextArea name="descricao" text="Descrição" placeholder="Descrição do Job" onChange={handleChange}/>
            
            <Submit text="Cadastrar Job" />

        </form>
    )
}

export default AddJob
