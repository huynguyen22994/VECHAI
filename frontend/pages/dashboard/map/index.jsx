'use client'
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Script from "next/script";
import Axios from "@/helper/axios.helper";
import React from "react";
// import Map from "@/components/Map"
// const Map = dynamic(() =>
//   import('@/components/Map', { ssr:false })
// )
import dynamic from 'next/dynamic'
 


const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  // const { data } = await Axios.get('/api/product')

  return {
    props: {
      data: {},
    },
  };
}

export default function Home({ data }) {
    const Map = dynamic(() => import('@/components/Map'), {
        ssr: false,
        loading: () => <p>Loading...</p>,
    })     
  //   const handle = () => {
  //     window.alert('test nè')
  //   }
  // console.log('FrontEnd nè', data)

  return (
    <>
<Map></Map>
    </>
  );
}
