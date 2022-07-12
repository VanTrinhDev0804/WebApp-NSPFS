import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./cofig";


export const writeDataFireStore = async (data : any,fieldName : string ,index : any) => {
    await setDoc(doc(db, fieldName, `${index}`), data);
}
   

export const WriteDataGenerateID = async (data :any ,fieldName : string  ) =>{
    await setDoc(doc( collection(db,fieldName ) ), data)
}

export const UpdateData = async (data : any,fieldName : string ,index : any) =>{
    await updateDoc(doc(db,fieldName, `${index}`), data)
}