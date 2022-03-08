import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  addDoc,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

var FirebaseConfig = {
  apiKey: "AIzaSyCo4Yn_DmLvBXPt4_hPtMILMj-I2Is6FLU",
  authDomain: "fixitdata-b2d8f.firebaseapp.com",
  projectId: "fixitdata-b2d8f",
  storageBucket: "fixitdata-b2d8f.appspot.com",
  messagingSenderId: "1000508088105",
  appId: "1:1000508088105:web:50691eedf4055d5989a138",
  measurementId: "G-CHRJJRN2J9",
};

initializeApp(FirebaseConfig);
const dbs = getFirestore();
//Reviews
//Services
//Tickets
//booking
//users
const getReviews = async () => {
  const projectSnaps = await getDocs(collection(dbs, "Reviews"));
  const reviewList = projectSnaps.docs.map((doc) => {
    return { id: doc?.id, data: doc.data() };
  });
  return reviewList;
};
const getServices = async () => {
  const projectSnaps = await getDocs(collection(dbs, "Services"));
  const servicesList = projectSnaps.docs.map((doc) => {
    return { id: doc?.id, data: doc.data() };
  });
  return servicesList;
};
const getTickets = async () => {
  const projectSnaps = await getDocs(collection(dbs, "Tickets"));
  const ticketList = projectSnaps.docs.map((doc) => {
    return { id: doc?.id, data: doc.data() };
  });
  return ticketList;
};
const getBookings = async () => {
  const projectSnaps = await getDocs(collection(dbs, "booking"));
  const bookingList = projectSnaps.docs.map((doc) => {
    return { id: doc?.id, data: doc.data() };
  });
  return bookingList;
};
const getUsers = async () => {
  const projectSnaps = await getDocs(collection(dbs, "users"));
  const userList = projectSnaps.docs.map((doc) => {
    return { id: doc?.id, data: doc.data() };
  });
  return userList;
};
const getAllData = async () => {
  const reviews = await getReviews();
  const orders = await getBookings();
  const users = await getUsers();
  const services = await getServices();
  const tickets = await getTickets();
  return { reviews, orders, users, services, tickets };
};
const postData = async (data) => {
  const docRef = await addDoc(collection(dbs, "projects"), {
    title: data.title,
    subtitle: data.subtitle,
    weblink: data.weblink,
    imge: data.imglink,
    imgRef: data.imgRef,
  });
  if (docRef) {
    return { data: docRef?.id, error: null };
  } else {
    return { data: null, error: "Data can not be posted." };
  }
};

const updateData = async (id, data) => {
  await setDoc(doc(collection(dbs, "projects"), `${id}`), {
    title: data.title,
    subtitle: data.subtitle,
    weblink: data.weblink,
    imge: data.imglink,
    imgRef: data.imgRef ? data.imgRef : null,
  });
};
const deltData = async (id) => {
  const resp = await deleteDoc(doc(dbs, "projects", `${id}`));
  return resp;
};

export {
  updateData,
  postData,
  deltData,
  getBookings,
  getTickets,
  getReviews,
  getServices,
  getUsers,
  getAllData,
  dbs,
};
