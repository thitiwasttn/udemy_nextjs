import sql from 'better-sqlite3'
import {MealItemInterfaceM} from "@/component/meals/MealItemInterfaceM";
import slugify from "slugify";
import xss from "xss";
import * as fs from "fs";


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

export async function saveMeal(meal: MealItemInterfaceM) {
    const slug = slugify(meal.title, {lower: true});
    console.log('slug: ', slug);
    meal.slug = slug;

    meal.instructions = xss(meal.instructions);
    console.log('xss1', meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    console.log('extension', extension);

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferImage), error => {
        if (error) {
            throw new Error('Saving image filed!');
        }
    });

    meal.image = `/images/${fileName}`;

    const statement = db.prepare(`
        INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
    `);
    statement.run(meal);

}