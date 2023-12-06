import Image from "next/image"
import Logo from "../assets/Logo.png"
import { navLinks } from "../utils/navLinks"
import Link from "next/link"
import Button from "./Button/buton"





const Navbar = () => {
    return (
        <nav className="px-[100px] p-5 bg-white drop-shadow-md">
            <div className="flex justify-between items-center">
                <div className="brand cursor-pointer flex items-center">
                    <Image src={Logo} alt="Testing" />
                    <h1 className="font-medium text-base text-textPrimary">Kotak Amal</h1>
                </div>
                <div className="flex gap-16 align-middle">
                    {navLinks.map((link, index) => {
                        return (
                            <ul className="" key={index}>
                                <Link href={link.id}>
                                    <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-greenPrimary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" key={index}>{link.name}</li>
                                </Link>
                            </ul>
                        )
                    })}
                </div>
                <div>
                    <Link href='/payments'>
                        <Button>Infaq Now</Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}


export default Navbar