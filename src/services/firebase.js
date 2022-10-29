// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXCBCXEXVtIA2DQfCSkan8Fvf9PK1QHAA",
  authDomain: "proyecto-nikereact.firebaseapp.com",
  projectId: "proyecto-nikereact",
  storageBucket: "proyecto-nikereact.appspot.com",
  messagingSenderId: "591310990971",
  appId: "1:591310990971:web:f540fcce43683252f6fcde"
};

// 1. Inicializando Firebase e inicializando FIRESTORE
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore (firebaseApp);





export async function getProductos () {
    const collectionRef = collection(db, "zapatillas" );
    let results = await getDocs (collectionRef);
    let dataZapatillas = results.docs.map( documento => {
       return {
        id: documento.id,
        ...documento.data()
    }
    });
    return dataZapatillas;
}



export async function getUnProducto (id) {
    const docRef = doc(db, "zapatillas", id);
    const docResult = await getDoc(docRef);

    if(docResult.exists()){
        return {
            id: docResult.id,
            ...docResult.data()
        } ;

    }else{
        throw new Error("Lo sentimos este producto no existe") 
    }
}



export async function getProductoCategoria (idCategoriaParams){
    
    const collectionRef = collection(db, "zapatillas");
    const queryCat = query(collectionRef, where("categoria", "==", idCategoriaParams))
    let results = await getDocs (queryCat);

    if(results.docs.length !== 0){
        let dataZapatillas = results.docs.map( (documento) => {
            return( {
             id: documento.id,
             ...documento.data()
            })
         });
         return dataZapatillas;

    }else{
        throw new Error("Lo sentimos esta categoría no existe") 

    }
}

export async function createOrder (order){
    const collectionRef = collection(db, "ordenes")
    let result = await addDoc(collectionRef, order)
    if(result.id.length !== 0){
        return result.id
    }else{
        throw new Error("No se creo la orden, intentalo de nuevo.")
    }
}








export default firebaseApp;