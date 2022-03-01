import Head from 'next/head'
import Image from 'next/image'
import {
  Navbar,
  Welcome,
  Footer,
  Services,
  Transactions,
} from '../components/components'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Krypt</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div className="gradient-bg-welcome py-3 px-5 md:py-0 md:px-0">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default Home

// export async function getServerSideProps() {
//   return {
//     props: {},
//   }
// }
