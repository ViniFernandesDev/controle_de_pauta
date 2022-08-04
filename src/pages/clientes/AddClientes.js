import { useState, useContext } from "react";

import ContextValueAPI from '../../context/Context';

import Input from '../../components/form/Input';
import Select from '../../components/form/Select';
import TextArea from '../../components/form/TextArea';
import Submit from '../../components/form/Submit';

function AddJob() {    

    // Information to POST
    const [formValues, setFormValues] = useState({});
    const [isPending, setIsPending] = useState(false);
    const [success, Setsuccess] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setIsPending(true);

        fetch("http://laravelapi-pauta.com.l.stph.srv.br/api/clients", {
            method: "POST",                
            body: JSON.stringify(formValues),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 1|cG2r320AFPSo9zLb3v27JlKk82ZiJV18uk0mhPN5",
                "Access-Control-Allow-Origin": "*"
            },
        }).then(response => {
            setIsPending(false);

            // valida se a requisição falhou
            if (!response.ok) {
                return new Error('falhou a requisição') // cairá no catch da promise
            }

            // verificando pelo status
            if (response.status === 404) {
                return new Error('não encontrou qualquer resultado')
            }

            // verificando pelo status
            if (response.status === 201) {
                Setsuccess(true);
            }

            // retorna uma promise com os dados em JSON
            console.log(response.json());
        });
    }

    console.log(formValues)

    return (
        <>    
                <form onSubmit={handleSubmit}>

                    <Input name="name" text="Nome Social" onChange={handleChange}/>
                    <Input name="corporate_name" text="Nome Corporativo" onChange={handleChange}/>
                    <Input name="doc" text="CNPJ" onChange={handleChange}/>
                    <Input name="website" text="Website" onChange={handleChange}/>
                    <Input name="email" text="E-mail" onChange={handleChange}/>
                    <Input name="responsible_contact" text="Contato responsável" onChange={handleChange}/>
                    <Input name="phone" text="Whatsapp" onChange={handleChange}/>
                    <TextArea name="description" text="Descrição" placeholder="Descrição do Job" onChange={handleChange}/>

                    {!success && <Submit text="Cadastrar Cliente" />}

                </form>

            {isPending && 
            <div className="signing_up">
                <span>Cadastrando</span>
            </div>
            }
            
            {success && 
                <div className="finished">
                    <span>Cliente Adicionado</span>
                </div>
            }
        </>
    )
}

export default AddJob

