import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/Layout'
import { getPostsData } from '../lib/post'
import styles from '../styles/Home.module.css'
import utilStyles from "../styles/utils.module.css"

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();
  return {
    props: {
      allPostsData, //これをHomeに渡す
    },
  };
}

//SSRの場合(contextにはrequestされたときのパラメータが入る)
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       //コンポーネントに渡すためのprops
//     },
//   };
// }



export default function Home({ allPostsData }) {
  return <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>
        hogehogehogehogheohgeohgeohhogehoge
      </p>
    </section>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>📝エンジニアのブログ</h2>

      <div className={`${styles.grid}`}>
        {allPostsData.map(({ id, title, date, thumbnail }) => (
          <article key={id}>
            <Link href={`/posts/${id}`}>
              <img
                src={`${thumbnail}`}
                className={`${styles.thumbnailImage}`}
              />
            </Link>
            <Link href={`/posts/${id}`}>
              <a className={utilStyles.boldText}>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>{date}</small>
          </article>
        ))}
      </div>
    </section>
  </Layout>
}
