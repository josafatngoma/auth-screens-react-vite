import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styles from './App.module.css'
import LoginForm from './components/LoginForm'
import CreateAccountFrom from './components/CreateAccountFrom'
import ForgetPassword from './components/ForgetPassword'

function App() {

  return (
    <div className={styles.app}>
      <Router>
        <Routes>
              <Route path='/' element={<LoginForm styles={styles} />}/>
              <Route path='/create' element={<CreateAccountFrom styles={styles} />}/>
              <Route path='/forget' element={<ForgetPassword styles={styles} />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
