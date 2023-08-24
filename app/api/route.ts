import { NextRequest, NextResponse } from "next/server";
import { AccountDto } from "../../dtos/account";
import Account from "../../entities/account";

// /api/[address]
export async function GET(request: NextRequest, context: { params: { address: string }}): Promise<NextResponse> {
    const address = context.params.address;

    const numAccessedCookie = request.cookies.get('numAccessed');
    console.log("Num accessed cookie: ", numAccessedCookie);

    let account: Account;
    // todo retrieve from database
    const accountDto: AccountDto = AccountDto(account);

    const response = new NextResponse(JSON.stringify(accountDto));
    response.cookies.set('numAccessed', numAccessedCookie.value + 1);
    return response;
}
 
export async function HEAD(request: Request) {}
 
export async function POST(request: Request) {
    const body = await request.json();

    // todo add to db

    return new Response(JSON.stringify({
        address: body.address
    }))
}
 
export async function PUT(request: Request) {}
 
export async function DELETE(request: Request) {}
 
export async function PATCH(request: Request) {}
 
export async function OPTIONS(request: Request) {}