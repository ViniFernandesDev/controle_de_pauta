import { useState } from 'react'
import Title from '../components/title/Title';

function Home() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <>
            
            <div className="displayBetCen">
                <Title title="Tarefário / Filtro" />

                <div className="button_1">
                </div>
            </div>

        </>
    )
}

export default Home
