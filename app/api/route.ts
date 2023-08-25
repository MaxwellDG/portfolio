import { NextRequest, NextResponse } from 'next/server';
import { AccountDto } from '../../dtos/account';
import Account from '../../db/entities/account';
import connectToDb from '../../db';
import { Db } from 'mongodb';

// /api/[address]
export async function GET(
    request: NextRequest,
    // context: { params: { address: string } }
    ): Promise<NextResponse> {
    console.log("HIt it?")
    await connectToDb();
    
    // const address = context.params.address;
    // console.log("Address paam??", address);
    
    const numAccessedCookie = request.cookies.get('numAccessed');
    console.log('Num accessed cookie: ', numAccessedCookie);
    
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

    if(db){
        const account = new Account(body.address);
        // todo insert into DB with (SQL statement ideally)
    }

    return new Response(
        JSON.stringify({
            address: body.address,
        })
    );
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

export async function OPTIONS(request: Request) {}
