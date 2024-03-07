firebase.js

// Firebase Cloud Messaging Configuration File.
// Read more at https://firebase.google.com/docs/cloud-messaging/js/client && https://firebase.google.com/docs/cloud-messaging/js/receive

import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getToken } from 'firebase/messaging';

import dynamic from "next/dynamic";

const getMessaging = dynamic(
	() => import("firebase/messaging"),
	{ ssr: false }
);

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

const messaging = <getMessaging/>;

export const generateToken = async() => {
    const permission = await Notification.requestPermission();
    console.log(permission);



    const token =  getToken(messaging, { vapidKey: "BH1tk-UNfe9NEB-Fqx32qn5I_WBOwdO9nOx-C15XBUsQqsSt6QTyLIqTkCpFW-t6QfmqFPjfQqBIsUKoUL2DjLc" })//to authorize send requests to supported web push services
        .then((token) => {
            if (token) {
                console.log('current token for client: ', token);

                if(localStorage.getItem('fcmToken') && token !==localStorage.getItem('fcmToken')){
                    localStorage.setItem('fcmToken', token);

                }

                else if(!localStorage.getItem('fcmToken')){
                    localStorage.setItem('fcmToken', token);

                }


            } else {
                console.log('No registration token available. Request permission to generate one.');
            }
        })
        .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        });
};