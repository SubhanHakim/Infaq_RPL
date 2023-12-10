import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { payments } from "@prisma/client";
import Payments from "@/app/payments/page";

const prisma = new PrismaClient();

export const POST = async (request: Request) => {
    try {
        const body: payments = await request.json()
        const payments = await prisma.payments.create({
            data: {
                nama: body.nama,
                jumlah: body.jumlah,
                doa: body.doa,
                metodeId: body.metodeId,
                bukti: body.bukti
            }
        })
        return NextResponse.json(payments)
    } catch (error) {
        console.log(error);
        console.log(Payments);
        
        
    }
   

}