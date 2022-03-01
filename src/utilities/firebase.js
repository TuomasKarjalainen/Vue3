import { initializeApp } from 'firebase/app';
import { getDatabase,  ref } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyC9MXO68ys0Jn3L7pTcgEK5lEkzu-K0GxM",
    authDomain: "vue-full-course-f1f4b.firebaseapp.com",
    projectId: "vue-full-course-f1f4b",
    storageBucket: "vue-full-course-f1f4b.appspot.com",
    messagingSenderId: "670856508062",
    appId: "1:670856508062:web:9af53c4162f4bf961d018f"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export const chatsRef = ref(db,'/chats');
// export const chatsRef = ref(db,'chats');

export default app;
