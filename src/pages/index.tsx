import Head from "next/head";
import styles from "../styles/Home.module.css";
import openWindow from "../utils/openWindow";

export default function Home() {
  openWindow("/api/v1/latest?base=USD");
  return (
    <div className={styles.container}>
      <Head>
        <title>CambioCurrency API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">CambioCurrency API!</a>
        </h1>

        <p className={styles.description}>Redirecting...</p>
      </main>
    </div>
  );
}
