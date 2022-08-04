import {useState, useContext } from 'react'

import ContextTeste from '../../context/Context';
import Table from "../../components/table/Table"
import Modal from '../../components/modal/Modal';
import EditClient from "./EditClient"

function ListClientes() {

    const {clients, loadingClients } = useContext(ContextTeste);

    /* MODAL */
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const [idItemSelect, setIdItemSelect] = useState("");

    const handleClick = function(id) {
        setIsModalVisible(true);
        setIdItemSelect(id)
      }
    return (
        <>
          
            <Table>

            {loadingClients && <div>Loading...</div>}

               <table>
                    <thead>
                        <tr>
                            <th><span>Nº</span></th>
                            <th><span>Nome</span></th>
                            <th><span>Telefone</span></th>
                            <th><span>E-mail</span></th>
                        </tr>
                    </thead>

                    <tbody>
                    {clients && Object.keys(clients.data).map((item, e) => {

                            return (

                                <tr onClick={() => handleClick(clients.data[item].id)} key={clients.data[item].id}>

                                    <td className={'width_camp2'}>
                                        <span>{clients.data[item].id}</span>
                                    </td>

                                    <td>
                                        <span>{clients.data[item].corporate_name}</span>
                                    </td>

                                    <td>
                                        <span>{clients.data[item].phone}</span>
                                    </td>

                                    <td>
                                        <span>{clients.data[item].email}</span>
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
               </table>

                {isModalVisible ? (

                    <Modal onClose={() => setIsModalVisible(false)}>
                        <EditClient idItemSelect={idItemSelect} />
                    </Modal>

                ): null }
                </Table>

        </>
    )
}

export default ListClientes
