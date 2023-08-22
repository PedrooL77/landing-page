import Style from './RodaPe.module.css';

function RodaPe(props)
{
    return(
        <header className={Style.RodaPe}>
            <span>{props.termos}</span>
        </header>
    )
    
}
export default RodaPe;