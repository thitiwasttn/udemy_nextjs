import {returnEmoji} from "@/component/commonService";

export default function ShareMealPage(prop: any) {
    return (
        <>
            <main>
                <h1 style={{color: "white", textAlign: "center"}}>
                    {prop.params.slug}{returnEmoji(prop.params.slug)} share page
                </h1>
            </main>
        </>
    )
}