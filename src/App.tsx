import  HeaderSite  from './components/header';
import './css/global.css'
import style from './css/app.module.css'
import {Sidebar} from './components/sidebar'
import Post from './components/post'
function App() {
    return (
        <div>
            <HeaderSite />
            <div className={style.wrapper}>
                <Sidebar />
                <main>
                   <Post/>
                   
                </main>
            </div>
        </div>
    );
}

export default App;
