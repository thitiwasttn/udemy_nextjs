import Link from 'next/link';
import Image from 'next/image';

import classes from './meal-item.module.css';
import {MealItemInterfaceM} from "@/component/meals/MealItemInterfaceM";



export default function MealItem(prop: MealItemInterfaceM) {
    return (
        <article className={classes.meal}>
            <header>
                <div className={classes.image}>
                    <Image src={prop.image} alt={prop.title} fill/>
                </div>
                <div className={classes.headerText}>
                    <h2>{prop.title}</h2>
                    <p>by {prop.creator}</p>
                </div>
            </header>
            <div className={classes.content}>
                <p className={classes.summary}>{prop.summary}</p>
                <div className={classes.actions}>
                    <Link href={`/meals/${prop.slug}`}>View Details</Link>
                </div>
            </div>
        </article>
    );
}