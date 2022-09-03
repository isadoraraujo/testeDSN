import { Header } from './components/Header/Header.jsx'
import { Section } from './components/Section/Section.jsx'
import { Main } from './components/Main/Main.jsx'
import styles from './app.module.css'
import { Footer } from './components/Footer/Footer.jsx'

function App() {

  return (
    <div className={styles.app}>
      <Header />
      <Section />
      <Main />
      <Footer/>
    </div>
  )
}

export default App