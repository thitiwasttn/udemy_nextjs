import sql from 'better-sqlite3'
import {MealItemInterfaceM} from "@/component/meals/MealItemInterfaceM";

const db = sql('meals.db')

export async function getMeals() {
    // add timeout for demo only
    await new Promise((resolve, reject) => setTimeout(resolve, 500));
    const number = Math.floor(Math.random() * 5);
    if (number === 1) {
        throw new Error("Loading meals failed (Test handle error random loading)");
    }
    return db.prepare('SELECT * FROM meals').all() as MealItemInterfaceM[];
}

export function getMeal(slug: string) {
    // await new Promise((resolve, reject) => setTimeout(resolve, 500));
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as MealItemInterfaceM;
}