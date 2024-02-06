import styles from "@/app/page.module.css";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "About Page",
    description: "",
};
export default function AboutPage() {
    console.log('about page execute')
    return (
        <>
            <main className={styles.main}>
                <h1>Hi About page 😁</h1>
            </main>
        </>
    )
}