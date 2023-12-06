'use client'

import Penyaluran from "../assets/penyaluran 3.png"
import Image from "next/image"
import UserDkm from "../assets/Ellipse 185.png"
import { Fade } from "react-awesome-reveal"


const Reports = () => {
    return (
        <div className="px-[100px] py-[70px]" id="report">
            <Fade direction="left" >
            <div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="w-[70px] h-1 bg-greenPrimary"></div>
                    <h2 className="font-bold text-[35px] text-center leading-[55px]"><span className="font-normal align-middle">Report</span> <br />Penyaluran Infaq</h2>
                </div>
                <div className="grid gap-20 mt-10">
                    <div className="grid grid-cols-2 items-center w-auto gap-32">
                        <div className="flex flex-col gap-10">
                            <h1 className="leading-10 font-semibold text-textPrimary text-3xl">Penyerahan Infaq Mesjid Baiturrahman</h1>
                            <p className="text-textSecondary">Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers</p>
                            <div className="flex items-center gap-2">
                                <div className="w-1 h-20 bg-greenPrimary"></div>
                                <p className="text-greenPrimary">Terimakasih telah memberikan bantuan kepada mesjid baiturrahman</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="rounded-full">
                                    <Image src={UserDkm} alt="User DKM" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-textPrimary text-base">Jajang</h3>
                                    <p className="text-textSecondary">DKM Baiturahman</p>
                                </div>
                            </div>
                        </div>
                        <Image src={Penyaluran} alt="Mosque" />
                    </div>
                    <div className="grid grid-cols-2 items-center w-auto gap-32">
                        <Image src={Penyaluran} alt="Mosque" />
                        <div className="flex flex-col gap-10">
                            <h1 className="leading-10 font-semibold text-textPrimary text-3xl">Penyerahan Infaq Mesjid Baiturrahman</h1>
                            <p className="text-textSecondary">Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers</p>
                            <div className="flex items-center gap-2">
                                <div className="w-1 h-20 bg-greenPrimary"></div>
                                <p className="text-greenPrimary">Terimakasih telah memberikan bantuan kepada mesjid baiturrahman</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="rounded-full">
                                    <Image src={UserDkm} alt="User DKM" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-textPrimary text-base">Jajang</h3>
                                    <p className="text-textSecondary">DKM Baiturahman</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 items-center w-auto gap-32">
                        <div className="flex flex-col gap-10">
                            <h1 className="leading-10 font-semibold text-textPrimary text-3xl">Penyerahan Infaq Mesjid Baiturrahman</h1>
                            <p className="text-textSecondary">Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers</p>
                            <div className="flex items-center gap-2">
                                <div className="w-1 h-20 bg-greenPrimary"></div>
                                <p className="text-greenPrimary">Terimakasih telah memberikan bantuan kepada mesjid baiturrahman</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="rounded-full">
                                    <Image src={UserDkm} alt="User DKM" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-textPrimary text-base">Jajang</h3>
                                    <p className="text-textSecondary">DKM Baiturahman</p>
                                </div>
                            </div>
                        </div>
                        <Image src={Penyaluran} alt="Mosque" />
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    )
}

export default Reports