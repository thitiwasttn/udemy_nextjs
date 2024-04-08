'use server';

import {MealItemInterfaceM} from "@/component/meals/MealItemInterfaceM";
import {saveMeal} from "@/lib/Meals";
import {redirect} from "next/navigation";
import {string} from "prop-types";
import {revalidatePath} from "next/cache";

export interface ResponseActionState {
    message: string
}

export async function shareMeal(prevState: ResponseActionState, formData: FormData) {
    const meal: MealItemInterfaceM = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    if (isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image
    ) {
        const ret: ResponseActionState = {
            message: 'Invalid input.'
        }
        return ret;
    }
    console.log('meal', meal);

    await saveMeal(meal).then(value => {
        console.log('save success!!')

        // if want to revalidate all of path
        // revalidatePath('/)
        revalidatePath('/meals')
        redirect('/meals');

    });


}

function isInvalidText(text: string) {
    return !text || text.trim() === '';
}