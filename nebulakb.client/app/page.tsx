"use client";

import { useEffect, useState } from "react";
import axios from 'axios'

import Navbar from "../components/navbar";

export default function Home() {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        (
            async () => {
                try {
                    const resp = await axios.get('http://localhost:1337/api/user', {
                        headers: {
                            'Authorization': 'Bearer ' + sessionStorage.getItem("token")
                        }
                    });

                    if (resp.status == 200) {
                        setAuth(true); // Authenticated
                    }                    
                } catch {
                    setAuth(false); // Deauthorized
                }
            }
        )();
    }, []);

    return (
        <>
            <Navbar auth={auth} />
        </>
    );
}
