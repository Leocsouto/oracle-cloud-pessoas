import axios from "axios";

const endpointPessoas = '/tb_pessoa/'
const base = axios.create({
    baseURL :'https://g7b6e620787d151-s2204lud7dpmx4b7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin'
})

const obterLista = () =>{
    return base.get(endpointPessoas)
}

const cadastrarPessoa = () =>{
    return base.post(endpointPessoas,
        pessoa,
        {'Content-Type':'application/json'})
}

export {obterLista,cadastrarPessoa}