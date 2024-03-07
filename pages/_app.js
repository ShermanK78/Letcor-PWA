// pages/_app.js or pages/_app.tsx
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
       {/*<script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('./service-worker.js').then(registration => {
                  console.log('Service Worker registered with scope:', registration.scope);
                }).catch(error => {
                  console.error('Service Worker registration failed:', error);
                });
              }
            `,
          }}
        />*/}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
