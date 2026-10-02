/* ============================================================
   Igodomigodo Security Network — Firebase shared config
   Import this in any page that needs Firestore:

     <script type="module">
       import { db } from "./firebase-config.js";
       import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
       ...
     </script>
   ============================================================ */

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCxsU8TQ0xI67ZZOYDqf9_H8UyoBvgJ7pQ",
  authDomain: "security-f325d.firebaseapp.com",
  projectId: "security-f325d",
  storageBucket: "security-f325d.firebasestorage.app",
  messagingSenderId: "421538949121",
  appId: "1:421538949121:web:eb9aa79d286b2d6d2f7800"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);