import style from '../css/sidebar.module.css'
import {PencilLine} from 'phosphor-react'

export function Sidebar(){
    return (
        <aside className={style.sidebar}>
            <source />
            <img
                className={style.cover}
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=100&w=500px&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className={style.profile}>
                <img
                    className={style.avatar}
                    src="https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png?f=webp&w=256"
                />
                <strong>Gabriel Bacelar</strong>
                <span>Web developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil</a>
            </footer>
        </aside>
    );
}

