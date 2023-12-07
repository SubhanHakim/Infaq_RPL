import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { payments } from "@prisma/client";
import { request } from "http";

const prisma = new PrismaClient();

export const Payments = async (request: Request) => {
    const body: payments = await request.json()
    const Payment = await prisma.payments.create({
        data:{
            title: body.title,
            jumlah: body.jumlah,
            doa: body.doa,
            bukti: body.bukti
        }
    })
    return NextResponse.json(Payment)
}