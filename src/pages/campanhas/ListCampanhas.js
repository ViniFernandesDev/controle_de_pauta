/* CUSTOM HOOK FETCH API */
import { useFetchGet } from "../../components/hooks/useFetchGet";

import Table from "../../components/table/Table"

function ListCampanhas() {

    /* FETCH urlCampaigns */
    const urlCampaigns = "http://laravelapi-pauta.com.l.stph.srv.br/api/campaigns";
    const {value: campaigns, loading} = useFetchGet(urlCampaigns);

    console.log(campaigns)

    return (
        <>
            <Table>

                {loading && <div>Loading...</div>}

               <table>
                    <thead>
                        <tr>
                            <th><span>Nº</span></th>
                            <th><span>Nome da campanha</span></th>
                            <th><span>Cliente</span></th>
                            <th><span>Briefing</span></th>
                        </tr>
                    </thead>


                    <tbody>
                    {campaigns && Object.keys(campaigns.data).map((item, e) => {

                        return (

                            <tr key={campaigns.data[item].id} className={`status-${campaigns.data[item].id}`}>

                                <td className={'width_camp2'}>
                                    <span>{campaigns.data[item].id}</span>
                                </td>

                                <td>
                                    <span>{campaigns.data[item].corporate_name}</span>
                                </td>

                                <td>
                                    <span>{campaigns.data[item].corporate_name}</span>
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

export default ListCampanhas
