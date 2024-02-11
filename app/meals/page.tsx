import Link from "next/link";

export default function MealsPage() {
    return (
        <>
            <main>
                <h1 style={{color: 'white', textAlign: 'center'}}>Meals 😋🍉</h1>
                <p style={{textAlign: 'center'}}><Link href={"/meals/salad"}>1. Salad 🥗</Link></p>
                <p style={{textAlign: 'center'}}><Link href={"/meals/burger"}>2. Burger 🍔</Link></p>
            </main>
        </>
    )
}