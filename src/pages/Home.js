import { useState } from 'react'

import Title from '../components/title/Title';
import Filtro from './tarifario/filtro/Filtro';
import ListTarifario from './tarifario/ListTarifario';
import Modal from '../components/modal/Modal';

function Home() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <>
            
            <div className="display100BetCen">
                <Title title="Tarefário | Filtro" />

                <div>
                    <button onClick={() => setIsModalVisible(true)}>Adicionar Job</button>

                    {isModalVisible ? (

                        <Modal onClose={() => setIsModalVisible(false)}>
                            teste
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
