import firebase from "firebase/app"
import "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyDwcWlAjO312ww8wZuXLa_tFEBefjkunto",
    authDomain: "mzhogar.firebaseapp.com",
    projectId: "mzhogar",
    storageBucket: "mzhogar.appspot.com",
    messagingSenderId: "533080752863",
    appId: "1:533080752863:web:1e494e41287fa01e4d5f6a",
    measurementId: "G-L2G0ML0RX8"
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export const agregaOrden = ({ cliente, email, telefono, direccion, nota, pedido, metodoPago, precioTotal, cantidadTotal }) => {

    return db.collection('ordenes')
        .add({
            cliente,
            email,
            telefono,
            direccion,
            nota,
            pedido,
            metodoPago,
            precioTotal,
            cantidadTotal,
            createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
        })

}

export const consultarOrden = ({ id }) => {
    return db.collection('ordenes')
        .doc(id)
        .get()
}