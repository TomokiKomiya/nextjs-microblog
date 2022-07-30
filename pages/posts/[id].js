import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";

import Head from "next/head";

import utilStyles from "../../styles/utils.module.css";

export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        }
    }
}

export default function Post({ postData }) {
    return (
       <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            {/* ... */}

            {/* {postData.title}
            <br />
            {postData.id}
            <br /> */}
            {/* {postData.date} */}
            {/* <Date dateString={postData.date} />
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} /> */}

            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    {postData.date}
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
            </article>
       </Layout>
    );
}