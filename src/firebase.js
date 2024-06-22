// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken } from "firebase/messaging";

// const firebaseConfig = {
//     apiKey: "AIzaSyDeFPruHqfA9JBuIg72x4zgqzhoty1TCq8",
//     authDomain: "atmakitchen-9058f.firebaseapp.com",
//     projectId: "atmakitchen-9058f",
//     storageBucket: "atmakitchen-9058f.appspot.com",
//     messagingSenderId: "707069299228",
//     appId: "1:707069299228:web:81239c459166b365226dd9",
//     measurementId: "G-H0ZTJVJC3R"
// };

// const app = initializeApp(firebaseConfig);

// const messaging = getMessaging(app);

// export const requestPermission = async () => {
//     console.log("Req");
//     Notification.requestPermission().then(permission = () => {
//         if (permission === "granted") {
//             console.log("Notif")

//             return getToken(messaging, {
//                 vapidKey:
//                     "BAq_dNAsRVofza-rJHPtfAYUB3Ca2P714LP31WVvPQYhfIq3osHAOeG5llT9hH5g3-dMXAlHTrro7p96lfD2AAQ",
//             })
//                 .then(currentToken => {
//                     if (currentToken) {
//                         console.log("Client Token: ", currentToken);
//                     } else {
//                         console.log("Failed");
//                     }
//                 })
//                 .catch(err => {
//                     console.log("An error", err);
//                 });
//         } else {
//             console.log("User");
//         }
//     });
// };

// requestPermission();

// export const onMessageListener = () =>
//     new Promise(resolve => {
//         onMessage(messaging, payload => {
//             resolve(payload);
//         });
//     });