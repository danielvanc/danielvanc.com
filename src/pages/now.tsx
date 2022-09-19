import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function NowSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Item({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Now - Daniel Van Cuylenburg</title>
        <meta name="description" content="What I'm up-to now and focusing on" />
      </Head>
      <SimpleLayout
        title="What I'm up-to now and focusing on."
        intro="This is inspired by Derek Sivers and nownownow.com. Last updated, 18th September, 2022."
      >
        <div className="space-y-20">
          <NowSection title="Work">
            <Item title="💻&nbsp;Side projects">
              I&apos;m working towards building an MVP of my Book app for book
              lovers.
            </Item>
            <Item title="📚 Studying">
              I&apos;m currently going through a few courses on Front-end
              Masters:
              <ul>
                <li>- Developer Productivity</li>
                <li>- Intro to Computer Science</li>
                <li>- The Last Algorithms Course You&apos;ll need</li>
              </ul>
            </Item>
          </NowSection>
          <NowSection title="Life">
            <Item title="🏝 Lots going on but a few notable things...">
              <ul>
                <li>
                  - Rcently purchased our house that we&apos;ve been living in
                  for the past 3 years. Woop! 🥳
                </li>
                <li>- Gigging allot with my band ThePact.</li>
                <li>
                  - Our Sheltie returned from our Scotland trip baring medals
                  for her first ever dog show!
                </li>
              </ul>
            </Item>
          </NowSection>
          <NowSection title="Play">
            <Item title="🎧 Listening too.">
              <ul>
                <li>- Tiesto - Hot In it</li>
                <li>- Binaural Beats: Focus</li>
                <li>- Tatono: Peaks</li>
                <li>- Beatstrumentals</li>
                <li>- Synthwave | Chillwave</li>
              </ul>
            </Item>
            <Item title="📺 Watching.">
              <ul>
                <li>- Stranger Things: Season 5</li>
                <li>- Bobs Burgers</li>
                <li>- Kara and Nate (YouTubers)</li>
              </ul>
            </Item>
            <Item title="🎮 Playing">
              <ul>
                <li>- GTA4 (xBox)</li>
                <li>- Minecraft (iPadOS)</li>
                <li>- Stardew Valley (iPadOS)</li>
              </ul>
            </Item>
          </NowSection>
        </div>
      </SimpleLayout>
    </>
  )
}
