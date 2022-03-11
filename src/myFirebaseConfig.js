// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   getDocs,
//   setDoc,
//   doc,
//   addDoc,
// } from "firebase/firestore";
// var firebaseConfig = {
//   apiKey: "AIzaSyC3IJvYRDuJXXJAaSlkVKmiILNV1LsF7dI",
//   authDomain: "loanapp-521b0.firebaseapp.com",
//   projectId: "loanapp-521b0",
//   storageBucket: "loanapp-521b0.appspot.com",
//   messagingSenderId: "470381188899",
//   appId: "1:470381188899:web:434cb022fc096ed2f55e96",
//   measurementId: "G-F9ML7DBQ6V",
// };

// initializeApp(firebaseConfig);
// const dbs = getFirestore();

// const getLoanInfo = async () => {
//   const projectSnaps = await getDocs(collection(dbs, "loanInfo"));
//   const bookingList = projectSnaps.docs.map((doc) => {
//     return { id: doc?.id, data: doc.data() };
//   });
//   return bookingList;
// };
// const postLoan = async (data) => {
//   const docRef = await addDoc(collection(dbs, "loanInfo"), {
//     title: data.title,
//     subtitle: data.subtitle,
//     weblink: data.weblink,
//     imge: data.imglink,
//     imgRef: data.imgRef,
//   });
//   if (docRef) {
//     return { data: docRef?.id, error: null };
//   } else {
//     return { data: null, error: "Data can not be posted." };
//   }
// };
// const createManualUser = async (data) => {
//   const docRef = await addDoc(collection(dbs, "users"), {
//     ...data,
//     createdAt: new Date(),
//   });
//   if (docRef) {
//     return { data: docRef?.id, error: null };
//   } else {
//     return { data: null, error: "User cannot be created." };
//   }
// };
// const getUsers = async () => {
//   const projectSnaps = await getDocs(collection(dbs, "users"));
//   const userList = projectSnaps.docs.map((doc) => {
//     return { id: doc?.id, data: doc.data() };
//   });
//   return userList;
// };

// export { getLoanInfo, getUsers, dbs, postLoan, createManualUser };
import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyC3IJvYRDuJXXJAaSlkVKmiILNV1LsF7dI",
  authDomain: "loanapp-521b0.firebaseapp.com",
  projectId: "loanapp-521b0",
  storageBucket: "loanapp-521b0.appspot.com",
  messagingSenderId: "470381188899",
  appId: "1:470381188899:web:434cb022fc096ed2f55e96",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export default firebase;

export { db, auth, storage };
