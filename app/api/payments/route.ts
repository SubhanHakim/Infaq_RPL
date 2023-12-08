import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { payments } from "@prisma/client";

const prisma = new PrismaClient();

export const Payments = async (request: Request) => {
    const body: payments = await request.json()
    const Payment = await prisma.payments.create({
        data:{
            nama: body.nama,
            jumlah: body.jumlah,
            doa: body.doa,
            metode: body.metodeId
        }
    })
    return NextResponse.json(Payment)
}