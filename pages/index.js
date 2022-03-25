import Head from 'next/head'
import Layout, {siteTitle} from "./components/layout";
import utilStyles from "../styles/utils.module.scss"

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <p>[hello !!]</p>
            <p>
                this is sample website!!!
                <a href="https://designfever.com" target="_blank">designfever.com</a>
            </p>
        </section>
      </Layout>
  )
}
