import Head from 'next/head'

export default ({ children }) => (
  <Head>
    <title>Caldwell is Dead as Hell</title>
    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />

    <link rel="stylesheet" href="/static/css/normalize.min.css" />
    <link rel="stylesheet" href="/static/css/main.css" />

    <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
    <link rel="icon" href="/static/favicons/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="194x194" href="/static/favicons/favicon-194x194.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/static/favicons/android-chrome-192x192.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
    <link rel="manifest" href="/static/favicons/manifest.json" />
    <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#ff7f11" />
    <meta name="theme-color" content="#24292b" />

    {/* Search Engine */}
    <meta name="description" content="Listen to What Should We Draw!" />
    <meta name="image" content="https://caldwellisdeadashell.com/static/images/social-media-image.png" />
    {/* Schema.org for Google */}
    <meta itemprop="name" content="Caldwell Is Dead As Hell" />
    <meta itemprop="description" content="Listen to What Should We Draw!" />
    <meta itemprop="image" content="https://caldwellisdeadashell.com/static/images/social-media-image.png" />
    {/* Twitter */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Caldwell Is Dead As Hell" />
    <meta name="twitter:description" content="Listen to What Should We Draw!" />
    <meta name="twitter:site" content="@bericp1" />
    <meta name="twitter:image:src" content="https://caldwellisdeadashell.com/static/images/social-media-image.png" />
    {/* Open Graph general (Facebook, Pinterest & Google+) */}
    <meta name="og:title" content="Caldwell Is Dead As Hell" />
    <meta name="og:description" content="Listen to What Should We Draw!" />
    <meta name="og:image" content="https://caldwellisdeadashell.com/static/images/social-media-image.png" />
    <meta name="og:url" content="https://caldwellisdeadashell.com/" />
    <meta name="og:site_name" content="Caldwell Is Dead As Hell" />
    <meta name="og:type" content="website" />

    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-108789514-1" />
    <script dangerouslySetInnerHTML={{__html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-108789514-1');
    `}} />

    {children}
  </Head>
)