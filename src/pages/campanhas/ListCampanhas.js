import {useState, useContext } from 'react'

import ContextTeste from '../../context/Context';
import Table from "../../components/table/Table"
import Modal from '../../components/modal/Modal';

function ListCampanhas({contentSearch}) {

    const {campaigns, loadingCampaigns } = useContext(ContextTeste);

    console.log(campaigns)

    /* MODAL */
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [idItemSelect, setIdItemSelect] = useState("");

    const handleClick = function(id) {
        setIsModalVisible(true);
        setIdItemSelect(id)
      }

    const filteredList = campaigns && campaigns.data.filter((item) => item.client.name.toLowerCase().includes(contentSearch));

    function reduceDescription(description) {
        return description.length > 10 ? description.substring(0, 80) + "..." : description;
    }

    return (
        <>
          
            <Table>

            {loadingCampaigns && <div>Loading...</div>}

               <table>
                    <thead>
                        <tr>
                            <th><span>Nº</span></th>
                            <th><span>Nome da campanha</span></th>
                            <th><span>Cliente</span></th>
                            <th><span>Briefing</span></th>
                        </tr>
                    </thead>

                    <tbody>

                        
                    {campaigns && Object.keys(filteredList).map((item, e) => {          

                            return (

                                <tr onClick={() => handleClick(filteredList[item].id)} key={filteredList[item].id}>

                                    <td className={'width_camp2'}>
                                        <span>{filteredList[item].id}</span>
                                    </td>

                                    <td>
                                        <span>{filteredList[item].name}</span>
                                    </td>

                                    <td>
                                        <span>{filteredList[item].client.name}</span>
                                    </td>

                                    <td>
                                        <span>{
                                            reduceDescription(filteredList[item].description)
                                        }
                                        </span>
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
               </table>

                {isModalVisible ? (

                    <Modal onClose={() => setIsModalVisible(false)}>
                        teste
                    </Modal>

                ): null }
                </Table>

        </>
    )
}

export default ListCampanhas
