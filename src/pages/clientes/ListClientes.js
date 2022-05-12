import Table from "../../components/table/Table"

function ListClientes() {

    return (
        <>
            <Table>
               <table>
                    <thead>
                        <tr>
                            <th><span>Nº</span></th>
                            <th><span>Nome</span></th>
                            <th><span>Telefone</span></th>
                            <th><span>E-mail</span></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th><span>1</span></th>
                            <th><span>Imobiliária</span></th>
                            <th><span>49 999879899</span></th>
                            <th><span>joão@imobiliaria.com.br</span></th>
                        </tr>

                        <tr>
                            <th><span>1</span></th>
                            <th><span>Imobiliária</span></th>
                            <th><span>49 999879899</span></th>
                            <th><span>joão@imobiliaria.com.br</span></th>
                        </tr>
                    </tbody>
               </table>
           </Table>

        </>
    )
}

export default ListClientes
