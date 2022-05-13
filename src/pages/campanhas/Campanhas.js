import { useState } from 'react'

import Input from "../../components/form/Input"
import Title from "../../components/title/Title"
import ListCampanhas from "./ListCampanhas"
import Modal from '../../components/modal/Modal';

function Clientes() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <>

            <Title title="Campanhas | Adicionar" />

            <div className="display100BetCen">
                <Input type="text" text="Encontrar" name="encontrarCampanha" />

                <div>
                    <button onClick={() => setIsModalVisible(true)}>Adicionar Campanha</button>

                    {isModalVisible ? (

                        <Modal onClose={() => setIsModalVisible(false)}>
                            teste
                        </Modal>

                    ): null }
                </div>
            </div>

            <ListCampanhas/>

        </>
    )
}

export default Clientes