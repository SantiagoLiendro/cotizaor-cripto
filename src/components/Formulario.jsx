import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input `
    background-color:#9497ff;
    border:none;
    width:100%;
    padding:10px;
    color:#fff;
    font-weight:700;
    text-transform:uppercase;
    font-size:20px;
    border-radius:5px;
    transition:background-color .3s ease;
    margin-top:30px;
    
    &:hover{
        background-color:#7a7dfe;
        cursor: pointer;
    }


`

const Formulario = ({setMonedas}) => {

    const [criptos,setCriptos]= useState([])
    const [error,seterror] = useState(false)

    const [moneda,SelectMonedas]= useSelectMonedas('Elige tu Moneda',monedas)
    const [criptoMonedas,SelectCripto]= useSelectMonedas('Elige tu Criptomoneda',criptos)
    
    useEffect (()=>{
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            
            const arrayCriptos = resultado.Data.map(cripto => {
                const objCripto = {id:cripto.CoinInfo.Name,nombre:cripto.CoinInfo.FullName}
                return objCripto
            })
            setCriptos(arrayCriptos)

        }
        consultarAPI()
    },[])

    const handelSubmit =(e)=> {
        e.preventDefault()

        if ([criptoMonedas,moneda].includes('')) {
            seterror(true)
            return
        }
        
        seterror(false)
        setMonedas({
            moneda,
            criptoMonedas
        })
    }

  return (
    <>
        {error&& <Error>Todos los campos son obligatorios</Error>}
        <form action="" onSubmit={handelSubmit}>

            <SelectMonedas/>
            <SelectCripto/>
            

            <InputSubmit
                type='submit'
                value="Cotizar"
            />
        </form>
    </>
  )
}

export default Formulario