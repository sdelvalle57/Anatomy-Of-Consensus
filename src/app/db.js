
<script src="https://www.gstatic.com/firebasejs/5.4.2/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);
</script>