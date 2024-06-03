import { ErrorMessage, Field, Form, Formik } from 'formik'
import Modal from './Modal'
import { db } from '../config/firbase'
import React from 'react'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import * as Yup from "Yup";


const contactSchemeValidation = Yup.object().shape({
    name:Yup.string().required("Name is Required"),
    email:Yup.string().required("Email is Required")
})


const AddandUpdateContact = ({isOpen , onClose , isUpdate , contact}) => {

    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts")
            await addDoc(contactRef, contact)
            onClose()
           toast.success("Contact Add succesfully")
        } catch (error) {
            console.log(error)
        }
    }


    const updateContacts = async (contact , id) => {
        try {
            const contactRef = doc(db, "contacts" , id)
            await updateDoc(contactRef, contact)
            onClose();
            toast.success("Contact Update succesfully")
            
            
        } catch (error) {
            console.log(error)
        }
    }



  return (
    <div>
        <Modal className="p-4" isOpen={isOpen} onClose={onClose}>

       <Formik 
       validationSchema={contactSchemeValidation}
       initialValues={
        isUpdate 
        ? {
        name:contact.name,
        email:contact.email
       }
       :{
        name:"",
        email:""
       }
    
    
    }
       onSubmit={(values) => {
        // console.log(values); 
        isUpdate ? updateContacts(values, contact.id) : 
        addContact(values);
       }}
       
       >
        <Form className='flex flex-col gap-4'>

            <h1 className='text-3xl font-bold'>{isUpdate ? "Update Contacts" : "Add Contacts"}</h1>

            <div className='flex flex-col gap-2'>
                <label htmlFor='name'>Name</label>
                <Field type="text" name="name" className="border h-10 p-3"  />
                <div className='text-red-500'> 
                    <ErrorMessage name="name" />
                </div>
            </div>
            <div className='flex flex-col gap-2 '>
                <label htmlFor='email'>Email</label>
                <Field type="email" name="email" className="border h-10 p-3"  />
                <div className='text-red-500'> 
                    <ErrorMessage name="email" />
                </div>

            </div>
            <button className='bg-red-500 px-3 py-1.5 rounded self-start text-white mt-5'
            >{isUpdate ? "Update" : "Add"} Contacts</button>
        </Form>

       </Formik>

      </Modal>
    </div>
  )
}

export default AddandUpdateContact
