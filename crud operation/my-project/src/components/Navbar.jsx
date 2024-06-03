
import { FcTodoList } from "react-icons/fc";

import React from 'react'

const Navbar = () => {
  return (
    <div className=' bg-white-400 flex justify-center item-center p-3 gap-3 item-
    rounded-lg bg-slate-50 items-center my-3 font-medium text-m'>
      <FcTodoList className="text-3xl" />

      <h2 className="text-1xl">Crud Opration / Todo List</h2>
    </div>
  )
}

export default Navbar
