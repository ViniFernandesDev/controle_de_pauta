import { useState } from 'react'

import Input from "../../components/form/Input"
import Title from "../../components/title/Title"
import ListClientes from "./ListClientes"
import Modal from '../../components/modal/Modal';
import AddClientes from './AddClientes';

function Clientes() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <>

            <Title title="Clientes | Adicionar" />

            <div className="display100BetCen">
                <Input type="text" text="Encontrar" name="encontrarCliente" />

                <div>
                    <button onClick={() => setIsModalVisible(true)}>Adicionar Cliente</button>

                    {isModalVisible ? (

                        <Modal onClose={() => setIsModalVisible(false)}>
                            <AddClientes/>
                        </Modal>

                    ): null }
                </div>
            </div>

            <ListClientes/>

        </>
    )
}

export default Clientes