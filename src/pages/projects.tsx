import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Daniel Van Cuylenburg</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Side projects I’m working on..."
        intro="Coming soon..."
      >
        <></>
      </SimpleLayout>
    </>
  )
}
