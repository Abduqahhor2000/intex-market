import Head from 'next/head'
import Header from "../components/Header"
import Mean from "../components/Mean"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="">
      <Head>
        <html lang="uz"/>
        <title>Intex Market</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" type="image" href="/miniLogo.png"/>
        <link rel="apple-touch-icon" href="/miniLogo.png" />
      </Head>
      <Header/>
      <Mean/>
      <Footer />
    </div>
  )
}
