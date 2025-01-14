import {NextRequest, NextResponse} from "next/server";

export  function GET(req:NextRequest){
    return NextResponse.json({
        "name": "Pink Pink",
        "symbol": "PG",
        "description": "This is pih X token",
        "image": "https://png.pngtree.com/png-clipart/20220911/original/pngtree-pig-square-cartoon-logo-illustration-clipart-animal-character-game-asset-pet-png-image_8540382.png"
    })
}