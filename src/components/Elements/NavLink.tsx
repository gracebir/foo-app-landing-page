'use client';
import { navLinkProps } from "@/types";
import Link from "next/link";

const NavLink = ({ href, text }: navLinkProps) => {
    return (
        <Link className="py-2 text-clr-gray text-base lg:text-[22px] duration-200 hover:text-black font-medium hover:border-b-[4px] border-orange-color" href={href}>
            {text}
        </Link>
    )
}

export default NavLink
