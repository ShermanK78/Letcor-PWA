import Document, { Html, Head, Main, NextScript } from "next/document";
import Button from 'react-bootstrap/Button';

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
                  navigator.serviceWorker.register('./worker.js').then(registration => {
                    console.log('Service Worker registered with scope:', registration.scope);
                  }).catch(error => {
                    console.error('Service Worker registration failed:', error);
                  });

                  if ('BeforeInstallPromptEvent' in window) {
                    const modalShown = localStorage.getItem('modalShown');
                    const addToHomeScreenButtonClicked = localStorage.getItem('addToHomeScreenButtonClicked');

                    if (!modalShown) {
                      window.addEventListener('beforeinstallprompt', (event) => {
                        event.preventDefault();

                        const modal = document.getElementById('installModal');

                        if (modal) {
                          modal.style.display = 'block';

                          const addButton = document.getElementById('addToHomeScreenButton');
                          const closeModalButton = document.getElementById('closeModalButton');

                          if (addButton) {
                            addButton.addEventListener('click', () => {
                              // Show the browser's installation prompt
                              event.prompt();

                              // After clicking, hide the modal
                              modal.style.display = 'none';
                              localStorage.setItem('modalShown', 'true');
                              localStorage.setItem('addToHomeScreenButtonClicked', 'true');
                            });
                          }

                          if (closeModalButton) {
                            closeModalButton.addEventListener('click', () => {
                              // Hide the custom modal without triggering the browser prompt
                              modal.style.display = 'none';
                            });
                          }
                        }
                      });
                    } else if (addToHomeScreenButtonClicked) {
                      // If the button has been clicked before, hide the modal
                      const modal = document.getElementById('installModal');
                      if (modal) {
                        modal.style.display = 'none';
                      }
                    }
                  }
                }
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Modal HTML */}
          <div id="installModal" style={{ display: 'none', position: 'fixed', bottom: '0', left: '0', width: '100%',backgroundColor: "darkblue", borderColor: "darkblue", color: "white", alignContent: "center", padding: "30px", opacity: 0.75  }}>
            <div>
              <p>This is a one-time modal. Click the button to add to the home screen.</p>
              <Button id="addToHomeScreenButton" style={{marginRight: '10px'}}>Add to Home Screen</Button>
             
              {/* Close Button */}
              <Button id="closeModalButton">Close</Button>
            </div>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;