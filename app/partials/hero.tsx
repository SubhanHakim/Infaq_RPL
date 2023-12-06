import Image from "next/image"
import Button from "../components/Button/buton"
import Mosque from "../assets/Hero-Wrapper__image.png"
import Link from "next/link"




const Hero = () => {
    return (
        <div className="px-[100px] py-[70px]">
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-y-16">
                    <div className="w-[550px] flex flex-col gap-y-7">
                        <h1 className="text-5xl leading-[70px]"><span className="text-greenSecondary font-extrabold">Tunaikan</span> <span className="text-greenPrimary font-extrabold">Infak</span> Sumbangkan Untuk Keberkahan <span className="text-greenPrimary font-extrabold">Masjid</span></h1>
                        <p className="text-grayPrimary leading-9 text-lg">Bersama-sama kita wujudkan keberkahan masjid dan ciptakan ladang amal yang abadi. Tunaikan infak Anda, sumbangkan untuk kebaikan bersama</p>
                    </div>
                    <Link href='/payments'>
                        <Button>Infaq Now</Button>
                    </Link>
                </div>
                <div>
                    <Image src={Mosque} alt="Masjid" />
                </div>
            </div>
        </div>
    )
}

export default Hero