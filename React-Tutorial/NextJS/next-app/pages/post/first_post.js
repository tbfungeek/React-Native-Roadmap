import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout'

export default () => (
    <Layout>
        <Head>
            <title>First Page</title>
        </Head>
        <h1> First Commit Page !</h1>
        <Link href="/">
            <a>Back to Home Page ==> </a>
        </Link>
    </Layout>
)