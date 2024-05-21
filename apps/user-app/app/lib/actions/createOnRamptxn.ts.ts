"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function createOnRampTransactions(amount: number, provider: string){
    const token = Math.random().toString();
    const session = await getServerSession(authOptions)
    const userId = session.user.id;
    if(!userId){
        return {
            message : "user not logged in"
        }
    }

    await prisma.onRampTransaction.create({
        data: {
            userId : Number(userId),
            amount : amount,
            status : "Processing",
            provider,
            startTime: new Date(),
            token: token
        }
    })

    return {
        message : "on ramp transaction added"
    }
}