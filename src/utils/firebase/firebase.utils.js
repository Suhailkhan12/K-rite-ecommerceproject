// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { 
  getFirestore,
  doc, 
  getDoc, 
  setDoc, 
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore';




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0GJg6XhDLoiVYJ1me-yGvnXYjNdo2DMk",
  authDomain: "crwn-db-ff875.firebaseapp.com",
  projectId: "crwn-db-ff875",
  storageBucket: "crwn-db-ff875.appspot.com",
  messagingSenderId: "577566107357",
  appId: "1:577566107357:web:4cde35eef44ee6d1795d34"
};



// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


//google provider for sign in 
const googleprovider = new GoogleAuthProvider();
googleprovider.setCustomParameters({
    prompt: "select_account"
})


// to get auth 
export const auth = getAuth();



//sign using google popup


// export const signInWithGooglePopup = () => signInWithPopup(auth, googleprovider);
export const signInWithGooglePopup = async () => { 
  signInWithPopup(auth, googleprovider)
    .then((result) => {
      console.log("Logged In", result);
    })
    .catch((error) => {
      console.log("Caught error Popup closed");
    });
};


// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleprovider);

export const db = getFirestore();




//Add data from data js to fire base
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  
  await batch.commit();
  console.log('done');
}





// fetch data from firebase
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db,'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
}



//  take a data from sign in using google sign up

// export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {

//      if(!userAuth) return;
     
//      const userDocRef = doc(db, 'users', userAuth.uid);  //uid is google unique id 
//      console.log(userDocRef);

//      const userSnapshot = await getDoc(userDocRef);
//      console.log(userSnapshot);
//      console.log(userSnapshot.exists())


//      if(!userSnapshot.exists()){
//       const { displayName, email } = userAuth;
//       const createdAt = new Date();

//       try {
//         await setDoc(userDocRef, {
//           displayName,
//           email,
//           createdAt,
//           ...additionalInformation
//         });
//       } catch(error) {
//         console.log(`error creating the user`, error.message);
//       }
//      }
//      return userDocRef;
// };

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {

  if(!userAuth) return;
  
  const userDocRef = doc(db, 'users', userAuth.uid);  //uid is google unique id 
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists())


  if(!userSnapshot.exists()){
   const { displayName, email } = userAuth;
   const createdAt = new Date();

   try {
     await setDoc(userDocRef, {
       displayName,
       email,
       createdAt,
       ...additionalInformation
     });
   } catch(error) {
     console.log(`error creating the user`, error.message);
   }
  }
  return userSnapshot;
};



// sign up user creation
export const  createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};


//sign in using user validation
export const  signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

//signout user
export const signOutUser = async () => await signOut(auth);



// when user signout or sign in its check state
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth,callback);
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth, 
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    )
  })
}


