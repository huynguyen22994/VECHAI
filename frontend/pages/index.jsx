import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'
import Axios from '@/helper/axios.helper'

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  const { data } = await Axios.get('/api/product')

  return {
    props: {
      data: data || {}
    },
  };
}

export default function Home({ data }) {
  const handle = () => {
    window.alert('test nè')
  }
  // console.log('FrontEnd nè', data)
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://example.com/script.js"/>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>Home Page</h1>
      </main>
    </>
  )
}
