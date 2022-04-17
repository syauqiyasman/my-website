import Head from 'next/head'
import styles from './index.module.css'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Syauqi Yasman</title>
        <meta name="description" content="Syauqi Yasman's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Syauqi Yasman
          </h1>
          <p className={styles.description}>
            Welcome to my website
          </p>
        </main>
      </div>
    </>
  )
}
