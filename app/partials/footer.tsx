import Image from "next/image"
import Logo from "../assets/Logo.png"
import { Links } from "../utils/fotterLink"
import Link from "next/link"





const Footer = () => {
    return (
        <div className="bg-slate-50 grid gap-10">
            <div className="px-[100px] py-[70px]">


                <div className="grid grid-cols-3 justify-between">
                    <div className="grid gap-2">
                        <Image src={Logo} alt="Logo" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                    <div className="grid gap-2">
                        <h2 className="text-xl text-textPrimary">Links</h2>
                        <div>
                            {Links.map((link, index) => {
                                return (
                                    <div key={index}>
                                        <ul className="">
                                            <Link href={link.id} >
                                                <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-greenPrimary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center text-textSecondary mt-2">{link.name}</li>
                                            </Link>
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <h2 className="text-xl text-textPrimary">Contact Us</h2>
                        <div className="grid gap-2">
                            <h2 className="text-textSecondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                            <p className="text-textSecondary">+923183561921</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className="flex justify-center p-5">
                    © 2023 Copyright by IK Developers. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer