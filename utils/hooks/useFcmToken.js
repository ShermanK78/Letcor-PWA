import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyDqQHJUh1oCgAgq3AYnZqsnWLdA6MHGmb0",
  authDomain: "pwa-push-notifications-e5678.firebaseapp.com",
  projectId: "pwa-push-notifications-e5678",
  storageBucket: "pwa-push-notifications-e5678.appspot.com",
  messagingSenderId: "989109111356",
  appId: "1:989109111356:web:f73f217ce1c815720d5139",
  measurementId: "G-WCDL4LJ5VQ"
};

initializeApp(firebaseConfig);

const useFcmToken = () => {
  const [fcmToken, setFcmToken] = useState('');
  const [notificationPermissionStatus, setNotificationPermissionStatus] = useState('');

  useEffect(() => {
    const retrieveToken = async () => {
      try {
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
          const messaging = getMessaging();

          const permission = await Notification.requestPermission();
          setNotificationPermissionStatus(permission);

          if (permission === 'granted') {
            const currentToken = await getToken(messaging, {
              vapidKey: 'BH1tk-UNfe9NEB-Fqx32qn5I_WBOwdO9nOx-C15XBUsQqsSt6QTyLIqTkCpFW-t6QfmqFPjfQqBIsUKoUL2DjLc',
            });
            if (currentToken) {
              setFcmToken(currentToken);
            } else {
              console.log('No registration token available. Request permission to generate one.');
            }
          }
        }
      } catch (error) {
        console.log('An error occurred while retrieving token:', error);
      }
    };

    retrieveToken();
  }, []);

  return { fcmToken, notificationPermissionStatus };
};

export default useFcmToken;
