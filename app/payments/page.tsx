import { PrismaClient } from "@prisma/client"
import Donate from "./donate";
const prisma = new PrismaClient

const getPayments = async () => {
    const res = await prisma.payments.findMany({
        select: {
            id: true,
            nama: true,
            jumlah: true,
            metodeId: true,
            doa: true,
            metode: true
        },
    });
    return res
}


const getMetod = async () => {
    const res = await prisma.metode.findMany();
    return res
}


const Payments = async () => {
    const [payments, metode] = await Promise.all([getPayments(), getMetod()])

    return (
        <>
            <div className="mb-2">
                <Donate metode={metode} />
            </div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name Pengirim</th>
                        <th>jumlah</th>
                        <th>doa</th>
                        <th>metode</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payments, index) => {
                        return (
                            <tr key={payments.id}>
                                <td>{index + 1}</td>
                                <td>{payments.nama}</td>
                                <td>{payments.jumlah}</td>
                                <td>{payments.doa}</td>
                                <td>{payments.metode.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Payments