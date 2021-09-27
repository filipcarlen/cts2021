import Head from 'next/head'
import Layout from '../../components/layout'
import Image from 'next/image'
import styles from '../../styles/Speaker.module.css'
// demo9
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import remark from 'remark'
import html from 'remark-html'

export default function Speaker({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={styles.container}>
      <Image
        priority
        src={`/images/speakers/${postData.src}`}
        width={400}
        height={400}
      />
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

//demo8
export async function getStaticPaths() {
  const speakersDirectory = path.join(process.cwd(), 'speakers')
  const fileNames = fs.readdirSync(speakersDirectory)
  const paths = fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}
//demo10
export async function getStaticProps({ params }) {
  const speakersDirectory = path.join(process.cwd(), 'speakers')
  const fullPath = path.join(speakersDirectory, `${params.id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    props: {
      postData: {
        id: params.id,
        contentHtml,
        ...matterResult.data
      }
    }
  }
}