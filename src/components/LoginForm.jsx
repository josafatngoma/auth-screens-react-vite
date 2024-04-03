import {Link} from 'react-router-dom'
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa'
import Input from '../form/Input'
import Button from '../form/Button'

const LoginForm = ({ styles }) => {
  return <>
        <div className={(`${styles.banner_login} ${styles.bg_login}`)}></div>
        <div className={styles.form_login}>
            <h2>Login</h2>
            <form>
                <Input type="text" text="Username" name="username" id="username" placeholder="@josaphate" styles={styles} />
                <Input type="password" text="Password" name="password" id="password" placeholder="password" styles={styles} />
                <div className={styles.form_forget}>
                    <label htmlFor="remember">
                        <span><input type="checkbox" id="remember" /> Remember Me</span>
                    </label>
                    <span><Link to="/forget">Forget Password?</Link></span>
                </div>
                
                <Button type="button" text="LOG IN" styles={styles}/>
                
                <div className={styles.form_create}>Don't have an account? <Link to="/create">Create</Link></div>
                
                <div className={styles.log_with}>
                    <span>Login With</span>
                    <div className={styles.login_icons}>
                        <span><a href="#" target="_blank"><FaFacebook /></a></span>
                        <span><a href="#" target="_blank"><FaGoogle /></a></span>
                        <span><a href="#" target="_blank"><FaApple /></a></span>
                    </div>
                </div>
            </form>
        </div>   
    </>
}

export default LoginForm