import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="糟糕,看起來不妙..." />

      <nuxt-img src="https://kooco.oss-cn-hongkong.aliyuncs.com/under_construct.png" />
      </main>

      <Footer />
    </div>
  )
}
