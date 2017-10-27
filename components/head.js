import Head from 'next/head'

export default ({ children }) => (
  <Head>
    <title>Caldwell is Dead as Hell</title>
    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <link rel="stylesheet" href="/static/css/normalize.min.css" />
    <link rel="stylesheet" href="/static/css/main.css" />
    {children}
  </Head>
)