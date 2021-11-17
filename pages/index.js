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
     <div style="top:100px;position: absolute;max-width: 100%;">
    </div>
      <img  src="https://kooco.oss-cn-hongkong.aliyuncs.com/under_construct.png" with="600" heigh="400" alt="一張圖片"></img>
      </main>

      <Footer />
    </div>
  )
}
