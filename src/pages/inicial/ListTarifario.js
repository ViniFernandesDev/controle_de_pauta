import {useState, useMemo, useEffect} from 'react'

import Table from "../../components/table/Table"
import Select from '../../components/form/Select'
import styles from './Filtro.module.css'

function ListTarifario() {

    /* FETCH CLIENTES */
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/clientes")
        .then(response => response.json())
        .then((data) => {
            setClientes(data)
        })
        .catch((err) => console.log(err))
    
    }, [])

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/jobs")
        .then(response => response.json())
        .then((data) => {
            setJobs(data)
        })
        .catch((err) => console.log(err))
       
    }, [])



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
                <Select text="Campanha" name="campanha" itemBd={clientes}  />  
                <Select text="Status" name="status" itemBd={clientes} />
                <Select text="Ordenação" name="ordenacao" itemBd={clientes} /> 
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
                        {filteredList.map((item, index) => {
                                return (
                                    <tr key={index} className={`status-${item.id}`}>

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
