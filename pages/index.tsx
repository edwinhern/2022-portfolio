import type { NextPage } from 'next'
import Head from 'next/head'
import Masthead from '../components/mashead';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Edwin's Portfolio</title>
        <meta name="description" content="Edwin | Front End Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Masthead />
    </div>
  )
}

export default Home
