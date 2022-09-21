import React,{useState} from 'react';

const ComponenteTexto = ({value})=>{
    <p>{value}</p>
}

const ComponenteInfoFija= React.memo(()=>{
    return(
        <p>Contendio estatico</p>

    )

})

const ContactoPage = () => {

    const [value, setValue] = useState('dsfs');


    return (
        <div>
            ContactoPage
            <ComponenteTexto value={value}/>
            <ComponenteInfoFija/>
            <button onClick={()=>setValue("dsfda")}>Cambiar</button>
        </div>
    );
}

export default ContactoPage;
