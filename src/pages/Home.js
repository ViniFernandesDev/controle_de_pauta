import { useState } from 'react'

import Title from '../components/title/Title';
import Filtro from './inicial/filtro/Filtro';
import ListTarifario from './inicial/ListTarifario';
import Modal from '../components/modal/Modal';
import AddJob from './inicial/AddJob';

function Home() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <>
            
            <div className="display100BetCen">
                <Title title="Listagem | Filtro" />

                <div>
                    <button onClick={() => setIsModalVisible(true)}>Adicionar Job</button>

                    {isModalVisible ? (

                        <Modal onClose={() => setIsModalVisible(false)}>
                            <AddJob />
                        </Modal>

                    ): null }
                </div>
            </div>

            <Filtro />

            <ListTarifario/>

        </>
    )
}

export default Home
