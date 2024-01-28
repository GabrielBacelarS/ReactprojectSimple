import style from '../css/header.module.css';
import igniteSymbol from '../images/Ignite simbol.svg';
function HeaderSite() {
    return (
        <header className={style.header}>
            <img src={igniteSymbol} alt="logo Iginite" />
            <strong>Ignite Feed</strong>
        </header>
    );
}

export default HeaderSite;
