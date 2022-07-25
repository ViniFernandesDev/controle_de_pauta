import {useState} from 'react'

import Title from '../../components/title/Title';
import ListTarifario from './ListTarifario';
import Modal from '../../components/modal/Modal';
import AddJob from './AddJob';

function Home() {

    /* MODAL */
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

            <ListTarifario/>

        </>
    )
}

export default Home
