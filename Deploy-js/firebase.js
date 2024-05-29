/**
 * Nome do arquivo: firebase.js
 * Data de criação: 18/05/2024
 * Autor: Francesco Antony
 * Matrícula: 01609346
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por implementar as configurações das variáveis de ambiente (SDK) da hospedagem escolhida (firebase) onde serão realizados os testes.
 *
 * Este script é parte o curso de ADS.
 */





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk-0QF3Iy0AoueVqBhqBMBCBSW0QMI76E",
  authDomain: "rest-app-85aa7.firebaseapp.com",
  projectId: "rest-app-85aa7",
  storageBucket: "rest-app-85aa7.appspot.com",
  messagingSenderId: "54051650758",
  appId: "1:54051650758:web:2b304f6c04f87405226bc7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);