"use client"
import Header from "apps/metap-client/components/header";
import { Alert, Button, Checkbox, Dropdown, Label, TextInput } from "flowbite-react";
import { NextPage } from "next";


const Metap: NextPage = () => {
    return (
        <>
            <div className="bg-dark-primary text-fuchsia-400 h-[100vh] w-full">
                <Header />
            </div>
        </>
    )
}

export default Metap;