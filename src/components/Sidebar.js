'use client'

import { useState } from "react"
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

export default function Sidebar() {
    const [active, setActive] = useState(false);

    const [menu, setMenu] = useState([
        {
            text: 'A',
            icon: null,
            subs: null
        },
        {
            text: 'B',
            icon: null,
            subs: [
                {
                    {
                        text: 'B1',
                        icon: null,
                        subs: null
                    },
                    {
                        text: 'B2',
                        icon: null,
                        subs: null
                    },
                }
            ]
        },
    ])

    return (
        <div className="w-1/6 h-screen overflow-auto bg-custom *:text-white">
            <Link href="/" className="flex p-4 mb-3 no-underline border-b-[1px]">
                <span className="text-lg font-semibold">🧬 Met2Graph</span>
            </Link>
            <div className="flex flex-col px-4 py-2 space-y-4 *:text-[.9rem]">
                <Link href="/">Overview</Link>
                <p className="flex items-center justify-between cursor-pointer" onClick={() => setActive(!active)}>
                    Metabolic Networks
                    <FaChevronDown className={`${active ? '-rotate-180' : ''} duration-300`} />
                </p>
                <div className="flex flex-col ps-4 space-y-4">
                    <p className="flex items-center justify-between cursor-pointer" onClick={() => setActive(!active)}>
                        Metabolic Networks
                        <FaChevronDown className={`${active ? '-rotate-180' : ''} duration-300`} />
                    </p>
                    <div className="flex flex-col ps-4 space-y-4">
                        <Link href="/">Overview</Link>
                        <Link href="/">Overview</Link>
                    </div>
                    <Link href="/">Overview</Link>
                    <Link href="/">Overview</Link>
                </div>
            </div>
        </div>
    )
}