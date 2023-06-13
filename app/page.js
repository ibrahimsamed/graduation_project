import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div>
        <img src="/ss.gif" alt="Mountains with snow" className="alta" />
      </div>

      <h1
        style={{
          paddingTop: "2vh",
          fontFamily: "monospace",
          fontSize: "3.5rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        HAND GESTURE RECOGNIZE
      </h1>
      <div>
        <button className="home-button1">
          <Link href="https://ituedutr-my.sharepoint.com/:p:/r/personal/yalcini18_itu_edu_tr/_layouts/15/Doc.aspx?sourcedoc=%7BC0F1D2B8-1CE0-47C1-953B-FE1914D4299A%7D&file=B%C4%B0T%C4%B0RMEsunum%20(1).pptx&action=edit&mobileredirect=true">
            <h2>What is EMG signal</h2>
          </Link>
        </button>
        {/* Diğer bileşen içeriği */}
        <button className="home-button2">
          <a href="https://www.youtube.com/shorts/g47Ut2BAFu0">
            <h2>Feature of project</h2>
          </a>
        </button>
        <button className="home-button3">
          <a href="https://www.youtube.com/watch?v=2rV4rSUDcRw&ab_channel=AhmetKaya">
            <h2>progress of deployment</h2>
          </a>
        </button>
        <button className="home-button4">
          <a href="http://13.48.182.147">
            <h2>Testing</h2>
          </a>
        </button>
      </div>
    </>
  );
}
