import style from '../../users/user.module.css';
import preloader from '../../../assets/images/loading.svg';

let Preloader = (props) => {
    return <div className={style.loader}> 
                    <img src = {preloader}/> 
                </div>
}

export default Preloader;