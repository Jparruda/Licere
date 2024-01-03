
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

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Cadastrar <span>-&gt;</span></h2>
          </a>
        </div>
      </div>
    </main>
  );
}
