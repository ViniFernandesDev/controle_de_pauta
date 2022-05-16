import {useState, useEffect} from 'react'

import Table from "../../components/table/Table"

function ListClientes() {

    const [clientes, setClientes] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/clientes")
        .then(response => response.json())
        .then((data) => {
            setClientes(data)
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
                            <th><span>Nome</span></th>
                            <th><span>Telefone</span></th>
                            <th><span>E-mail</span></th>
                        </tr>
                    </thead>

                    <tbody>
                        {clientes.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <span>{item.id}</span>
                                    </td>

                                    <td>
                                        <span>{item.nome}</span>
                                    </td>

                                    <td className='width_camp2'>
                                        <span>{item.telefone}</span>
                                    </td>

                                    <td className='width_camp3'>
                                        <span>{item.email}</span>
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
