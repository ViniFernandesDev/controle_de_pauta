import { useState } from "react";

/* CUSTOM HOOK FETCH API */
import { useFetchGet } from "../../components/hooks/useFetchGet";

import SelectOptionSelected from '../../components/form/SelectOptionSelected';

function EditJob({idItemSelect}) {    

    const urlClients = "http://laravelapi-pauta.com.l.stph.srv.br/api/clients";
    const {value: clients} = useFetchGet(urlClients);

    const urlCampaigns = "http://laravelapi-pauta.com.l.stph.srv.br/api/campaigns";
    const {value: campaigns} = useFetchGet(urlCampaigns);

    const urlStatus = "http://laravelapi-pauta.com.l.stph.srv.br/api/status";
    const {value: status} = useFetchGet(urlStatus);

    const urlPriorities = "http://laravelapi-pauta.com.l.stph.srv.br/api/priorities";
    const {value: priorities} = useFetchGet(urlPriorities);

    const urlUsers = "http://laravelapi-pauta.com.l.stph.srv.br/api/users";
    const {value: users} = useFetchGet(urlUsers);

    const urlSingleJob = `http://laravelapi-pauta.com.l.stph.srv.br/api/jobs/${idItemSelect}`;
    const {value: singleItemJob} = useFetchGet(urlSingleJob);

    const singleItemJobId = singleItemJob && singleItemJob.data[0].client.id

    // Information to POST
    const [formValues, setFormValues] = useState({});

    const handleChange = function(e)  {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

    return (
        <>    

            <form>

                <SelectOptionSelected itemOptionDefault={singleItemJobId} name="client" label="Clientes" itemBd={clients} onChange={handleChange}/>

                <SelectOptionSelected itemOptionDefault={singleItemJobId} name="campaign" label="Campanhas" itemBd={campaigns} onChange={handleChange}/>

                <SelectOptionSelected itemOptionDefault={singleItemJobId} name="executors" label="Responsável" itemBd={users} onChange={handleChange}/>

                <SelectOptionSelected itemOptionDefault={singleItemJobId} name="status" label="Status" itemBd={status} onChange={handleChange}/>

                <SelectOptionSelected itemOptionDefault={singleItemJobId} name="priority" label="Prioridade" itemBd={priorities} onChange={handleChange}/>


            </form>

        </>
    )
}

export default EditJob
