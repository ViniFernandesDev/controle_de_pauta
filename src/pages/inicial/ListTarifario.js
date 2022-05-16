import {useState, useEffect} from 'react'

import Table from "../../components/table/Table"

function ListTarifario() {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/jobs")
        .then(response => response.json())
        .then((data) => {
            setJobs(data)
        })
        .catch((err) => console.log(err))
       
    }, [])

    return (
        <>
            <Table>
               <table>
                    <thead>
                        <tr>
                            <th><span>Cliente</span></th>
                            <th><span>Job</span></th>
                            <th><span>Campanha</span></th>
                            <th><span>Responsáveis</span></th>
                            <th><span>Prazo Início</span></th>
                            <th><span>Prazo Fim</span></th>
                            <th><span>Status</span></th>
                        </tr>
                    </thead>

                    <tbody>
                        {jobs.map((item, index) => {
                            return (
                                <tr key={index} className={`status-${item.id}`}>

                                    <td className={'width_camp2'}>
                                        <span>{item.fk_id_cliente}</span>
                                    </td>

                                    <td>
                                        <span>{item.nome}</span>
                                    </td>

                                    <td>
                                        <span>{item.campanha}</span>
                                    </td>

                                    <td>
                                        <span>{item.fk_id_responsavel}</span>
                                    </td>

                                    <td className="width_camp2">
                                        <span>{item.inicio}</span>
                                    </td>

                                    <td className="width_camp2">
                                        <span>{item.fim}</span>
                                    </td>

                                    <td className="width_camp3">
                                        <span>{item.fk_name_status}</span>
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

export default ListTarifario
