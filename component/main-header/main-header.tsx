import Link from "next/link";
import logoImage from '@/assets/logo.png'
import React from "react";
import classes from "./main-header.module.css";
import Image from "next/image"
import MainHeaderBackground from "@/component/main-header/main-header-backgroud";
import NavLink from "@/component/main-header/nav-link";

export default function MainHeader() {

    return <>
        <MainHeaderBackground/>
        <header className={classes.header}>
            <Link className={classes.logo} href={"/"}>
                <Image src={logoImage} alt={"A plate with food on it"} priority={true}/>
                NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href={"/meals"}>Browse Meal</NavLink>
                    </li>
                    <li>
                        <NavLink href={"/community"}>Foodie Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>
}