import Style from './MenuLogo.module.css';

function MenuLogo(props)
{
    return(
        <header className={Style.cima}>
            <img  className={Style.logojordan} src={props.logo} alt=''></img>
            <div className={Style.fundo}>
                <img className={Style.imgair} src={props.imagem} alt=''></img>
            </div>
        </header>
    )
    
}
export default MenuLogo;