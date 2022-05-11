
import Title from '../components/title/Title';
import Filtro from './tarifario/filtro/Filtro';
import ListTarifario from './tarifario/ListTarifario';

function Home() {

    const display100 = {
        width: '100%',
        display:'flex',
        justifyContent:'space-between'
    }

    return (
        <>
            
            <div style={display100}>
                <Title title="Tarefário | Filtro" />

                <div className="button_1">
                </div>
            </div>

            <Filtro />

            <ListTarifario/>

        </>
    )
}

export default Home
