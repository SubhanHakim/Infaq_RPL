'use client'

import { useState } from "react"

import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { Payemnts } from "../utils/paymentList"


const Metode = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (

            <div className="relative flex flex-col items-center w-[340px] rounded-lg">
                <button onClick={() => setIsOpen((prev) => !prev)} className="bg-greenPrimary p-4 w-full flex justify-between items-center font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white">Select Metode
                    {!isOpen ? (
                        <AiFillCaretDown />
                    ) : (
                        <AiFillCaretUp />
                    )
                    }
                </button>
                {isOpen && (
                    <div className="bg-greenPrimary absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
                        {Payemnts.map((item, index)=> 
                            <div key={index} className="flex w-full justify-between p-4 hover:bg-greenSecondary cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4">
                                <h3 className="font-bold">{item.name}</h3>
                            </div>
                        )}
                    </div>
                )}
            </div>
    )
}

export default Metode