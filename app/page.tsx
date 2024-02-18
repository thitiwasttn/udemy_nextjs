import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/component/header";
import classes from "./page.module.css";

export default function Home() {
    function defaultHtml() {

        return (
            <main className={styles.main}>
                <div className={styles.description}>
                    <p>
                        Get started by editing&nbsp;
                        <code className={styles.code}>app/page.tsx</code>
                    </p>
                    <div>
                        <a
                            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            By{" "}
                            <Image
                                src="/vercel.svg"
                                alt="Vercel Logo"
                                className={styles.vercelLogo}
                                width={100}
                                height={24}
                                priority
                            />
                        </a>
                    </div>
                </div>

                <div className={styles.center}>
                    <Image
                        className={styles.logo}
                        src="/next.svg"
                        alt="Next.js Logo"
                        width={180}
                        height={37}
                        priority
                    />
                </div>

                <div className={styles.grid}>
                    <a
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            Docs <span>-&gt;</span>
                        </h2>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a
                        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            Learn <span>-&gt;</span>
                        </h2>
                        <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
                    </a>

                    <a
                        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            Templates <span>-&gt;</span>
                        </h2>
                        <p>Explore starter templates for Next.js.</p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2>
                            Deploy <span>-&gt;</span>
                        </h2>
                        <p>
                            Instantly deploy your Next.js site to a shareable URL with Vercel.
                        </p>
                    </a>
                </div>
            </main>
        );
    }

    return (
        <>
            <header className={classes.header}>
                <div className={classes.slideshow}>

                </div>
                <div>
                    <div className={classes.hero}>
                        <h1>NextLevel Food for nextLevel Foodies</h1>
                        <p>Tast $& share food from all over the world.</p>
                    </div>
                    <div className={classes.cta}>
                        <Link href={"/community"}>Join the Community</Link>
                        <Link href={"/meals"}>Explore Meals</Link>
                    </div>
                </div>
            </header>
            <main>
                <section className={classes.section}>
                    <h2>How it works</h2>
                    <p>
                        NextLevel Food is a platform for foodies to share their favorite
                        recipes with the world. It&apos;s a place to discover new dishes, and to
                        connect with other food lovers.
                    </p>
                    <p>
                        NextLevel Food is a place to discover new dishes, and to connect
                        with other food lovers.
                    </p>
                </section>

                <section className={classes.section}>
                    <h2>Why NextLevel Food?</h2>
                    <p>
                        NextLevel Food is a platform for foodies to share their favorite
                        recipes with the world. It&apos;s a place to discover new dishes, and to
                        connect with other food lovers.
                    </p>
                    <p>
                        NextLevel Food is a place to discover new dishes, and to connect
                        with other food lovers.
                    </p>
                </section>
            </main>
        </>
    );
}
