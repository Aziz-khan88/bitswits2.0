"use client";
import { ArrowIcon } from "@/src/app/app-constants"
import Link from "next/link"


const ButtonCommon = ({ color, txt }) => {
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <div className="catButton" onClick={handleChatOpen}>
            <Link href=""><span>{txt}</span> <ArrowIcon /></Link>
        </div>
    )
}

export default ButtonCommon