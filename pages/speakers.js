import Head from 'next/head'
import Layout from '../components/layout'
// demo 5
import styles from '../styles/Speakers.module.css'
import Link from 'next/link'
import Image from 'next/image'
// demo 7
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const Speakers = ({speakersData}) => {

  return (
    <Layout>
      <Head>
        <title>Speakers</title>
      </Head>
      <h1>SPEAKERS</h1>
      {/* demo4 */}
      <ul className={styles.list}>
        {speakersData.map(({ id, title, src }) => (
          <li className={styles.listItem} key={id}>
            <Link href={`/speakers/${id}`}>
            <a>
              <Image
                priority
                src={`/images/speakers/${src}`}
                layout={'responsive'}
                width={100}
                height={100}
              />
              <h1>{title}</h1>
            </a>
            </Link>
          </li>
        ))}
      </ul>
</Layout>
  )
}

//demo 6
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'speakers')
  const fileNames = fs.readdirSync(postsDirectory)
  const speakersData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {
      id,
      ...matterResult.data
    }
  })
  return {
    props: {
      speakersData
    }
  }
}

export default Speakers;