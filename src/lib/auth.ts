import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/navigation';

type Session = {
    userId: string;
};

export async function getSession(): Promise<Session | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get('token');

    if (!token?.value) {
        return null;
    }

    try {
        const decoded = jwt.verify(token.value, process.env.JWT_SECRET!) as Session;
        return decoded;
    } catch (error) {
        return null;
    }
}

export async function requireAuth(): Promise<Session> {
    const session = await getSession();
    if (!session) {
        redirect("/auth/login");
    }
    return session;
} 
