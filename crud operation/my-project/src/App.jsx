import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import { FaSearch } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { collection, deleteDoc, doc, getDocs, onSnapshot } from "firebase/firestore";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaUserCircle } from "react-icons/fa";
import { db } from "./config/firbase";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import AddandUpdateContact from "./components/AddandUpdateContact";
import ContactCard from "./components/contactCard";
import useDisclose from "./Hooks/useDisclose";


const App = () => {
  const [contacts, setContacts] = useState([]);

  const {isOpen , onClose , onOpen} = useDisclose();




  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);

        onSnapshot(contactsRef , (snapshot)=>{

          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
  
          // console.log(contactsSnapshot);
          // console.log(contactLists);
          setContacts(contactLists);
          return  contactLists;

        })


        
      } catch (error) {}
    };

    getContacts();
  }, []);



  const filterContacts = (e) =>{

    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
       

        onSnapshot(contactsRef , (snapshot)=>{

          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
  
          // console.log(contactsSnapshot);
          // console.log(contactLists);

          const filteredContacts = contactLists.filter((contact)  =>
         contact.name.toLowerCase().includes(value.toLowerCase())
        );
          setContacts(filteredContacts);
          return  filteredContacts;

        });


  };

  return (
    <>
    <div className="max-w-[370px] mx-auto">
      <Navbar />

      <div className="flex gap-2 my-4">
        <div className="flex relative items-center flex-grow  ">
          <FaSearch className="absolute text-white text-2xl ml-3 " />
          <input onChange={filterContacts}
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
        <ToastContainer position="bottom-center"/>
      </div>
    
   

   
    
    </>
  );
};

export default App;
