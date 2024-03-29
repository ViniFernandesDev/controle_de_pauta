import { useState } from 'react'

import Modal from '../../components/modal/Modal';
import Title from "../../components/title/Title"
import Input from '../../components/form/Input'
import AddClientes from "./AddClientes"
import ListClientes from './ListClientes';

function Clientes() {

    // Information to POST
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value)
    }


    /* MODAL */
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <>

            <Title title="Clientes | Adicionar" />

            <div className="display100BetCen">
                <Input type="text" text="Encontrar cliente" name="encontrarCliente" onChange={handleChange}/>

                <div>
                    <button onClick={() => setIsModalVisible(true)}>Adicionar Cliente</button>

                    {isModalVisible ? (

                        <Modal onClose={() => setIsModalVisible(false)}>
                            <AddClientes/>
                        </Modal>

                    ): null }
                </div>
            </div>

            <ListClientes contentSearch={query} />

        </>
    )
}

export default Clientes
