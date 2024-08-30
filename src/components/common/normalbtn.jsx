
"use client";
import Link from "next/link"

const NormalBtn = ({ link, text, bgcolor, txtcolor }) => {
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <div className="normalButton" style={{ background: bgcolor }} onClick={handleChatOpen}>
            <Link href={link} style={{ color: txtcolor }}>{text}</Link >
        </div >
    )
}

export default NormalBtn