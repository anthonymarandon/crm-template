import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { email, name, password } = await req.json();
    
    if (!email || !name || !password) {
        return NextResponse.json({ error: 'Tous les champs sont requis.' }, { status: 400 });
    }

    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) {
        return NextResponse.json({ error: 'Cet email est déjà utilisé.' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            email,
            name,
            password: hashedPassword
        }
    });
    
    return NextResponse.json({ redirect: '/auth/login' }, { status: 200 });
}