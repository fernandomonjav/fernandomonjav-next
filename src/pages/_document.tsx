import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/static/favicon.png" />
        </Head>
        <body className="text-gray-900 bg-white overflow-y-scroll">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument