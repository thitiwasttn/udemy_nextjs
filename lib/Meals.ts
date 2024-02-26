import sql from 'better-sqlite3'
import {MealItemInterfaceM} from "@/component/meals/MealItemInterfaceM";

const db = sql('meals.db')

export async function getMeals() {
    // add timeout for demo only
    // await new Promise((resolve, reject) => setTimeout(resolve, 500))
    return db.prepare('SELECT * FROM meals').all() as MealItemInterfaceM[];
}