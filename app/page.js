import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>
          ISTANBUL TECHNICAL UNIVERSITY ELECTRONICS AND COMMUNICATION GRADUATED
          PROJECT
        </h1>
      </div>
      <div className={styles.grid}>
        <a
          href="https://www.linkedin.com/in/ibrahim-samed-yalçın-4b6086185/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>
            by İBRAHİM SAMED YALÇIN<span>-&gt;</span>
          </h3>
          <p>GO WHO İS</p>
          <img src="ibrahim.png" alt="ibrahim" width={250} height={275} />
        </a>
        <a>
          <img src="itu.png" alt="itu" width={500} height={450} />
        </a>
        <a></a>
        <a
          href="https://www.linkedin.com/in/şemsşamilçakıroğlu/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>
            by ŞEMS ŞAMİL ÇAKIROĞLU<span>-&gt;</span>
          </h3>
          <p>GO WHO İS</p>
          <img src="sems.png" alt="sems" width={250} height={275} />
        </a>
      </div>
      <div className={styles.grid}>
        <a
          href="https://ituedutr-my.sharepoint.com/:p:/r/personal/yalcini18_itu_edu_tr/_layouts/15/Doc.aspx?sourcedoc=%7BC0F1D2B8-1CE0-47C1-953B-FE1914D4299A%7D&file=B%C4%B0T%C4%B0RMEsunum%20(1).pptx&action=edit&mobileredirect=true"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            What is EMG signal <span>-&gt;</span>
          </h2>
        </a>

        <a
          href="https://www.youtube.com/shorts/g47Ut2BAFu0"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Feature of project <span>-&gt;</span>
          </h2>
          <p>What will we do</p>
        </a>

        <a
          href="https://www.youtube.com/watch?v=2rV4rSUDcRw&ab_channel=AhmetKaya"
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
          href="http://localhost:8501"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Testing<span>-&gt;</span>
          </h2>
          <p>You can estimate your hand gesture</p>
        </a>
      </div>
    </main>
  );
}
