import Link from "next/link";
import styles from "@/app/page.module.css";


function Page() {
    return (
        <>
            <main className={styles.main}>
                <h1>The Blog</h1>
                <p><Link href={"/blog/post-1"}>Post 1</Link></p>
                <p><Link href={"/blog/post-2"}>Post 2</Link></p>
            </main>
        </>
    )
}

export default Page;