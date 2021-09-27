import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/News.module.css'

const News = ({newsData}) => {

  return (
    <Layout>
      <Head>
        <title>News</title>
      </Head>
      <h1>NEWS</h1>
      {/* demo12 */}
      <ul className={styles.list}>
        {newsData.map(({ title, body, userId }) => (
          <li className={styles.listItem} key={userId}>
            <h4 className={styles.heading}>{title}</h4>
            <span>{body}</span>
        </li>
        ))}
      </ul>
    </Layout>
  )
}

//demo11
export async function getServerSideProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const newsData = await res.json();

  if (!newsData) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      newsData,
    }
  }
}

export default News;