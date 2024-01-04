
import Link from 'next/link'; 
import styles from './css/page.module.css';
import Logo from './components/logo/page';

export default function Home() {
  
  return (
    <main className={styles.main}>
      <div className={styles.container}>

       <Logo></Logo>

        <div className={styles.buttons}>
        
          <Link href="/login"  className={styles.card}>
              
              <h2>Entrar <span>-&gt;</span></h2>
           
          </Link>

          <Link href="/cadastro">
          </Link>

          <Link href="/cadastro"  className={styles.card}>
              
              <h2>Cadastrar <span>-&gt;</span></h2>
           
          </Link>
        </div>
      </div>
    </main>
  );
}
