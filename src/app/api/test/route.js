import { NextResponse } from "next/server";

export async function GET() {

    let data = {"test":"1"};

    return NextResponse.json({data});
    
}