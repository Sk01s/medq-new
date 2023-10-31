import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  collection,
  query,
  getDocs,
  addDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  put,
  getDownloadURL,
  deleteObject,
  uploadBytes,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

class Firebase {
  constructor() {
    this.app = app;
    this.auth = auth;
    this.db = db;
    this.storage = storage;
  }

  // AUTH ACTIONS
  createAccount = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  signOut = () => signOut(auth);

  // Firestore Collections
  usersCollection = collection(db, "users");
  productsCollection = collection(db, "products");
  orderCollection = collection(db, "order");

  // Firestore Queries
  usersQuery = query(this.usersCollection);
  productsQuery = query(this.productsCollection);
  orderQuery = query(this.orderCollection);

  // Firestore Getters
  getUser = (id) => getDoc(doc(this.db, "users", id));
  getSingleProduct = (id) => getDoc(doc(this.db, "products", id));
  getOrder = (id) => getDoc(doc(this.db, "order", id));

  // Firestore Updates
  addUser = (id, user) => setDoc(doc(this.db, "users", id), user);
  updateProfile = (id, updates) =>
    updateDoc(doc(this.db, "users", id), updates);
  addProduct = (id, product) => setDoc(doc(this.db, "products", id), product);
  updateProduct = (id, updates) =>
    updateDoc(doc(this.db, "products", id), updates);
  removeProduct = (id) => deleteDoc(doc(this.db, "products", id));
  addOrder = (id, order) => setDoc(doc(this.db, "order", id), order);
  removeOrder = (id) => deleteDoc(doc(this.db, "order", id));

  // Firestore Queries
  getProducts = () => getDocs(this.productsQuery);
  searchProducts = (searchKey) => {
    // Implement your search logic here
  };

  // Storage Actions
  storeImage = async (image, setImageUrl, setLoading, setMessage) => {
    // const storage = getStorage();
    const storageRef = ref(this.storage, `productImage/${image.name}`);

    uploadBytes(storageRef, image)
      .then((snapshot) => {
        console.log("Image uploaded successfully!");
        getDownloadURL(storageRef)
          .then((downloadURL) => {
            console.log("Download URL:", downloadURL);
            // You can use this downloadURL to display or store the image.
            setMessage("Your Image have been uploaded");
            setImageUrl(downloadURL);
          })
          .catch((error) => {
            console.error("Error getting download URL:", error);
            setMessage("Error happend please check your internet");
          });
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      })
      .finally((e) => {
        setLoading(false);
        return e;
      });
  };

  // storeImage = async (id, folder, imageFile) => {
  //   const storageRef = ref(this.storage, `${folder}/${id}`);
  //   const snapshot = await put(storageRef, imageFile);
  //   const downloadURL = await getDownloadURL(snapshot.ref);

  //   return downloadURL;
  // };
  generateKey = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < 20; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  };

  deleteImage = async (id) => {
    const storageRef = ref(this.storage, `products/${id}`);
    await deleteObject(storageRef);
  };

  // Add other methods here
}

const firebaseInstance = new Firebase();
export default firebaseInstance;
