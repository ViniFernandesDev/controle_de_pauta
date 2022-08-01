import { useState, useContext } from "react";

import ContextValueAPI from '../../context/Context';

import Input from '../../components/form/Input';
import Select from '../../components/form/Select';
import TextArea from '../../components/form/TextArea';
import Submit from '../../components/form/Submit';

function AddJob() {    

    // GET's list select

    const {clients, campaigns, status, priorities, users} = useContext(ContextValueAPI);
    
    // Information to POST
    const [formValues, setFormValues] = useState({});
    const [isPending, setIsPending] = useState(false);
    const [success, Setsuccess] = useState(false);

    // ID USUÁRIO FICTICIO
    formValues.requester = "1" 

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setIsPending(true);

        fetch("http://laravelapi-pauta.com.l.stph.srv.br/api/jobs", {
            method: "POST",                
            body: JSON.stringify(formValues),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 1|cG2r320AFPSo9zLb3v27JlKk82ZiJV18uk0mhPN5",
                "Access-Control-Allow-Origin": "*"
            },
        }).then(response => {
            setIsPending(false);

            // valida se a requisição falhou
            if (!response.ok) {
                return new Error('falhou a requisição') // cairá no catch da promise
            }

            // verificando pelo status
            if (response.status === 404) {
                return new Error('não encontrou qualquer resultado')
            }

            // verificando pelo status
            if (response.status === 201) {
                Setsuccess(true);
            }

            // retorna uma promise com os dados em JSON
            console.log(response.json());
        });
    }

    return (
        <>    
                <form onSubmit={handleSubmit}>

                    <Select name="client" label="Clientes" itemBd={clients} onChange={handleChange}/>

                    <Select name="campaign" label="Campanhas" itemBd={campaigns} onChange={handleChange}/>

                    <Select name="executors" label="Responsável" itemBd={users} onChange={handleChange}/>

                    <Select name="status" label="Status" itemBd={status} onChange={handleChange}/>

                    <Select name="priority" label="Prioridade" itemBd={priorities} onChange={handleChange}/>

                    <Input name="name" text="Nome do Job" onChange={handleChange}/>

                    <Input type="date" name="start" text="Iniciar em" onChange={handleChange}/>

                    <Input type="date" name="end" text="Concluir em" onChange={handleChange}/>

                    <TextArea name="description" text="Descrição" placeholder="Descrição do Job" onChange={handleChange}/>

                    {!success && <Submit text="Cadastrar Job" />}
                </form>


            {isPending && 
            <div className="signing_up">
                <span>Cadastrando</span>
            </div>
            }
            
            {success && 
                <div className="finished">
                    <span>Job Adicionado</span>
                </div>
            }
        </>
    )
}

export default AddJob
