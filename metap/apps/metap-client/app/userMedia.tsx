"use client"
import { FC, useEffect, useState } from "react";
import type { Socket } from "socket.io-client";
import { io } from "socket.io-client";

const socket = io('https://jameszokah-expert-winner-rx4p4q6rxj2xqg5-4001.preview.app.github.dev', {
    transports: ["websocket", "polling"],
    withCredentials: true,
});

const UserMedia: FC = () => {



    //  @ts-ignore
    // socket.on('connection-success', (data: { socketId: string }) => {
    //     console.log(data.socketId)
    // })



    return (
        <>
            <h2>User Media</h2>
        </>
    )
}


export default UserMedia