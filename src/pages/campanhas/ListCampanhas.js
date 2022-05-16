import {useState, useEffect} from 'react'

import Table from "../../components/table/Table"

function ListCampanhas() {

    const [campanhas, setCampanhas] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/campanhas")
        .then(response => response.json())
        .then((data) => {
            setCampanhas(data)
        })
        .catch((err) => console.log(err))
       
    }, [])

    return (
        <>
            <Table>
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
                        {campanhas.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <span>{item.id}</span>
                                    </td>

                                    <td>
                                        <span>{item.nome}</span>
                                    </td>

                                    <td>
                                        <span>{item.cliente}</span>
                                    </td>

                                    <td>
                                        <span>{item.briefing}</span>
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
