import Head from 'next/head'
import dynamic from 'next/dynamic'
import BusinessTypeChart from '../components/BusinessTypeChart'
import TechnicalToggle from '../components/TechnicalToggle'
import KeyInsights from '../components/KeyInsights'
import TechnicalDetails from '../components/TechnicalDetails'

const Map = dynamic(() => import('../components/Map'), { ssr: false })

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <Head>
        <title>Warrington Business Insights</title>
        <meta name="description" content="Business insights for Warrington, UK" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-8">Warrington Business Insights</h1>
        <TechnicalToggle />
        <Map />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mt-8">
          <KeyInsights />
          <BusinessTypeChart />
        </div>
        <TechnicalDetails />
      </main>

      <footer className="w-full h-24 border-t border-gray-200 flex items-center justify-center">
        <a
          className="flex items-center justify-center"
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Your Name
        </a>
      </footer>
    </div>
  )
}

