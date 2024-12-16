const Cep = ({cep, onHandleCep}) =>{

    return (
        <>
        <div style={{display:'flex', flexDirection:'column'}}>
            <span>Digite seu Cep:</span>
            <input value={cep} onChange={(e)=>onHandleCep(e)} style={{width:'200px'}} type="number" />
        </div>
        </>
    )
}
export default Cep