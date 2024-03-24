import {string} from "prop-types";
import Link from "next/link";
import {returnEmoji} from "@/component/commonService";
import classes from "./page.module.css";
import {getMeal, getMeals} from "@/lib/Meals";
import Image from 'next/image';
import {notFound} from "next/navigation";
import {MealNotFound} from "@/app/not-found";


export async function generateMetadata(params: any) {
    const meals = getMeal(params?.params?.slug);
    if (!meals) {
        // MealNotFound();
        notFound()
    }
    return {
        title: meals.title,
        description: meals.summary
    }
}

export default function MealPage(prop: any) {

    const meals = getMeal(prop?.params?.slug);
    if (!meals) {
        // MealNotFound();
        notFound()
    }
    meals.instructions = meals.instructions.replace(/\n/g, '<br/>')
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image alt={meals.title} src={meals.image} fill={true}></Image>
                </div>
                <div className={classes.headerText}>
                    <h1>{meals.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meals.creator_email}`}>{meals.creator}</a>
                    </p>
                    <p className={classes.summary}>{"SUMMARY"}</p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{
                    __html: meals.instructions
                }}>

                </p>
            </main>
        </>
        /* <>
             <main>
                 <h1 style={{
                     color: 'white',
                     textAlign: 'center'
                 }}>
                     Meal {prop.params.slug} {returnEmoji(prop.params.slug)}
                 </h1>
                 {/!*<p style={{textAlign: "center"}}><Link href={`/meals/${prop.params.slug}/share`}>Share Page</Link></p>*!/}
                 <h2 style={{
                     color: 'white',
                     textAlign: 'center'
                 }}><Link href={"/meals"}>All meals</Link></h2>
             </main>
         </>*/
    )
}