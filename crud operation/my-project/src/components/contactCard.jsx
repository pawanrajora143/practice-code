import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { deleteDoc, doc,  } from "firebase/firestore";
import { db } from "../config/firbase";
import AddandUpdateContact from "./AddandUpdateContact";
import useDisclose from "../Hooks/useDisclose";
import { toast } from "react-toastify";

const ContactCard = ({contact}) => {


  const {isOpen , onClose , onOpen} = useDisclose();

  // const onOpen = () =>{
  //   setOpen(true)
  // }

  // const onClose = () =>{
  //   setOpen(false)
  //   console.log("poora" ,onClose)
  // }


  const deleteContact = async (id) =>{
    // console.log("poora" , id)

    try {
      await deleteDoc(doc(db, "contacts" , id))
      console.log("poora" , db)
      toast.success("Contact Delete Succesfully")
      
    } catch (error) {
      console.log(error)
      
    }
  }



  return (
    
    <>
    <div key={contact.id}
    className="bg-red-500 flex flex-grow  gap-4 p-4 rounded-lg mb-4 justify-between"

  >
    <div className="flex gap-4">
    <FaUserCircle className="text-white text-3xl" />

    <div className="">
      <h2 className="text-white">{contact.name}</h2>
      <p className="text-white">{contact.email}</p>
    </div>
    </div>
    <div className="flex gap-1 justify-stretch">
      <RiEditCircleLine onClick={onOpen} className="text-white text-2xl cursor-pointer" />
      <IoMdTrash onClick={()=>deleteContact(contact.id)} className="text-white text-2xl cursor-pointer" />
    </div>
  </div>
  <AddandUpdateContact contact={contact} isUpdate onClose={onClose} isOpen={isOpen}/>
  </>
 
  );
};

export default ContactCard;
