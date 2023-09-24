import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
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

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Daniel Van Cuylenburg</title>
        <meta
          name="description"
          content="All the tech and tools I use to do my best work."
        />
      </Head>
      <SimpleLayout
        title="All the tech and tools I use to do my best work."
        intro="I get asked now and again about the things I use in my dev career, and what i use to stay productive, so I thought this page would be handy in listing it all here."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M1 Pro, 16GB RAM (2021)">
              Previously I was using an Intel-based 15” MacBook Pro but the
              difference is pretty phenominal. I’ve still to this day, yet to
              hear the fans turn on, even though I often have a ton of
              applications open simultaneously.
            </Tool>
            <Tool title="LG Ultrafine 4K 32">
              It was hard to find a monitor i was happy with after stepping down
              from a 27&quot 5k iMac. This was one of the best I could find for
              the money. Whilst it doesn&apos;t have the same clarity as the
              iMac display, it rocks iin just about everywhere else.
            </Tool>
            <Tool title="IPad Air 4th gen">
              Apart from being a news reader / gaming device, this is used as my
              second screen for emails / slack etc. With apples continuity
              feature, it works seemlessly with mouse and keyboard.
            </Tool>
            <Tool title="Apple Magic Keyboard with Touch">
              I have always been really happy with Apples keyboards and this one
              is with touch id is awesome.
            </Tool>
            <Tool title="Apple Magic Trackpad 2">
              I dig using a trackpad and the gestures really help my day to day
              flow.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code">
              I have been using this pretty much since it released and love it.
              The monthly updates are really helpful and I enjoy tweaking my set
              up with all the new settings, to help make my work flow, just that
              bit easier.
            </Tool>
            <Tool title="Brave and Firefox">
              Not much to be said really. You get the best of security and a mix
              of the best JS run time and browser dev tools.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              This is my go to these days. As well as the fact companies i work
              for are mostly using it as well. Ive never been much of a fan of
              Adobe bloatware.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="ToDo'ist">
              This is where all my todo&apos;s live. I plan my life in this
              thing. I integrate ToDo&apos;ist in centered.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Health">
            <Tool title="Apple Fitness+">
              Working from home, it really helps to have a program I can go too
              to help get active and be motivated. It is invaluable really.
            </Tool>
            <Tool title="DripEx 2 in 1 folding Treadmill">
              I have this set up and ready to use daily. With a regular pattern
              of stepping on and off during breaks and meetings. Really helps
              gets those steps in
            </Tool>
            <Tool title="Headspace">
              Mindfullness is a great to stay connected with oneself. I use
              Headspace daily and it really helps with staying focused and
              energesied, especially during busy times.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
