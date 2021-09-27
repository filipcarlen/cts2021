import Head from 'next/head'
import styles from './layout.module.css'
// demo3
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const siteTitle = 'CTS 2021'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* demo2 */}
      <header className={styles.header}>
              <>
                <Link href="/">
                  <a>
                    <Image
                      priority
                      src="/images/cts-2021-logo.png"
                      className={utilStyles.borderCircle}
                      height={108}
                      width={108}
                    />
                  </a>
                </Link>
                <div className={styles.menu}>
                    <Link href="/">
                      <a className={utilStyles.link}>Home</a>
                    </Link>
                    <Link href="/schedule">
                      <a className={utilStyles.link}>Schedule</a>
                    </Link>
                    <Link href="/speakers">
                      <a className={utilStyles.link}>Speakers</a>
                    </Link>
                    <Link href="/news">
                      <a className={utilStyles.link}>News</a>
                    </Link>
                </div>
              </>
      </header>
      <main>{children}</main>
    </div>
  )
}
