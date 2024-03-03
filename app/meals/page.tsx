import Link from "next/link";

import classes from "./page.module.css";
import MealsGrid from "@/component/meals/meals-grid";
import {getMeals} from "@/lib/Meals";
import {Suspense} from "react";
import MealsLoadingPage from "@/app/meals/loading-out";

async function Meals() {
    const mealItemInterfaceMS = await getMeals();


    return <MealsGrid meals={mealItemInterfaceMS}/>;
}

export default async function MealsPage() {

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created{' '}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself. It is easy and fun!
                </p>
                <p className={classes.cta}>
                    <Link href={"/meals/share"}>
                        Share Your Favorite Recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<>{MealsLoadingPage()}</>}>
                    <Meals/>
                </Suspense>
            </main>
            {/*<main>
                <h1 style={{color: 'white', textAlign: 'center'}}>Meals 😋🍉</h1>
                <p style={{textAlign: 'center'}}><Link href={"/meals/salad"}>1. Salad 🥗</Link></p>
                <p style={{textAlign: 'center'}}><Link href={"/meals/burger"}>2. Burger 🍔</Link></p>
                <p style={{textAlign: 'center'}}><Link href={"/meals/share"}>Share</Link></p>
            </main>*/}
        </>
    )
}