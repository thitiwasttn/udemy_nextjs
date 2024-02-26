import classes from "./meals-grid.module.css";
import MealItem from "@/component/meals/meal-item";
import {MealItemInterfaceM} from "@/component/meals/MealItemInterfaceM";

interface Prop {
    meals: MealItemInterfaceM[]
}

export default function MealsGrid(prop: Prop) {
    return (
        <>
            <ul className={classes.meals}>
                {prop.meals.map(meal => {
                    return <li key={meal.id}>
                        <MealItem {...meal}></MealItem>
                    </li>
                })}
            </ul>
        </>
    )
}