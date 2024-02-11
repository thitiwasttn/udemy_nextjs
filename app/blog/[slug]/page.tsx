import styles from "@/app/page.module.css";

export default function BlogPostPage(prop: any) {
    return (
        <>
            <main className={styles.main}>
                <div>
                    <h1>Blog Post</h1>
                    <p>{prop.params.slug}</p>
                </div>
            </main>
        </>
    )
}