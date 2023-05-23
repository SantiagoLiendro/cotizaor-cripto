import styled from "@emotion/styled"

const Cotizacion=styled.div `
    color:#fff;
    font-family:'Lato',sans-serif;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media (min-width:768px) { 
        flex-direction:row;
        gap:10px;
        margin-top:30px;
            
    }
 
`
const Imagen = styled.img `
    display:block;
    width:120px;
    
`

const Texto = styled.p `
    font-size:18px;
    span {
        font-weight:700
    }

`

const Precio = styled.p `
    font-size:24px;
    span {
        font-weight:700
    }

`



const Resultado = ({resultado}) => {
    const {PRICE,HIGHDAY,LOWDAY,LASTUPDATE,CHANGEPCT24HOUR,IMAGEURL}= resultado;
  return (
    <Cotizacion>
        <Imagen src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>El precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
            <Texto>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Cotizacion>
  )
}

export default Resultado