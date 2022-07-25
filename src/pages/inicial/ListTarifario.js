import {useState} from 'react'

/* CUSTOM HOOK FETCH API */
import { useFetchGet } from "../../components/hooks/useFetchGet";

import Table from "../../components/table/Table"
import Select from '../../components/form/Select'
import './ListTarifario.css'

import Modal from '../../components/modal/Modal';

function ListTarifario() {

    function ajustDate(d) {
        return new Date(d).toLocaleDateString('pt-BR');
    }

    /* FETCH JOBS */
    const urlJobs = "http://laravelapi-pauta.com.l.stph.srv.br/api/jobs";
    const {value: jobs, loadingJobs} = useFetchGet(urlJobs);

    /* FETCH JOBS */
    const urlClientes = "http://laravelapi-pauta.com.l.stph.srv.br/api/clients";
    const {value: clients} = useFetchGet(urlClientes);

      /* FETCH CAMPANHAS */
    const urlCampanhas = "http://laravelapi-pauta.com.l.stph.srv.br/api/campaigns";
    const {value: campanhas} = useFetchGet(urlCampanhas);

     /* FETCH Status */
     const urlStatus = "http://laravelapi-pauta.com.l.stph.srv.br/api/status";
     const {value: status} = useFetchGet(urlStatus);

     /* FETCH Status */
     const urlPriorities = "http://laravelapi-pauta.com.l.stph.srv.br/api/priorities";
     const {value: priorities} = useFetchGet(urlPriorities);

    /* MODAL */
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    return (
        <>
            <form className="box_filter">
                <Select label="Cliente" name="cliente" itemBd={clients}/>
                <Select label="Campanha" name="campanha" itemBd={campanhas}  />  
                <Select label="Status" name="status" itemBd={status} />
                <Select label="Ordenação" name="ordenacao" itemBd={priorities} /> 
            </form> 

            <Table>
                {loadingJobs && <div>Loading...</div>}

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
                    {jobs && Object.keys(jobs.data).map((item, e) => {

                            return (
                                
                                <tr onClick={() => setIsModalVisible(true)} key={jobs.data[item].id} className={`status-${jobs.data[item].status.id}`}>
                                    <td className={'width_camp2'}>
                                        <span>{jobs.data[item].name}</span>
                                    </td>

                                    <td>
                                        <span>{jobs.data[item].name}</span>
                                    </td>

                                    <td>
                                        <span>{jobs.data[item].campaign.name}</span>
                                    </td>

                                    <td className="width_camp2 hover_responsavel">
                                        <span>{jobs.data[item].executors[0].name}</span>
                                        <div className="tooltip_reps"><div>{jobs.data[item].executors.map(item => item.name)}</div></div>
                                    </td>

                                    <td className="width_camp2">
                                        <span>{
                                            ajustDate(jobs.data[item].start)
                                        }</span>
                                    </td>

                                    <td className="width_camp2">
                                        <span>{jobs.data[item].end}</span>
                                    </td>

                                    <td className="width_camp3">
                                        <span>{jobs.data[item].status.name}</span>
                                    </td>
                                </tr>
                            )
                        })}

                        {isModalVisible ? (

                        <Modal onClose={() => setIsModalVisible(false)}>
                            asdas
                        </Modal>

                        ): null }
                    </tbody>
               </table>
           </Table>
        </>
    )
}

export default ListTarifario
