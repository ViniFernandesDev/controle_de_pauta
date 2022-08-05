import {useState, useContext } from 'react'

import ContextTeste from '../../context/Context';
import Table from "../../components/table/Table"
import Modal from '../../components/modal/Modal';
import EditClient from "./EditClient"

function ListClientes({contentSearch}) {

    const {clients, loadingClients } = useContext(ContextTeste);

    /* MODAL */
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [idItemSelect, setIdItemSelect] = useState("");

    const handleClick = function(id) {
        setIsModalVisible(true);
        setIdItemSelect(id)
      }

      const filteredList = clients && clients.data.filter((item) => item.corporate_name.toLowerCase().includes(contentSearch));

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

                        
                    {clients && Object.keys(filteredList).map((item, e) => {          

                            return (

                                <tr onClick={() => handleClick(filteredList[item].id)} key={filteredList[item].id}>

                                    <td className={'width_camp2'}>
                                        <span>{filteredList[item].id}</span>
                                    </td>

                                    <td>
                                        <span>{filteredList[item].corporate_name}</span>
                                    </td>

                                    <td>
                                        <span>{filteredList[item].phone}</span>
                                    </td>

                                    <td>
                                        <span>{filteredList[item].email}</span>
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
