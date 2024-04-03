import {Link} from 'react-router-dom'
import Input from '../form/Input'
import Button from '../form/Button'

const ForgetPassword = ({ styles }) => {
  return <>
        <div className={(`${styles.banner_login} ${styles.bg_forget}`)}></div>
        <div className={styles.form_login}>
            <h2>Forgotten Your Password?</h2>
            <form>
                <Input type="text" text="E-mail or Telephone" name="email" id="email" placeholder="josaphate@mymail.com" styles={styles} />
                <Button type="button" text="SEND MESSAGE" styles={styles}/>
                <div className={styles.form_create}>Make Your  <Link to="/">Login</Link></div>
            </form>
        </div>
    </>
}

export default ForgetPassword