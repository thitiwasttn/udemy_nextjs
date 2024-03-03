'use client'

export default function Error(prop: any) {
    console.log('prop', prop);
    return <>
        <main className={"error"}>
            <h1>An error occurred!</h1>
            <p>{prop?.error?.message}</p>
        </main>
    </>
}