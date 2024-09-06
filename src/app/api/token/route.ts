import {NextRequest, NextResponse} from "next/server";

export  function GET(req:NextRequest){
    return NextResponse.json({
        "name": "MonkeyX",
        "symbol": "MonkeyX",
        "description": "This is monkey X token",
        "image": "https://www.shutterstock.com/shutterstock/photos/2271224891/display_1500/stock-vector-monkey-head-logo-design-monkey-face-for-your-avatar-and-social-media-profile-picture-monkey-head-2271224891.jpg"
    })
}