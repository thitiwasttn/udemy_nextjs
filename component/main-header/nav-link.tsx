'use client'

import classes from "./nav-link.module.css";
import Link from "next/link";
import React, {useEffect} from "react";
import {usePathname} from "next/navigation";

interface Prop {
    href: string
    children: string
}

export default function NavLink(prop: Prop) {
    const path = usePathname();
    useEffect(() => {
        console.log('prop ', prop);
        console.log('path ', path);
    }, [])

    return (
        <Link
            href={prop.href}
            className={path.startsWith(prop.href) ? `${classes.link} ${classes.active}` : undefined}>
            {prop.children}
        </Link>
    )
}