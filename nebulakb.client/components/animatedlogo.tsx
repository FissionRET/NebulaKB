import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedIcon = () => {
    const [progress, setProgress] = useState(100);
    const [isRunning, setIsRunning] = useState(false);
    const [key, setKey] = useState(0);

    const togglePlay = () => {
        setProgress(0);
        setTimeout(() => {
            setIsRunning(!isRunning);
        }, 300);
    };

    useEffect(() => {
        const animationDuration = 3000;

        if (isRunning) {
            const interval = setInterval(() => {
                if (progress >= 100) {
                    setProgress(100);
                    setIsRunning(false);
                    clearInterval(interval);
                    return;
                }
                setProgress((progress) => progress + 1);
            }, animationDuration / 100);

            return () => clearInterval(interval);
        }
    }, [isRunning, progress]);

    useEffect(() => {
        const timer = setInterval(() => {
            togglePlay();
            setKey((prevKey) => prevKey + 1); // Update key to re-render component
        }, 3000); // Auto run every 2 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <motion.svg key={key} fill="none" height="3rem" width="3rem" viewBox="0 0 32 32">
            <motion.path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill={"currentColor"}
                stroke={"currentColor"}
                animate={{
                    fillOpacity: progress,
                    pathLength: progress
                }}
                initial={{ fillOpacity: 0, pathLength: 0 }}
                transition={{ ease: "easeInOut", duration: 1.5 }}
                fillRule="evenodd"
            />
        </motion.svg>
    );
};

export default AnimatedIcon;
