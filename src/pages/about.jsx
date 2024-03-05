import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
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
        <title>About - Jordan Bain</title>
        <meta
          name="description"
          content="I’m Jordan Bain. I live in Trinidad & Tobago, where I build the future."
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
                className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Jordan Bain. I live in Trinidad and Tobago, where I build the
              future.
            </h1>
            <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
              <p>
              My journey through the realms of creativity and technology began at a tender age of 8 when I discovered my passion for art. Sculpting animals ignited my imagination and laid the foundation for my artistic endeavors. As I delved deeper into the world of design, my curiosity led me to explore new horizons.
              </p>
              <p>
              At 16, I found myself drawn to the realm of programming through the XLabs ITC club at Trinity College. This initial spark kindled a flame that would guide me through an exciting journey of discovery and innovation.
              </p>
              <p>
              By the age of 19, I had transitioned from a burgeoning enthusiast to a proficient Linux server administrator, paving the way for my evolution into a development operations engineer. Embracing the complexities of technology, I honed my skills, embracing challenges and embracing opportunities for growth.
              </p>
              <p>
              Today, I proudly stand as the co-founder of Let's Shop Trinidad and Tobago and IslandFixx. Let's Shop Trinidad and Tobago represents the epitome of convenience, offering an all-encompassing ecommerce platform and delivery service tailored to meet your every need. From food and groceries to pharmacy essentials and shopping delights, we bring the marketplace to your fingertips. With our parcel delivery service, convenience is just a click away.
              </p>
              <p>
              IslandFixx stands as a testament to innovation and efficiency, providing a comprehensive service marketplace and one-stop solution platform. Our commitment to excellence drives us to deliver unparalleled service, ensuring that your needs are met with precision and care.
              </p>
              <p>
              Join me as I continue to explore the nexus of art, technology, and entrepreneurship. Together, let us embark on a journey of creativity, innovation, and endless possibilities.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/codemoneybag" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://www.instagram.com/lost_in_code/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/jordanbaindev" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/jordan-bain-592b92217/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:contact@jordanbain.info"
                icon={MailIcon}
                className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
              >
                contact@jordanbain.info
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
