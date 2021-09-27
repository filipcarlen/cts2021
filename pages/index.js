import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1></h1>
        <Link href="/">
          <Image
            priority
            src="/images/cts-2021-splash.png"
            layout={'responsive'}
            width={100}
            height={30}
          />
        </Link>
      </section>
    </Layout>
  )
}