'use client'

import Image from "next/image"
import InformatioMosque from "../assets/masjid tasik 1.png"
import Link from "next/link"
import { Fade } from "react-awesome-reveal"





const Information = () => {
    return (
            <div className="px-[100px] py-[70px] h-fit bg-slate-50" id="information">
                <Fade direction="right">
                <div className="">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div className="w-[70px] h-1 bg-greenPrimary"></div>
                        <h2 className="font-bold text-[35px] text-center leading-[55px]"><span className="font-normal align-middle">Information</span> <br />Mosque</h2>
                    </div>
                    <div className="grid gap-10 mt-10">
                    <div className="flex items-center bg-bgSecondary w-auto rounded-tr-lg rounded-br-lg">
                        <Image src={InformatioMosque} alt="Mosque"/>
                        <div className="px-16 flex flex-col gap-10">
                            <h1 className="leading-10 font-semibold text-textPrimary text-3xl">Mesjid Agung Tasikmalaya</h1>
                            <p className="text-textSecondary">Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.</p>
                            <Link href='/id'>Read More</Link>
                        </div>
                    </div>
                    <div className="flex items-center bg-bgSecondary w-auto rounded-tr-lg rounded-br-lg">
                        <Image src={InformatioMosque} alt="Mosque"/>
                        <div className="px-16 flex flex-col gap-10">
                            <h1 className="leading-10 font-semibold text-textPrimary text-3xl">Mesjid Agung Tasikmalaya</h1>
                            <p className="text-textSecondary">Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.</p>
                            <Link href='/id'>Read More</Link>
                        </div>
                    </div>
                    <div className="flex items-center bg-bgSecondary w-auto rounded-tr-lg rounded-br-lg">
                        <Image src={InformatioMosque} alt="Mosque"/>
                        <div className="px-16 flex flex-col gap-10">
                            <h1 className="leading-10 font-semibold text-textPrimary text-3xl">Mesjid Agung Tasikmalaya</h1>
                            <p className="text-textSecondary">Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.</p>
                            <Link href='/id'>Read More</Link>
                        </div>
                    </div>
                    </div>
                </div>
                </Fade>
            </div>
    )
}

export default Information