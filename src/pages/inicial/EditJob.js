import {useState, useContext, useEffect } from 'react'

import ContextValueAPI from '../../context/Context';
import SelectOptionSelected from '../../components/form/SelectOptionSelected';
import Input from '../../components/form/Input';
import TextArea from '../../components/form/TextArea';
import Submit from '../../components/form/Submit';

/* CUSTOM HOOK FETCH API */
import { useFetchGet } from "../../components/hooks/useFetchGet";


function EditJob({idItemSelect}) {    

    const {clients, campaigns, status, priorities, users} = useContext(ContextValueAPI);

    /*HOOK FETCH API*/
    const urlSingleJob = `http://laravelapi-pauta.com.l.stph.srv.br/api/jobs/${idItemSelect}`;
    const {value: singleItemJob} = useFetchGet(urlSingleJob);

    /*INFORMATION SEND PROPS EDIT JOB*/
    const [itensDefault, setItensDefault] = useState({});
    const [name, setName] = useState("");
    const [dataStart, setDataStart] = useState("");
    const [dataEnd, setDataEnd] = useState("");
    const [dataDescription, setDataDescription] = useState("");
    
    /* update state items defaults form */
    useEffect(() => {
        if(singleItemJob) {
            const item = singleItemJob.data[0]

            setItensDefault({
                client: item.client.id,
                campaign: item.campaign.id,
                requester: item.requester.id,
                executors: item.executors,
                status: item.status.id,
                priority: item.priority.id,
                name: item.name,
                start: item.start,
                end: item.end,
                description: item.description,
            })

            setName(item.name)
            setDataStart(item.start)
            setDataEnd(item.end)
            setDataDescription(item.description)
        }
    },[singleItemJob]);

    // Information to POST
    const [formValues, setFormValues] = useState({});
    const [isPending, setIsPending] = useState(false);
    const [success, Setsuccess] = useState(false);

    console.log(formValues)

    /* Capture content inputs */
    const handleChange = function(e)  {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
        
        if(e.target.name === "name") {
            setName(value)
        }

        if(e.target.name === "start") {
            setDataStart(value)
        }

        if(e.target.name === "end") {
            setDataEnd(value)
        }

        if(e.target.name === "description") {
            setDataDescription(value)
        }
    }

    /*SEND FORM*/
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setIsPending(true);

        fetch(`http://laravelapi-pauta.com.l.stph.srv.br/api/jobs/${idItemSelect}`, {
            method: "PUT",                
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
            if (response.status === 200) {
                Setsuccess(true);
            }

            // retorna uma promise com os dados em JSON
            console.log(response.json());
        });
    }
   
    return (
        <>    

            <form onSubmit={handleSubmit}>

                <SelectOptionSelected itemOptionDefault={itensDefault.client} name="client" label="Clientes" itemBd={clients} onChange={handleChange}/>

                <SelectOptionSelected itemOptionDefault={itensDefault.campaign} name="campaign" label="Campanhas" itemBd={campaigns} onChange={handleChange}/>

                <SelectOptionSelected itemOptionDefault={itensDefault.requester} name="executors" label="Responsável" itemBd={users} onChange={handleChange}/>

                <SelectOptionSelected itemOptionDefault={itensDefault.status} name="status" label="Status" itemBd={status} onChange={handleChange}/>

                <SelectOptionSelected itemOptionDefault={itensDefault.priority} name="priority" label="Prioridade" itemBd={priorities} onChange={handleChange}/>

                <Input type="text" name="name" text="Nome do Job" onChange={handleChange} value={name || ""}/>

                <Input type="text" name="start" text="Iniciar em" onChange={handleChange} value={dataStart || ""}/>

                <Input type="text" name="end" text="Concluir em" onChange={handleChange} value={dataEnd || "" }/>
    
                <TextArea name="description" text="Descrição" placeholder="Descrição do Job" onChange={handleChange} value={dataDescription || "" }/>

                {!success && <Submit text="Alterar Job" />}
            </form>

            {isPending && 
            <div className="signing_up">
                <span>Alterando</span>
            </div>
            }
            
            {success && 
                <div className="finished">
                    <span>Job Alterado</span>
                </div>
            }

        </>
    )
}

export default EditJob
