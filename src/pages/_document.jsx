import { Head, Html, Main, NextScript } from 'next/document'
import SocialCard from '@/images/portfolio_socail_card.jpg'

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`}
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`}
        />

        <meta name="robots" content="index,follow"/>

        <meta name="twitter:title" content="Jordan Bain - Software developer, entrepreneur, artist and investor"/>
        <meta name="twitter:site" content={`${process.env.NEXT_PUBLIC_SITE_URL}`}/>
        <meta name="twitter:description" content="I’m Jordan, a software developer, entrepreneur and investor based in Trinidad and Tobago. I’m a founder and CTO of Let's Shop TT and IslandFixx. I empowers businesses with high-quality web and app development services that leverage the latest and best technologies."/>
        <meta name="twitter:card" content={`${process.env.NEXT_PUBLIC_SITE_URL + '/social_card.jpg'}`}/>

        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}`}/>
        <meta property="og:title" content="Jordan Bain - Software developer, entrepreneur, artist and investor"/>
        <meta property="og:description" content="I’m Jordan, a software developer, entrepreneur and investor based in Trinidad and Tobago. I’m a founder and CTO of Let's Shop TT and IslandFixx. I empowers businesses with high-quality web and app development services that leverage the latest and best technologies."/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL + '/social_card.jpg'}`} />
      </Head>
      <body className="flex flex-col h-full bg-zinc-50 dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
