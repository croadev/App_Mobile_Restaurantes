import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDDnB0WZmhlsk6JVoi6QpCOBy2my00xF_w",
  authDomain: "app-mobile-croa.firebaseapp.com",
  projectId: "app-mobile-croa",
  storageBucket: "app-mobile-croa.appspot.com",
  messagingSenderId: "227501831102",
  appId: "1:227501831102:web:b5f24b06d58bfba4e67fef",
};

export const initFirebase = initializeApp(firebaseConfig);
