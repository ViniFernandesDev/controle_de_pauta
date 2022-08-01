import {useState, useContext } from 'react'

import ContextTeste from '../../context/Context';

import EditJob from "./EditJob"
import Table from "../../components/table/Table"
import Select from '../../components/form/Select'
import './ListTarifario.css'

import Modal from '../../components/modal/Modal';

function ListTarifario() {

    const {jobs, clients, campaigns, status, priorities } = useContext(ContextTeste);

    function ajustDate(d) {
        return new Date(d).toLocaleDateString('pt-BR');
    }

    /* MODAL */
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const [idItemSelect, setIdItemSelect] = useState("");

    const handleClick = function(id) {
        setIsModalVisible(true);
        setIdItemSelect(id)
      }

    return (
        <>
            <form className="box_filter">
                <Select label="Cliente" name="cliente" itemBd={clients}/>
                <Select label="Campanha" name="campanha" itemBd={campaigns}  />  
                <Select label="Status" name="status" itemBd={status} />
                <Select label="Ordenação" name="ordenacao" itemBd={priorities} /> 
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
                    {jobs && Object.keys(jobs.data).map((item, e) => {

                            return (
                                
                                <tr onClick={() => handleClick(jobs.data[item].id)} key={jobs.data[item].id} className={`status-${jobs.data[item].status.id}`}>
                                    <td className={'width_camp2'}>
                                        <span>{jobs.data[item].client.name}</span>
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
                    </tbody>
               </table>

               {isModalVisible ? (

                <Modal onClose={() => setIsModalVisible(false)}>
                    <EditJob idItemSelect={idItemSelect} />
                </Modal>

                ): null }
           </Table>
        </>
    )
}

export default ListTarifario
