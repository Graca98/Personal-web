'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { FaRegCopy } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";


export default function CopyButton ({ copy, style, copyStyle }) {

  const defaultIcon = <FaRegCopy className="h-6 w-6" />  
  const checkIcon = <FaCheck className="h-6 w-6 text-green-500" />
  const [icon, setIcon] = useState(defaultIcon)
  const [timeoutId, setTimeoutId] = useState(null); // State to store timeout ID

  const handleClick = () => {
    // Clear any existing timeout to prevent overlaps
    if (timeoutId) clearTimeout(timeoutId);

    setIcon(checkIcon);

    // Set a new timeout and store its ID in state
    const newTimeoutId = setTimeout(() => {
      setIcon(defaultIcon);
    }, 4000);
    navigator.clipboard.writeText(copy);
    setTimeoutId(newTimeoutId); // Update the stored timeout ID
  };

  useEffect(() => {
    // Cleanup function to clear the timeout if the component unmounts
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (<>
    <button onClick={handleClick} className={`${style}`}>
      {copy} {icon}
    </button>
  </>
  )
}

