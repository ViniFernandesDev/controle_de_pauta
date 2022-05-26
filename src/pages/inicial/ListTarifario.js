import {useMemo, useState} from 'react'

/* CUSTOM HOOK FETCH API */
import { useFetch } from "../../components/hooks/useFetch";

import Table from "../../components/table/Table"
import Select from '../../components/form/Select'
import styles from './Filtro.module.css'

function ListTarifario() {

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

    /* FETCH ORDENACAO */
    const urlOrdenacao = "http://localhost:5000/ordenacao";
    const {data: ordenacao} = useFetch(urlOrdenacao);

     /* FETCH JOBS */
     const urlJobs = "http://localhost:5000/jobs";
     const {data: jobs} = useFetch(urlJobs);

    const [selectedJob, setSelectedJob] = useState();

    // Function to get filtered list
    function getFilteredList() {
        // Avoid filter when selectedJob is null
        if (!selectedJob) {
        return jobs;
        }
        return jobs.filter((item) => item.fk_id_cliente === selectedJob);
    }

    // Avoid duplicate function calls with useMemo
    let filteredList = useMemo(getFilteredList, [selectedJob, jobs]);

    function handleCategoryChange(event) {
        setSelectedJob(event.target.value);
    }

    return (
        <>
            <form className={styles.box_filter}>
                <Select text="Cliente" name="cliente" itemBd={clientes} handleOnChange={handleCategoryChange} />
                <Select text="Campanha" name="campanha" itemBd={campanhas}  />  
                <Select text="Status" name="status" itemBd={status} />
                <Select text="Ordenação" name="ordenacao" itemBd={ordenacao} /> 
            </form> 
            
            <Table>
               <table>
                    <thead>
                        <tr>
                            <th><span>Cliente</span></th>
                            <th><span>Job</span></th>
                            <th><span>Campanha</span></th>
                            <th><span>Responsáveis</span></th>
                            <th><span>Prazo Início</span></th>
                            <th><span>Prazo Fim</span></th>
                            <th><span>Status</span></th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {filteredList.map((item) => {
                                return (
                                    <tr key={item.id} className={`status-${item.id}`}>

                                        <td className={'width_camp2'}>
                                            <span>{item.fk_id_cliente}</span>
                                        </td>

                                        <td>
                                            <span>{item.nome}</span>
                                        </td>

                                        <td>
                                            <span>{item.campanha}</span>
                                        </td>

                                        <td>
                                            <span>{item.fk_id_responsavel}</span>
                                        </td>

                                        <td className="width_camp2">
                                            <span>{item.inicio}</span>
                                        </td>

                                        <td className="width_camp2">
                                            <span>{item.fim}</span>
                                        </td>

                                        <td className="width_camp3">
                                            <span>{item.fk_name_status}</span>
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
               </table>
           </Table>
        </>
    )
}

export default ListTarifario
