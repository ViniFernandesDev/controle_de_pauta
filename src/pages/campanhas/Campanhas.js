import Input from "../../components/form/Input"
import Title from "../../components/title/Title"
import ListCampanhas from "./ListCampanhas"

function Clientes() {
    return (
        <>

            <Title title="Campanhas | Adicionar" />

            <div className="display100BetCen">
                <Input type="text" text="Encontrar" name="encontrarCampanha" />

                <div>
                    <button>Adicionar Campanha</button>
                </div>
            </div>

            <ListCampanhas/>

        </>
    )
}

export default Clientes