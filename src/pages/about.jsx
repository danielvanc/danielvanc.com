import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Daniel Van Cuylenburg</title>
        <meta
          name="description"
          content="I’m Daniel Van Cuylenburg. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Dan Van Cuylenburg. I live on the Isle of Wight, working
              remotely as a React Developer.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 [&_p_a]:text-teal-300 [&_p_a:hover]:text-teal-500">
              <p>
                I&apos;m a self taught, digital creative and life long learner.
                Since 2000, I have gained valuable experience in web u.i design,
                back and front-end dev and project management. My particular
                focus and specialism is in web site and app front-end
                engineering. I love to be involved in creating interesting
                projects that solve real world problems, and building beautiful,
                user centered, experiences that are tested and are accessible to
                all.
              </p>
              <p>
                I&apos;m currently a Senior Front-end Developer for an all
                digital creative agency, Amigo Partnership. In the more recent
                years, I&apos;ve worked for{' '}
                <Link href="https://www.apacio.com/">Apacio</Link> and on the
                digital team for the{' '}
                <Link href="https://ellenmacarthurfoundation.org/">
                  Ellen MacArthur Foundation
                </Link>
                , of which, I have contributed and provided front-end expertise,
                tooling, mentoring and delivering insightful, impactful
                experiences. For a further overview of my professional career,
                take a look at my resume for an outline of all my roles and key
                skills.
              </p>
              <p>
                My personal site is an ongoing project that is simply somewhere
                for me to post my <Link href="/notes">thoughts</Link>,{' '}
                <Link href="/projects">projects</Link> and experiments. Should
                you wish, you can find out what I&apos;m{' '}
                <Link href="/now">up-to now</Link> and see the{' '}
                <Link href="/uses">tools</Link>, VS Code{' '}
                <Link href="https://github.com/danielvanc/vscode-extensions">
                  extensions
                </Link>{' '}
                and{' '}
                <Link href="https://github.com/danielvanc/vscode-settings">
                  settings
                </Link>{' '}
                I use on a daily basis.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/danielvanc"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://instagram.com/danielvanc"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/danielvanc"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/danielvanc"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:email@danielvanc"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                email@danielvanc.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
