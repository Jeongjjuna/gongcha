"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {

    const pathname = usePathname();

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {pathname === "/" && <span>👈</span>}
                </li>
                <li>
                    <Link href="/about-us">About Us</Link> {pathname === "/about-us" && <span>👈</span>}
                </li>
            </ul>
        </nav>
    );
}
