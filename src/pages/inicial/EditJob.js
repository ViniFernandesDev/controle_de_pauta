import {useState, useContext } from 'react'

import ContextValueAPI from '../../context/Context';

/* CUSTOM HOOK FETCH API */
import { useFetchGet } from "../../components/hooks/useFetchGet";

import SelectOptionSelected from '../../components/form/SelectOptionSelected';

function EditJob({idItemSelect}) {    

    const {clients, campaigns, status, priorities, users } = useContext(ContextValueAPI);

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
