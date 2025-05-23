'use client';

import { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value);

  const handleCounter = (val: number) => {
    const newValue = counter + val;

    if (newValue < 0) {
      setCounter(0);
    } else {
      setCounter(newValue);
    }
  }

  return (
    <>
      <span className="text-9xl">{counter}</span>


      <div className="flex">
        <button
          disabled={counter === 0}
          onClick={() => handleCounter(-1)}
          className={`flex items-center justify-center p-2 rounded-xl text-white  transition-all w-[100px] mr-2 ${counter === 0 ? 'bg-gray-600' : 'bg-gray-900 hover:bg-gray-600'}`}
        >-1
        </button>
        <button
          onClick={() => handleCounter(+1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >+1
        </button>
      </div>
    </>
  )
}
