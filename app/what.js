import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div>
        <img src="/ss.gif" alt="Mountains with snow" className="alta" />
      </div>
      <div>
        <button className="home-button">
          <Link href="/what.js">
            <h2>home</h2>
          </Link>
        </button>
        {/* Diğer bileşen içeriği */}
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
    </>
  );
}
