import Image, { StaticImageData } from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  FrontendMastersIcon,
  XIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1-new.jpg'
import image5 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4-new.jpg'
import image2 from '@/images/photos/image-5-new.jpg'
import logoAmigo from '@/images/logos/logoAmigo.jpeg'
import logoVyne from '@/images/logos/logoVyne.jpeg'
import logoW365 from '@/images/logos/logoW365.jpeg'
import logoInTouch from '@/images/logos/logoInTouch.jpeg'
import logoApacio from '@/images/logos/logoApacio.jpeg'
import logoBoxStuff from '@/images/logos/logoBoxStuff.jpeg'
import logoEMF from '@/images/logos/logoEMF.jpeg'
import logoOC from '@/images/logos/logoOC.jpeg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

interface Article {
  slug: string
  title: string
  date: string
  description: string
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }: { article: Article }) {
  return (
    <Card as="article">
      <Card.Title href={`/notes/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Continue reading</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link href={``} target="_blank" className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Vyne',
      title: 'Senior Front-end Engineer',
      logo: logoVyne,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Amigo Partnership',
      title: 'Senior Front-end Developer',
      logo: logoAmigo,
      start: '2021',
      end: {
        label: '2023',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Apacio',
      title: 'Senior Front-end Developer',
      logo: logoApacio,
      start: '2020',
      end: '2021',
    },
    {
      company: 'Ellen MacArthur Foundation',
      title: 'Front-end Developer & Designer',
      logo: logoEMF,
      start: '2015',
      end: '2020',
    },
    {
      company: 'Box Stuff',
      title: 'Web Designer & Developer',
      logo: logoBoxStuff,
      start: '2014',
      end: '2015',
    },
    {
      company: 'OC Sport',
      title: 'Web Designer & Developer',
      logo: logoOC,
      start: '2007',
      end: '2013',
    },
    {
      company: 'Wight365',
      title: 'Web Developer',
      logo: logoW365,
      start: '2006',
      end: '2007',
    },
    {
      company: 'InTouch',
      title: 'Web Developer (apprentice)',
      logo: logoInTouch,
      start: '2000',
      end: '2004',
    },
  ] as
    | {
        company: string
        title: string
        logo: StaticImageData
        start: string
        end: {
          label: string
          dateTime: number
        }
      }[]
    | {
        company: string
        title: string
        logo: StaticImageData
        start: string
        end: string
      }[]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-7 w-7 rounded-full"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start} until ${role.end}`}
              >
                <time dateTime={role.start}>{role.start}</time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end}>{role.end.label ?? role.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href="/cv/My-CV_2025_PDF.pdf"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }: { articles: Article[] }) {
  return (
    <>
      <Head>
        <title>
          Daniel Van Cuylenburg - Remix, NextJS and Tailwind CSS specialist
        </title>
        <meta name="description" content="I’m Daniel" />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Remix, NextJS and Tailwind CSS specialist
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 [&_a]:font-bold [&_a]:text-pink-500 [&_a:hover]:text-pink-400">
            Hey, I&apos;m Daniel, a Senior Front-end Engineer for{' '}
            <a href="https://www.payvyne.com/" target="_blank" rel="noreferrer">
              Vyne Technologies
            </a>
            .
          </p>
          <div className="mt-6 flex items-center gap-6">
            <SocialLink
              href="https://frontendmasters.com/u/danielvanc/"
              aria-label="See what I'm learning on Frontend Masters"
              icon={FrontendMastersIcon}
            />
            <SocialLink
              href="https://x.com/danielvanc"
              aria-label="Follow me on X"
              icon={XIcon}
            />
            <SocialLink
              href="https://github.com/danielvanc"
              aria-label="Follow me on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/danielvanc"
              aria-label="Follow me on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 3)
        .map(({ component, ...meta }) => meta),
    },
  }
}
