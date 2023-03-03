import Tabla from '@/pages/table'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Práctica 2</title>
        <Link href="/table">Ir a tabla</Link>
      </Head>
    </>
  )
}
