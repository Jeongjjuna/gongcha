"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {

    const pathname = usePathname();
    const [count, setCount] = useState(0);

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {pathname === "/" && <span>👈</span>}
                </li>
                <li>
                    <Link href="/about-us">About Us</Link> {pathname === "/about-us" && <span>👈</span>}
                </li>
                <li>
                    <button onClick={() => setCount(count + 1)}>Count: {count}</button>
                </li>
            </ul>
        </nav>
    );
}
