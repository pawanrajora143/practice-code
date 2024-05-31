import { Field, Form, Formik } from 'formik'
import Modal from './Modal'
import { db } from '../config/firbase'

import React from 'react'
import { addDoc, collection } from 'firebase/firestore'

const AddandUpdateContact = ({isOpen , onClose , isUpdate}) => {

    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts")
            await addDoc(contactRef, contact)
            
        } catch (error) {
            console.log(error)
        }
    }



  return (
    <div>
        <Modal className="p-4" isOpen={isOpen} onClose={onClose}>

       <Formik 
       initialValues={{
        name:"",
        email:""
       }}
       onSubmit={(values) => {

        console.log(values)
        addContact(values)
       }}
       
       >
        <Form className='flex flex-col gap-4'>

            <div className='flex flex-col gap-2'>
                <label htmlFor='name'>Name</label>
                <Field type="text" name="name" className="border h-10 p-3"  />
            </div>
            <div className='flex flex-col gap-2 '>
                <label htmlFor='email'>Email</label>
                <Field type="email" name="email" className="border h-10 p-3"  />
            </div>
            <button className='bg-red-500 px-3 py-1.5 rounded self-start text-white mt-5'>{isUpdate ? "Update" : "Add"} Contacts</button>
        </Form>

       </Formik>

      </Modal>
    </div>
  )
}

export default AddandUpdateContact
