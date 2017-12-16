importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');
firebase.initializeApp({
  'messagingSenderId': '588643703304'
});
const messaging = firebase.messaging();

//  curl https://fcm.googleapis.com/fcm/send -H "Content-Type: application/json" -H "Authorization: key=588643703304" -d '{ "notification": {"title": "Test title", "body": "Test Body", "click_action" : "https://angularfirebase.com"},"to" : "fcmToken_from_firebase"}'
