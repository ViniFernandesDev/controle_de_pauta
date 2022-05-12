import Input from "../../components/form/Input"
import Title from "../../components/title/Title"
import ListClientes from "./ListClientes"

function Clientes() {

    return (
        <>

            <Title title="Clientes | Adicionar" />

            <div className="display100BetCen">
                <Input type="text" text="Encontrar" name="encontrarCliente" />

                <div>
                    <button>Adicionar Cliente</button>
                </div>
            </div>

            <ListClientes/>

        </>
    )
}

export default Clientes