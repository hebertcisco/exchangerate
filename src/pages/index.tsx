import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleRedirect = (e) => {
    e.preventDefault();
    router.push("api/v1/latest?base=USD");
  };
  handleRedirect;
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
      </main>
    </div>
  );
}
