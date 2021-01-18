import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from "next/image"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SVG to React API (based on awesome package gregberge/svgr)</title>
        <link rel="icon" href="/https://react-svgr.com/favicon-32x32.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>SVG to React API</h1>

        <ol>
          <li>Play with <a href="https://react-svgr.com/playground">react-svgr.com/playground</a></li>
          <li>Get config params</li>
          <li>
            Call SVG to React API
            <ul>
              <li>
                <ul>
                  <li>Method: GET</li>
                  <li>Path: <code>/api?[YOUR-CONFIG-PARAMS-HERE]&svg=[YOUR-URI-ENCODED-SVG-CODE-HERE]</code></li>
                  <li>Sample: <a href="/api?icon=true&native=true&typescript=true&svg=%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20height%3D%22100%22%20width%3D%22100%22%3E%20%20%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2240%22%20stroke%3D%22black%22%20stroke-width%3D%223%22%20fill%3D%22red%22%20%2F%3E%3C%2Fsvg%3E"><code>GET /api?icon=true&native=true&typescript=true&svg=...</code></a></li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Method: POST</li>
                  <li>Path: <code>/path?[YOUR-CONFIG-PARAMS-HERE]</code></li>
                  <li>Body: <code>svg=[YOUR-URI-ENCODED-SVG-CODE-HERE]</code></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Done: <pre>{`import * as React from 'react'
import Svg, { SvgProps, Circle } from 'react-native-svg'

function SvgComponent(props: SvgProps) {
  return (
    <Svg height="1em" width="1em" {...props}>
      <Circle cx={50} cy={50} r={40} stroke="#000" strokeWidth={3} fill="red" />
    </Svg>
  )
}

export default SvgComponent`}</pre></li>
        </ol>

        <Image
          src={"/react-svgr.com.png"}
          alt={"SVG to React API"}
          width={871}
          height={715}
        />
      </main>

      <footer className={styles.footer}>
        {'Powered by'}
        <a href="https://react-svgr.com/" target={'_blank'} rel="noopener noreferrer">
          <Image
            src={'https://react-svgr.com/static/fb3df1768da645b2a4423340e68b297a/adf82/home-logo.png'}
            alt={'svgr'}
            width={64}
            height={64}
          />
        </a>
        {'~ Hosted by'}
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
        {' ~ Cooked by'}
        <a href="https://twitter.com/olragon" target={'_blank'} rel="noopener noreferrer">olragon</a>
      </footer>
    </div>
  )
}
