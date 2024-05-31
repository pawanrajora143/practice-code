
import React from 'react'
import { useState } from 'react';

const useDisclose = () => {

    const [isOpen , setOpen] = useState(false);

    const onOpen = () =>{
      setOpen(true)
    }
  
    const onClose = () =>{
      setOpen(false)
      console.log("poora" ,onClose)
    }


  return {onclose, onOpen , isOpen}
}

export default useDisclose
