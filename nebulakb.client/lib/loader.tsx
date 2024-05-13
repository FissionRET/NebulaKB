// Hooks

import {useEffect, useState} from "react";

// NextUI components
import {Spinner} from "@nextui-org/react";

export default function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen gap-4">
                <Spinner label="Initializing components..." color="default" labelColor="foreground"/>
            </div>
        );
    }
}