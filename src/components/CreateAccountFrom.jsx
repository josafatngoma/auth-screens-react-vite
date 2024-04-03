import {Link} from 'react-router-dom'
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa'
import Input from '../form/Input'
import Button from '../form/Button'

const CreateAccountFrom = ({ styles }) => {
  return <>
        <div className={(`${styles.banner_login} ${styles.bg_create}`)}></div>
        <div className={styles.form_login}>
            <h2>Create Account</h2>
            <form>
                <Input type="text" text="Name *" name="name" id="name" placeholder="Josaphate N'goma" styles={styles} />
                <Input type="text" text="E-mail *" name="email" id="email" placeholder="josaphate@mymail.com" styles={styles} />
                <Input type="text" text="Telephone" name="tel" id="tel" placeholder="(+244) 000-000-000" styles={styles} />
                <Input type="password" text="Password *" name="password" id="password" placeholder="password" styles={styles} />
                
                <Button type="button" text="SIGN UP" styles={styles}/>
                
                <div className={styles.form_create}>Have an account? <Link to="/">Login</Link></div>
                
                <div className={styles.log_with}>
                    <span>Create Account With</span>
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

export default CreateAccountFrom