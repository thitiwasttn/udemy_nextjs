import {string} from "prop-types";
import Link from "next/link";
import {returnEmoji} from "@/component/commonService";

export default function MealPage(prop: any) {

    return (
        <>
            <main>
                <h1 style={{
                    color: 'white',
                    textAlign: 'center'
                }}>
                    Meal {prop.params.slug} {returnEmoji(prop.params.slug)}
                </h1>
                {/*<p style={{textAlign: "center"}}><Link href={`/meals/${prop.params.slug}/share`}>Share Page</Link></p>*/}
                <h2 style={{
                    color: 'white',
                    textAlign: 'center'
                }}><Link href={"/meals"}>All meals</Link></h2>
            </main>
        </>
    )
}