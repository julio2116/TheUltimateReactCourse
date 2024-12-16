import { useEffect, useState } from "react"

const Address = ({cep}) => {
    const [info, setInfo] = useState('');

    useEffect(()=>{
        if(cep.length != 8) return
        fetch(`https://viacep.com.br/ws/${cep}/json/`).
        then(response=>response.json()).
        then(body=>setInfo(body))
    },[cep])

    return (
        <>
            <div style={{display:'flex', flexDirection:'column'}}>
                <span>Rua</span>
                <input value={info ? info.logradouro : ''} style={{width:'200px'}} disabled type="text" />
                <span>Cidade</span>
                <input value={info ? info.localidade : ''} style={{width:'200px'}} disabled type="text" />
                <span>Estado</span>
                <input value={info ? info.estado : ''} style={{width:'200px'}} disabled type="text" />
            </div>
        </>
    )
}
export default Address