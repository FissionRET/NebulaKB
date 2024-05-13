// React hooks

import {useEffect, useState} from "react"

// Icons
import {Moon, Sun} from "lucide-react"

// UI Components
import {Button} from "@/components/ui/button"

// Components
import {useTheme} from "next-themes"

// Utils
import {AnimatePresence, motion} from "framer-motion"

export function ModeToggle() {
    const {theme, setTheme} = useTheme()
    const [icon, setIcon] = useState('sun');

    useEffect(() => {
        if (theme === 'dark') {
            setIcon('moon');
        } else {
            setIcon('sun');
        }
    }, [theme]);

    const toggleTheme = () => {
        if (icon === 'sun') {
            setIcon('moon');
            setTheme('dark');
        } else if (icon === 'moon') {
            setIcon('sun');
            setTheme('light');
        }
    }

    return (
        <Button variant="outline" size="icon" onClick={toggleTheme}>
            <AnimatePresence mode="wait">
                {icon === "moon" ? (
                    <motion.div
                        key="moon"
                        initial={{opacity: 0, x: '-100%'}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: '-100%'}}
                    >
                        <Moon className="h-[1.2rem] w-[1.2rem]"/>
                    </motion.div>
                ) : (
                    <motion.div
                        key="sun"
                        initial={{opacity: 0, x: '100%'}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: '100%'}}
                    >
                        <Sun className="h-[1.2rem] w-[1.2rem]"/>
                    </motion.div>
                )}
            </AnimatePresence>
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
