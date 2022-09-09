import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Now - Daniel Van Cuylenburg</title>
        <meta name="description" content="What I'm up-to now and focusing on" />
      </Head>
      <SimpleLayout
        title="What I'm up-to now and focusing on"
        intro="An insight into what my current focuses and aims are for the current period. I hope to keep this up-to date as much as possible."
      >
        <div className="space-y-20 text-white">
          <p>To be updated soon...</p>
        </div>
      </SimpleLayout>
    </>
  )
}
