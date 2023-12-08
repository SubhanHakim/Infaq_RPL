'use client'

import { SyntheticEvent, useState } from "react"
import type { Metode } from "@prisma/client"
import axios from "axios"
import { useRouter } from "next/navigation"



const Donate = ({ metode }: { metode: Metode[] }) => {
    const [nama, setNama] = useState("")
    const [jumlah, setJumlah] = useState("")
    const [doa, setDoa] = useState("")
    const [metodes, setMetodes] = useState("")




    const [isOpen, setIsOpen] = useState(false)

    const router = useRouter()

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await axios.post("/api/payments", {
            nama: nama,
            jumlah: Number(jumlah),
            doa: doa,
            metodeId: metodes
        })
    setNama("")
    setJumlah("")
    setMetodes("")
    setDoa("")
    router.refresh()
    setIsOpen(false)
    }

    const handleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <button className="btn" onClick={handleModal}>Add Donasi</button>
            <div className={isOpen ? 'modal modal-open' : "modal"}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Donasi</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-full">
                            <label className="label font-bold">Nama</label>
                            <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} name="" id="" className="input input-bordered" placeholder="Nama Donasi" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Jumlah</label>
                            <input type="text"  value={jumlah} onChange={(e) => setJumlah(e.target.value)} name="" id="" className="input input-bordered" placeholder="Jumlah" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Doa</label>
                            <input type="text"  value={doa} onChange={(e) => setDoa(e.target.value)} name="" id="" className="input input-bordered" placeholder="Doa" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Metode</label>
                            <select value={metodes} onChange={(e) => setMetodes(e.target.value)} className="select select-bordered">
                                <option value="" disabled>Select a metode</option>
                                {metode.map((metode) => {
                                    return (
                                        <option value={metode.id} key={metode.id}>{metode.name} {metode.norek}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="modal-action">
                            <button type="button" className="btn" onClick={handleModal}>Close</button>
                            <button type="submit" className="px-6 py-3 bg-greenPrimary text-white rounded-md hover:bg-greenSecondary ease-in-out duration-300 w-max">kirim</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Donate