import Image from 'next/image';
import Link from 'next/link'; // Adicionando o Link para a navegação interna
import styles from './css/page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>

        <div className={styles.logoname}>
          <h1>LiCere</h1>
        </div>

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
