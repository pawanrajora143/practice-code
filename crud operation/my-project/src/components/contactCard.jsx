import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";

const ContactCard = ({contact}) => {
  return (
    
    <div
    className="bg-red-500 flex flex-grow  gap-4 p-4 rounded-lg mb-4 justify-between"
    key={contact.id}
  >
    <FaUserCircle className="text-white text-3xl" />

    <div>
      <h2 className="text-white">{contact.name}</h2>
      <p className="text-white">{contact.email}</p>
    </div>

    <div className="flex">
      <RiEditCircleLine className="text-white text-2xl" />
      <IoMdTrash onClick={()=>deleteContact(contact.id)} className="text-white text-2xl cursor-pointer" />
    </div>
  </div>
  );
};

export default ContactCard;
