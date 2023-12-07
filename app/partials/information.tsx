'use client'

import Image from "next/image"
import Link from "next/link"
import { Fade } from "react-awesome-reveal"
import Masjid from "../assets/masjid tasik 1.png"



const base_url = "http://localhost:5000/information"



interface Information {
    id: number,
    title: string,
    desc: string,
    img: string

}

// eslint-disable-next-line @next/next/no-async-client-component
const Information = async () => {
    const response = await fetch(base_url, { cache: 'no-store' })
    const inforamtions: Information[] = await response.json()
    return (
        <div className="px-[100px] py-[70px] h-fit bg-slate-50" id="information">
            <Fade direction="right">
                <div className="">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div className="w-[70px] h-1 bg-greenPrimary"></div>
                        <h2 className="font-bold text-[35px] text-center leading-[55px]"><span className="font-normal align-middle">Information</span> <br />Mosque</h2>
                    </div>
                    <div className="grid gap-10 mt-10">
                        {inforamtions.map((information) => {
                            return (
                                <div className="flex items-center bg-bgSecondary w-auto rounded-tr-lg rounded-br-lg" key={information.id}>
                                    <Image src={Masjid} alt="Mosque" />
                                    <div className="px-16 flex flex-col gap-10">
                                        <h1 className="leading-10 font-semibold text-textPrimary text-3xl">{information.title}</h1>
                                        <p className="text-textSecondary">{information.desc}</p>
                                        <Link href='/id'>Read More</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Information