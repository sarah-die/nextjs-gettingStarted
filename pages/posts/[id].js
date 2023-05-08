import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticProps({ params }) {
    // id kommt vom file-Namen [id].js
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    // beinhaltet das Array aus bekannten Pfaden (den return-Wert der getAllPostsIds())
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

// export default function Post({ postData }) {
//     return (
//         <Layout>
//             {postData.title}
//             <br />
//             {postData.id}
//             <br />
//             {postData.date}
//         </Layout>
//     );
// }

// Methode um markdown content zu rendern
// bevor css-styles hinzugefügt wurde
// export default function Post({ postData }) {
//     return (
//         <Layout>
//             <Head>
//                 <title>{postData.title}</title>
//             </Head>
//             {postData.title}
//             <br />
//             {postData.id}
//             <br />
//             {/** damit das Datum in anderer Form dargestellt wird*/}
//             <Date dateString={postData.date} />
//             <br />
//             <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
//         </Layout>
//     );
// }

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}