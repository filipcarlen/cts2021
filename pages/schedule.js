import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { useEffect } from 'react'

const Schedule = () => {

  return (
    <Layout>
      <Head>
        <title>Schedule</title>
      </Head>
      <h1>SCHEDULE</h1>
    </Layout>
  )
}

export default Schedule;