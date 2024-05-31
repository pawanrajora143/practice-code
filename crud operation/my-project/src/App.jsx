import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import { FaSearch } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { FaUserCircle } from "react-icons/fa";
import { db } from "./config/firbase";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import AddandUpdateContact from "./components/AddandUpdateContact";
import ContactCard from "./components/contactCard";


const App = () => {
  const [contacts, setContacts] = useState([]);

  const [isOpen , setOpen] = useState(false);

  const onOpen = () =>{
    setOpen(true)
  }

  const onClose = () =>{
    setOpen(false)
    console.log("poora" ,onClose)
  }


  const deleteContact = async (id) =>{
    // console.log("poora" , id)

    try {
      await deleteDoc(doc(db, "contacts" , id))
      // console.log("poora" , db)
      
    } catch (error) {
      console.log(error)
      
    }
  }



  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        // console.log(contactsSnapshot);
        // console.log(contactLists);
        setContacts(contactLists);
      } catch (error) {}
    };

    getContacts();
  }, []);




  return (
    <>
    <div className="max-w-[370px] mx-auto">
      <Navbar />

      <div className="flex gap-2 my-4">
        <div className="flex relative items-center flex-grow  ">
          <FaSearch className="absolute text-white text-2xl ml-3 " />
          <input
            type="text"
            className=" bg-transparent border border-white flex-grow rounded-md h-10 pl-12 text-white"
          />
        </div>

        <div>
          <FaPlusCircle onClick={onOpen} className="text-white text-4xl cursor-pointer" />
        </div>
      </div>

      <div>
        {contacts.map((contact) => (
         <ContactCard key={contact.id} contact={contact}/>
        ))}
         </div>
    <AddandUpdateContact isOpen={isOpen} onClose={onClose}/>
        
      </div>
    
   

   
    
    </>
  );
};

export default App;
