import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <meta name="theme-color" content="#fff" />
          
          {/* Add the service worker registration script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if ('serviceWorker' in navigator) {
                  navigator.serviceWorker.register('/service-worker.js').then(registration => {
                    console.log('Service Worker registered with scope:', registration.scope);
                  }).catch(error => {
                    console.error('Service Worker registration failed:', error);
                  });

                  // Check if the beforeinstallprompt event is supported
                  if ('BeforeInstallPromptEvent' in window) {
                    // Wait for the beforeinstallprompt event
                    window.addEventListener('beforeinstallprompt', (event) => {
                      // Prevent the default "Add to Home Screen" prompt
                      event.preventDefault();

                      // Show the "Add to Home Screen" prompt on page load
                      event.prompt();
                    });
                  }
                }
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
