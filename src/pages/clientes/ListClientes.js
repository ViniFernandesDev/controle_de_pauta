/* CUSTOM HOOK FETCH API */
import { useFetchGet } from "../../components/hooks/useFetchGet";

import Table from "../../components/table/Table"

function ListClientes() {

    /* FETCH Clientes */
    const urlClientes = "http://laravelapi-pauta.com.l.stph.srv.br/api/clients";
    const {value: clientes, loading} = useFetchGet(urlClientes);

    console.log(clientes)

    return (
        <>
            <Table>

            {loading && <div>Loading...</div>}

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
                    {clientes && Object.keys(clientes.data).map((item, e) => {

                            return (

                                <tr key={clientes.data[item].id} className={`status-${clientes.data[item].id}`}>

                                    <td className={'width_camp2'}>
                                        <span>{clientes.data[item].id}</span>
                                    </td>

                                    <td>
                                        <span>{clientes.data[item].corporate_name}</span>
                                    </td>

                                    <td>
                                        <span>{clientes.data[item].corporate_name}</span>
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
               </table>
           </Table>

        </>
    )
}

export default ListClientes
