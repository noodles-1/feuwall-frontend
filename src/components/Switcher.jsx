import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle"
import { useState, useEffect } from "react"

const Switcher = () => {
    const [theme, setTheme] = useState(localStorage.theme ? localStorage.theme : 'light')
    const colorTheme = theme === 'dark' ? 'light' : 'dark'

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove(colorTheme)
        root.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <DarkModeToggle 
            mode={theme}
            size="sm"
            onChange={(theme) => setTheme(theme)}
        />
    );
}
 
export default Switcher;