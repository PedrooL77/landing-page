import Style from './Sobre.module.css';

function Sobre(props)
{
    return(
        <section className={Style.PrimeiraInformacao}>
            <img className={Style.jordan} src={props.foto} alt=''></img>
            <div className={Style.Texts}>
                <h2>{props.como}</h2>
                <span>{props.comoinf}</span>
                <h2 className={Style.TextDois}>{props.inspiracao}</h2>
                <span className={Style.TextDois}>{props.inspiracaoinf}</span>
                <h2>{props.SobreM}</h2>
                <span>{props.resumo}</span>
            <div className={Style.tenis}>
                <img className={Style.tenisjordan} src={props.tenis} alt=''></img>
                <div>
                    <h3 className={Style.nometenis}>{props.nome}</h3>
                    <h3 className={Style.precotenis}>{props.preco}</h3>
                </div>
            </div>
            </div>

        </section>
    )
    
}
export default Sobre;