import type { NextPage } from "next";
import { use } from "react";
import UserMedia from "./userMedia";


const page: NextPage = () => {

    async function getData() {
        const res = await fetch('https://jameszokah-expert-winner-rx4p4q6rxj2xqg5-4001.preview.app.github.dev/api', { cache: 'force-cache' })
        return await res.json();

    }

    // const data = use(getData())

    return (
        <>
            <UserMedia />
        </>
    );
}

export default page