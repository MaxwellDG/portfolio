import { NextRequest, NextResponse } from 'next/server';
// import { connectToDb } from './db';

export default async function middleware(req: NextRequest) {
  console.log("Middleware triggaed")
  // await connectToDb();
  return NextResponse.next();
}