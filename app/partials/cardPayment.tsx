'use client'


import Image from "next/image"
import Mandiri from "../assets/mandiri.png"
import { useState } from "react"




const CardPayments = () => {
    return (
        <div className="px-[100px] py-[70px] bg-greenSecondary h-screen flex flex-col justify-center items-center">
            <div className="bg-bgPrimary w-fit px-28 py-12 grid gap-3 rounded-lg">
                <div>
                    <form action="" className="grid gap-2">
                        <label htmlFor="">Nama</label>
                        <input type="text" className="p-5 rounded-lg" placeholder="Masukan nama" />
                        <label htmlFor="">Jumlah Infaq</label>
                        <input type="number" className="p-5 rounded-lg" placeholder="Masukan nama" />
                        <label htmlFor="">Tulisakan Doa</label>
                        <input type="text" className="p-5 rounded-lg" placeholder="Masukan nama" />
                        <label htmlFor="">Upload Bukti Transaksi</label>
                        <input type="file" />
                    </form>
                </div>
                <div className="">
                    <h1>Kirim Ke norek</h1>
                    <div className="flex items-center gap-2">
                        <Image src={Mandiri} alt="testtt" />
                        <h3>8999072574</h3>
                    </div>
                </div>
                <button type="submit" className="px-6 py-3 bg-greenPrimary text-white rounded-md hover:bg-greenSecondary ease-in-out duration-300 w-max">Kirim Infaq</button>
            </div>

        </div>
    )
}


export default CardPayments