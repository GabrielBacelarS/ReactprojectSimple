import 'react';
import { Comment } from './comment';
import style from '../css/post.module.css';

export default function Post() {
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img
                        className={style.avatar}
                        src="https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png?f=webp&w=256"
                        alt="Avatar do autor"
                    />
                    <div className={style.authorInfo}>
                        <strong>Um dev Qualquer</strong>
                        <span>Desenvolvedor Web</span>
                    </div>
                </div>

                <time dateTime="2024-02-01 08:13:00">Publicado há 1h</time>
            </header>

            <div className={style.content}>
                <p>Fala galeraa 👋</p>
                <p>
                    Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW
                    Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                </p>
                <p>
                    <a href="https://www.figma.com/file/YCmtiZw9BMVuEweAMciyMq/Ignite-Feed-(Community)?node-id=31%3A105&mode=dev">
                        Figma do projeto
                    </a>{' '}
                    <br />
                    <a href="https://github.com/GabrielBacelarS/ReactprojectSimple">
                        Hub do projeto
                    </a>
                </p>
                <p>
                    <a href="#novoprojeto">#novoprojeto</a> <a href="#nlw">#nlw</a>{' '}
                    <a href="#rocketseat">#rocketseat</a>
                </p>
            </div>
            <form className={style.commentForm}>
                <strong> Deixe seu feedback </strong>
                <textarea>Deixe um comentario</textarea>
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
            <div className={style.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}
