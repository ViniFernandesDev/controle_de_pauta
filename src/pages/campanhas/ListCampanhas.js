import Table from "../../components/table/Table"

function ListCampanhas() {

    return (
        <>
            <Table>
               <table>
                    <thead>
                        <tr>
                            <th><span>Nº</span></th>
                            <th><span>Nome da campanha</span></th>
                            <th><span>Briefing</span></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th><span>1</span></th>
                            <th><span>Atualização</span></th>
                            <th><span>Adicionar banners, novos campos no formulário e ajustes no mobile</span></th>
                        </tr>

                        <tr>
                            <th><span>2</span></th>
                            <th><span>Novo site</span></th>
                            <th><span>Novo site conforme Briefing a seguir</span></th>
                        </tr>
                    </tbody>
               </table>
           </Table>

        </>
    )
}

export default ListCampanhas
