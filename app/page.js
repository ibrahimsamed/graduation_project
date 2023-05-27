import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>
          ISTANBUL TECHNICAL UNIVERSITY ELECTRONICS AND COMMINICATION GRADUATED
          PROJECT&nbsp;
          <code className={styles.code}></code>
        </h1>
      </div>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By İBRAHİM SAMED YALÇIN ~~ and ~~ ŞEMS ŞAMİL ÇAKIROĞLU{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://www.memorial.com.tr/tani-ve-testler/elektromiyografi-emg-nedir"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            What is EMG signal <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            FEATURE <span>-&gt;</span>
          </h2>
          <p>What will we do</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            progress of deployment <span>-&gt;</span>
          </h2>
          <p>we explain what we do </p>
        </a>
        <a
          href="http://13.48.238.142:8501"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            proje denemesi <span>-&gt;</span>
          </h2>
          <p>buradan makine öğrenmesi metodumuzu çalıştırabilirsiniz .</p>
        </a>
      </div>
    </main>
  );
}
